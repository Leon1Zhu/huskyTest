/**
 * @description 类目筛选，在标签详情页中使用，提供给同步服务使用
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** businessScopeId */
  businessScopeId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/category/listHjcCategory.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/category/listHjcCategory.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/category/listHjcCategory.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/category/listHjcCategory.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/category/listHjcCategory.json', params, 'GET'),
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
      url: getUrl('/category/listHjcCategory.json', params, 'GET'),
      params,
      init,
    };
  };
}
