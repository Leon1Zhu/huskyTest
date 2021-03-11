/**
 * @description 已上架标签下架标签
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** applyReason */
  applyReason;
  /** labelId */
  labelId;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/label/offlineLabel.json', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/label/offlineLabel.json', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/label/offlineLabel.json', params, swrOptions, {
    method: 'POST',
  });
}

export const init = new defs.daas.ResultObject();

export const url = '/label/offlineLabel.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/label/offlineLabel.json', params, 'POST'),
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
      url: getUrl('/label/offlineLabel.json', params, 'POST'),
      params,
      init,
    };
  };
}
