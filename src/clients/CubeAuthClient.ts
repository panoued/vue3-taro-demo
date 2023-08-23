class CubeAuthTokenObj implements CubeAuthToken {
    accessToken?: string = null;
    refreshToken?: string = null;
    expireIn?: number = null;
    expireAt?: number = null;
    get() {
        const obj: CubeAuthToken = JSON.parse(JSON.stringify(this));
        obj.accessToken = obj.accessToken || '';
        obj.refreshToken = obj.refreshToken || '';
        obj.expireAt = obj.expireAt || 0;
        obj.expireIn = this.expireAt ? Math.trunc((obj.expireAt - Date.now()) / 1000) : 0; // 为了expireIn单位与服务端统一, expireIn转化为秒
        return obj;
    };
    accessTokenValid() {
        return !!this.accessToken && this.expireAt > Date.now();
    };
    constructor(obj: CubeAuthToken) {
        if (obj) {
            this.accessToken = obj.accessToken;
            this.refreshToken = obj.refreshToken;
            if (obj.expireAt) {
                this.expireAt = obj.expireAt;
            } else if (obj.expireIn) {
                this.expireAt = Date.now() + obj.expireIn * 1000;
            };
        };
    };
};

type RefreshTokenAction = (refreshToken: string) => Promise<CubeAuthToken>;

type LoginAction = () => Promise<string>;

type LogoutAction = (accessToken: string) => Promise<string>;

type OnSaveToken = (token: CubeAuthToken) => void;

type SignInCallback = (params: { code: string; state: string; type: any; }) => Promise<CubeAuthToken>;

type EventKey = 'init-end' | 'refresh-token-success' | 'refresh-token-fail' | 'refresh-token-end';

type EventMap = Map<string, Function>;

export class CubeAuthConfig {
    /** 应用名称 */
    name: string = '';
    /** GlobalData实例 */
    tokenKey: VuexStateKey = null;
    /** GlobalData实例 */
    globalData: GlobalDataInstance = null;
    /** 刷新token方法 (refreshToken: string) => Promise<CubeAuthToken> */
    refreshToken?: RefreshTokenAction = null;
    /** 登录方法 () => Promise<string> */
    login?: LoginAction = null;
    /** 登出配置 (accessToken: string) => Promise<string> */
    logout?: LogoutAction = null;
    /** 登录回调方法 (params: { code: string; state: string; type: string; }) => Promise<CubeAuthToken> */
    signInCallback?: SignInCallback = null;
    /** 保存token回调 */
    onSaveToken?: OnSaveToken = null;
    /** 是否启用log */
    log?: boolean = true;
    /** 刷新token失败后重新尝试间隔毫秒数，默认10000，设置0或者false则不尝试重新刷新token */
    refreshFailedRetryMillisecond?: number | false = 10000;
    /** 创建实例后立即刷新token */
    refreshAfterInit?: boolean = false;
    /** 是否使用CubeAuth内置刷新token程序 */
    refreshTokenAuto?: boolean = true;
};


/**
 * <md>CubeAuthClient
 */

/**
 * <mds>**新qpass单点登录，app保存token，自动保存并刷新token**
 */


export class CubeAuthClient {

    private tokenKey: Extract<VuexStateKey, 'token'> = null;

    private globalData: GlobalDataInstance = null;

    private config: CubeAuthConfig = new CubeAuthConfig();

    private timer: any = null;

    private refreshing: boolean = false;

    private events: EventMap = new Map();

    private count: number = 1;

    private $log(message?: any, ...optionalParams: any[]) {
        if (this.config.log !== false) {
            console.log('<--CubeAuth-->', message, ...optionalParams);
        };
    };

    private tt(ms: number) {
        const u = [1000, 60, 60, 24], unit = ['毫秒', '秒', '分钟', '小时', '天'];
        let res = [ms];
        for (var i = 0; i < u.length; i++) {
            const n = u[i], x = res[i];
            if (x >= n) {
                res[i] = x % n;
                res.push(Math.trunc(x / n));
            } else {
                break;
            };
        };
        return res.map((s, j) => (s > 0 ? s + unit[j] : '')).reverse().join('');
    };

    private action(key: EventKey) {
        this.events.forEach((callback, name) => {
            if (name.startsWith(key)) {
                callback();
                if (/--ONCE$/.test(name)) {
                    this.events.delete(name);
                };
            };
        });
    };

