/**
 * @description sync
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** objectId */
  objectId;
  /** tagId */
  tagId;
}

export const method = 'OPTIONS';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/admin/gooddata/tags/sync', params, 'OPTIONS'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/admin/gooddata/tags/sync', params, 'OPTIONS'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/api/admin/gooddata/tags/sync', params, swrOptions, {
    method: 'OPTIONS',
  });
}

export const init = new defs.gold.ResultVO();

export const url = '/api/admin/gooddata/tags/sync';

export async function request(params = {}) {
  return Request({
    url: getUrl('/api/admin/gooddata/tags/sync', params, 'OPTIONS'),
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
      url: getUrl('/api/admin/gooddata/tags/sync', params, 'OPTIONS'),
      params,
      init,
    };
  };
}
