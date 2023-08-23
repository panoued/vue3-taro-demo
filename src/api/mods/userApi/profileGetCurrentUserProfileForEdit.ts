/**
 * @description 取得修改用户信息所需的資料
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {}
export async function request(params = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/profile/getCurrentUserProfileForEdit',
      params,
      data: {},
      method: 'get',
    },
    options,
  );
}

export const URL = '/api/services/user/profile/getCurrentUserProfileForEdit';
