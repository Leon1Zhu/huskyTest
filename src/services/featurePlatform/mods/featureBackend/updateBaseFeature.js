/**
 * @description 更新基本信息
 */

import * as SWR from 'swr';
import { getUrl } from 'src/utils/helper';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';
import * as Hooks from '../../../hooks';
import { PontCore } from '../../../pontCore';

export class Params {
  /** cateId */
  cateId;
  /** creator */
  creator;
  /** defaultOutputNodeName */
  defaultOutputNodeName;
  /** entityType */
  entityType;
  /** featureColumn */
  featureColumn;
  /** featureDescribe */
  featureDescribe;
  /** featureId */
  featureId;
  /** featureKeyEnumItems */
  featureKeyEnumItems;
  /** featureKeyType */
  featureKeyType;
  /** featureKvKeyPhysicalType */
  featureKvKeyPhysicalType;
  /** featureKvKeyType */
  featureKvKeyType;
  /** featureKvValuePhysicalFormat */
  featureKvValuePhysicalFormat;
  /** featureKvValuePhysicalType */
  featureKvValuePhysicalType;
  /** featureKvValueType */
  featureKvValueType;
  /** featureNameCn */
  featureNameCn;
  /** featureNameColumn */
  featureNameColumn;
  /** featureNameEn */
  featureNameEn;
  /** featureOrganizationType */
  featureOrganizationType;
  /** featurePhysicalFormat */
  featurePhysicalFormat;
  /** featurePhysicalType */
  featurePhysicalType;
  /** featureValueEnumItems */
  featureValueEnumItems;
  /** featureValueType */
  featureValueType;
  /** filterColumn */
  filterColumn;
  /** filterCondition */
  filterCondition;
  /** isPublic */
  isPublic;
  /** keyColumn */
  keyColumn;
  /** kvSeparatorKey */
  kvSeparatorKey;
  /** odpsTableName */
  odpsTableName;
  /** partitionColumn */
  partitionColumn;
  /** partitionFormat */
  partitionFormat;
  /** idType */
  idType;
  /** index */
  index;
  /** projectId */
  projectId;
  /** separatorKey */
  separatorKey;
  /** storeType */
  storeType;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/featurePlatform/updateBaseFeature.json', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/featurePlatform/updateBaseFeature.json', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(
  params = {},
  swrOptions = { revalidateOnFocus: true },
) {
  return Hooks.useRequest(
    '/featurePlatform/updateBaseFeature.json',
    params,
    swrOptions,
  );
}

export const init = new defs.featurePlatform.Result();

export const url = '/featurePlatform/updateBaseFeature.json';

export async function request(params = {}) {
  return Request({
    url: getUrl('/featurePlatform/updateBaseFeature.json', params, 'GET'),
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
      url: getUrl('/featurePlatform/updateBaseFeature.json', params, 'GET'),
      params,
      init,
    };
  };
}
