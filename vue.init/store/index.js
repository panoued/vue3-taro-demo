const fs = require('fs');

const store = JSON.parse(fs.readFileSync(process.argv[process.argv.length - 1])).store;
const keys = [], types = {}, vals = {};

if (store) {
    console.log('初始化Vuex开始');

    console.time('初始化Vuex用时');

    function handle(prefix, files) {
        files.forEach(item => {
            const file = prefix + '/' + item;
            const content = fs.readFileSync(file, 'utf-8');
            const str = content.replace(/^[\s\S]*class.*\{/, '').replace(/\}\;?$/, '').trim();
            const arr = str.split(/\;|\n|\r/).map(str => str.trim()).filter(str => !!str);
            arr.forEach(item => {
                const s = item.indexOf(':'), e = item.lastIndexOf('=');
                const key = item.slice(0, s == -1 ? item.length : s).trim();
                const tp = s == -1 ? 'any' : item.slice(s + 1, e == -1 ? item.length : e).trim();
                const val = e == -1 ? 'null' : item.slice(e + 1).trim();
                keys.push(key);
                types[key] = tp;
                vals[key] = val;
            })
        });
    };

    const { source, target, type } = store;
    if (Array.isArray(source)) {
        source.forEach(path => {
            const files = fs.readdirSync(path);
            handle(path, files);
        });
    } else {
        const files = fs.readdirSync(source);
        handle(source, files);
    };

    const storeResult = `import { createStore } from 'vuex';

export default createStore({
    state: {
        ${keys.map(key => `${key}: ${vals[key]}`).join(',\n\t\t')}
    },
    mutations: {
        ${keys.map(key => {
        return `set${key.charAt(0).toUpperCase() + key.slice(1)}(state, ${key}) {
        \tstate.${key} = ${key};
    \t}`;
    }).join(',\n\t\t')}
    },
    actions: {
    },
    modules: {
    }
});
    `;

    fs.writeFileSync(target, storeResult);

    const typeResult = `type VuexState = {
    ${keys.map(key => `${key}: ${types[key]};`).join('\n\t')}
};

type VuexStateKey = keyof VuexState;
    `;

    fs.writeFileSync(type, typeResult);

    console.log('初始化Vuex结束');

    console.timeEnd('初始化Vuex用时');
};

console.log('\n');