/**
 * @description 解綁當前賬號的第3方賬戶
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {}
export async function request(bodyParams = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/externalLogin/unbindExternalAccount',
      params: bodyParams,
      data: {},
      method: 'post',
    },
    options,
  );
}

export const URL = '/api/services/user/externalLogin/unbindExternalAccount';
