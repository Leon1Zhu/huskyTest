/**
 * @description getDagLog
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** dagId */
  dagId;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/api/task/regular/getDagLog', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/api/task/regular/getDagLog', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/api/task/regular/getDagLog',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = '';

export const url = '/autodm/api/task/regular/getDagLog';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/api/task/regular/getDagLog', params, 'POST'),
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
      url: getUrl('/autodm/api/task/regular/getDagLog', params, 'POST'),
      params,
      init,
    };
  };
}
