/**
 * @description updateManualFlowName
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** flowName */
  flowName;
  /** id */
  id;
}

export const method = 'PATCH';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/autodm/api/internal/labelProduceInfo/ManualFlowName',
      params,
      'PATCH',
    ),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey(
      '/autodm/api/internal/labelProduceInfo/ManualFlowName',
      params,
      'PATCH',
    ),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/api/internal/labelProduceInfo/ManualFlowName',
    params,
    swrOptions,
    { method: 'PATCH' },
  );
}

export const init = false;

export const url = '/autodm/api/internal/labelProduceInfo/ManualFlowName';

export async function request(params = {}) {
  return Request({
    url: getUrl(
      '/autodm/api/internal/labelProduceInfo/ManualFlowName',
      params,
      'PATCH',
    ),
    params,
    method: 'patch',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'PATCH',
      url: getUrl(
        '/autodm/api/internal/labelProduceInfo/ManualFlowName',
        params,
        'PATCH',
      ),
      params,
      init,
    };
  };
}
