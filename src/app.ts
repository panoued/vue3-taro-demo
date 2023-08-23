import { createApp } from 'vue';
import './app.scss';
import store from './store';
import { CommonUtil } from './utils/CommonUtil';
import TaroRequest from './plugins/TaroRequest';
import Taro from '@tarojs/taro';
import AllPlugins from './plugins/AllPlugins';

CommonUtil.setTaro(Taro);

const App = createApp({
    onShow(_options: any) { },
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(store).use(TaroRequest).use(AllPlugins);

export default App;
