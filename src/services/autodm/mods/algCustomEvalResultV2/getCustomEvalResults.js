/**
      * @description 获取自定义评估结果列表
返回自定义评估结果列表
      */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** evalGroup */
  evalGroup;
  /** evalType */
  evalType;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/autodm/api/v2/experiment/custom_eval_results',
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
      '/autodm/api/v2/experiment/custom_eval_results',
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
    '/autodm/api/v2/experiment/custom_eval_results',
    params,
    swrOptions,
  );
}

export const init = [];

export const url = '/autodm/api/v2/experiment/custom_eval_results';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/api/v2/experiment/custom_eval_results', params, 'GET'),
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
        '/autodm/api/v2/experiment/custom_eval_results',
        params,
        'GET',
      ),
      params,
      init,
    };
  };
}
