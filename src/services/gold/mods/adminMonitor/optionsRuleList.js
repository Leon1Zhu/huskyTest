/**
 * @description ruleList
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {}

export const method = 'OPTIONS';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/admin/monitor/ruleList', params, 'OPTIONS'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/admin/monitor/ruleList', params, 'OPTIONS'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/api/admin/monitor/ruleList', params, swrOptions, {
    method: 'OPTIONS',
  });
}

export const init = new defs.gold.ResultVO();

export const url = '/api/admin/monitor/ruleList';

export async function request(params = {}) {
  return Request({
    url: getUrl('/api/admin/monitor/ruleList', params, 'OPTIONS'),
    params,
    method: 'options',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'OPTIONS',
      url: getUrl('/api/admin/monitor/ruleList', params, 'OPTIONS'),
      params,
      init,
    };
  };
}
