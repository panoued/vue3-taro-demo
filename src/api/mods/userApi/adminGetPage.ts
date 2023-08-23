/**
 * @description 分頁取得用戶資料
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {
  /** keyword */
  keyword?: string;
  /** maxResultCount */
  maxResultCount?: number;
  /** skipCount */
  skipCount?: number;
  /** sorting */
  sorting?: string;
}
export async function request(params = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/admin/getPage',
      params,
      data: {},
      method: 'get',
    },
    options,
  );
}

export const URL = '/api/services/user/admin/getPage';
