/**
 * @description 标签组查询服务配置详情
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** code */
  code;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/service/getLabelPublishTaskMeta.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/service/getLabelPublishTaskMeta.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/service/getLabelPublishTaskMeta.json',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/service/getLabelPublishTaskMeta.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/service/getLabelPublishTaskMeta.json', params, 'GET'),
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
      url: getUrl('/service/getLabelPublishTaskMeta.json', params, 'GET'),
      params,
      init,
    };
  };
}
