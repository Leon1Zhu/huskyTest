/**
 * @description 特征分区检测，for人群优选场景
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
    Hooks.getUrlKey(
      '/feature/engineering/checkFeaturePartition',
      params,
      'POST',
    ),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey(
      '/feature/engineering/checkFeaturePartition',
      params,
      'POST',
    ),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/feature/engineering/checkFeaturePartition',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = undefined;

export const url = '/feature/engineering/checkFeaturePartition';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl(
      '/feature/engineering/checkFeaturePartition',
      bodyParams,
      'POST',
    ),
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
      url: getUrl(
        '/feature/engineering/checkFeaturePartition',
        bodyParams,
        'POST',
      ),
      params: bodyParams,
      init,
    };
  };
}
