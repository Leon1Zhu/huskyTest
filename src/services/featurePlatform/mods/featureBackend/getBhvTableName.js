/**
 * @description 获取行为表名
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** bhvId */
  bhvId;
  /** fieldNames */
  fieldNames;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/featurePlatform/getBhvTableName.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/featurePlatform/getBhvTableName.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/featurePlatform/getBhvTableName.json',
    params,
    swrOptions,
  );
}

export const init = new defs.featurePlatform.Result();

export const url = '/featurePlatform/getBhvTableName.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/featurePlatform/getBhvTableName.json', params, 'GET'),
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
      url: getUrl('/featurePlatform/getBhvTableName.json', params, 'GET'),
      params,
      init,
    };
  };
}
