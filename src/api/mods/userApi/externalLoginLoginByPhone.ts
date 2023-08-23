/**
 * @description 第一次第3方登錄時, 通过Email注冊/绑定用戶及登錄, 請先調用sendPhoneBindingCode取得驗證碼
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {}
export async function request(bodyParams = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/externalLogin/loginByPhone',
      params: bodyParams,
      data: {},
      method: 'post',
    },
    options,
  );
}

export const URL = '/api/services/user/externalLogin/loginByPhone';
