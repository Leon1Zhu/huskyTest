/**
 * @description testProduceParam
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/testProduceParam.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/testProduceParam.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/testProduceParam.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/testProduceParam.json';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/testProduceParam.json', bodyParams, 'GET'),
    params: bodyParams,
    method: 'get:JSON',
  });
}

export function createFetchAction(types, stateKey) {
  return (bodyParams = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'GET:JSON',
      url: getUrl('/testProduceParam.json', bodyParams, 'GET'),
      params: bodyParams,
      init,
    };
  };
}
