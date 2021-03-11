/**
 * @description 停止测试用例
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** taskId */
  taskId;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/test/tasks/{taskId}/stop', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/test/tasks/{taskId}/stop', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/test/tasks/{taskId}/stop', params, swrOptions, {
    method: 'POST',
  });
}

export const init = new defs.daas.ResultObject();

export const url = '/test/tasks/{taskId}/stop';

export async function request(params = {}) {
  return Request({
    url: getUrl('/test/tasks/{taskId}/stop', params, 'POST'),
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
      url: getUrl('/test/tasks/{taskId}/stop', params, 'POST'),
      params,
      init,
    };
  };
}
