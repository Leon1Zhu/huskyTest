/**
 * @description saveEnv
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** area */
  area;
  /** autoScale */
  autoScale;
  /** clusterId */
  clusterId;
  /** clusterName */
  clusterName;
  /** connectProperties */
  connectProperties;
  /** creatorId */
  creatorId;
  /** customTair */
  customTair;
  /** des */
  des;
  /** hsfVersion */
  hsfVersion;
  /** id */
  id;
  /** name */
  name;
  /** operatorId */
  operatorId;
  /** projectId */
  projectId;
  /** provisionMax */
  provisionMax;
  /** provisionMin */
  provisionMin;
  /** qpsDown */
  qpsDown;
  /** qpsUp */
  qpsUp;
  /** status */
  status;
  /** tairUserName */
  tairUserName;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/one-service/tenant/env/save.json', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/one-service/tenant/env/save.json', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/one-service/tenant/env/save.json',
    params,
    swrOptions,
    { method: 'POST' },
  );
}

export const init = undefined;

export const url = '/one-service/tenant/env/save.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/one-service/tenant/env/save.json', params, 'POST'),
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
      url: getUrl('/one-service/tenant/env/save.json', params, 'POST'),
      params,
      init,
    };
  };
}
