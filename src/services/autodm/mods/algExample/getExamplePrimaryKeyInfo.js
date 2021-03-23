/**
      * @description 查询算法样本主键配置
查询算法样本主键配置,用于特征做筛选
      */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 标签ID */
  labelId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/example/getExamplePrimaryKeyInfo', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/example/getExamplePrimaryKeyInfo', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/example/getExamplePrimaryKeyInfo',
    params,
    swrOptions,
  );
}

export const init = [];

export const url = '/autodm/example/getExamplePrimaryKeyInfo';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/example/getExamplePrimaryKeyInfo', params, 'GET'),
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
      url: getUrl('/autodm/example/getExamplePrimaryKeyInfo', params, 'GET'),
      params,
      init,
    };
  };
}
