/**
 * @description 手机登录檢查是否需要輸入驗證碼
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {
  /** nationalCode */
  nationalCode?: string;
  /** phoneNumber */
  phoneNumber?: string;
}
export async function request(params = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/checkNeedVerifyCodeByPhone',
      params,
      data: {},
      method: 'get',
    },
    options,
  );
}

export const URL = '/api/services/user/checkNeedVerifyCodeByPhone';
