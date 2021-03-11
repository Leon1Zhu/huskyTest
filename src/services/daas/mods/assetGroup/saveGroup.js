/**
 * @description 新增组
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 标签组名称（Code） */
  code;
  /** 创建人 */
  creator;
  /** 标签组描述 */
  description;
  /** id */
  id;
  /** 输入ID类型 */
  inParamId;
  /** 选择的标签 */
  labelIds;
  /** 归属项目 */
  projectId;
  /** 归属服务 */
  serviceId;
  /** 调用应用名称 */
  targetApp;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/assetGroup/save.json', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/assetGroup/save.json', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/assetGroup/save.json', params, swrOptions, {
    method: 'POST',
  });
}

export const init = new defs.daas.ResultObject();

export const url = '/assetGroup/save.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/assetGroup/save.json', params, 'POST'),
    params,
    method: 'post',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta) => {
    return {
      types,
      meta,
      stateKey,
      method: 'POST',
      url: getUrl('/assetGroup/save.json', params, 'POST'),
      params,
      init,
    };
  };
}
