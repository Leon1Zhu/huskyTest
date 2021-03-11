/**
 * @description Grofile已有权限及审批中列表(申请记录)
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
  /** entityType */
  entityType;
  /** inputIdType */
  inputIdType;
  /** page */
  page;
  /** pageSize */
  pageSize;
  /** projectId */
  projectId;
  /** serviceId */
  serviceId;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/label/getGprofileApplyLabels.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/label/getGprofileApplyLabels.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/label/getGprofileApplyLabels.json',
    params,
    swrOptions,
  );
}

export const init = new defs.daas.ResultObject();

export const url = '/label/getGprofileApplyLabels.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/label/getGprofileApplyLabels.json', params, 'GET'),
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
      url: getUrl('/label/getGprofileApplyLabels.json', params, 'GET'),
      params,
      init,
    };
  };
}
