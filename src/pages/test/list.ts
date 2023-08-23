import { Component, toNative } from "vue-facing-decorator";
import { BaseVue } from "@/base/BaseVue";
import "./list.scss";

@Component
class TestView extends BaseVue {

    profile: minDefs.UserProfile = {};

    val(v: any, k: string) {
        return /Time/.test(k) ? new Date(v * 1000).toLocaleString() : v;
    };

    created() {
        this.$api.userApi.profile.request({}).then(res => {
            this.profile = res;
        }).catch(() => { });
    };

};

export default toNative(TestView);