/**
 * @description 批量根据特征id查询特征基本信息
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
    Hooks.getUrlKey('/feature/listBaseFeatureById', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/feature/listBaseFeatureById', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/feature/listBaseFeatureById', params, swrOptions);
}

export const init = new defs.featurePlatform.Result();

export const url = '/feature/listBaseFeatureById';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/feature/listBaseFeatureById', bodyParams, 'GET'),
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
      url: getUrl('/feature/listBaseFeatureById', bodyParams, 'GET'),
      params: bodyParams,
      init,
    };
  };
}
