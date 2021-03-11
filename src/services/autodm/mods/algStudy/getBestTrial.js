/**
      * @description 获取模型最优迭代
返回最优迭代结果
      */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 模型名称/studyName */
  model;
  /** 策略 */
  strategy;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/api/trial/bestTrial', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/api/trial/bestTrial', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/autodm/api/trial/bestTrial', params, swrOptions);
}

export const init = new defs.autodm.ResultObject();

export const url = '/autodm/api/trial/bestTrial';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/api/trial/bestTrial', params, 'GET'),
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
      url: getUrl('/autodm/api/trial/bestTrial', params, 'GET'),
      params,
      init,
    };
  };
}
