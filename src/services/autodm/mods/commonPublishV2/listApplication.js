/**
      * @description 获取项目下应用列表
返回应用列表
      */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** keyword */
  keyword;
  /** mine */
  mine;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** 项目ID */
  projectId;
  /** status */
  status;
  /** type */
  type;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/common_produce/applications', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/common_produce/applications', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/common_produce/applications',
    params,
    swrOptions,
  );
}

export const init = new defs.autodm.ListData();

export const url = '/autodm/common_produce/applications';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/common_produce/applications', params, 'GET'),
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
      url: getUrl('/autodm/common_produce/applications', params, 'GET'),
      params,
      init,
    };
  };
}
