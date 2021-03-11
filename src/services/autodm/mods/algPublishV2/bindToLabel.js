/**
 * @description 已发布数据绑定标签
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** 数据发布ID */
  deployId;
  /** 标签ID */
  labelId;
  /** 是否覆盖 */
  override;
}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/autodm/v2/experiment/label', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/autodm/v2/experiment/label', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/autodm/v2/experiment/label', params, swrOptions, {
    method: 'POST',
  });
}

export const init = new defs.autodm.ResultObject();

export const url = '/autodm/v2/experiment/label';

export async function request(params = {}) {
  return Request({
    url: getUrl('/autodm/v2/experiment/label', params, 'POST'),
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
      url: getUrl('/autodm/v2/experiment/label', params, 'POST'),
      params,
      init,
    };
  };
}
