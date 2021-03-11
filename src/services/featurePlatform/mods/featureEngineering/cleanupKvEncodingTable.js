/**
 * @description 清除kv编码表
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** uniqueKey */
  uniqueKey;
}

export const method = 'DELETE';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/feature/engineering/kv-encoding-table', params, 'DELETE'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/feature/engineering/kv-encoding-table', params, 'DELETE'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/feature/engineering/kv-encoding-table',
    params,
    swrOptions,
    { method: 'DELETE' },
  );
}

export const init = new defs.featurePlatform.Result();

export const url = '/feature/engineering/kv-encoding-table';

export async function request(params = {}) {
  return Request({
    url: getUrl('/feature/engineering/kv-encoding-table', params, 'DELETE'),
    params,
    method: 'delete',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'DELETE',
      url: getUrl('/feature/engineering/kv-encoding-table', params, 'DELETE'),
      params,
      init,
    };
  };
}
