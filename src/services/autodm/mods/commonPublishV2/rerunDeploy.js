/**
      * @description 以失败的任务为模板，重跑生产任务
返回任务ID
      */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 失败任务ID */
  taskId;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/common_produce/rerunDeploy', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/common_produce/rerunDeploy', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/common_produce/rerunDeploy',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = undefined;

export const url = '/autodm/common_produce/rerunDeploy';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/common_produce/rerunDeploy', params, 'POST'),
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
      url: getUrl('/autodm/common_produce/rerunDeploy', params, 'POST'),
      params,
      init,
    };
  };
}
