/**
 * @description 特征列表页接口for用户视角
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** authStatus */
  authStatus;
  /** categoryIds */
  categoryIds;
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
  /** queryPublic */
  queryPublic;
  /** queryType */
  queryType;
  /** searchWord */
  searchWord;
  /** userId */
  userId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/featurePlatform/listFeaturesV2', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/featurePlatform/listFeaturesV2', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/featurePlatform/listFeaturesV2',
    params,
    swrOptions,
  );
}

export const init = new defs.featurePlatform.FeatureDataDTO();

export const url = '/featurePlatform/listFeaturesV2';

export async function request(params = {}) {
  return Request({
    url: getUrl('/featurePlatform/listFeaturesV2', params, 'GET'),
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
      url: getUrl('/featurePlatform/listFeaturesV2', params, 'GET'),
      params,
      init,
    };
  };
}
