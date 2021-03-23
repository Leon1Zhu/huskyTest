/**
      * @description odps表鉴权
返回鉴权结果
      */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** select */
  authType;
  /** 当前智能服务市场项目空间 */
  projectId;
  /** odps表名,{project}.{table} */
  tableName;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/v2/checkAuth', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/v2/checkAuth', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/autodm/v2/checkAuth', params, swrOptions);
}

export const init = new defs.autodm.AuthTypeVOV2();

export const url = '/autodm/v2/checkAuth';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/v2/checkAuth', params, 'GET'),
    params,
    method: 'get',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'GET',
      url: getUrl('/autodm/v2/checkAuth', params, 'GET'),
      params,
      init,
    };
  };
}
