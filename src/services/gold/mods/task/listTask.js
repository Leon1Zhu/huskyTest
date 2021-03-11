/**
 * @description 任务列表
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** act */
  act;
  /** business */
  business;
  /** creator */
  creator;
  /** dimName */
  dimName;
  /** dimType */
  dimType;
  /** dimValue */
  dimValue;
  /** keyword */
  keyword;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** taskId */
  taskId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/crowdlab/api/v1/gtc/task/list', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/crowdlab/api/v1/gtc/task/list', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/crowdlab/api/v1/gtc/task/list', params, swrOptions);
}

export const init = new defs.gold.ResultVO();

export const url = '/crowdlab/api/v1/gtc/task/list';

export async function request(params = {}) {
  return Request({
    url: getUrl('/crowdlab/api/v1/gtc/task/list', params, 'GET'),
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
      url: getUrl('/crowdlab/api/v1/gtc/task/list', params, 'GET'),
      params,
      init,
    };
  };
}
