import { CommonUtil } from "@/utils/CommonUtil";
import { CubePontBasicRequest, NetworkUtil } from "cube-common-lib";

export class RequestConfig {

    static set(client: any) {
        NetworkUtil.setConfig({
            httpRequestService: client,
            basicUrl: 'http://192.168.1.214:9080',
        });
        CubePontBasicRequest.setConfig({
            log: false,
            isSuccess: res => res.__abp && res.success,
            processResponseCallback: res => res.result,
            errCallback(message) {
                CommonUtil.showToast(message);
            },
        });
    };

}