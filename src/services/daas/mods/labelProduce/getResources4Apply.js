/**
 * @description 标签、特生、行为前置申请列表
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 权限审批状态，查看申请状态时用。传none代表无权限 */
  authStatus;
  /** 一级类目，0代表全部，不支持多个 */
  cate1Id;
  /** 二级类目，0代表全部；多个用逗号分隔 */
  cate2Id;
  /** 三级类目，0代表全部；多个用逗号分隔 */
  cate3Id;
  /** 四级类目，0代表全部；多个用逗号分隔 */
  cate4Id;
  /** 五级类目，0代表全部；多个用逗号分隔 */
  cate5Id;
  /** 类目ids，如[1,2,'3,4,5',null] */
  categoryIds;
  /** 实体类型，gprofile/onecompany/onelocation... */
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
  /** 项目id，查看申请状态时用 */
  projectId;
  /** 标签类型，前端要传的枚举类：标签gprofile 行为bhv,特征feature */
  resourceType;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/labelProduce/getResources4Apply.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/labelProduce/getResources4Apply.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/labelProduce/getResources4Apply.json',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/labelProduce/getResources4Apply.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/labelProduce/getResources4Apply.json', params, 'GET'),
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
      url: getUrl('/labelProduce/getResources4Apply.json', params, 'GET'),
      params,
      init,
    };
  };
}
