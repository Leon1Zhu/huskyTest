/**
 * @description 特征copy
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
  /** projectId */
  projectId;
  /** suffix */
  suffix;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/feature/produce/copyFeature', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/feature/produce/copyFeature', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/feature/produce/copyFeature', params, swrOptions);
}

export const init = new defs.featurePlatform.Result();

export const url = '/feature/produce/copyFeature';

export async function request(params = {}) {
  return Request({
    url: getUrl('/feature/produce/copyFeature', params, 'GET'),
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
      url: getUrl('/feature/produce/copyFeature', params, 'GET'),
      params,
      init,
    };
  };
}
