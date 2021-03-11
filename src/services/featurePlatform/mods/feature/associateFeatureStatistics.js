/**
 * @description 重新关联已创建的D2统计节点
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** id */
  id;
}

export const method = 'PUT';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/feature/associateFeatureStatistics', params, 'PUT'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/feature/associateFeatureStatistics', params, 'PUT'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/feature/associateFeatureStatistics',
    params,
    swrOptions,
    { method: 'PUT' },
  );
}

export const init = new defs.featurePlatform.Result();

export const url = '/feature/associateFeatureStatistics';

export async function request(params = {}) {
  return Request({
    url: getUrl('/feature/associateFeatureStatistics', params, 'PUT'),
    params,
    method: 'put',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'PUT',
      url: getUrl('/feature/associateFeatureStatistics', params, 'PUT'),
      params,
      init,
    };
  };
}
