import { CubeAuthClient } from "@/clients/CubeAuthClient";
import { NetworkUtil } from "cube-common-lib";
import { GlobalDataInstance } from "./GlobalData";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $auth: CubeAuthClient;
    }
};

export const CubeAuthInstance = new CubeAuthClient({
    name: 'test',
    tokenKey: 'token',
    globalData: GlobalDataInstance,
    onSaveToken(token) {
        NetworkUtil.setAccessToken(token.accessToken);
    },
});

export default {
    install(app: any) {
        app.config.globalProperties.$auth = CubeAuthInstance;
        CubeAuthInstance.init();
    }
};