/**
 * @description 已发布数据同步到人群
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
    Hooks.getUrlKey('/autodm/common_produce/experiment/crowd', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/common_produce/experiment/crowd', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/common_produce/experiment/crowd',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = new defs.autodm.ResultObject();

export const url = '/autodm/common_produce/experiment/crowd';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/autodm/common_produce/experiment/crowd', bodyParams, 'POST'),
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
        '/autodm/common_produce/experiment/crowd',
        bodyParams,
        'POST',
      ),
      params: bodyParams,
      init,
    };
  };
}
