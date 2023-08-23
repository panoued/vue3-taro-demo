/**
 * @description 修改用户信息
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {}
export async function request(bodyParams = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/profile/updateCurrentUserProfile',
      params: bodyParams,
      data: {},
      method: 'put',
    },
    options,
  );
}

export const URL = '/api/services/user/profile/updateCurrentUserProfile';
