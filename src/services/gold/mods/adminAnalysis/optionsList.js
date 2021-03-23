/**
 * @description getAnalysisModuleList
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** keyword */
  keyword;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** type */
  type;
  /** version */
  version;
}

export const method = 'OPTIONS';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/v1/admin/version/analysis/list', params, 'OPTIONS'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/v1/admin/version/analysis/list', params, 'OPTIONS'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/api/v1/admin/version/analysis/list',
    params,
    swrOptions,
    { method: 'OPTIONS' },
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/api/v1/admin/version/analysis/list';

export async function request(params = {}) {
  return Request({
    url: getUrl('/api/v1/admin/version/analysis/list', params, 'OPTIONS'),
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
      url: getUrl('/api/v1/admin/version/analysis/list', params, 'OPTIONS'),
      params,
      init,
    };
  };
}
