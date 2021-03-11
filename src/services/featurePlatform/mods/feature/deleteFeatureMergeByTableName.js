/**
 * @description 根据表名删除特征表合并数据
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** tableName */
  tableName;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/feature/deleteFeatureMergeByTableName', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/feature/deleteFeatureMergeByTableName', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/feature/deleteFeatureMergeByTableName',
    params,
    swrOptions,
  );
}

export const init = new defs.featurePlatform.Result();

export const url = '/feature/deleteFeatureMergeByTableName';

export async function request(params = {}) {
  return Request({
    url: getUrl('/feature/deleteFeatureMergeByTableName', params, 'GET'),
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
      url: getUrl('/feature/deleteFeatureMergeByTableName', params, 'GET'),
      params,
      init,
    };
  };
}
