/**
 * @description searchLogicTableList
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** keyword */
  keyword;
  /** order */
  order;
  /** orderBy */
  orderBy;
  /** page */
  page;
  /** pageSize */
  pageSize;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/one-service/logicTable/search.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/one-service/logicTable/search.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/one-service/logicTable/search.json',
    params,
    swrOptions,
  );
}

export const init = new defs.oneService.PaginatedResult();

export const url = '/one-service/logicTable/search.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/one-service/logicTable/search.json', params, 'GET'),
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
      url: getUrl('/one-service/logicTable/search.json', params, 'GET'),
      params,
      init,
    };
  };
}
