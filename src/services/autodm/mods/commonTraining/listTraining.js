/**
      * @description 获取通用训练配置列表，通用流程要弱化样本的概念，都是通过配置
返回通用训练配置列表
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
  /** order */
  order;
  /** orderBy */
  orderBy;
  /** page */
  page;
  /** pageSize */
  pageSize;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/common_produce/trainings', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/common_produce/trainings', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/common_produce/trainings',
    params,
    swrOptions,
  );
}

export const init = new defs.autodm.ListData();

export const url = '/autodm/common_produce/trainings';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/common_produce/trainings', params, 'GET'),
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
      url: getUrl('/autodm/common_produce/trainings', params, 'GET'),
      params,
      init,
    };
  };
}
