/**
 * @description 查询项目配置
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** projectId */
  projectId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/project/config/listApp4LabelGroupService', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/project/config/listApp4LabelGroupService', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/project/config/listApp4LabelGroupService',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/project/config/listApp4LabelGroupService';

export async function request(params = {}) {
  return Request({
    url: getUrl('/project/config/listApp4LabelGroupService', params, 'GET'),
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
      url: getUrl('/project/config/listApp4LabelGroupService', params, 'GET'),
      params,
      init,
    };
  };
}
