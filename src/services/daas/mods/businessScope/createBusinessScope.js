/**
 * @description 新建业务空间
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
    Hooks.getUrlKey('/businessscope/createBusinessScope.json', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/businessscope/createBusinessScope.json', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/businessscope/createBusinessScope.json',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/businessscope/createBusinessScope.json';

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/businessscope/createBusinessScope.json', bodyParams, 'POST'),
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
      url: getUrl(
        '/businessscope/createBusinessScope.json',
        bodyParams,
        'POST',
      ),
      params: bodyParams,
      init,
    };
  };
}
