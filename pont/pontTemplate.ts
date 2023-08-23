import * as Pont from 'pont-engine';
import { CodeGenerator, Interface } from "pont-engine";

function apidts(originCode: string | (() => string)) {
    return (typeof originCode == 'string' ? originCode : originCode()).replace(/defs/g, 'minDefs').replace(/API/g, 'minApi').replace(/minDefs\.ObjectMap/g, 'ObjectMap');
};

export class FileStructures extends Pont.FileStructures {

    getModsDeclaration(originCode: string | (() => string), usingMultipleOrigins: boolean) {
        return `
        declare ${apidts(originCode)}
        `;
    };

    getBaseClassesInDeclaration(originCode: string | (() => string), usingMultipleOrigins: boolean) {
        return `
        declare ${apidts(originCode)}
        `;
    };

}

export default class MyGenerator extends CodeGenerator {

    getInterfaceContent(inter: Interface) { /* 获取接口实现内容的代码 */
        const paramsCode = inter.getParamsCode();
        const bodyParamsCode = inter.getBodyParamsCode();
        const method = inter.method.toUpperCase();
        let requestParams = bodyParamsCode ? `bodyParams = {}` : `params = {}`;

        return `
        /**
         * @description ${inter.description}
         */
        import { CubePontBasicRequest } from 'cube-common-lib';    
        export ${paramsCode};    
        export async function request(${requestParams}, options = {}) {
            return CubePontBasicRequest.request({
                url: "${inter.path}",
                ${inter.method.toLowerCase() == 'delete' ? 'params: {}' : bodyParamsCode ? 'params: bodyParams' : 'params'},
                ${inter.method.toLowerCase() == 'delete' ? bodyParamsCode ? 'data: bodyParams' : 'data: params' : 'data: {}'},
                method: '${inter.method}',
            }, options);
        };

        export const URL = '${inter.path}';
        `;
    };

    getInterfaceContentInDeclaration(inter: Interface) { /* 获取接口内容的类型定义代码 */
        const bodyParams = inter.getBodyParamsCode();
        const requestParams = bodyParams ? `bodyParams: ${bodyParams}` : `params: Params`;

        return `
        export ${inter.getParamsCode()}
        export function request(${requestParams}, options?: RequestConfig): Promise<${inter.responseType}>;
        export const URL: '${inter.path}';
        `;
    };

    /** 获取所有模块的 index 入口文件 */
    getModsIndex() {
        let conclusion = `
        export const allApi = {
            ${this.dataSource.mods.map(mod => mod.name).join(', \n')}
        };
        `;

        // dataSource name means multiple dataSource
        if (this.dataSource.name) {
            conclusion = `
            export const ${this.dataSource.name} = {
            ${this.dataSource.mods.map(mod => mod.name).join(', \n')}
            };
        `;
        }

        return `
        ${this.dataSource.mods
                .map(mod => {
                    return `import * as ${mod.name} from './${mod.name}';`;
                })
                .join('\n')}

        ${conclusion}
        `;
    };

    /** 获取接口类和基类的总的 index 入口文件代码 */
    getIndex() {
        const res = `
        import * as APIT from './baseClass';
        import { allApi } from './mods';
        export const defs = (APIT as any) as typeof minDefs;
        export const API = allApi as any as typeof minApi;
        `;
        return res;
    };

}
