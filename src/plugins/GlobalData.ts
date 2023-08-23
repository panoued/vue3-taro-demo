import { GlobalDataClient } from "@/clients/GlobalDataClient";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $globalData: GlobalDataClient
    }
};

export const GlobalDataInstance = new GlobalDataClient();

export default {

    install(app: any) {
        app.config.globalProperties.$globalData = GlobalDataInstance;
    }

}