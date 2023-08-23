import { Component, Vue } from "vue-facing-decorator";
import { API, defs } from "@/api";
import { CommonUtil } from "@/utils/CommonUtil";
import { VueRouteNameList, VueRoutePathList } from "@/enums/VueRoutes";
import { TaroRoutePathList } from "@/enums/TaroRoutes";
import { Store, useStore } from "vuex";

@Component
export class BaseVue extends Vue {

    private _vuexStore: Store<VuexState> = null;

    private initStore() {
        this._vuexStore = useStore();
    };

    private _route: Route = { path: '', name: '', fullPath: '', params: {}, query: {}, meta: {} };

    private initRoute() {
        if (this.isVue) {
            this._route = this.$route as any;
        } else {
            const t = this.taro.getCurrentInstance().router;
            this._route.fullPath = t['$taroPath'];
            this._route.path = t.path;
            this._route.params = t.params;
        };
    };

    private initVue() {
        this.initStore();
        this.initRoute();
    };

    get route() {
        return this._route;
    };

    get isVue() {
        return CommonUtil.isVue;
    };

    get taro() {
        return CommonUtil.taro;
    };

    get paths() {
        return { vue: VueRoutePathList, taro: TaroRoutePathList };
    };

    get names() {
        return { vue: VueRouteNameList, taro: VueRouteNameList };
    };

    get $api() {
        return API;
    };

    get $defs() {
        return defs;
    };

    get $store() {
        return this._vuexStore;
    };

    $push(target: VueRouteNames, data?: { params?: Route['params'], query?: Route['query'] }) {
        target = target || 'IndexIndex', data = data || {};
        if (this.isVue) {
            CommonUtil.$router.push({ name: target, ...data }).catch(() => { });
        } else {
            const args = Object.assign({}, data.query, data.params);
            const str = Object.keys(args).map(key => `${key}=${args[key]}`).join('&');
            const url = [this.paths.taro[target], str].filter(s => !!s).join('?');
            CommonUtil.$router.push({ url }).catch(() => { });
        };
    };

    $back() {
        CommonUtil.$router.back();
    };

    created() {
        this.initVue();
    };

};