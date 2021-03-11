/**
 * @description 业务空间详情
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
    Hooks.getUrlKey('/businessscope/getBusinessScope.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/businessscope/getBusinessScope.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/businessscope/getBusinessScope.json',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/businessscope/getBusinessScope.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/businessscope/getBusinessScope.json', params, 'GET'),
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
      url: getUrl('/businessscope/getBusinessScope.json', params, 'GET'),
      params,
      init,
    };
  };
}