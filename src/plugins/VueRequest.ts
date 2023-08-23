import { HttpClient } from '@/clients/HttpClient';
import { RequestConfig } from './RequestConfig';

export default {

    install() {
        RequestConfig.set(new HttpClient({ log: false, timeout: 10000 }));
    }

}