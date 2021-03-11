/**
 * @description 设置cookie 信息，maxAge 为过期时间，单位为秒
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** key */
  key;
  /** maxAge */
  maxAge;
  /** value */
  value;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/dev/cookie/setCookie.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/dev/cookie/setCookie.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/dev/cookie/setCookie.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/dev/cookie/setCookie.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/dev/cookie/setCookie.json', params, 'GET'),
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
      url: getUrl('/dev/cookie/setCookie.json', params, 'GET'),
      params,
      init,
    };
  };
}
