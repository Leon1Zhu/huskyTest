/**
 * @description list
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** bpmId */
  bpmId;
  /** creatorId */
  creatorId;
  /** creatorName */
  creatorName;
  /** dbId */
  dbId;
  /** dbName */
  dbName;
  /** dbType */
  dbType;
  /** en */
  en;
  /** lastOpId */
  lastOpId;
  /** lastOpName */
  lastOpName;
  /** order */
  order;
  /** orderBy */
  orderBy;
  /** ownerId */
  ownerId;
  /** ownerName */
  ownerName;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** status */
  status;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/one-service/phys-sql-config/list.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/one-service/phys-sql-config/list.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/one-service/phys-sql-config/list.json',
    params,
    swrOptions,
  );
}

export const init = undefined;

export const url = '/one-service/phys-sql-config/list.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/one-service/phys-sql-config/list.json', params, 'GET'),
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
      url: getUrl('/one-service/phys-sql-config/list.json', params, 'GET'),
      params,
      init,
    };
  };
}
