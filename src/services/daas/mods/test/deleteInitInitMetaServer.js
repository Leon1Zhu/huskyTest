/**
 * @description initMetaServer
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** projectId */
  projectId;
  /** serviceId */
  serviceId;
}

export const method = 'DELETE';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/init/initMetaServer', params, 'DELETE'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/init/initMetaServer', params, 'DELETE'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/init/initMetaServer', params, swrOptions, {
    method: 'DELETE',
  });
}

export const init = undefined;

export const url = '/init/initMetaServer';

export async function request(params = {}) {
  return Request({
    url: getUrl('/init/initMetaServer', params, 'DELETE'),
    params,
    method: 'delete',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'DELETE',
      url: getUrl('/init/initMetaServer', params, 'DELETE'),
      params,
      init,
    };
  };
}
