const fs = require('fs');

const lang = JSON.parse(fs.readFileSync(process.argv[process.argv.length - 1])).lang;

if (lang) {
    console.log('初始化多语言开始');

    console.time('初始化多语言用时');

    const { cn, tw, en, type, map } = lang;
    const { toCn, toTw, getLangId } = require('./utils');
    const langIds = getLangId(tw, cn, en);
    const cnTarget = {}, twTarget = {}, enTarget = {};
    function handle(cnPath, twPath, enPath) {
        let cnfile = '';
        let enfile = '';
        try {
            cnfile = fs.readFileSync(cnPath, 'utf-8');
            enfile = fs.readFileSync(enPath, 'utf-8');
        } catch (error) { }
        const cnMap = cnfile ? JSON.parse(cnfile) : {};
        const enMap = enfile ? JSON.parse(enfile) : {};
        const cnFileTarget = {}, twFileTarget = {}, enFileTarget = {};
        for (const key in cnMap) {
            const value = cnMap[key];
            const cnTxt = toCn(value);
            const twTxt = toTw(value);
            const cnValue = cnTxt || value, twValue = twTxt || cnTxt || value, enValue = enMap[key] || twTxt || cnTxt || value;
            cnFileTarget[key] = cnTarget[key] = cnValue;
            twFileTarget[key] = twTarget[key] = twValue;
            enFileTarget[key] = enTarget[key] = enValue;
        };
        fs.writeFileSync(cnPath, JSON.stringify(cnFileTarget, null, '\t'));
        fs.writeFileSync(twPath, JSON.stringify(twFileTarget, null, '\t'));
        fs.writeFileSync(enPath, JSON.stringify(enFileTarget, null, '\t'));
    };

    const isDir = fs.lstatSync(cn).isDirectory();
    if (isDir) {
        const files = fs.readdirSync(cn);
        files.forEach(file => handle(`${cn}/${file}`, `${tw}/${file}`, `${en}/${file}`));
    } else {
        handle(cn, tw, en);
    };

    const langMapType = `type LangId = ${langIds.map(id => `'${id}'`).join(' | ')};\ntype LangMap = ${JSON.stringify(twTarget).replace(/\,/g, ';')};\ntype LangKey = keyof LangMap`;

    const mapTarget = [twTarget, cnTarget, enTarget].map((item, i) => `const map_${langIds[i]} = ${JSON.stringify(item)};`).join('\n\n');

    const mapExport = map ? `export const ${map.split('/')[map.split('/').length - 1].replace(/\..*/, '')} = { ${langIds.map(id => `${id}: map_${id}`).join(', ')} };` : '';

    fs.writeFileSync(type, langMapType);

    if (map) {
        fs.writeFileSync(map, `${mapTarget}\n\n${mapExport}`);
    };

    console.log('初始化多语言结束');

    console.timeEnd('初始化多语言用时');
};

console.log('\n');