import { BaseHttpRequest } from "cube-common-lib";
import Taro from "@tarojs/taro";

export class TaroHttpClient implements BaseHttpRequest {

    getRequest(url: string, data: object, header: object): Promise<any> {
        return new Promise<any>((resolve, fail) => {
            Taro.request({ method: 'GET', url, data, header, success: res => resolve(res.data), fail });
        });
    };

    postRequest(url: string, data: object, header: object, _onUploadProgress?: ((progressEvent: any) => void), responseType?: any): Promise<any> {
        return new Promise<any>((resolve, fail) => {
            Taro.request({ method: 'POST', url, data, header, success: res => resolve(res.data), fail, responseType });
        });
    };

    putRequest(url: string, data: object, header: object): Promise<any> {
        return new Promise<any>((resolve, fail) => {
            Taro.request({ method: 'PUT', url, data, header, success: res => resolve(res.data), fail });
        });
    };

    deleteRequest(url: string, data: object, header: object): Promise<any> {
        return new Promise<any>((resolve, fail) => {
            Taro.request({ method: 'DELETE', url, data, header, success: res => resolve(res.data), fail });
        });
    };

    uploadFileRequest(url: string, params: object, headers: object): Promise<any> {
        return new Promise<any>(success => {
            success({ url, params, headers });
        });
    };

    upload(url: string, params: object, header: object, filePath: any, name: any): Promise<any> {
        return new Promise<any>((resolve, fail) => {
            const formData = new FormData();
            if (params && typeof params == 'object') {
                for (const key in params) {
                    formData.append(key, params[key]);
                }
            };
            Taro.uploadFile({ url, formData, header, filePath, name, success: res => resolve(res.data), fail });
        });
    };

    request<T = any>(method: any, url: string, data: object, header: object): Promise<T> {
        return new Promise<T>((resolve, fail) => {
            Taro.request({ method, url, data, header, success: res => resolve(res.data), fail });
        });
    };

}