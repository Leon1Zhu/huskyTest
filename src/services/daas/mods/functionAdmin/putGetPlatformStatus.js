/**
 * @description getPlatformStatus
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {}

export const method = 'PUT';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/admin/function/getPlatformStatus', params, 'PUT'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/admin/function/getPlatformStatus', params, 'PUT'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/admin/function/getPlatformStatus',
    params,
    swrOptions,
    { method: 'PUT' },
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/admin/function/getPlatformStatus';

export async function request(params = {}) {
  return Request({
    url: getUrl('/admin/function/getPlatformStatus', params, 'PUT'),
    params,
    method: 'put',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'PUT',
      url: getUrl('/admin/function/getPlatformStatus', params, 'PUT'),
      params,
      init,
    };
  };
}
