/**
 * @description test
 */
import { CubePontBasicRequest } from 'cube-common-lib';
export class Params {}
export async function request(params = {}, options = {}) {
  return CubePontBasicRequest.request(
    {
      url: '/api/services/user/test',
      params,
      data: {},
      method: 'get',
    },
    options,
  );
}

export const URL = '/api/services/user/test';
