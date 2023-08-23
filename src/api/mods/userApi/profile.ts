/**
 * @description 獲取當前登录用戶信息
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {}
export async function request(params = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/profile',
      params,
      data: {},
      method: 'get',
    },
    options,
  );
}

export const URL = '/api/services/user/profile';
