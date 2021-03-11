/**
 * @description 急速测试接口，使用个人的员工帐号来查看个人的标签数据
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** idType */
  idType;
  /** isQuickTest */
  isQuickTest;
  /** labelIds */
  labelIds;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/label/personalLabelTest.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/label/personalLabelTest.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/label/personalLabelTest.json', params, swrOptions);
}

export const init = new defs.daas.ResultObject();

export const url = '/label/personalLabelTest.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/label/personalLabelTest.json', params, 'GET'),
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
      url: getUrl('/label/personalLabelTest.json', params, 'GET'),
      params,
      init,
    };
  };
}
