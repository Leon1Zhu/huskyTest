/**
 * @description gmvKpiSave
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** appIds */
  appIds;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/crowdlab/api/v1/gtc/task/saveKpi', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/crowdlab/api/v1/gtc/task/saveKpi', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/crowdlab/api/v1/gtc/task/saveKpi',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/crowdlab/api/v1/gtc/task/saveKpi';

export async function request(params = {}) {
  return Request({
    url: getUrl('/crowdlab/api/v1/gtc/task/saveKpi', params, 'POST'),
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
      url: getUrl('/crowdlab/api/v1/gtc/task/saveKpi', params, 'POST'),
      params,
      init,
    };
  };
}
