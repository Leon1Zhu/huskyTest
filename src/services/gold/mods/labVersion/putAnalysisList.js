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

export const method = 'PUT';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/crowdlab/api/v1/version/analysis/list', params, 'PUT'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/crowdlab/api/v1/version/analysis/list', params, 'PUT'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/crowdlab/api/v1/version/analysis/list',
    params,
    swrOptions,
    { method: 'PUT' },
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/crowdlab/api/v1/version/analysis/list';

export async function request(params = {}) {
  return Request({
    url: getUrl('/crowdlab/api/v1/version/analysis/list', params, 'PUT'),
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
      url: getUrl('/crowdlab/api/v1/version/analysis/list', params, 'PUT'),
      params,
      init,
    };
  };
}
