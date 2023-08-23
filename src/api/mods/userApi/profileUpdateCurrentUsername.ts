/**
 * @description 修改用户名
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {}
export async function request(bodyParams = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/profile/updateCurrentUsername',
      params: bodyParams,
      data: {},
      method: 'put',
    },
    options,
  );
}

export const URL = '/api/services/user/profile/updateCurrentUsername';
