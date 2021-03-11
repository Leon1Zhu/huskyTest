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

export const method = 'PUT';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/one-service/hbasetable/deleteTable.json', params, 'PUT'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/one-service/hbasetable/deleteTable.json', params, 'PUT'),
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
    { method: 'PUT' },
  );
}

export const init = new defs.oneService.ResultObject();

export const url = '/one-service/hbasetable/deleteTable.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/one-service/hbasetable/deleteTable.json', params, 'PUT'),
    params,
    method: 'put',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'PUT',
      url: getUrl('/one-service/hbasetable/deleteTable.json', params, 'PUT'),
      params,
      init,
    };
  };
}
