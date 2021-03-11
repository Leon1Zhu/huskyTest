/**
 * @description 用户测试反馈，type：label、crowd、caidan；feedback：0:不准，1:准，2:不确定；data：标签人群id、彩蛋值，多个逗号分隔
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** data */
  data;
  /** feedback */
  feedback;
  /** others */
  others;
  /** type */
  type;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/portal/feedback.json', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/portal/feedback.json', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/portal/feedback.json', params, swrOptions, {
    method: 'POST',
  });
}

export const init = new defs.daas.ResultObject();

export const url = '/portal/feedback.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/portal/feedback.json', params, 'POST'),
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
      url: getUrl('/portal/feedback.json', params, 'POST'),
      params,
      init,
    };
  };
}
