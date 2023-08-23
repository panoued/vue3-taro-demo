import { CommonUtil } from "@/utils/CommonUtil";

export class GlobalDataClient {

    private keyPrefix = 'global_data_';

    private store: any = null;

    private vuexKey(name: string) {
        return `set${name.charAt(0).toUpperCase() + name.slice(1)}`;
    };

    private vuexCommit(name: string, value: any) {
        if (this.store) {
            this.store.commit(this.vuexKey(name), value);
        };
    };

    private storageKey(key: string) {
        return this.keyPrefix + key;
    };

    private storage(type: StoreageType) {
        return type == 'sessionStorage' ? sessionStorage : localStorage;
    };

    private storageGet(storageType: StoreageType, name: keyof VuexState) {
        let item = null;
        if (storageType) {
            const str = this.storage(storageType).getItem(this.storageKey(name));
            try {
                item = JSON.parse(str);
            } catch (error) {
                console.log('<!-- GlobalData从Storage获取数据失败, ' + error.message + ' -->');
            };
        };
        return item;
    };

    private storageSet(storageType: StoreageType, name: keyof VuexState, data: any) {
        if (storageType) {
            try {
                this.storage(storageType).setItem(this.storageKey(name), JSON.stringify(data));
            } catch (error) {
                console.log('<!-- GlobalData保存数据到Storage失败, ' + error.message + ' -->');
            };
        };
    };

    private storageDel(storageType: StoreageType, name: keyof VuexState) {
        if (storageType) {
            try {
                this.storage(storageType).removeItem(this.storageKey(name));
            } catch (error) {
                console.log('<!-- GlobalData从Storage删除数据失败, ' + error.message + ' -->');
            };
        };
    };

    setStore(value: any) {
        if (value && !this.store) {
            this.store = value;
            const reg = new RegExp('^' + this.keyPrefix);
            if (CommonUtil.isVue) {
                const storages: StoreageType[] = ['localStorage', 'sessionStorage'];
                storages.forEach(type => {
                    for (let i = 0; i < this.storage(type).length; i++) {
                        const k = this.storage(type).key(i);
                        if (reg.test(k)) {
                            const key = k.replace(reg, '') as any;
                            const val = this.storageGet(type, key);
                            this.vuexCommit(key, val);
                        };
                    };
                });
            } else {
                CommonUtil.taro.getStorageInfoSync().keys.forEach(k => {
                    if (reg.test(k)) {
                        const key = k.replace(reg, '') as any;
                        const val = CommonUtil.taro.getStorageSync(k);
                        this.vuexCommit(key, val);
                    };
                });
            };
        };
    };

    get<T extends VuexStateKey>(key: T, storageType?: StoreageType): VuexState[T] {
        let res = null;
        if (this.store) {
            res = this.store.state[key];
        };
        if (res === null && storageType) {
            if (CommonUtil.isVue) {
                res = this.storageGet(storageType, key);
            } else {
                res = CommonUtil.taro.getStorageSync(this.storageKey(key));
            };
        };
        return res;
    };

    set<T extends VuexStateKey>(key: T, data: VuexState[T], storageType?: StoreageType) {
        this.vuexCommit(key, data);
        if (storageType) {
            if (CommonUtil.isVue) {
                this.storageSet(storageType, key, data);
            } else {
                CommonUtil.taro.setStorageSync(this.storageKey(key), data);
            };
        };
    };

    del<T extends VuexStateKey>(key: T, storageType?: StoreageType) {
        this.vuexCommit(key, null);
        if (storageType) {
            if (CommonUtil.isVue) {
                this.storageDel(storageType, key);
            } else {
                CommonUtil.taro.removeStorageSync(this.storageKey(key));
            };
        };
    };

}



