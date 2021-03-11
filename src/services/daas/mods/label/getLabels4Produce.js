/**
 * @description 资产生产列表
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 类目ids，如[1,2,'3,4,5',null] */
  categoryIds;
  /** 入参id类型，逗号分隔 */
  idTypes;
  /** 是否枚举 */
  isEnum;
  /** keyword */
  keyword;
  /** order */
  order;
  /** orderBy */
  orderBy;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** 项目id */
  projectId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/label/getLabels4Produce.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/label/getLabels4Produce.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/label/getLabels4Produce.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/label/getLabels4Produce.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/label/getLabels4Produce.json', params, 'GET'),
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
      url: getUrl('/label/getLabels4Produce.json', params, 'GET'),
      params,
      init,
    };
  };
}
