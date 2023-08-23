/**
 * @description 验证码
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {
  /** uuid */
  uuid?: string;
}
export async function request(params = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/captcha/generateVerifyCode',
      params,
      data: {},
      method: 'get',
    },
    options,
  );
}

export const URL = '/api/services/user/captcha/generateVerifyCode';
