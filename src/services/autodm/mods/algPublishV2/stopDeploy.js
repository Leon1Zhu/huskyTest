/**
      * @description 数据停止调度，停止
数据停止调度，停止操作
      */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 部署ID */
  deployId;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/v2/experiment/deploy/stop', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/v2/experiment/deploy/stop', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/v2/experiment/deploy/stop',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = false;

export const url = '/autodm/v2/experiment/deploy/stop';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/v2/experiment/deploy/stop', params, 'POST'),
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
      url: getUrl('/autodm/v2/experiment/deploy/stop', params, 'POST'),
      params,
      init,
    };
  };
}
