/**
 * @description cancelSync
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

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/admin/gooddata/tags/cancel_sync', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/admin/gooddata/tags/cancel_sync', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/api/admin/gooddata/tags/cancel_sync',
    params,
    swrOptions,
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/api/admin/gooddata/tags/cancel_sync';

export async function request(params = {}) {
  return Request({
    url: getUrl('/api/admin/gooddata/tags/cancel_sync', params, 'GET'),
    params,
    method: 'get',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'GET',
      url: getUrl('/api/admin/gooddata/tags/cancel_sync', params, 'GET'),
      params,
      init,
    };
  };
}
