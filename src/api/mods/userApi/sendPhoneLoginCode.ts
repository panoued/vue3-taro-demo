/**
 * @description 发送手机登录验证码
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {}
export async function request(bodyParams = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/sendPhoneLoginCode',
      params: bodyParams,
      data: {},
      method: 'post',
    },
    options,
  );
}

export const URL = '/api/services/user/sendPhoneLoginCode';
