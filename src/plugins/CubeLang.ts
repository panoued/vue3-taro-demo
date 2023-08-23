import { CubeLangClient, CubeLangCore } from "@/clients/CubeLangClient"
import { I18nMap } from "@/i18n/I18nMap";
import { GlobalDataInstance } from "./GlobalData";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties extends CubeLangCore<LangMap> { }
};

export default {

    install(app: any) {
        const lang = new CubeLangClient(I18nMap, () => GlobalDataInstance.get('langId', 'localStorage'));
        app.config.globalProperties.$t = lang.$t.bind(lang);
        app.config.globalProperties.$tr = lang.$tr.bind(lang);
        app.config.globalProperties.$tk = lang.$tk.bind(lang);
    }

}