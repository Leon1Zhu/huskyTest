/**
 * @description deleteHbaseTable
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** id */
  id;
}

export const method = 'HEAD';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/one-service/hbasetable/deleteTable.json', params, 'HEAD'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/one-service/hbasetable/deleteTable.json', params, 'HEAD'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/one-service/hbasetable/deleteTable.json',
    params,
    swrOptions,
    { method: 'HEAD' },
  );
}

export const init = undefined;

export const url = '/one-service/hbasetable/deleteTable.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/one-service/hbasetable/deleteTable.json', params, 'HEAD'),
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
      url: getUrl('/one-service/hbasetable/deleteTable.json', params, 'HEAD'),
      params,
      init,
    };
  };
}
