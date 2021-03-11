/**
 * @description 新增类目
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 审批人工号 */
  approverId;
  /** 类目全名，多层级通过'-'分隔。例如：基本信息-大淘宝-资产信息-汽车 */
  fullName;
  /** 类目类型，gprofile/onecompany/bhv等 */
  type;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/category/insertCategory.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/category/insertCategory.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/category/insertCategory.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/category/insertCategory.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/category/insertCategory.json', params, 'GET'),
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
      url: getUrl('/category/insertCategory.json', params, 'GET'),
      params,
      init,
    };
  };
}
