/**
 * @description refreshAlgEvaluation
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/api/v2/evaluation/refresh', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/api/v2/evaluation/refresh', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/api/v2/evaluation/refresh',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = new defs.autodm.ResultObject();

export const url = '/autodm/api/v2/evaluation/refresh';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/api/v2/evaluation/refresh', params, 'POST'),
    params,
    method: 'post',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'POST',
      url: getUrl('/autodm/api/v2/evaluation/refresh', params, 'POST'),
      params,
      init,
    };
  };
}
