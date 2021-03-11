/**
 * @description list
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** bpmsInstanceId */
  bpmsInstanceId;
  /** name */
  name;
  /** operatorNickname */
  operatorNickname;
  /** operatorNo */
  operatorNo;
  /** orderGmtCreate */
  orderGmtCreate;
  /** orderGmtModified */
  orderGmtModified;
  /** orderId */
  orderId;
  /** pageNum */
  pageNum;
  /** pageSize */
  pageSize;
  /** remark */
  remark;
  /** status */
  status;
  /** type */
  type;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/one-service/workflow/list.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/one-service/workflow/list.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/one-service/workflow/list.json',
    params,
    swrOptions,
  );
}

export const init = new defs.oneService.ResultObject();

export const url = '/one-service/workflow/list.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/one-service/workflow/list.json', params, 'GET'),
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
      url: getUrl('/one-service/workflow/list.json', params, 'GET'),
      params,
      init,
    };
  };
}
