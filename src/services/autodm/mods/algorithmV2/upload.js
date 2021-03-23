/**
      * @description 上传算法包
返回算法配置
      */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** algoCode */
  algoCode;
  /** algoType */
  algoType;
  /** algorithmId */
  algorithmId;
  /** projectId */
  projectId;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/v2/algorithm/resource', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/v2/algorithm/resource', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/autodm/v2/algorithm/resource', params, swrOptions, {
    method: 'POST',
  });
}

export const init = '';

export const url = '/autodm/v2/algorithm/resource';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/v2/algorithm/resource', params, 'POST'),
    params,
    method: 'post',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'POST',
      url: getUrl('/autodm/v2/algorithm/resource', params, 'POST'),
      params,
      init,
    };
  };
}
