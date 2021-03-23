/**
 * @description 根据特征id删除质量分数据，后门用于删数据
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** featureId */
  featureId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/feature/deleteFeatureQualityScoreByFeatureId',
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
      '/feature/deleteFeatureQualityScoreByFeatureId',
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
    '/feature/deleteFeatureQualityScoreByFeatureId',
    params,
    swrOptions,
  );
}

export const init = false;

export const url = '/feature/deleteFeatureQualityScoreByFeatureId';

export async function request(params = {}) {
  return Request({
    url: getUrl('/feature/deleteFeatureQualityScoreByFeatureId', params, 'GET'),
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
        '/feature/deleteFeatureQualityScoreByFeatureId',
        params,
        'GET',
      ),
      params,
      init,
    };
  };
}
