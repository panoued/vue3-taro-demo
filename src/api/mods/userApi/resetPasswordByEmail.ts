/**
 * @description 重置邮箱登录密码
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {}
export async function request(bodyParams = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/resetPasswordByEmail',
      params: bodyParams,
      data: {},
      method: 'post',
    },
    options,
  );
}

export const URL = '/api/services/user/resetPasswordByEmail';
