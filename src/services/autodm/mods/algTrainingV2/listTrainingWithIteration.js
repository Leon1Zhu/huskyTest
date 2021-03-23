/**
      * @description 获取带迭代的训练列表
返回带迭代的训练列表
      */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** experimentId */
  experimentId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/autodm/v2/experiment/trainingsWithIteration',
      params,
      'GET',
    ),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey(
      '/autodm/v2/experiment/trainingsWithIteration',
      params,
      'GET',
    ),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/v2/experiment/trainingsWithIteration',
    params,
    swrOptions,
  );
}

export const init = [];

export const url = '/autodm/v2/experiment/trainingsWithIteration';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/v2/experiment/trainingsWithIteration', params, 'GET'),
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
      url: getUrl(
        '/autodm/v2/experiment/trainingsWithIteration',
        params,
        'GET',
      ),
      params,
      init,
    };
  };
}
