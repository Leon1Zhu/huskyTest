/**
 * @description syncTrialsByModelName
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** modelName */
  modelName;
  /** studyName */
  studyName;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/api/study/syncTrialsByModelName', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/api/study/syncTrialsByModelName', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/autodm/api/study/syncTrialsByModelName',
    params,
    swrOptions,
  );
}

export const init = new defs.autodm.ResultObject();

export const url = '/autodm/api/study/syncTrialsByModelName';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/api/study/syncTrialsByModelName', params, 'GET'),
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
      url: getUrl('/autodm/api/study/syncTrialsByModelName', params, 'GET'),
      params,
      init,
    };
  };
}
