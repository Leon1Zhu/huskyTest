/**
 * @description 增强特征注册
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/feature/produce/featureEnhanceAdd', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/feature/produce/featureEnhanceAdd', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/feature/produce/featureEnhanceAdd',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = new defs.featurePlatform.AddEnhanceFeatureResult();

export const url = '/feature/produce/featureEnhanceAdd';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/feature/produce/featureEnhanceAdd', bodyParams, 'POST'),
    params: bodyParams,
    method: 'post:JSON',
  });
}

export function createFetchAction(types, stateKey) {
  return (bodyParams = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'POST:JSON',
      url: getUrl('/feature/produce/featureEnhanceAdd', bodyParams, 'POST'),
      params: bodyParams,
      init,
    };
  };
}
