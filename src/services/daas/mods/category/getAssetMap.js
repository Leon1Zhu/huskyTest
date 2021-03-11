/**
 * @description 资产图谱
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** project过滤，防止混淆 */
  authProjectId;
  /** 一级类目，默认全部 */
  cate1Id;
  /** 二级类目，默认全部 */
  cate2Id;
  /** 三级类目，默认全部 */
  cate3Id;
  /** 四级类目，默认全部 */
  cate4Id;
  /** 五级类目，默认全部 */
  cate5Id;
  /** 类目类型，对应到类目表里的type字段。默认gprofile，可选：gprofile/onecompany/onelocation/bhv,特殊的是特征传gprofile即可 */
  cateType;
  /** 类目类型，对应到类目表里的type字段。默认gprofile，可选：gprofile/onecompany/onelocation/bhv,特殊的是特征传gprofile即可 */
  categoryType;
  /** 类目cnt的关联对象，用于计算类目下的标签/特征/行为总数。默认gprofile，特征feature,行为bhv */
  entityType;
  /** idType */
  idType;
  /** 是否取全部标签状态 */
  isAllStatus;
  /** 是否取标签组 */
  isGroup;
  /** 是否关联自己的标签 */
  isSelf;
  /** 搜索词 */
  labelKeyword;
  /** 是否需要绑定实体到类目下 */
  needBindEntity;
  /** 是否需要过滤标签分布类型 */
  needFilterDistriType;
  /** 关联自己的标签时，project过滤（对应标签的belongProjectId） */
  projectId;
  /** 类目cnt的关联对象，用于计算类目下的标签/特征/行为总数。默认gprofile，特征feature,行为bhv */
  queryType;
  /** 搜索词 */
  searchWord;
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
    Hooks.getUrlKey('/category/assetMap.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/category/assetMap.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/category/assetMap.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/category/assetMap.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/category/assetMap.json', params, 'GET'),
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
      url: getUrl('/category/assetMap.json', params, 'GET'),
      params,
      init,
    };
  };
}
