/**
 * @description 取得第三方授权地址
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {
  /** loginProvider */
  loginProvider?: string;
}
export async function request(params = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/externalLogin',
      params,
      data: {},
      method: 'get',
    },
    options,
  );
}

export const URL = '/api/services/user/externalLogin';
