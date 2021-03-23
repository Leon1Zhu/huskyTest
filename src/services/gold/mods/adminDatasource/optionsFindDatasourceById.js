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

export const method = 'OPTIONS';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/api/admin/datasource/findDatasourceById',
      params,
      'OPTIONS',
    ),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey(
      '/api/admin/datasource/findDatasourceById',
      params,
      'OPTIONS',
    ),
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
    { method: 'OPTIONS' },
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/api/admin/datasource/findDatasourceById';

export async function request(params = {}) {
  return Request({
    url: getUrl('/api/admin/datasource/findDatasourceById', params, 'OPTIONS'),
    params,
    method: 'options',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'OPTIONS',
      url: getUrl(
        '/api/admin/datasource/findDatasourceById',
        params,
        'OPTIONS',
      ),
      params,
      init,
    };
  };
}
