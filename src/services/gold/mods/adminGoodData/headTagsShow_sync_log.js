/**
 * @description showSynclog
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

export const method = 'HEAD';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/admin/gooddata/tags/show_sync_log', params, 'HEAD'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/admin/gooddata/tags/show_sync_log', params, 'HEAD'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/api/admin/gooddata/tags/show_sync_log',
    params,
    swrOptions,
    { method: 'HEAD' },
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/api/admin/gooddata/tags/show_sync_log';

export async function request(params = {}) {
  return Request({
    url: getUrl('/api/admin/gooddata/tags/show_sync_log', params, 'HEAD'),
    params,
    method: 'head',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'HEAD',
      url: getUrl('/api/admin/gooddata/tags/show_sync_log', params, 'HEAD'),
      params,
      init,
    };
  };
}
