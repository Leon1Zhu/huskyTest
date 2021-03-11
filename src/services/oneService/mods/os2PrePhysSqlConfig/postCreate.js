/**
 * @description create
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** dbId */
  dbId;
  /** des */
  des;
  /** en */
  en;
  /** id */
  id;
  /** origin */
  origin;
  /** ownerId */
  ownerId;
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
    Hooks.getUrlKey('/one-service/phys-sql-config/create.json', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/one-service/phys-sql-config/create.json', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/one-service/phys-sql-config/create.json',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = new defs.oneService.ResultObject();

export const url = '/one-service/phys-sql-config/create.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/one-service/phys-sql-config/create.json', params, 'POST'),
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
      url: getUrl('/one-service/phys-sql-config/create.json', params, 'POST'),
      params,
      init,
    };
  };
}
