/**
 * @description 檢查是否需要輸入驗證碼
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {
  /** userName */
  userName?: string;
}
export async function request(params = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/checkNeedVerifyCode',
      params,
      data: {},
      method: 'get',
    },
    options,
  );
}

export const URL = '/api/services/user/checkNeedVerifyCode';