    private mergeObject(obj1: any, obj2: any) {
        function merge(a: any, b: any) {
            return a && b && typeof a == 'object' && typeof b == 'object';
        };
        if (merge(obj1, obj2)) {
            for (const key in obj2) {
                if (merge(obj1[key], obj2[key])) {
                    this.mergeObject(obj1[key], obj2[key]);
                } else {
                    obj1[key] = obj2[key];
                };
            }
        };
    };

    /** 获取token对象，{ accessToken?: string; expire?: number; refreshToken?: string; } */
    private getTokenObj() {
        const obj = this.globalData.get(this.tokenKey, 'localStorage');
        return new CubeAuthTokenObj(obj);
    };

    /** 判断是否存在accessToken，并且accessToken未过期 */
    isLogin() {
        return this.getTokenObj().accessTokenValid();
    };

    /** 获取accessToken */
    getAccessToken() {
        return this.getTokenObj().accessToken;
    };

    /** 获取refreshToken */
    getRefreshToken() {
        return this.getTokenObj().refreshToken;
    };

    /** 获取过期时间, 单位ms */
    getExpireIn() {
        return this.getTokenObj().get().expireIn * 1000;
    };

    /** 停止自动刷新token */
    stopAutoRefreshToken() {
        clearTimeout(this.timer);
    };

    /** 启动自动刷新token程序 */
    startAutoRefreshToken() {
        this.stopAutoRefreshToken(); // 清除上一个刷新token的timeout程序
        let ms = Math.trunc(this.getExpireIn() * 0.66); // 获取token过期时间剩余大约1/3的时候的剩余毫秒数
        ms = ms > 86400000 ? 86400000 : ms; // 限制ms不超过1天，避免setTimeout因毫秒数过大无法执行
        ms = ms < 60000 ? 60000 : ms; // 限制ms不小于1分钟，避免因过期时间太小导致刷新过于频繁
        ms = Math.round(ms / 60000) * 60000; // 限制ms为分钟的整数倍
        this.timer = setTimeout(() => this.refreshToken(), ms);
        this.$log(this.tt(ms) + '后刷新token');
    };

    /** 保存token信息(accessToken，refreshToken，expireIn) */
    setToken(token: CubeAuthToken) {
        this.$log('正在保存token');
        return new Promise<void>(resolve => {
            if (!token) {
                this.$log('保存token失败, tokenObj为空');
                resolve();
            } else {
                const obj = new CubeAuthTokenObj(token);
                if (obj.accessTokenValid()) {
                    const info = obj.get();
                    this.$log(`accessToken: ${info.accessToken.slice(0, 5)}...${info.accessToken.slice(-5)}, refreshToken: ${info.refreshToken.slice(0, 5)}...${info.refreshToken.slice(-5)}, expireIn: ${info.expireIn}`);
                    this.globalData.set(this.tokenKey, info, 'localStorage');
                    this.$log('保存token成功');
                    if (this.config.refreshTokenAuto) {
                        this.$log('启动自动刷新token程序');
                        this.startAutoRefreshToken();
                    };
                    if (typeof this.config.onSaveToken == 'function') {
                        this.config.onSaveToken(obj);
                    };
                    resolve();
                } else if (obj.refreshToken) {
                    this.$log('token已过期, 正在自动刷新');
                    this.refreshToken().then(() => resolve());
                } else {
                    this.$log('保存token失败, token: ' + JSON.stringify(token));
                };
            };
        });
    };

    /** 删除token信息(accessToken，refreshToken，expireIn) */
    rmToken() {
        this.globalData.del('token', 'localStorage');
    };

