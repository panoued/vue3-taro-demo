/**
 * @description 刪除用戶
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {
  /** id */
  id?: number;
}
export async function request(params = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/admin/delete',
      params,
      data: {},
      method: 'post',
    },
    options,
  );
}

export const URL = '/api/services/user/admin/delete';
