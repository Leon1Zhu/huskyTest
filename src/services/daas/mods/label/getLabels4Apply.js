/**
 * @description 服务资产申请列表
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** Dse 中的 appId */
  appId;
  /** 应用名 */
  appName;
  /** 权限审批状态，查看申请状态时用。传none代表无权限 */
  authStatus;
  /** 用户权限类型 */
  authorityType;
  /** 业务空间id，查看空间下资产时使用 */
  businessScopeId;
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
  /** 是否要屏蔽无效的选项，如果要，则展示出无法选择的标签原因，默认false */
  disableSelectSwitch;
  /** 是否要屏蔽同步状态的选项，默认false */
  disableSyncStatusSwitch;
  /** 入参id类型 */
  idType;
  /** isPublic */
  isPublic;
  /** keyword */
  keyword;
  /** labelCateType */
  labelCateType;
  /** 标签类型，gprofile/onelocation/onecompany */
  labelType;
  /** dse 中的objectId */
  objectId;
  /** order */
  order;
  /** orderBy */
  orderBy;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** 标签生产类型，1:接入；2:规则生产；3:高阶生产 */
  produceType;
  /** 项目id，查看申请状态时用 */
  projectId;
  /** 服务id，查看申请状态时用 */
  serviceId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/label/getLabels4Apply.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/label/getLabels4Apply.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/label/getLabels4Apply.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/label/getLabels4Apply.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/label/getLabels4Apply.json', params, 'GET'),
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
      url: getUrl('/label/getLabels4Apply.json', params, 'GET'),
      params,
      init,
    };
  };
}
