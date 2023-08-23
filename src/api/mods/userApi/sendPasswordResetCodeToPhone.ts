/**
 * @description 发送密码重置 验证码到手机nationalCode
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {}
export async function request(bodyParams = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/sendPasswordResetCodeToPhone',
      params: bodyParams,
      data: {},
      method: 'post',
    },
    options,
  );
}

export const URL = '/api/services/user/sendPasswordResetCodeToPhone';
