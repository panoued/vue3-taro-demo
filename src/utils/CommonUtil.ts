export class CommonUtil {

    static get isVue() {
        return !CommonUtil._taro;
    };

    private static _taro: import("node_modules/@tarojs/taro/types/index").TaroStatic = null;

    static get taro() {
        return CommonUtil._taro;
    };

    static setTaro(taro: any) {
        CommonUtil._taro = taro;
    };

    private static _router: import("node_modules/vue-router/dist/vue-router").Router = null;

    static get router() {
        return CommonUtil._router;
    };

    static setRouter(router: any) {
        CommonUtil._router = router;
        return CommonUtil;
    };

    private static vueToast: typeof import('node_modules/@nutui/nutui/dist/types/__VUE/toast/index')['showToast'] = null;

    static setVueToast(vueToast: any) {
        CommonUtil.vueToast = vueToast;
        return CommonUtil;
    };

    private static push(option: import("node_modules/@tarojs/taro/types/index").navigateTo.Option): Promise<TaroGeneral.CallbackResult>;
    private static push(to: import("node_modules/vue-router/dist/vue-router").RouteLocationRaw): Promise<void | import("node_modules/vue-router/dist/vue-router").NavigationFailure>;
    private static push(to: any): any {
        if (CommonUtil.isVue) {
            return CommonUtil.router.push(to);
        } else {
            return CommonUtil.taro.navigateTo(to);
        };
    };

    private static back() {
        if (CommonUtil.isVue) {
            return CommonUtil.router.back();
        } else {
            return CommonUtil.taro.navigateBack();
        };
    };

    static get $router() {
        return {
            push: CommonUtil.push,
            back: CommonUtil.back
        };
    };

    static showToast(msg: string, options?: { duration?: number, mask?: boolean }) {
        const duration = options ? options.duration : 200000, mask = options ? options.mask : false;
        if (CommonUtil.isVue) {
            CommonUtil.vueToast.text(msg, { cover: mask, duration, size: 'small' });
        } else {
            CommonUtil.taro.showToast({ title: msg, icon: 'none', mask, duration });
        };
    };

}
