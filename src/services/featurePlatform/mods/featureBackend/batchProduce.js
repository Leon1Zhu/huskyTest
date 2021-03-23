/**
 * @description 批量提交上架
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/featurePlatform/batchProduce.json', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/featurePlatform/batchProduce.json', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/featurePlatform/batchProduce.json',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = false;

export const url = '/featurePlatform/batchProduce.json';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/featurePlatform/batchProduce.json', bodyParams, 'POST'),
    params: bodyParams,
    method: 'post:JSON',
  });
}

export function createFetchAction(types, stateKey) {
  return (bodyParams = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'POST:JSON',
      url: getUrl('/featurePlatform/batchProduce.json', bodyParams, 'POST'),
      params: bodyParams,
      init,
    };
  };
}
