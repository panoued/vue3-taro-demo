import { Component, toNative } from "vue-facing-decorator";
import { BaseVue } from "@/base/BaseVue";
import "./index.scss";

@Component
class IndexView extends BaseVue {

    username = 'admin';

    password = '321rEWQ';

    isVisible = false;

    menuItemsOne = [
        {
            name: '繁体', id: 'zh_TW'
        },
        {
            name: '简体', id: 'zh_CN'
        },
    ];

    get isLogin() {
        return this.$auth.isLogin();
    };

    login() {
        this.$api.userApi.login.request({ loginMethod: 'EMAIL', username: this.username, password: this.password }, { isSendHeaderInfo: false }).then(res => {
            this.$auth.setToken({ accessToken: res.accessToken, refreshToken: res.refreshToken, expireIn: res.expiresIn });
        }).catch(() => { });
    };

    test() {
        this.$push('TestList');
    };

    toggleLang() {
        this.isVisible = true;
    };

    chooseItem(item: any) {
        this.$globalData.set('langId', item.id, 'localStorage');
    };

    created() {
        /**
         * vue3中无法在setup外调用useStore，需要首页created中把vuex实例设置到GlobalData中
         */
        this.$globalData.setStore(this.$store);
    };

};

export default toNative(IndexView);