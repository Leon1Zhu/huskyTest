/**
 * @description findDatasourceById
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** datasourceId */
  datasourceId;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/admin/datasource/findDatasourceById', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/admin/datasource/findDatasourceById', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/api/admin/datasource/findDatasourceById',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/api/admin/datasource/findDatasourceById';

export async function request(params = {}) {
  return Request({
    url: getUrl('/api/admin/datasource/findDatasourceById', params, 'POST'),
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
      url: getUrl('/api/admin/datasource/findDatasourceById', params, 'POST'),
      params,
      init,
    };
  };
}
