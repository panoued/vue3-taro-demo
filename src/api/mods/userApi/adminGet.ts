/**
 * @description 取得用戶詳細資料
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {
  /** id */
  id?: number;
}
export async function request(params = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/admin/get',
      params,
      data: {},
      method: 'get',
    },
    options,
  );
}

export const URL = '/api/services/user/admin/get';
