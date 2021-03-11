/**
 * @description 资产是否有申请权限。审核中：waiting；有权限：hasPermission；无权限：noPermission
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** projectId */
  projectId;
  /** requestId */
  requestId;
  /** responseId */
  responseId;
  /** serviceId */
  serviceId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/label/hasApplyPermission.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/label/hasApplyPermission.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/label/hasApplyPermission.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/label/hasApplyPermission.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/label/hasApplyPermission.json', params, 'GET'),
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
      url: getUrl('/label/hasApplyPermission.json', params, 'GET'),
      params,
      init,
    };
  };
}
