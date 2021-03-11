/**
 * @description 删除质量分数据，后门用于删数据
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
    Hooks.getUrlKey('/feature/deleteFeatureQualityScore', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/feature/deleteFeatureQualityScore', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/feature/deleteFeatureQualityScore',
    params,
    swrOptions,
  );
}

export const init = new defs.featurePlatform.Result();

export const url = '/feature/deleteFeatureQualityScore';

export async function request(params = {}) {
  return Request({
    url: getUrl('/feature/deleteFeatureQualityScore', params, 'GET'),
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
      url: getUrl('/feature/deleteFeatureQualityScore', params, 'GET'),
      params,
      init,
    };
  };
}
