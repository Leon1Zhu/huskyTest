/**
 * @description applyCreateDatabase
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** databaseType */
  databaseType;
  /** password */
  password;
  /** remark */
  remark;
  /** url */
  url;
  /** username */
  username;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/one-service/workflow/applyCreateDatabase.json',
      params,
      'POST',
    ),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey(
      '/one-service/workflow/applyCreateDatabase.json',
      params,
      'POST',
    ),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/one-service/workflow/applyCreateDatabase.json',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = undefined;

export const url = '/one-service/workflow/applyCreateDatabase.json';

export async function request(params = {}) {
  return Request({
    url: getUrl(
      '/one-service/workflow/applyCreateDatabase.json',
      params,
      'POST',
    ),
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
      url: getUrl(
        '/one-service/workflow/applyCreateDatabase.json',
        params,
        'POST',
      ),
      params,
      init,
    };
  };
}
