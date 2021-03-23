/**
 * @description saveAnalysisModule
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
    Hooks.getUrlKey('/api/v1/admin/version/analysis/save', params, 'PUT'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/v1/admin/version/analysis/save', params, 'PUT'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/api/v1/admin/version/analysis/save',
    params,
    swrOptions,
    { method: 'PUT' },
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/api/v1/admin/version/analysis/save';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/api/v1/admin/version/analysis/save', bodyParams, 'PUT'),
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
      url: getUrl('/api/v1/admin/version/analysis/save', bodyParams, 'PUT'),
      params: bodyParams,
      init,
    };
  };
}
