/**
 * @description 标签列表 （for资产管理）
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 标签上架状态。传none代表无权限 */
  authStatus;
  /** cate1Id */
  cate1Id;
  /** cate2Id */
  cate2Id;
  /** cate3Id */
  cate3Id;
  /** cate4Id */
  cate4Id;
  /** cate5Id */
  cate5Id;
  /** 类目ids，如[1,2,'3,4,5',null] */
  categoryIds;
  /** 标签类型，gprofile/onelocation/onecompany */
  entityType;
  /** 是否官方认证 */
  isOfficial;
  /** 是否最近上架 */
  isRecent;
  /** keyword */
  keyword;
  /** labelCateType */
  labelCateType;
  /** 标签类型，gprofile/onelocation/onecompany */
  labelType;
  /** order */
  order;
  /** orderBy */
  orderBy;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** 标签生产类型，LabelProduceTypeEnum。0表示全部  */
  produceType;
  /** 项目id，查看申请状态时用 */
  projectId;
  /** 标签范围，my/all */
  scope;
  /** 标签上架状态。传none代表无权限 */
  status;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/label/getLabels4Workbench.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/label/getLabels4Workbench.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/label/getLabels4Workbench.json',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/label/getLabels4Workbench.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/label/getLabels4Workbench.json', params, 'GET'),
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
      url: getUrl('/label/getLabels4Workbench.json', params, 'GET'),
      params,
      init,
    };
  };
}
