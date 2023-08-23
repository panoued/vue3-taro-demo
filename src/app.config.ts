import { TaroRoutePathList } from "./enums/TaroRoutes";

const p = (s: string) => s.slice(1);

export default defineAppConfig({
    pages: Object.values(TaroRoutePathList).map(p),
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        color: '#666',
        selectedColor: '#f38433',
        backgroundColor: '#fff',
        list: [
            {
                pagePath: p(TaroRoutePathList.IndexIndex),
                text: '首页',
                iconPath: 'assets/images/service.png',
                selectedIconPath: 'assets/images/service-active.png'
            },
            {
                pagePath: p(TaroRoutePathList.TestList),
                text: '测试',
                iconPath: 'assets/images/service.png',
                selectedIconPath: 'assets/images/service-active.png'
            },
        ]
    }
})
