/**
 * @description 策略人群列表
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** searchWord */
  searchWord;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/crowdlab/assetmarket/api/v1/crowd/strategy/list',
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
      '/crowdlab/assetmarket/api/v1/crowd/strategy/list',
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
    '/crowdlab/assetmarket/api/v1/crowd/strategy/list',
    params,
    swrOptions,
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/crowdlab/assetmarket/api/v1/crowd/strategy/list';

export async function request(params = {}) {
  return Request({
    url: getUrl(
      '/crowdlab/assetmarket/api/v1/crowd/strategy/list',
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
        '/crowdlab/assetmarket/api/v1/crowd/strategy/list',
        params,
        'GET',
      ),
      params,
      init,
    };
  };
}
