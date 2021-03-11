/**
 * @description 校验标签权限,返回哪些需要申请，哪些可以自动授权
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** appName */
  appName;
  /** 入参ID */
  idType;
  /** 项目id */
  projectId;
  /** 标签id,逗号分隔 */
  resourceIds;
  /** 资源类型 */
  resourceType;
  /** 服务id */
  serviceId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/labelProduce/checkLabelsApplyPermission.json',
      params,
      'GET',
    ),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey(
      '/labelProduce/checkLabelsApplyPermission.json',
      params,
      'GET',
    ),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/labelProduce/checkLabelsApplyPermission.json',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/labelProduce/checkLabelsApplyPermission.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/labelProduce/checkLabelsApplyPermission.json', params, 'GET'),
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
      url: getUrl(
        '/labelProduce/checkLabelsApplyPermission.json',
        params,
        'GET',
      ),
      params,
      init,
    };
  };
}
