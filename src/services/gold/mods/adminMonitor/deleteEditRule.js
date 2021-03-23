/**
 * @description editRule
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {}

export const method = 'DELETE';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/admin/monitor/editRule', params, 'DELETE'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/admin/monitor/editRule', params, 'DELETE'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/api/admin/monitor/editRule', params, swrOptions, {
    method: 'DELETE',
  });
}

export const init = new defs.gold.ResultVO();

export const url = '/api/admin/monitor/editRule';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/api/admin/monitor/editRule', bodyParams, 'DELETE'),
    params: bodyParams,
    method: 'delete:JSON',
  });
}

export function createFetchAction(types, stateKey) {
  return (bodyParams = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'DELETE:JSON',
      url: getUrl('/api/admin/monitor/editRule', bodyParams, 'DELETE'),
      params: bodyParams,
      init,
    };
  };
}
