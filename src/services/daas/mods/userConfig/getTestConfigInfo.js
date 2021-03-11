/**
 * @description 查询用户测试智能服务额外配置
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/admin/user/config/getTestConfigInfo', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/admin/user/config/getTestConfigInfo', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/admin/user/config/getTestConfigInfo',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/admin/user/config/getTestConfigInfo';

export async function request(params = {}) {
  return Request({
    url: getUrl('/admin/user/config/getTestConfigInfo', params, 'GET'),
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
      url: getUrl('/admin/user/config/getTestConfigInfo', params, 'GET'),
      params,
      init,
    };
  };
}
