/**
 * <md>CubeLang
 */

/**
 * <mds>**需要new CubeLang实例，在实例中设置i18n map，id并调用实例中的$t、$tr、$tk方法进行翻译**
 */

export interface CubeLangCore<I18NMAP extends object> {

    /**
     * 只有1个key时翻译方法
     * @param key keyof I18NMAP
     * @param values 替换翻译中{0}、{1}...的值
     * @returns string
     */
    $t<T extends keyof I18NMAP, P extends Array<string | number>>(key: T, ...values: P): I18NMAP[T];

    /**
     * 以第一个key为基础，把valueKeys翻译后按顺序替换到第一个key的翻译后的{0}、{1}...中
     * @param key keyof I18NMAP
     * @param valueKeys ...(keyof I18NMAP)[]
     * @returns string
     */
    $tr<T extends keyof I18NMAP, P extends Array<keyof I18NMAP>>(key: T, ...valueKeys: P): I18NMAP[T] | I18NMAP[P[number]];

    /**
     * 多个key组合时翻译方法，从后往前把翻译后的值替换到前一个翻译的{0}中
     * @param key keyof I18NMAP
     * @param keys ...(keyof I18NMAP)[]
     * @returns string
     */
    $tk<T extends keyof I18NMAP, P extends Array<keyof I18NMAP>>(key: T, ...keys: P): I18NMAP[T] | I18NMAP[P[number]];

};

export class CubeLangClient<LANGID extends string, I18NMAP extends object> implements CubeLangCore<I18NMAP> {

    private _getLangId: () => LANGID = () => null;

    private _i18nMap: { [K in LANGID]?: I18NMAP } = {};

    private langId(): LANGID {
        return this._getLangId() || 'zh_TW' as any;
    };

    private i18nMap(): I18NMAP {
        const maps: any = this._i18nMap || {};
        return maps[this.langId()] || {};
    };

    $t<T extends keyof I18NMAP, P extends (string | number)[]>(key: T, ...values: P): I18NMAP[T] {
        let res: any = this.i18nMap()[key];
        if (res) {
            for (let i = 0; i < values.length; i++) {
                res = res.replace(new RegExp(`\\{${i}\\}`), !values[i] && values[i] !== 0 ? '' : values[i]) as any;
            };
        } else {
            console.log(`<!== CubeLang ==>多语言错误: 找不到key:"${String(key)}"对应的值`);
            res = key || '';
        };
        res = res.replace(/\{\d+\}/g, '');
        return res;
    };

    $tr<T extends keyof I18NMAP, P extends (keyof I18NMAP)[]>(key: T, ...valueKeys: P): I18NMAP[T] | I18NMAP[P[number]] {
        let res: any = '';
        const vals: any[] = valueKeys.map(key => this.$t(key));
        res = this.$t(key, ...vals);
        return res;
    };

    $tk<T extends keyof I18NMAP, P extends (keyof I18NMAP)[]>(key: T, ...keys: P): I18NMAP[T] | I18NMAP[P[number]] {
        let res: any = '';
        keys.reverse().forEach(k => res = this.$t(k as any, res));
        res = this.$t(key, res);
        return res;
    };

    /** 设置翻译、获取langId的方法 */
    set(config: { i18nMap?: { [K in LANGID]?: I18NMAP }, getLangId?: () => LANGID }) {
        if (config.i18nMap) {
            this._i18nMap = config.i18nMap;
        };
        if (config.getLangId) {
            this._getLangId = config.getLangId;
        };
        return this;
    };

    get(key: 'LANGID'): LANGID;
    get(key: 'I18NMAP'): I18NMAP;
    /**
     * 获取当前lang map或者lang id
     */
    get(key: 'LANGID' | 'I18NMAP') {
        if (key == 'LANGID') {
            return this.langId();
        } else if (key == 'I18NMAP') {
            return this.i18nMap();
        } else {
            return null;
        };
    };

    constructor(i18nMap: { [K in LANGID]?: I18NMAP }, getLangId: () => LANGID) {
        this._i18nMap = i18nMap;
        this._getLangId = getLangId;
    };

}