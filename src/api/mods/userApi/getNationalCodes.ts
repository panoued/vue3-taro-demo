/**
 * @description 获取可用国际区号
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {}
export async function request(params = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/getNationalCodes',
      params,
      data: {},
      method: 'get',
    },
    options,
  );
}

export const URL = '/api/services/user/getNationalCodes';
