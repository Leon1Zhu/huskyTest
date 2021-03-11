/**
 * @description 获取服务查询次数接口
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** algName */
  algName;
  /** fontSize */
  fontSize;
  /** markMode */
  markMode;
  /** noframe */
  noframe;
  /** ratio */
  ratio;
  /** rgb */
  rgb;
  /** scene */
  scene;
  /** transparent */
  transparent;
  /** visibletransparent */
  visibletransparent;
  /** webWatermarkBase64 */
  webWatermarkBase64;
  /** width */
  width;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/watermark/get.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/watermark/get.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest('/watermark/get.json', params, swrOptions);
}

export const init = undefined;

export const url = '/watermark/get.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/watermark/get.json', params, 'GET'),
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
      url: getUrl('/watermark/get.json', params, 'GET'),
      params,
      init,
    };
  };
}
