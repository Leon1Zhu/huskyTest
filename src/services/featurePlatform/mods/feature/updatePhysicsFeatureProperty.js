/**
 * @description 修改Physics特征属性
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** featureId */
  featureId;
  /** propertyName */
  propertyName;
  /** propertyValue */
  propertyValue;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/feature/updatePhysicsFeatureProperty', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/feature/updatePhysicsFeatureProperty', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/feature/updatePhysicsFeatureProperty',
    params,
    swrOptions,
  );
}

export const init = false;

export const url = '/feature/updatePhysicsFeatureProperty';

export async function request(params = {}) {
  return Request({
    url: getUrl('/feature/updatePhysicsFeatureProperty', params, 'GET'),
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
      url: getUrl('/feature/updatePhysicsFeatureProperty', params, 'GET'),
      params,
      init,
    };
  };
}
