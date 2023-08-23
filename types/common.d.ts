interface CubeAuthToken {
    accessToken?: string;
    refreshToken?: string;
    expireIn?: number;
    expireAt?: number;
}

type ResponseTypes = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';

type RequestConfig = {
    autoHandleError?: boolean;
    isIgnore401ErrorHandle?: boolean;
    isSendHeaderInfo?: boolean;
    useLoading?: boolean;
    upload?: boolean;
    onUploadProgress?: (progressEvent: any) => void;
    responseType?: ResponseTypes;
}

type Route = {
    path?: string;
    name?: string;
    query?: Record<string, string | number>;
    params?: Record<string, string | number>;
    fullPath?: string;
    meta?: any;
};

type StoreageType = 'localStorage' | 'sessionStorage';

type GlobalDataInstance = {
    get<T extends VuexStateKey>(key: T, storageType?: StoreageType): VuexState[T];
    set<T extends VuexStateKey>(key: T, data: VuexState[T], storageType?: StoreageType): void;
    del<T extends VuexStateKey>(key: T, storageType?: StoreageType): void;
};