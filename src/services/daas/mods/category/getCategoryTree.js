/**
 * @description 类目筛选
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
  /** 业务空间id，个人中心传 */
  businessScopeId;
  /** 类目类型，对应到类目表里的type字段。默认gprofile，可选：gprofile/onecompany/onelocation/bhv等 */
  categoryType;
  /** entityType */
  entityType;
  /** 额外参数，map结构，k取值如serviceId、idType */
  ext;
  /** extMap */
  extMap;
  /** 项目id，工作台都传 */
  projectId;
  /** 取资产的场景 */
  scene;
  /** 资产搜索词 */
  searchWord;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/category/getCategoryTree.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/category/getCategoryTree.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/category/getCategoryTree.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/category/getCategoryTree.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/category/getCategoryTree.json', params, 'GET'),
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
      url: getUrl('/category/getCategoryTree.json', params, 'GET'),
      params,
      init,
    };
  };
}
