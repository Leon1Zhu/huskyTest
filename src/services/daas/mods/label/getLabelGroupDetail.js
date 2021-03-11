/**
 * @description 查询标签组信息
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** isAdded */
  isAdded;
  /** labelId */
  labelId;
  /** projectId */
  projectId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/label/getLabelGroupDetail.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/label/getLabelGroupDetail.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/label/getLabelGroupDetail.json',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/label/getLabelGroupDetail.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/label/getLabelGroupDetail.json', params, 'GET'),
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
      url: getUrl('/label/getLabelGroupDetail.json', params, 'GET'),
      params,
      init,
    };
  };
}
