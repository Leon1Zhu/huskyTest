/**
 * @description 获取新客识别id类型
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** app */
  app;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/type/data/getMobileClientIdTypes', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/type/data/getMobileClientIdTypes', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/type/data/getMobileClientIdTypes',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/type/data/getMobileClientIdTypes';

export async function request(params = {}) {
  return Request({
    url: getUrl('/type/data/getMobileClientIdTypes', params, 'GET'),
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
      url: getUrl('/type/data/getMobileClientIdTypes', params, 'GET'),
      params,
      init,
    };
  };
}
