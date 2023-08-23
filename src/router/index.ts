import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routeJson: any[] = require('./routes.json');

const routes: Array<RouteRecordRaw> = routeJson.map(item => {
    item.component = require('../pages/' + item.component).default;
    return item;
});

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;
