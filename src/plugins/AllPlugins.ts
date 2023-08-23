import GlobalData from "./GlobalData";
import CubeAuth from "./CubeAuth";
import CubeLang from "./CubeLang";

export default {

    install(app: any) {
        app.use(GlobalData).use(CubeAuth).use(CubeLang);
    }

}