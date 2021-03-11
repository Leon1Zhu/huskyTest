/**
 * @description 提供给算法平台根据5级分类id查询特征信息V2
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** categoryIds */
  categoryIds;
  /** categoryType */
  categoryType;
  /** filterQualityScore */
  filterQualityScore;
  /** idType */
  idType;
  /** order */
  order;
  /** orderBy */
  orderBy;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** projectId */
  projectId;
  /** searchWord */
  searchWord;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/feature/listAlgorithmFeatureByCategoryIdV2',
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
      '/feature/listAlgorithmFeatureByCategoryIdV2',
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
    '/feature/listAlgorithmFeatureByCategoryIdV2',
    params,
    swrOptions,
  );
}

export const init = new defs.featurePlatform.Result();

export const url = '/feature/listAlgorithmFeatureByCategoryIdV2';

export async function request(params = {}) {
  return Request({
    url: getUrl('/feature/listAlgorithmFeatureByCategoryIdV2', params, 'GET'),
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
      url: getUrl('/feature/listAlgorithmFeatureByCategoryIdV2', params, 'GET'),
      params,
      init,
    };
  };
}
