/**
 * @description 新建标签（版本）
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/labelProduce/createLabelVersion.json', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/labelProduce/createLabelVersion.json', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/labelProduce/createLabelVersion.json',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/labelProduce/createLabelVersion.json';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/labelProduce/createLabelVersion.json', bodyParams, 'POST'),
    params: bodyParams,
    method: 'post:JSON',
  });
}

export function createFetchAction(types, stateKey) {
  return (bodyParams = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'POST:JSON',
      url: getUrl('/labelProduce/createLabelVersion.json', bodyParams, 'POST'),
      params: bodyParams,
      init,
    };
  };
}
