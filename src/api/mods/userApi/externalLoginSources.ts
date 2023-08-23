/**
 * @description 取得第三方登錄種類及來源
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {
  /** platform */
  platform?: 'WEB' | 'APP' | 'WECHAT';
}
export async function request(params = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/externalLogin/sources',
      params,
      data: {},
      method: 'get',
    },
    options,
  );
}

export const URL = '/api/services/user/externalLogin/sources';
