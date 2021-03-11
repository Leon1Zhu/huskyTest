/**
 * @description 工作台行为列表
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 标签申请状态。传none代表无权限 */
  authStatus;
  /** cate1Id */
  cate1Id;
  /** cate2Id */
  cate2Id;
  /** cate3Id */
  cate3Id;
  /** 类目ids，如[1,2,'3,4,5',null] */
  categoryIds;
  /** 实体类型 */
  entityType;
  /** keyword */
  keyword;
  /** order */
  order;
  /** orderBy */
  orderBy;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** 使用平台：dtmarket、dataBank */
  platform;
  /** 行为归属项目id */
  projectId;
  /** 查询范围 */
  scope;
  /** 上架状态 */
  status;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/bhv/listMyBhv.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/bhv/listMyBhv.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/bhv/listMyBhv.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/bhv/listMyBhv.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/bhv/listMyBhv.json', params, 'GET'),
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
      url: getUrl('/bhv/listMyBhv.json', params, 'GET'),
      params,
      init,
    };
  };
}
