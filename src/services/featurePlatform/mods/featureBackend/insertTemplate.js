/**
 * @description 新增模板
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
  /** name */
  name;
  /** params */
  params;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/featurePlatform/insertTemplate.json', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/featurePlatform/insertTemplate.json', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/featurePlatform/insertTemplate.json',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = false;

export const url = '/featurePlatform/insertTemplate.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/featurePlatform/insertTemplate.json', params, 'POST'),
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
      url: getUrl('/featurePlatform/insertTemplate.json', params, 'POST'),
      params,
      init,
    };
  };
}
