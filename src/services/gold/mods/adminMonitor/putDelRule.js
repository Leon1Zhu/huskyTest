/**
 * @description delRule
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
    Hooks.getUrlKey('/api/admin/monitor/delRule', params, 'PUT'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/admin/monitor/delRule', params, 'PUT'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/api/admin/monitor/delRule', params, swrOptions, {
    method: 'PUT',
  });
}

export const init = new defs.gold.ResultVO();

export const url = '/api/admin/monitor/delRule';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/api/admin/monitor/delRule', bodyParams, 'PUT'),
    params: bodyParams,
    method: 'put:JSON',
  });
}

export function createFetchAction(types, stateKey) {
  return (bodyParams = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'PUT:JSON',
      url: getUrl('/api/admin/monitor/delRule', bodyParams, 'PUT'),
      params: bodyParams,
      init,
    };
  };
}
