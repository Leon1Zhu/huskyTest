/**
 * @description deleteAnalysisModule
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** id */
  id;
}

export const method = 'PATCH';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/v1/admin/version/analysis/delete', params, 'PATCH'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/v1/admin/version/analysis/delete', params, 'PATCH'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/api/v1/admin/version/analysis/delete',
    params,
    swrOptions,
    { method: 'PATCH' },
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/api/v1/admin/version/analysis/delete';

export async function request(params = {}) {
  return Request({
    url: getUrl('/api/v1/admin/version/analysis/delete', params, 'PATCH'),
    params,
    method: 'patch',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'PATCH',
      url: getUrl('/api/v1/admin/version/analysis/delete', params, 'PATCH'),
      params,
      init,
    };
  };
}
