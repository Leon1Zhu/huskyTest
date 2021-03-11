/**
      * @description 获取数据集分区条件
返回分区条件
      */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** bizdateM */
  bizdateM;
  /** bizdateN */
  bizdateN;
  /** id */
  id;
  /** partitionType */
  partitionType;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/v2/experiment/dataset/condition', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/v2/experiment/dataset/condition', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/v2/experiment/dataset/condition',
    params,
    swrOptions,
  );
}

export const init = '';

export const url = '/autodm/v2/experiment/dataset/condition';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/v2/experiment/dataset/condition', params, 'GET'),
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
      url: getUrl('/autodm/v2/experiment/dataset/condition', params, 'GET'),
      params,
      init,
    };
  };
}
