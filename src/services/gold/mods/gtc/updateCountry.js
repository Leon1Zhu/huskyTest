/**
 * @description updateCountry
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** countryId */
  countryId;
  /** countryName */
  countryName;
  /** id */
  id;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/v1/gtc/updateCountry', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/v1/gtc/updateCountry', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/api/v1/gtc/updateCountry', params, swrOptions, {
    method: 'POST',
  });
}

export const init = new defs.gold.ResultVO();

export const url = '/api/v1/gtc/updateCountry';

export async function request(params = {}) {
  return Request({
    url: getUrl('/api/v1/gtc/updateCountry', params, 'POST'),
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
      url: getUrl('/api/v1/gtc/updateCountry', params, 'POST'),
      params,
      init,
    };
  };
}