    /** 刷新token, 刷新成功返回Promise.resolve(true)，失败或没有refreshToken返回Promise.resolve(false) */
    refreshToken(refreshToken?: string) {
        return new Promise<boolean>(resolve => {
            refreshToken = refreshToken || this.getRefreshToken();
            const action = this.config.refreshToken;
            const handle = (msg: string, res = false, key: EventKey = 'refresh-token-end') => {
                this.refreshing = false;
                this.$log(msg);
                resolve(res);
                this.action(key);
            };
            const end = (msg: string) => setTimeout(() => handle(msg), 10), success = (msg: string) => handle(msg, true, 'refresh-token-success'), fail = (msg: string) => handle(msg, false, 'refresh-token-fail');
            if (this.refreshing) {
                end('刷新token未被执行, 已有一个刷新token程序正在执行中');
            } else if (!refreshToken) {
                end('刷新token未被执行, 缺少“refreshToken”');
            } else if (typeof action != 'function') {
                end('刷新token未被执行, 配置缺少刷新token方法');
            } else if (typeof localStorage == 'undefined') {
                end('刷新token未被执行, 当前不是客户端环境');
            } else {
                this.refreshing = true;
                action(refreshToken).then(tokenObj => {
                    if (tokenObj) {
                        if (new CubeAuthTokenObj(tokenObj).accessTokenValid()) {
                            success('刷新token成功');
                            this.setToken(tokenObj);
                        } else {
                            fail(`刷新token失败, API返回tokenObj缺少${['accessToken', 'expireIn'].filter(key => !tokenObj[key]).join('、')}`);
                        };
                    } else {
                        fail('刷新token失败, API返回tokenObj为空');
                    };
                }).catch(err => {
                    fail(`刷新token失败${err ? ', ' + err.message : ''}`);
                    if (this.config.refreshFailedRetryMillisecond) {
                        this.$log(this.tt(this.config.refreshFailedRetryMillisecond) + '后重新尝试刷新token');
                        this.timer = setTimeout(() => this.refreshToken(), this.config.refreshFailedRetryMillisecond);
                    };
                }).finally(() => end(`第${this.count++}次刷新token结束`));
            };
        });
    };

    /** oAuth登录(需配置login方法) */
    login() {
        const action = this.config.login;
        if (typeof action == 'function') {
            this.$log('正在获取登录地址');
            action().then(url => {
                this.$log('获取登录地址成功, 即将跳转至: ' + url);
                location.href = url;
            }).catch(() => { });
        };
    };

    /** 登出(需配置logout方法) */
    logout() {
        if (typeof this.config.logout == 'function') {
            this.config.logout(this.getAccessToken()).then(target => {
                this.rmToken();
                location.href = target;
            }).catch(() => { });
        };
    };

    /** 登录回调，获取token */
    signInCallback(params: { code: string; state: string; type: any; }) {
        return new Promise<CubeAuthToken>((resolve, reject) => {
            const action = this.config.signInCallback;
            if (typeof action == 'function') {
                this.$log('登录成功, 正在获取token信息');
                action(params).then(res => {
                    this.$log('获取token成功');
                    this.setToken(res);
                    resolve(res);
                }).catch(reject);
            } else {
                reject();
            };
        });
    };

    /** 设置配置项 */
    setConfig(config: CubeAuthConfig) {
        this.mergeObject(this.config, config);
        this.tokenKey = config.tokenKey as any;
        this.globalData = config.globalData;
        return this;
    };

    /** 监听事件, 匿名函数无法删除 */
    $on(event: EventKey, callback: Function) {
        if (typeof callback == 'function') {
            let name = callback.name || `${Math.trunc(Math.random() * 1000000)}`;
            this.events.set(`${event}-${name}`, callback);
        };
        return this;
    };

    /** 监听事件, 只执行一次 */
    $once(event: EventKey, callback: Function) {
        if (typeof callback == 'function') {
            this.events.set(`${event}-${Math.trunc(Math.random() * 1000000)}--ONCE`, callback);
        };
        return this;
    };

    /** 删除监听的事件, 匿名函数无法删除 */
    $rm(event: EventKey, callback?: Function) {
        if (typeof callback == 'function' && callback.name) {
            this.events.delete(`${event}-${callback.name}`);
        };
        return this;
    };

    /** 初始化 */
    init() {
        const tokenObj = this.getTokenObj().get();
        this.$log('正在读取已保存的token');
        if (this.config.refreshAfterInit) {
            this.$log('配置refreshAfterInit为true, 正在刷新');
            this.refreshToken(tokenObj.refreshToken).then(() => {
                this.$log('初始化完成');
                this.action('init-end');
            });
        } else {
            this.setToken(tokenObj).then(() => {
                this.$log('初始化完成');
                this.action('init-end');
            });
        };
    };

    constructor(config: CubeAuthConfig) {
        this.$log('初始化开始');
        this.$log('正在保存配置' + (config.name ? ', 应用名称: ' + config.name : ''));
        this.setConfig(config);
    };

};