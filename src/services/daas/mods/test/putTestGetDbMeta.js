/**
 * @description getMetaInfo
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** dbName */
  dbName;
}

export const method = 'PUT';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/test/getDbMeta.json', params, 'PUT'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/test/getDbMeta.json', params, 'PUT'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/test/getDbMeta.json', params, swrOptions, {
    method: 'PUT',
  });
}

export const init = new defs.daas.MetaApp();

export const url = '/test/getDbMeta.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/test/getDbMeta.json', params, 'PUT'),
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
      url: getUrl('/test/getDbMeta.json', params, 'PUT'),
      params,
      init,
    };
  };
}