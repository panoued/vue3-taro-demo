import { TaroHttpClient } from '@/clients/TaroHttpClient';
import { RequestConfig } from './RequestConfig';

export default {

    install() {
        RequestConfig.set(new TaroHttpClient());
    }

}