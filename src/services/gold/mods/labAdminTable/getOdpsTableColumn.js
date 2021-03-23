/**
 * @description 校验表权限及获取表列
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** tableName */
  tableName;
  /** versionId */
  versionId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/crowdlab/api/admin/table/getOdpsTableColumn',
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
      '/crowdlab/api/admin/table/getOdpsTableColumn',
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
    '/crowdlab/api/admin/table/getOdpsTableColumn',
    params,
    swrOptions,
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/crowdlab/api/admin/table/getOdpsTableColumn';

export async function request(params = {}) {
  return Request({
    url: getUrl('/crowdlab/api/admin/table/getOdpsTableColumn', params, 'GET'),
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
        '/crowdlab/api/admin/table/getOdpsTableColumn',
        params,
        'GET',
      ),
      params,
      init,
    };
  };
}
