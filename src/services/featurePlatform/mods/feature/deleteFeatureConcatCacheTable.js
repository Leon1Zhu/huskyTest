/**
 * @description 删除驱动表和特征拼接之后的表
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

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/feature/deleteFeatureConcatCacheTable', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/feature/deleteFeatureConcatCacheTable', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/feature/deleteFeatureConcatCacheTable',
    params,
    swrOptions,
  );
}

export const init = false;

export const url = '/feature/deleteFeatureConcatCacheTable';

export async function request(params = {}) {
  return Request({
    url: getUrl('/feature/deleteFeatureConcatCacheTable', params, 'GET'),
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
      url: getUrl('/feature/deleteFeatureConcatCacheTable', params, 'GET'),
      params,
      init,
    };
  };
}
