/**
 * @description 服务权限申请
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** creator */
  creator;
  /** dailyRequest */
  dailyRequest;
  /** dailyUv */
  dailyUv;
  /** description */
  description;
  /** executeMode */
  executeMode;
  /** loss */
  loss;
  /** peakOs */
  peakOs;
  /** projectId */
  projectId;
  /** responseTime */
  responseTime;
  /** serviceId */
  serviceId;
  /** serviceType */
  serviceType;
  /** traffic */
  traffic;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/service/applyService.json', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/service/applyService.json', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/service/applyService.json', params, swrOptions, {
    method: 'POST',
  });
}

export const init = new defs.daas.ResultObject();

export const url = '/service/applyService.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/service/applyService.json', params, 'POST'),
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
      url: getUrl('/service/applyService.json', params, 'POST'),
      params,
      init,
    };
  };
}
