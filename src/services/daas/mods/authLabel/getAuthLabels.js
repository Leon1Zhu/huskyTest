/**
 * @description 获取授权标签列表
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 目标系统 */
  appName;
  /** authStatus */
  authStatus;
  /** 实体类型 */
  entityType;
  /** ID类型 */
  inputIdType;
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
  /** 项目ID */
  projectId;
  /** requestId */
  requestId;
  /** responseIds */
  responseIds;
  /** 标签范围，my/all */
  scope;
  /** 服务ID */
  serviceId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/auth/getAuthLabels.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/auth/getAuthLabels.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/auth/getAuthLabels.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/auth/getAuthLabels.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/auth/getAuthLabels.json', params, 'GET'),
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
      url: getUrl('/auth/getAuthLabels.json', params, 'GET'),
      params,
      init,
    };
  };
}
