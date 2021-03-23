/**
      * @description 获取人群优选潜客生产维度配置
返回获取人群优选潜客生产维度配置
      */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** domain */
  domain;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/autodm/common_produce/potential_crowds/configByDomain',
      params,
      'GET',
    ),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey(
      '/autodm/common_produce/potential_crowds/configByDomain',
      params,
      'GET',
    ),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/common_produce/potential_crowds/configByDomain',
    params,
    swrOptions,
  );
}

export const init = new defs.autodm.PotentialCrowdConfig();

export const url = '/autodm/common_produce/potential_crowds/configByDomain';

export async function request(params = {}) {
  return Request({
    url: getUrl(
      '/autodm/common_produce/potential_crowds/configByDomain',
      params,
      'GET',
    ),
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
      url: getUrl(
        '/autodm/common_produce/potential_crowds/configByDomain',
        params,
        'GET',
      ),
      params,
      init,
    };
  };
}
