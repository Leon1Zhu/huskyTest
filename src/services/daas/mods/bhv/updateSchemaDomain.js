/**
 * @description 修改标准字段业务域
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** addDomains */
  addDomains;
  /** allDomains */
  allDomains;
  /** schemaId */
  schemaId;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/bhv/updateSchemaDomain.json', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/bhv/updateSchemaDomain.json', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/bhv/updateSchemaDomain.json', params, swrOptions, {
    method: 'POST',
  });
}

export const init = new defs.daas.ResultObject();

export const url = '/bhv/updateSchemaDomain.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/bhv/updateSchemaDomain.json', params, 'POST'),
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
      url: getUrl('/bhv/updateSchemaDomain.json', params, 'POST'),
      params,
      init,
    };
  };
}
