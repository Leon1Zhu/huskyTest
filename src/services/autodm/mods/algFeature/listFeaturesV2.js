/**
      * @description 查询推荐特征列表V2
返回推荐特征列表V2
      */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** experimentId */
  experimentId;
  /** filterQualityScore */
  filterQualityScore;
  /** idType */
  idType;
  /** labelId */
  labelId;
  /** order */
  order;
  /** orderBy */
  orderBy;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** projectId */
  projectId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/feature/list/V2', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/feature/list/V2', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/autodm/feature/list/V2', params, swrOptions);
}

export const init = new defs.autodm.ListData();

export const url = '/autodm/feature/list/V2';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/feature/list/V2', params, 'GET'),
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
      url: getUrl('/autodm/feature/list/V2', params, 'GET'),
      params,
      init,
    };
  };
}
