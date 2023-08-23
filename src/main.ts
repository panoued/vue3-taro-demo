import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './app.scss';
import { CommonUtil } from './utils/CommonUtil';
import VueRequest from './plugins/VueRequest';
import AllPlugins from './plugins/AllPlugins';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';

document.documentElement.style.fontSize = (document.documentElement.clientWidth / 375).toFixed(2) + 'px';

CommonUtil.setRouter(router).setVueToast(showToast);

createApp(App).use(store).use(router).use(AllPlugins).use(VueRequest).mount('#app');
