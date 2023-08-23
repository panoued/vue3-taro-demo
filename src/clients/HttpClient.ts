import axios from 'axios'
import { ABPErrorDto, BaseHttpRequest, BaseResponse, DateUtils, SignMd5Utils } from 'cube-common-lib';

interface HttpClientConfig {
    log?: boolean;
    timeout?: number;
}

type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';


/**
 * <md>http请求工具HttpClient
 */




let basicUrl = '';//根地址
export class HttpClient implements BaseHttpRequest {

    private _log = true;

    //getRequest,postRequest等用于对象方式去调用
    getRequest(url = '', params = {}, headers = {}, responseType: ResponseType = 'json'): Promise<any> {
        return HttpClient.Get(url, params, headers, responseType, this._log);
    }

    postRequest(url: string, params: object, headers: object, onUploadProgress?: (progressEvent: any) => void, responseType?: ResponseType): Promise<any> {
        return HttpClient.Post(url, params, headers, this._log, onUploadProgress, responseType);
    }

    putRequest(url = '', params = {}, headers = {}): Promise<any> {
        return HttpClient.Put(url, params, headers, this._log);
    }

    deleteRequest(url = '', params = {}, headers = {}, data = {}): Promise<any> {
        return HttpClient.Delete(url, params, headers, data, this._log);
    }

    uploadFileRequest(url = '', params = {}, headers = {}): Promise<any> {
        return HttpClient.UploadFile(url, params, headers, this._log);
    };

    upload(url: string, params: object, headers: object, onUploadProgress?: (progressEvent: any) => void, responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'): Promise<any> {
        return HttpClient.upload(url, params, headers, this._log, onUploadProgress, responseType);
    };

    request(method: string, url = '', params = {}, headers = {}, responseType: ResponseType = 'json') {
        if (/^get$/i.test(method)) {
            return this.getRequest(url, params, headers, responseType);
        } else {
            return this.postRequest(url, params, headers, () => { }, responseType);
        };
    };

    constructor(config?: HttpClientConfig) {
        if (config && typeof config == 'object') {
            if (config.hasOwnProperty('log')) {
                this._log = config.log;
            };
            if (config.hasOwnProperty('timeout')) {
                axios.defaults.timeout = config.timeout;
            };
        };
    };

    private static $log(log: boolean, ...args: any[]) {
        if (log) {
            console.log(...args);
        };
    };

    static stringify(query: any) {
        query = query || {};
        return SignMd5Utils.getQueryStr(query).replace(/^\?/, '');
    };

    /**
     * 创建包含ABPErrorDto的BaseResponse
     */
    static createError(err: any) {
        const response = new BaseResponse();
        response.__abp = false;
        response.success = false;
        response.error = new ABPErrorDto();
        response.error.message = err.message;
        if (err.response) {
            if (err.response.status) {
                response.error.code = err.response.status;
            };
            if (err.response.data && err.response.data.error && typeof err.response.data.error == 'object') {
                for (const key in err.response.data.error) {
                    const val = err.response.data.error[key];
                    if (val) {
                        response.error[key] = val;
                    };
                };
            } else if (err.response.data && typeof err.response.data == 'object') {
                for (const key in err.response.data) {
                    const val = err.response.data[key];
                    if (val) {
                        response.error[key] = val;
                    };
                };
            };
        } else if (err && err.code == 'ECONNABORTED') {
            response.error.code = 408;
            response.error.message = 'RequestTimeout';
        } else {
            response.error.code = err.status || 0;
        };
        return response;
    };

    /**
     * Get请求
     */
    static Get = (url = '', params = {}, headers = {}, responseType: ResponseType = 'json', log = true): Promise<any> => {
        HttpClient.$log(log, "HttpClient Get url = " + url);
        HttpClient.$log(log, "HttpClient Get params = ", params);
        HttpClient.$log(log, "HttpClient Get responseType = ", responseType);
        url = basicUrl + url;
        return new Promise((resolve) => {
            axios({
                method: 'GET',
                url,
                headers,
                params,
                responseType,
                paramsSerializer: params => HttpClient.stringify(params)
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                resolve(HttpClient.createError(error));
            });
        })
    }

    static Get_nuxt = (url = '', params = {}, headers = {}): Promise<any> => {
        return new Promise(resolve => {
            axios({
                method: 'GET',
                url: url,
                headers: headers,
                params: params,
                paramsSerializer: params => {
                    return HttpClient.stringify(params);
                }
            }).then(response => {
                const responseData = response.data;
                resolve(responseData);
            }).catch(error => {
                resolve(HttpClient.createError(error));
            });
        });
    };

