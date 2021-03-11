/**
 * @description 将模板关联到服务中
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** id */
  id;
  /** serviceIds */
  serviceIds;
}

export const method = 'OPTIONS';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/dev/form/config/connectTemplate2Service.json',
      params,
      'OPTIONS',
    ),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey(
      '/dev/form/config/connectTemplate2Service.json',
      params,
      'OPTIONS',
    ),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/dev/form/config/connectTemplate2Service.json',
    params,
    swrOptions,
    { method: 'OPTIONS' },
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/dev/form/config/connectTemplate2Service.json';

export async function request(params = {}) {
  return Request({
    url: getUrl(
      '/dev/form/config/connectTemplate2Service.json',
      params,
      'OPTIONS',
    ),
    params,
    method: 'options',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'OPTIONS',
      url: getUrl(
        '/dev/form/config/connectTemplate2Service.json',
        params,
        'OPTIONS',
      ),
      params,
      init,
    };
  };
}
