const fs = require('fs');

const route = JSON.parse(fs.readFileSync(process.argv[process.argv.length - 1])).route;

if (route) {
    console.log('初始化路由开始');

    console.time('初始化路由用时');

    const { views, excludes, custom, output, taro } = route;
    const { firstToUpperCase } = require('./utils');
    const excludesFullPath = excludes.map(path => path.startsWith(views) ? path : views + '/' + path);
    function read(...path) {
        const dir = path.filter(s => !!s).join('/');
        let files = [];
        try {
            files = fs.readdirSync(dir);
        } catch { }
        files.forEach(file => {
            if (/\.vue$/.test(file)) {
                const vue = dir + '/' + file;
                const fit = vue != 'src/views/index.vue' && !excludesFullPath.includes(vue);
                if (fit) {
                    list.push(vue);
                };
            } else {
                read(dir, file);
            };
        });
    };

    const list = [], names = [], paths = [], routes = [], pathList = [], nameList = [], taros = [];

    read(views);

    list.forEach(filePath => {
        const component = filePath.replace(new RegExp(views + '\/'), '');
        const arr = component.replace(/.vue$/, '').split('/');
        const name = arr.map(str => firstToUpperCase(str.replace('_', ''))).join('') || 'Index';
        let path = '', optionName = '';
        if (arr[arr.length - 1] == 'index') {
            path = arr.filter(s => s != 'index').map(str => str.replace('_', ':')).join('/');
        } else {
            path = arr.filter(s => s != 'index').map(str => str.replace(/_(.*)/, ':$1?')).join('/');
        };
        path = '/' + path;
        try {
            const file = fs.readFileSync(filePath.replace(/.vue$/, '.ts'), 'utf-8');
            optionName = file.replace(/^[\s\S]*class\s+(\w+)\s+extends[\s\S]*$/, '$1').trim();
        } catch (error) { };
        routes.push({ path, name, component, meta: { optionName } });

        taros.push(`${name} = '${filePath.replace('src', '').replace('.vue', '')}'`);
    });

    routes.push(...custom);

    routes.forEach(route => {
        const name = `'${route.name}'`, path = `'${route.path.replace(/\:([a-zA-Z0-9]+)\??/g, '{$1}')}'`;
        names.push(name);
        paths.push(path);
        pathList.push(`${name} = ${path}`);
        nameList.push(`${name} = ${name}`);
    });

    fs.writeFileSync(output.json, JSON.stringify(routes, null, '\t'));

    const $RouteNames = `type VueRouteNames = ${names.join(' | \n\t')};`;

    const $RoutePaths = `type VueRoutePaths = ${paths.join(' | \n\t')};`;

    fs.writeFileSync(output.type, `${$RouteNames}\n\n\n${$RoutePaths}`);

    const RouteNameList = `export enum VueRouteNameList {\n\t${nameList.join(',\n\t')}\n};`;

    const RoutePathList = `export enum VueRoutePathList {\n\t${pathList.join(',\n\t')}\n};`;

    fs.writeFileSync(output.enum, `${RouteNameList}\n\n\n${RoutePathList}\n`);

    fs.writeFileSync(taro.enum, `export enum TaroRoutePathList {\n\t${taros.join(',\n\t')}\n};`);

    fs.writeFileSync(taro.type, `type TaroRoutePaths = ${list.map(str => `'${str.replace('src', '').replace('.vue', '')}'`).join(' | \n\t')};`);

    console.log('初始化路由结束');

    console.timeEnd('初始化路由用时');
};



console.log('\n');
