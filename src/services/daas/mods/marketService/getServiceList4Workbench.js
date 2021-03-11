/**
 * @description 获取标签可用的服务
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** endDate */
  endDate;
  /** keyword */
  keyword;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** projectId */
  projectId;
  /** serviceId */
  serviceId;
  /** serviceType */
  serviceType;
  /** startDate */
  startDate;
  /** status */
  status;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/service/getServiceList4Workbench.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/service/getServiceList4Workbench.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/service/getServiceList4Workbench.json',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/service/getServiceList4Workbench.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/service/getServiceList4Workbench.json', params, 'GET'),
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
      url: getUrl('/service/getServiceList4Workbench.json', params, 'GET'),
      params,
      init,
    };
  };
}