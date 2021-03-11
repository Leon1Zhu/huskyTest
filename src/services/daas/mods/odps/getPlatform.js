/**
 * @description 根据表owner所在BU，判断是哪个域。ali/ant
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** odpsTable */
  odpsTable;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/storage/odps/getPlatform', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/storage/odps/getPlatform', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/storage/odps/getPlatform', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/storage/odps/getPlatform';

export async function request(params = {}) {
  return Request({
    url: getUrl('/storage/odps/getPlatform', params, 'GET'),
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
      url: getUrl('/storage/odps/getPlatform', params, 'GET'),
      params,
      init,
    };
  };
}
