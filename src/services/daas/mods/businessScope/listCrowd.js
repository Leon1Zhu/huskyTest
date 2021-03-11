/**
 * @description 业务空间申请人群列表
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 状态筛选条件 */
  authStatus;
  /** 用户权限类型 */
  authorityType;
  /** 业务空间id，查看空间下资产时使用 */
  businessScopeId;
  /** keyword */
  keyword;
  /** order */
  order;
  /** orderBy */
  orderBy;
  /** page */
  page;
  /** pageSize */
  pageSize;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/businessscope/listCrowd.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/businessscope/listCrowd.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/businessscope/listCrowd.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/businessscope/listCrowd.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/businessscope/listCrowd.json', params, 'GET'),
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
      url: getUrl('/businessscope/listCrowd.json', params, 'GET'),
      params,
      init,
    };
  };
}
