/**
 * @description 批量根据特征id查询特征详细信息
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/feature/listFeatureDetailById', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/feature/listFeatureDetailById', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/feature/listFeatureDetailById', params, swrOptions);
}

export const init = [];

export const url = '/feature/listFeatureDetailById';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/feature/listFeatureDetailById', bodyParams, 'GET'),
    params: bodyParams,
    method: 'get:JSON',
  });
}

export function createFetchAction(types, stateKey) {
  return (bodyParams = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'GET:JSON',
      url: getUrl('/feature/listFeatureDetailById', bodyParams, 'GET'),
      params: bodyParams,
      init,
    };
  };
}
