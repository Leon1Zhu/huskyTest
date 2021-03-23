/**
 * @description 根据域、维度、取值类型查询数据维度id
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** dim */
  dim;
  /** domain */
  domain;
  /** valueType */
  valueType;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/autodm/common_produce/getDataSetIdByDomainAndDim',
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
      '/autodm/common_produce/getDataSetIdByDomainAndDim',
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
    '/autodm/common_produce/getDataSetIdByDomainAndDim',
    params,
    swrOptions,
  );
}

export const init = undefined;

export const url = '/autodm/common_produce/getDataSetIdByDomainAndDim';

export async function request(params = {}) {
  return Request({
    url: getUrl(
      '/autodm/common_produce/getDataSetIdByDomainAndDim',
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
        '/autodm/common_produce/getDataSetIdByDomainAndDim',
        params,
        'GET',
      ),
      params,
      init,
    };
  };
}
