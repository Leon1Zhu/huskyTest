/**
 * @description 根据项目id获取特征列表
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** projectId */
  projectId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/featurePlatform/listFeatureByProjectId.json',
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
      '/featurePlatform/listFeatureByProjectId.json',
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
    '/featurePlatform/listFeatureByProjectId.json',
    params,
    swrOptions,
  );
}

export const init = [];

export const url = '/featurePlatform/listFeatureByProjectId.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/featurePlatform/listFeatureByProjectId.json', params, 'GET'),
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
        '/featurePlatform/listFeatureByProjectId.json',
        params,
        'GET',
      ),
      params,
      init,
    };
  };
}
