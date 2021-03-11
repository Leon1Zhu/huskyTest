/**
 * @description 检查表是否存在及有无权限，若无权限并获取对应的授权码。authType=none时只校验表是否存在
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 鉴权项目空间 */
  accountName;
  /** authType */
  authType;
  /** 鉴权账号类型 */
  checkAccountType;
  /** odpsTable */
  odpsTable;
  /** projectId */
  projectId;
  /** versionId */
  versionId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/storage/odps/checkTableAndAuth', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/storage/odps/checkTableAndAuth', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/storage/odps/checkTableAndAuth',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/storage/odps/checkTableAndAuth';

export async function request(params = {}) {
  return Request({
    url: getUrl('/storage/odps/checkTableAndAuth', params, 'GET'),
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
      url: getUrl('/storage/odps/checkTableAndAuth', params, 'GET'),
      params,
      init,
    };
  };
}
