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

export const method = 'OPTIONS';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/init/initMetaServer', params, 'OPTIONS'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/init/initMetaServer', params, 'OPTIONS'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/init/initMetaServer', params, swrOptions, {
    method: 'OPTIONS',
  });
}

export const init = undefined;

export const url = '/init/initMetaServer';

export async function request(params = {}) {
  return Request({
    url: getUrl('/init/initMetaServer', params, 'OPTIONS'),
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
      url: getUrl('/init/initMetaServer', params, 'OPTIONS'),
      params,
      init,
    };
  };
}