    /**
     * Post请求
     */
    static Post = (url = '', params = {}, headers = {}, log = true, onUploadProgress?: (progressEvent: any) => void, responseType?: ResponseType) => {
        HttpClient.$log(log, "HttpClient Post url = " + url);
        HttpClient.$log(log, "HttpClient Post params = ", params);
        url = basicUrl + url;
        return new Promise((resolve) => {
            axios({
                method: 'POST',
                url: url,
                headers: headers,
                data: params,
                responseType,
                onUploadProgress
            }).then(response => {
                const responseData = response.data;
                resolve(responseData);
            }).catch(error => {
                resolve(HttpClient.createError(error));
            });
        })
    };

    /**
     * Post请求
     */
    static upload = (url = '', params = {}, headers = {}, log = true, onUploadProgress?: (progressEvent: any) => void, responseType?: ResponseType) => {
        HttpClient.$log(log, "HttpClient upload url = " + url);
        HttpClient.$log(log, "HttpClient upload params = ", params);
        url = basicUrl + url;
        return new Promise(resolve => {
            axios({
                method: 'POST',
                url: url,
                headers: headers,
                data: params,
                responseType,
                onUploadProgress,
                timeout: 0
            }).then(response => {
                const responseData = response.data;
                resolve(responseData);
            }).catch(error => {
                resolve(HttpClient.createError(error));
            });
        })
    };

    /**
     * Put请求
     */
    static Put = (url = '', params = {}, headers = {}, log = true) => {
        HttpClient.$log(log, "HttpClient Put url = " + url);
        HttpClient.$log(log, "HttpClient Put params = ", params);
        url = basicUrl + url;
        return new Promise((resolve) => {
            axios({
                method: 'PUT',
                url: url,
                headers: headers,
                data: params
            }).then(response => {
                const responseData = response.data;
                resolve(responseData);
            }).catch(error => {
                resolve(HttpClient.createError(error));
            });
        })
    }

    /**
     * Delete请求
     */
    static Delete = (url = '', params = {}, headers = {}, data = {}, log = true) => {
        HttpClient.$log(log, "HttpClient Delete url = " + url);
        HttpClient.$log(log, "HttpClient Delete params = ", params);
        url = basicUrl + url;
        return new Promise((resolve) => {
            axios({
                method: 'DELETE',
                url: url,
                headers: headers,
                params: params,
                data: data,
                paramsSerializer: params => {
                    return HttpClient.stringify(params);
                }
            }).then(response => {
                const responseData = response.data;
                resolve(responseData);
            }).catch(error => {
                resolve(HttpClient.createError(error));
            });
        })


    }

    /**
     * 上传文件
     */
    static UploadFile = (url = '', params = {}, headers = {}, log = true) => {
        HttpClient.$log(log, "HttpClient UploadFile url = " + url);
        HttpClient.$log(log, "HttpClient UploadFile params = ", params);
        HttpClient.$log(log, "HttpClient UploadFile headers = ", headers);
        let fileHeader = { 'Content-Type': 'multipart/form-data' };
        let headersValue = {};
        Object.assign(headersValue, headers, fileHeader);
        HttpClient.$log(log, "UploadFile headersValue = ", headersValue);
        let formData = new FormData();
        for (const key of Object.keys(params)) {
            if (params.hasOwnProperty(key)) {
                formData.append(key, params[key]);
            }
        }

        HttpClient.$log(log, "UploadFile formData = ", formData);

        url = basicUrl + url;

        return new Promise((resolve) => {
            axios({
                method: 'POST',
                url,
                headers: headersValue,
                data: formData,
                timeout: 0
            }).then(response => {
                const responseData = response.data;
                resolve(responseData);
            }).catch(error => {
                resolve(HttpClient.createError(error));
            });
        })

    }

    /**
     * 获取location根地址
     */
    static getRootPath(): string {
        if (typeof location == 'undefined') {
            return '';
        } else if (location.origin) {
            return location.origin;
        } else {
            const strFullPath = location.href, m = strFullPath.indexOf('//') + 2;
            let n = strFullPath.slice(m).indexOf('/');
            n = n < 0 ? strFullPath.length : n;
            return strFullPath.slice(0, m + n);
        };
    };

    static getJson(url: string): Promise<any> {
        return new Promise(resolve => {
            axios.get(url).then(result => {
                resolve(result.data);
            }).catch(error => {
                resolve(error);
            });
        });
    };

    static getConfig(basicUrl: string = ''): Promise<any> {
        const fullPath = basicUrl + 'config.json?timestamp=' + DateUtils.timestamp();
        return new Promise(resolve => {
            axios.get(fullPath).then(result => {
                resolve(result.data);
            }).catch(error => {
                resolve(error);
            });
        });
    };

}
