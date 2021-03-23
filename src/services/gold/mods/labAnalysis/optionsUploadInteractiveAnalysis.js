/**
 * @description uploadInteractiveAnalysis
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
    Hooks.getUrlKey(
      '/crowdlab/api/v1/analysis/uploadInteractiveAnalysis',
      params,
      'OPTIONS',
    ),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey(
      '/crowdlab/api/v1/analysis/uploadInteractiveAnalysis',
      params,
      'OPTIONS',
    ),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/crowdlab/api/v1/analysis/uploadInteractiveAnalysis',
    params,
    swrOptions,
    { method: 'OPTIONS' },
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/crowdlab/api/v1/analysis/uploadInteractiveAnalysis';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl(
      '/crowdlab/api/v1/analysis/uploadInteractiveAnalysis',
      bodyParams,
      'OPTIONS',
    ),
    params: bodyParams,
    method: 'options:JSON',
  });
}

export function createFetchAction(types, stateKey) {
  return (bodyParams = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'OPTIONS:JSON',
      url: getUrl(
        '/crowdlab/api/v1/analysis/uploadInteractiveAnalysis',
        bodyParams,
        'OPTIONS',
      ),
      params: bodyParams,
      init,
    };
  };
}
