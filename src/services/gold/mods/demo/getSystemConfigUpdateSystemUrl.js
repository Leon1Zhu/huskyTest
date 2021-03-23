/**
 * @description 修改系统的链接及描述链接
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** docUrl */
  docUrl;
  /** id */
  id;
  /** systemUrl */
  systemUrl;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/crowdlab/systemConfig/updateSystemUrl', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/crowdlab/systemConfig/updateSystemUrl', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/crowdlab/systemConfig/updateSystemUrl',
    params,
    swrOptions,
  );
}

export const init = new defs.gold.ResultVO();

export const url = '/crowdlab/systemConfig/updateSystemUrl';

export async function request(params = {}) {
  return Request({
    url: getUrl('/crowdlab/systemConfig/updateSystemUrl', params, 'GET'),
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
      url: getUrl('/crowdlab/systemConfig/updateSystemUrl', params, 'GET'),
      params,
      init,
    };
  };
}
