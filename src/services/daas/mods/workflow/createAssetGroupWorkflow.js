/**
 * @description 创建标签组服务workflow
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/workflow/createAssetGroupWorkflow', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/workflow/createAssetGroupWorkflow', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/workflow/createAssetGroupWorkflow',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/workflow/createAssetGroupWorkflow';

export async function request(params = {}) {
  return Request({
    url: getUrl('/workflow/createAssetGroupWorkflow', params, 'GET'),
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
      url: getUrl('/workflow/createAssetGroupWorkflow', params, 'GET'),
      params,
      init,
    };
  };
}
