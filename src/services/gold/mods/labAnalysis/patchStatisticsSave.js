/**
 * @description saveStatisticalAnalysis
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {}

export const method = 'PATCH';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/crowdlab/api/v1/analysis/statistics/save',
      params,
      'PATCH',
    ),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey(
      '/crowdlab/api/v1/analysis/statistics/save',
      params,
      'PATCH',
    ),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/crowdlab/api/v1/analysis/statistics/save',
    params,
    swrOptions,
    { method: 'PATCH' },
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/crowdlab/api/v1/analysis/statistics/save';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl(
      '/crowdlab/api/v1/analysis/statistics/save',
      bodyParams,
      'PATCH',
    ),
    params: bodyParams,
    method: 'patch:JSON',
  });
}

export function createFetchAction(types, stateKey) {
  return (bodyParams = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'PATCH:JSON',
      url: getUrl(
        '/crowdlab/api/v1/analysis/statistics/save',
        bodyParams,
        'PATCH',
      ),
      params: bodyParams,
      init,
    };
  };
}
