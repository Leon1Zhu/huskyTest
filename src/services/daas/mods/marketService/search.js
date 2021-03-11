/**
 * @description 服务搜索(callCnt(最热)/gmtModified(最新))
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** cate1Id */
  cate1Id;
  /** cate2Id */
  cate2Id;
  /** cate3Id */
  cate3Id;
  /** cate4Id */
  cate4Id;
  /** 类目ids，如[1,2,'3,4,5'] */
  categoryIds;
  /** 搜索关键词 */
  keyword;
  /** order */
  order;
  /** orderBy */
  orderBy;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** 服务类型 */
  serviceType;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/service/search.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/service/search.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/service/search.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/service/search.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/service/search.json', params, 'GET'),
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
      url: getUrl('/service/search.json', params, 'GET'),
      params,
      init,
    };
  };
}
