/**
      * @description 回写实验训练的的结果信息
返回实验训练结果信息
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
    Hooks.getUrlKey('/autodm/api/task/trainResultInfos', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/api/task/trainResultInfos', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/api/task/trainResultInfos',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = new defs.autodm.AlgTrial();

export const url = '/autodm/api/task/trainResultInfos';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/autodm/api/task/trainResultInfos', bodyParams, 'POST'),
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
      url: getUrl('/autodm/api/task/trainResultInfos', bodyParams, 'POST'),
      params: bodyParams,
      init,
    };
  };
}
