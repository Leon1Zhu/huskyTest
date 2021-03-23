/**
 * @description 填充logicalMapping
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** featureId */
  featureId;
}

export const method = 'PATCH';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/feature/produce/fillLogicalMapping', params, 'PATCH'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/feature/produce/fillLogicalMapping', params, 'PATCH'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/feature/produce/fillLogicalMapping',
    params,
    swrOptions,
    { method: 'PATCH' },
  );
}

export const init = false;

export const url = '/feature/produce/fillLogicalMapping';

export async function request(params = {}) {
  return Request({
    url: getUrl('/feature/produce/fillLogicalMapping', params, 'PATCH'),
    params,
    method: 'patch',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'PATCH',
      url: getUrl('/feature/produce/fillLogicalMapping', params, 'PATCH'),
      params,
      init,
    };
  };
}
