/**
 * @description 根据类目ID及属性ID获取属性值列表
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** cateId */
  cateId;
  /** propertyId */
  propertyId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/dim/listCatePropertyValues', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/dim/listCatePropertyValues', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/dim/listCatePropertyValues', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/dim/listCatePropertyValues';

export async function request(params = {}) {
  return Request({
    url: getUrl('/dim/listCatePropertyValues', params, 'GET'),
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
      url: getUrl('/dim/listCatePropertyValues', params, 'GET'),
      params,
      init,
    };
  };
}
