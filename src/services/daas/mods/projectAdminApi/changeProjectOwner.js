/**
 * @description changeProjectOwner
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** owner */
  owner;
  /** projectName */
  projectName;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/project/changeProjectOwner.json', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/project/changeProjectOwner.json', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/api/project/changeProjectOwner.json',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/api/project/changeProjectOwner.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/api/project/changeProjectOwner.json', params, 'POST'),
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
      url: getUrl('/api/project/changeProjectOwner.json', params, 'POST'),
      params,
      init,
    };
  };
}
