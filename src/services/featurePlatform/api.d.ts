type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare type ConfigInterface = import('swr').ConfigInterface;

interface FetchTypes<key> {
  error: 'error';
  success: key;
  loading: 'loading';
}

interface FetchAction<BO, key> {
  type: key;
  payload: BO;
}

declare namespace defs {
  export namespace featurePlatform {
    export class AalgorithmFeatureResponseV2 {
      /** data */
      data?: Array<defs.featurePlatform.FeatureResponse>;

      /** recordCount */
      recordCount?: number;
    }

    export class AddEnhanceFeatureResult {
      /** featureName */
      featureName?: string;

      /** result */
      result?: boolean;
    }

    export class AppContext {
      /** appId */
      appId?: number;

      /** aucInfo */
      aucInfo?: defs.featurePlatform.AucInfo;

      /** bizId */
      bizId?: number;

      /** extraInfo */
      extraInfo?: ObjectMap<any, string>;

      /** projectId */
      projectId?: number;
    }

    export class AucInfo {
      /** activeTime */
      activeTime?: number;

      /** ak */
      ak?: string;

      /** sn */
      sn?: string;

      /** timesteamp */
      timesteamp?: number;
    }

    export class BaseFeature {
      /** authStatus */
      authStatus?: string;

      /** bpmsId */
      bpmsId?: string;

      /** cateId */
      cateId?: number;

      /** creator */
      creator?: string;

      /** creatorId */
      creatorId?: string;

      /** dataType */
      dataType?: string;

      /** defaultOutputNodeName */
      defaultOutputNodeName?: string;

      /** entityType */
      entityType?: number;

      /** env */
      env?: string;

      /** extInfo */
      extInfo?: string;

      /** featureDescribe */
      featureDescribe?: string;

      /** featureKeyEnumItems */
      featureKeyEnumItems?: string;

      /** featureKeyType */
      featureKeyType?: string;

      /** featureKvKeyPhysicalType */
      featureKvKeyPhysicalType?: string;

      /** featureKvKeyType */
      featureKvKeyType?: string;

      /** featureKvValuePhysicalFormat */
      featureKvValuePhysicalFormat?: string;

      /** featureKvValuePhysicalType */
      featureKvValuePhysicalType?: string;

      /** featureKvValueType */
      featureKvValueType?: string;

      /** featureNameCn */
      featureNameCn?: string;

      /** featureNameEn */
      featureNameEn?: string;

      /** featureOrganizationType */
      featureOrganizationType?: string;

      /** featurePhysicalFormat */
      featurePhysicalFormat?: string;

      /** featurePhysicalType */
      featurePhysicalType?: string;

      /** featureSource */
      featureSource?: string;

      /** featureValueEnumItems */
      featureValueEnumItems?: string;

      /** featureValueSeparator */
      featureValueSeparator?: string;

      /** featureValueType */
      featureValueType?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isPublic */
      isPublic?: number;

      /** kvSeparatorKey */
      kvSeparatorKey?: string;

      /** lifeCycle */
      lifeCycle?: number;

      /** owner */
      owner?: string;

      /** period */
      period?: number;

      /** primaryKeyInfoList */
      primaryKeyInfoList?: Array<defs.featurePlatform.PrimaryKeyInfo>;

      /** projectId */
      projectId?: number;

      /** qualityScore */
      qualityScore?: number;

      /** refLabelCount */
      refLabelCount?: number;

      /** refSmartServiceCount */
      refSmartServiceCount?: number;

      /** separatorKey */
      separatorKey?: string;

      /** sourceFeatureId */
      sourceFeatureId?: number;

      /** sourcePhysicsTable */
      sourcePhysicsTable?: string;

      /** sourceType */
      sourceType?: number;

      /** statisticStatus */
      statisticStatus?: number;

      /** status */
      status?: number;

      /** storeType */
      storeType?: number;
    }

    export class BatchFeatureProduceRequest {
      /** bhvId */
      bhvId?: number;

      /** categoryId */
      categoryId?: number;

      /** creator */
      creator?: string;

      /** featureProduceRequests */
      featureProduceRequests?: Array<
        defs.featurePlatform.FeatureProduceRequest
      >;

      /** isPublic */
      isPublic?: boolean;

      /** paramInfo */
      paramInfo?: ObjectMap<any, string>;

      /** projectId */
      projectId?: number;

      /** templateId */
      templateId?: number;

      /** updateInfo */
      updateInfo?: defs.featurePlatform.FeatureProduceUpdateInfo;
    }

    export class CategoryInfo {
      /** cate1Id */
      cate1Id?: number;

      /** cate1Name */
      cate1Name?: string;

      /** cate2Id */
      cate2Id?: number;

      /** cate2Name */
      cate2Name?: string;

      /** cate3Id */
      cate3Id?: number;

      /** cate3Name */
      cate3Name?: string;

      /** cate4Id */
      cate4Id?: number;

      /** cate4Name */
      cate4Name?: string;

      /** cate5Id */
      cate5Id?: number;

      /** cate5Name */
      cate5Name?: string;
    }

    export class CheckFeaturePartitionRequest {
      /** appContext */
      appContext?: defs.featurePlatform.AppContext;

      /** featureConditionList */
      featureConditionList?: Array<defs.featurePlatform.FeatureConditionV2>;

      /** partitionDate */
      partitionDate?: string;
    }

    export class CheckFeaturePartitionRequestV2 {
      /** appContext */
      appContext?: defs.featurePlatform.AppContext;

      /** checkCache */
      checkCache?: boolean;

      /** checkFeaturePartitionVOList */
      checkFeaturePartitionVOList?: Array<
        defs.featurePlatform.CheckFeaturePartitionVO
      >;

      /** datasetConfig */
      datasetConfig?: defs.featurePlatform.DatasetConfig;
    }

    export class CheckFeaturePartitionResponseVO {
      /** data */
      data?: Array<defs.featurePlatform.PartitionResponseVO>;
    }

    export class CheckFeaturePartitionVO {
      /** featureName */
      featureName?: string;

      /** partitionDate */
      partitionDate?: string;
    }

    export class CheckPartitionResponse {
      /** message */
      message?: string;

      /** status */
      status?:
        | 'READY'
        | 'RUNNING'
        | 'SUCCESS'
        | 'WAITING'
        | 'CANCELED'
        | 'FAILED'
        | 'PENDING';
    }

    export class DatasetConfig {
      /** datasetSchema */
      datasetSchema?: defs.featurePlatform.DatasetSchema;

      /** defaultJoinColumn */
      defaultJoinColumn?: string;

      /** featureDsColumn */
      featureDsColumn?: string;

      /** filterNullFeatureLine */
      filterNullFeatureLine?: boolean;

      /** label */
      label?: string;

      /** partition */
      partition?: string;

      /** reservedColumns */
      reservedColumns?: string;

      /** tableName */
      tableName?: string;
    }

    export class DatasetSchema {
      /** columnDesc */
      columnDesc?: Array<string>;
    }

    export class DistributeInfo {
      /** enumCount */
      enumCount?: number;

      /** enumKey */
      enumKey?: string;

      /** enumRate */
      enumRate?: number;

      /** totalNum */
      totalNum?: number;
    }

    export class EmployeeInfo {
      /** empId */
      empId?: string;

      /** empType */
      empType?: string;

      /** name */
      name?: string;

      /** nickName */
      nickName?: string;

      /** picUrl */
      picUrl?: string;
    }

    export class FeatureAddGroupRequest {
      /** creator */
      creator?: string;

      /** featureNameList */
      featureNameList?: Array<string>;

      /** groupCnName */
      groupCnName?: string;

      /** groupEnName */
      groupEnName?: string;

      /** projectId */
      projectId?: number;
    }

    export class FeatureCacheConfig {
      /** featureName */
      featureName?: string;

      /** partitionValue */
      partitionValue?: string;
    }

    export class FeatureColumnLogicalMappingRequest {
      /** force */
      force?: boolean;

      /** index */
      index?: number;

      /** keyColumn */
      keyColumn?: string;

      /** keyType */
      keyType?: string;

      /** mapping */
      mapping?: ObjectMap<any, string>;

      /** tableName */
      tableName?: string;
    }

    export class FeatureConcatCacheTableRequest {
      /** computeTime */
      computeTime?: string;

      /** concatTableName */
      concatTableName?: string;

      /** concatTablePartition */
      concatTablePartition?: string;

      /** dataSetPartition */
      dataSetPartition?: string;

      /** dataSetTableName */
      dataSetTableName?: string;

      /** featureConfigList */
      featureConfigList?: Array<defs.featurePlatform.FeatureCacheConfig>;
    }

    export class FeatureConditionV2 {
      /** columnTypes */
      columnTypes?: ObjectMap<any, string>;

      /** dataPreprocessFunction */
      dataPreprocessFunction?: string;

      /** excludes */
      excludes?: string;

      /** featureID */
      featureID?: number;

      /** featureName */
      featureName?: string;

      /** featureNameFunction */
      featureNameFunction?: string;

      /** featureValueFunction */
      featureValueFunction?: string;

      /** filterCondition */
      filterCondition?: string;

      /** groupName */
      groupName?: string;

      /** includes */
      includes?: string;

      /** joinColumn */
      joinColumn?: string;

      /** mapjoin */
      mapjoin?: boolean;

      /** modelFeatureGroupName */
      modelFeatureGroupName?: string;

      /** outputColumn */
      outputColumn?: string;

      /** partitionCondition */
      partitionCondition?: string;

      /** partitionValue */
      partitionValue?: string;

      /** table */
      table?: string;

      /** tableFilterCondition */
      tableFilterCondition?: defs.featurePlatform.TableFilterCondition;

      /** tableJoinColumnDesc */
      tableJoinColumnDesc?: string;
    }

    export class FeatureConfig {
      /** concatType */
      concatType?: string;

      /** encode */
      encode?: boolean;

      /** featureConditionList */
      featureConditionList?: Array<defs.featurePlatform.FeatureConditionV2>;

      /** featureDelimiter */
      featureDelimiter?: string;

      /** kvDelimiter */
      kvDelimiter?: string;

      /** merge */
      merge?: boolean;

      /** predict */
      predict?: boolean;

      /** skipCheckPartition */
      skipCheckPartition?: boolean;
    }

    export class FeatureDataDTO {
      /** data */
      data?: Array<defs.featurePlatform.FeatureResponse>;

      /** recordCount */
      recordCount?: number;
    }

    export class FeatureEngineeringRequest {
      /** appInfo */
      appInfo?: defs.featurePlatform.AppContext;

      /** datasetConfig */
      datasetConfig?: defs.featurePlatform.DatasetConfig;

      /** extParam */
      extParam?: object;

      /** featureConfig */
      featureConfig?: defs.featurePlatform.FeatureConfig;

      /** hints */
      hints?: object;

      /** odpsConfig */
      odpsConfig?: defs.featurePlatform.OdpsConfig;

      /** outputConfig */
      outputConfig?: defs.featurePlatform.OutputConfig;

      /** priority */
      priority?: number;

      /** recoveryId */
      recoveryId?: number;

      /** testMode */
      testMode?: boolean;

      /** uniqueKey */
      uniqueKey?: string;
    }

    export class FeatureEngineeringResponse {
      /** dimNum */
      dimNum?: number;

      /** groupNames */
      groupNames?: string;

      /** message */
      message?: string;

      /** outputTable */
      outputTable?: string;

      /** status */
      status?:
        | 'READY'
        | 'RUNNING'
        | 'SUCCESS'
        | 'WAITING'
        | 'CANCELED'
        | 'FAILED'
        | 'PENDING';

      /** taskUrl */
      taskUrl?: string;
    }

    export class FeatureEnhanceRequest {
      /** creator */
      creator?: string;

      /** enhanceSql */
      enhanceSql?: string;

      /** featureName */
      featureName?: string;

      /** featureNameColumn */
      featureNameColumn?: string;

      /** featureOrganizationType */
      featureOrganizationType?: string;

      /** featurePhysicalType */
      featurePhysicalType?: string;

      /** featureValueColumn */
      featureValueColumn?: string;

      /** featureValueType */
      featureValueType?: string;

      /** opreator */
      opreator?: string;

      /** primaryKeyInfoList */
      primaryKeyInfoList?: Array<defs.featurePlatform.PrimaryKeyInfo>;

      /** tableName */
      tableName?: string;

      /** viewMode */
      viewMode?: boolean;
    }

    export class FeatureEntityType {
      /** name */
      name?: string;

      /** type */
      type?: number;
    }

    export class FeatureExtractRequest {
      /** appInfo */
      appInfo?: defs.featurePlatform.AppContext;

      /** featureName */
      featureName?: string;

      /** hints */
      hints?: object;

      /** outputConfig */
      outputConfig?: defs.featurePlatform.OutputConfig;

      /** storeType */
      storeType?: number;
    }

    export class FeatureGroupData {
      /** groupCnName */
      groupCnName?: string;

      /** groupEnName */
      groupEnName?: string;

      /** id */
      id?: number;

      /** owner */
      owner?: string;
    }

    export class FeatureGroupResponse {
      /** data */
      data?: Array<defs.featurePlatform.FeatureGroupData>;

      /** recordCount */
      recordCount?: number;
    }

    export class FeatureKeyType {
      /** name */
      name?: string;

      /** type */
      type?: string;
    }

    export class FeaturePartitionVO {
      /** featureIds */
      featureIds?: string;

      /** partitionFormat */
      partitionFormat?: string;

      /** tn */
      tn?: number;
    }

    export class FeaturePreprocessRequest {
      /** appInfo */
      appInfo?: defs.featurePlatform.AppContext;

      /** featureName */
      featureName?: string;

      /** outputTable */
      outputTable?: string;

      /** sql */
      sql?: string;

      /** storeType */
      storeType?: number;
    }

    export class FeatureProduceRequest {
      /** featureId */
      featureId?: number;

      /** featureNameCn */
      featureNameCn?: string;

      /** featureNameEn */
      featureNameEn?: string;

      /** timespan */
      timespan?: number;
    }

    export class FeatureProduceUpdateInfo {
      /** description */
      description?: string;

      /** fillDays */
      fillDays?: number;

      /** lifecycle */
      lifecycle?: number;

      /** period */
      period?: string;

      /** periodIndex */
      periodIndex?: number;

      /** times */
      times?: string;
    }

    export class FeatureQualityScore {
      /** computeTime */
      computeTime?: string;

      /** featureId */
      featureId?: number;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** score */
      score?: number;
    }

    export class FeatureQualityScoreRequest {
      /** featureQualityScoreList */
      featureQualityScoreList?: Array<defs.featurePlatform.FeatureQualityScore>;
    }

    export class FeatureResponse {
      /** authStatus */
      authStatus?: string;

      /** bpmsId */
      bpmsId?: string;

      /** cateId */
      cateId?: number;

      /** category */
      category?: defs.featurePlatform.CategoryInfo;

      /** creator */
      creator?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorInfo */
      creatorInfo?: defs.featurePlatform.EmployeeInfo;

      /** defaultOutputNodeName */
      defaultOutputNodeName?: string;

      /** dimension */
      dimension?: number;

      /** entityType */
      entityType?: number;

      /** featureColumn */
      featureColumn?: string;

      /** featureDescribe */
      featureDescribe?: string;

      /** featureId */
      featureId?: number;

      /** featureKeyEnumItems */
      featureKeyEnumItems?: string;

      /** featureKeyType */
      featureKeyType?: string;

      /** featureKvKeyPhysicalType */
      featureKvKeyPhysicalType?: string;

      /** featureKvKeyType */
      featureKvKeyType?: string;

      /** featureKvValuePhysicalFormat */
      featureKvValuePhysicalFormat?: string;

      /** featureKvValuePhysicalType */
      featureKvValuePhysicalType?: string;

      /** featureKvValueType */
      featureKvValueType?: string;

      /** featureNameCn */
      featureNameCn?: string;

      /** featureNameColumn */
      featureNameColumn?: string;

      /** featureNameEn */
      featureNameEn?: string;

      /** featureOrganizationType */
      featureOrganizationType?: string;

      /** featurePhysicalFormat */
      featurePhysicalFormat?: string;

      /** featurePhysicalType */
      featurePhysicalType?: string;

      /** featureValueEnumItems */
      featureValueEnumItems?: string;

      /** featureValueSeparator */
      featureValueSeparator?: string;

      /** featureValueType */
      featureValueType?: string;

      /** filterColumn */
      filterColumn?: string;

      /** filterCondition */
      filterCondition?: string;

      /** isNew */
      isNew?: string;

      /** isPublic */
      isPublic?: number;

      /** keyColumn */
      keyColumn?: string;

      /** kvSeparatorKey */
      kvSeparatorKey?: string;

      /** lifecycle */
      lifecycle?: number;

      /** nodeId */
      nodeId?: number;

      /** odpsTableName */
      odpsTableName?: string;

      /** owner */
      owner?: string;

      /** ownerIds */
      ownerIds?: string;

      /** owners */
      owners?: Array<defs.featurePlatform.EmployeeInfo>;

      /** partitionColumn */
      partitionColumn?: string;

      /** partitionFormat */
      partitionFormat?: string;

      /** primaryKeyInfoList */
      primaryKeyInfoList?: Array<defs.featurePlatform.PrimaryKeyInfo>;

      /** produceType */
      produceType?: number;

      /** projectId */
      projectId?: number;

      /** qualityScore */
      qualityScore?: number;

      /** refLabelCount */
      refLabelCount?: number;

      /** refSmartServiceCount */
      refSmartServiceCount?: number;

      /** resourceType */
      resourceType?: string;

      /** separatorKey */
      separatorKey?: string;

      /** statisticInfos */
      statisticInfos?: Array<defs.featurePlatform.FeatureStatistics>;

      /** statisticStatus */
      statisticStatus?: number;

      /** status */
      status?: number;

      /** statusInfo */
      statusInfo?: defs.featurePlatform.StatusInfo;

      /** storeType */
      storeType?: number;

      /** totalNum */
      totalNum?: string;
    }

    export class FeatureSerializeRequest {
      /** appInfo */
      appInfo?: defs.featurePlatform.AppContext;

      /** excludeColumnName */
      excludeColumnName?: string;

      /** execProject */
      execProject?: string;

      /** featureColumnName */
      featureColumnName?: string;

      /** featureDelimiter */
      featureDelimiter?: string;

      /** kvDelimiter */
      kvDelimiter?: string;

      /** predict */
      predict?: boolean;

      /** tableName */
      tableName?: string;

      /** uniqueKey */
      uniqueKey?: string;
    }

    export class FeatureSerializeResponse {
      /** dimNum */
      dimNum?: number;

      /** message */
      message?: string;

      /** status */
      status?:
        | 'READY'
        | 'RUNNING'
        | 'SUCCESS'
        | 'WAITING'
        | 'CANCELED'
        | 'FAILED'
        | 'PENDING';

      /** tableName */
      tableName?: string;

      /** taskUrl */
      taskUrl?: string;
    }

    export class FeatureStatisticDetailRequest {
      /** detailName */
      detailName?: string;

      /** detailValue */
      detailValue?: string;

      /** featureId */
      featureId?: number;

      /** statisticTime */
      statisticTime?: string;
    }

    export class FeatureStatisticInfoResponse {
      /** featureId */
      featureId?: number;

      /** featureOrganizationType */
      featureOrganizationType?: string;

      /** featurePartitionUrl */
      featurePartitionUrl?: string;

      /** featureValueType */
      featureValueType?: string;

      /** kv */
      kv?: defs.featurePlatform.KvStatisticInfoDTO;

      /** kvEnum */
      kvEnum?: defs.featurePlatform.KvEnumStatisticInfoDTO;

      /** kvNumeric */
      kvNumeric?: defs.featurePlatform.KvNumericStatisticInfoDTO;

      /** kvsplitEnum */
      kvsplitEnum?: defs.featurePlatform.KvsplitEnumStatisticInfoDTO;

      /** kvsplitNumeric */
      kvsplitNumeric?: defs.featurePlatform.KvsplitNumericStatisticInfoDTO;

      /** refLabelCount */
      refLabelCount?: number;

      /** samples */
      samples?: Array<object>;

      /** singleEnum */
      singleEnum?: defs.featurePlatform.SingleEnumStatisticInfoDTO;

      /** singleNumeric */
      singleNumeric?: defs.featurePlatform.SingleNumericStatisticInfoDTO;

      /** totalNum */
      totalNum?: number;
    }

    export class FeatureStatistics {
      /** featureId */
      featureId?: number;

      /** featureTime */
      featureTime?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** physicalType */
      physicalType?: string;

      /** statisticName */
      statisticName?: string;

      /** statisticValue */
      statisticValue?: string;
    }

    export class FeatureStatisticsRequest {
      /** featureId */
      featureId?: number;

      /** featureTime */
      featureTime?: string;

      /** physicalType */
      physicalType?: string;

      /** statisticName */
      statisticName?: string;

      /** statisticValue */
      statisticValue?: string;
    }

    export class FeatureTemplate {
      /** code */
      code?: string;

      /** creatorId */
      creatorId?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isCommon */
      isCommon?: boolean;

      /** name */
      name?: string;

      /** params */
      params?: Array<defs.featurePlatform.TemplateParam>;

      /** projectId */
      projectId?: number;

      /** templateDesc */
      templateDesc?: string;

      /** type */
      type?: number;
    }

    export class HorizontalImportTableMutiPartRequest {
      /** behaviorPartitionColumn */
      behaviorPartitionColumn?: string;

      /** creator */
      creator?: string;

      /** defaultCateId */
      defaultCateId?: number;

      /** entityType */
      entityType?: number;

      /** featureKeyType */
      featureKeyType?: string;

      /** featureTemplateCnName */
      featureTemplateCnName?: string;

      /** featureTemplateEnName */
      featureTemplateEnName?: string;

      /** forceUseGroup */
      forceUseGroup?: boolean;

      /** groupEnName */
      groupEnName?: string;

      /** groupName */
      groupName?: string;

      /** idTypeMapping */
      idTypeMapping?: ObjectMap<any, string>;

      /** ignoreColumnList */
      ignoreColumnList?: Array<string>;

      /** isPublic */
      isPublic?: number;

      /** partitionConfig */
      partitionConfig?: ObjectMap<any, string>;

      /** primaryKey */
      primaryKey?: string;

      /** projectId */
      projectId?: number;

      /** spanPartitionColumn */
      spanPartitionColumn?: string;

      /** statistic */
      statistic?: boolean;

      /** tableName */
      tableName?: string;
    }

    export class HorizontalImportTableRequest {
      /** cateIdMap */
      cateIdMap?: ObjectMap<any, number>;

      /** cnNamePrefix */
      cnNamePrefix?: string;

      /** creator */
      creator?: string;

      /** defaultCateId */
      defaultCateId?: number;

      /** enNamePrefix */
      enNamePrefix?: string;

      /** entityType */
      entityType?: number;

      /** featureKeyType */
      featureKeyType?: string;

      /** forceUseGroup */
      forceUseGroup?: boolean;

      /** groupEnName */
      groupEnName?: string;

      /** groupName */
      groupName?: string;

      /** idTypeMapping */
      idTypeMapping?: ObjectMap<any, string>;

      /** ignoreColumnList */
      ignoreColumnList?: Array<string>;

      /** includeColumnList */
      includeColumnList?: Array<string>;

      /** isPublic */
      isPublic?: number;

      /** kvMap */
      kvMap?: ObjectMap<any, string>;

      /** primaryKey */
      primaryKey?: string;

      /** projectId */
      projectId?: number;

      /** statistic */
      statistic?: boolean;

      /** tableName */
      tableName?: string;
    }

    export class HorizontallOdpsTableRequest {
      /** cateId */
      cateId?: number;

      /** creator */
      creator?: string;

      /** defaultOutputNodeName */
      defaultOutputNodeName?: string;

      /** entityType */
      entityType?: number;

      /** featureDescribe */
      featureDescribe?: string;

      /** featureKeyType */
      featureKeyType?: string;

      /** featureKvKeyPhysicalType */
      featureKvKeyPhysicalType?: string;

      /** featureKvKeyType */
      featureKvKeyType?: string;

      /** featureKvValuePhysicalType */
      featureKvValuePhysicalType?: string;

      /** featureKvValueType */
      featureKvValueType?: string;

      /** featureNameCn */
      featureNameCn?: string;

      /** featureNameEn */
      featureNameEn?: string;

      /** featureOrganizationType */
      featureOrganizationType?: string;

      /** featurePhysicalType */
      featurePhysicalType?: string;

      /** featureValueColumn */
      featureValueColumn?: string;

      /** featureValueType */
      featureValueType?: string;

      /** filterCondition */
      filterCondition?: string;

      /** isPublic */
      isPublic?: number;

      /** keyColumn */
      keyColumn?: string;

      /** kvSeparatorKey */
      kvSeparatorKey?: string;

      /** odpsTableName */
      odpsTableName?: string;

      /** partitionColumn */
      partitionColumn?: string;

      /** projectId */
      projectId?: number;

      /** separatorKey */
      separatorKey?: string;
    }

    export class ImportTableResponse {
      /** columnName */
      columnName?: string;

      /** message */
      message?: string;
    }

    export class KvEnumStatisticInfoDTO {
      /** distinctKeyNum */
      distinctKeyNum?: string;

      /** maxKeyValue */
      maxKeyValue?: string;

      /** maxValueValue */
      maxValueValue?: string;

      /** minKeyValue */
      minKeyValue?: string;

      /** minValueValue */
      minValueValue?: string;

      /** samples */
      samples?: Array<object>;

      /** totalNum */
      totalNum?: number;
    }

    export class KvNumericStatisticInfoDTO {
      /** distinctKeyNum */
      distinctKeyNum?: string;

      /** maxKeyValue */
      maxKeyValue?: string;

      /** maxValueValue */
      maxValueValue?: string;

      /** minKeyValue */
      minKeyValue?: string;

      /** minValueValue */
      minValueValue?: string;

      /** samples */
      samples?: Array<object>;

      /** totalNum */
      totalNum?: number;
    }

    export class KvStatisticInfoDTO {
      /** distinctKeyNum */
      distinctKeyNum?: string;

      /** maxKeyValue */
      maxKeyValue?: string;

      /** maxValueValue */
      maxValueValue?: string;

      /** minKeyValue */
      minKeyValue?: string;

      /** minValueValue */
      minValueValue?: string;

      /** samples */
      samples?: Array<object>;

      /** totalNum */
      totalNum?: number;
    }

    export class KvsplitEnumStatisticInfoDTO {
      /** distinctKeyNum */
      distinctKeyNum?: string;

      /** maxKeyValue */
      maxKeyValue?: string;

      /** maxValueValue */
      maxValueValue?: string;

      /** minKeyValue */
      minKeyValue?: string;

      /** minValueValue */
      minValueValue?: string;

      /** samples */
      samples?: Array<object>;

      /** totalNum */
      totalNum?: number;
    }

    export class KvsplitNumericStatisticInfoDTO {
      /** distinctKeyNum */
      distinctKeyNum?: string;

      /** maxKeyValue */
      maxKeyValue?: string;

      /** maxValueValue */
      maxValueValue?: string;

      /** minKeyValue */
      minKeyValue?: string;

      /** minValueValue */
      minValueValue?: string;

      /** samples */
      samples?: Array<object>;

      /** totalNum */
      totalNum?: number;
    }

    export class ListData<T0 = any> {
      /** 列表 */
      data?: Array<T0>;

      /** 总数 */
      recordCount?: number;
    }

    export class LongitudinalImportTableRequest {
      /** behaviorPartitionColumn */
      behaviorPartitionColumn?: string;

      /** creator */
      creator?: string;

      /** defaultCateId */
      defaultCateId?: number;

      /** entityType */
      entityType?: number;

      /** featureKeyType */
      featureKeyType?: string;

      /** featureNameColumn */
      featureNameColumn?: string;

      /** featureTemplateCnName */
      featureTemplateCnName?: string;

      /** featureTemplateEnName */
      featureTemplateEnName?: string;

      /** featureValueColumn */
      featureValueColumn?: string;

      /** forceUseGroup */
      forceUseGroup?: boolean;

      /** groupEnName */
      groupEnName?: string;

      /** groupName */
      groupName?: string;

      /** idTypeMapping */
      idTypeMapping?: ObjectMap<any, string>;

      /** ignoreColumnList */
      ignoreColumnList?: Array<string>;

      /** isPublic */
      isPublic?: number;

      /** partitionConfig */
      partitionConfig?: ObjectMap<any, string>;

      /** primaryKey */
      primaryKey?: string;

      /** projectId */
      projectId?: number;

      /** spanPartitionColumn */
      spanPartitionColumn?: string;

      /** statistic */
      statistic?: boolean;

      /** tableName */
      tableName?: string;
    }

    export class LongitudinallOdpsTableRequest {
      /** cateId */
      cateId?: number;

      /** creator */
      creator?: string;

      /** defaultOutputNodeName */
      defaultOutputNodeName?: string;

      /** entityType */
      entityType?: number;

      /** featureDescribe */
      featureDescribe?: string;

      /** featureKeyType */
      featureKeyType?: string;

      /** featureKvKeyPhysicalType */
      featureKvKeyPhysicalType?: string;

      /** featureKvKeyType */
      featureKvKeyType?: string;

      /** featureKvValuePhysicalType */
      featureKvValuePhysicalType?: string;

      /** featureKvValueType */
      featureKvValueType?: string;

      /** featureNameCn */
      featureNameCn?: string;

      /** featureNameColumn */
      featureNameColumn?: string;

      /** featureNameEn */
      featureNameEn?: string;

      /** featureOrganizationType */
      featureOrganizationType?: string;

      /** featureValueColumn */
      featureValueColumn?: string;

      /** filterColumn */
      filterColumn?: string;

      /** filterCondition */
      filterCondition?: string;

      /** isPublic */
      isPublic?: number;

      /** keyColumn */
      keyColumn?: string;

      /** odpsTableName */
      odpsTableName?: string;

      /** partitionColumn */
      partitionColumn?: string;

      /** projectId */
      projectId?: number;
    }

    export class Number {}

    export class OdpsConfig {
      /** accessId */
      accessId?: string;

      /** accessKey */
      accessKey?: string;

      /** aliyunId */
      aliyunId?: string;

      /** baseId */
      baseId?: string;

      /** bizId */
      bizId?: string;

      /** computeProject */
      computeProject?: string;

      /** d2EndPoint */
      d2EndPoint?: string;

      /** endPoint */
      endPoint?: string;

      /** execProject */
      execProject?: string;

      /** officeEndPoint */
      officeEndPoint?: string;

      /** resourceProject */
      resourceProject?: string;

      /** storageProject */
      storageProject?: string;
    }

    export class OdpsTableRequest {
      /** cateId */
      cateId?: number;

      /** creator */
      creator?: string;

      /** defaultOutputNodeName */
      defaultOutputNodeName?: string;

      /** entityType */
      entityType?: number;

      /** featureColumn */
      featureColumn?: string;

      /** featureDescribe */
      featureDescribe?: string;

      /** featureId */
      featureId?: number;

      /** featureKeyEnumItems */
      featureKeyEnumItems?: string;

      /** featureKeyType */
      featureKeyType?: string;

      /** featureKvKeyPhysicalType */
      featureKvKeyPhysicalType?: string;

      /** featureKvKeyType */
      featureKvKeyType?: string;

      /** featureKvValuePhysicalFormat */
      featureKvValuePhysicalFormat?: string;

      /** featureKvValuePhysicalType */
      featureKvValuePhysicalType?: string;

      /** featureKvValueType */
      featureKvValueType?: string;

      /** featureNameCn */
      featureNameCn?: string;

      /** featureNameColumn */
      featureNameColumn?: string;

      /** featureNameEn */
      featureNameEn?: string;

      /** featureOrganizationType */
      featureOrganizationType?: string;

      /** featurePhysicalFormat */
      featurePhysicalFormat?: string;

      /** featurePhysicalType */
      featurePhysicalType?: string;

      /** featureValueEnumItems */
      featureValueEnumItems?: string;

      /** featureValueType */
      featureValueType?: string;

      /** filterColumn */
      filterColumn?: string;

      /** filterCondition */
      filterCondition?: string;

      /** isPublic */
      isPublic?: number;

      /** keyColumn */
      keyColumn?: string;

      /** kvSeparatorKey */
      kvSeparatorKey?: string;

      /** odpsTableName */
      odpsTableName?: string;

      /** partitionColumn */
      partitionColumn?: string;

      /** partitionFormat */
      partitionFormat?: string;

      /** primaryKeyList */
      primaryKeyList?: Array<defs.featurePlatform.PrimaryKeyInfo>;

      /** projectId */
      projectId?: number;

      /** separatorKey */
      separatorKey?: string;

      /** storeType */
      storeType?: number;
    }

    export class OptionItem {
      /** label */
      label?: string;

      /** value */
      value?: string;
    }

    export class OutputConfig {
      /** execProject */
      execProject?: string;

      /** kvSplit */
      kvSplit?: boolean;

      /** lifecycle */
      lifecycle?: number;

      /** mergeOutputFeatureColumnName */
      mergeOutputFeatureColumnName?: string;

      /** outputTable */
      outputTable?: string;

      /** outputTablePartition */
      outputTablePartition?: string;

      /** project */
      project?: string;
    }

    export class PartitionResponseVO {
      /** featureId */
      featureId?: number;

      /** message */
      message?: string;

      /** result */
      result?: boolean;
    }

    export class PrimaryKeyInfo {
      /** idType */
      idType?: string;

      /** index */
      index?: number;

      /** keyColumn */
      keyColumn?: string;
    }

    export class Result<T0 = any> {
      /** code */
      code?: string;

      /** data */
      data?: T0;

      /** message */
      message?: string;

      /** success */
      success?: boolean;

      /** total */
      total?: number;
    }

    export class ResultDTO<T0 = any> {
      /** code */
      code?: number;

      /** data */
      data?: T0;

      /** message */
      message?: string;
    }

    export class SamplePartitionVO {
      /** sampleOffset */
      sampleOffset?: string;

      /** samplePartitionFormat */
      samplePartitionFormat?: string;

      /** sampleTn */
      sampleTn?: string;
    }

    export class SingleEnumStatisticInfoDTO {
      /** distributeInfos */
      distributeInfos?: Array<defs.featurePlatform.DistributeInfo>;

      /** samples */
      samples?: Array<object>;

      /** totalNum */
      totalNum?: number;
    }

    export class SingleNumericStatisticInfoDTO {
      /** avgValue */
      avgValue?: defs.featurePlatform.Number;

      /** maxValue */
      maxValue?: defs.featurePlatform.Number;

      /** medianValue */
      medianValue?: defs.featurePlatform.Number;

      /** minValue */
      minValue?: defs.featurePlatform.Number;

      /** samples */
      samples?: Array<object>;

      /** stddevValue */
      stddevValue?: defs.featurePlatform.Number;

      /** totalNum */
      totalNum?: number;
    }

    export class StatusInfo {
      /** errorMsg */
      errorMsg?: string;

      /** message */
      message?: string;

      /** status */
      status?: string;
    }

    export class TableColumnMeta {
      /** columnName */
      columnName?: string;

      /** columnType */
      columnType?: string;

      /** comment */
      comment?: string;

      /** isPartitionCol */
      isPartitionCol?: number;

      /** isPrimaryKey */
      isPrimaryKey?: number;
    }

    export class TableFilterCondition {
      /** curTableJoinKey */
      curTableJoinKey?: string;

      /** featureJoinKey */
      featureJoinKey?: string;

      /** filterCondition */
      filterCondition?: string;

      /** tableName */
      tableName?: string;
    }

    export class TemplateParam {
      /** description */
      description?: string;

      /** paramName */
      paramName?: string;

      /** required */
      required?: boolean;

      /** tips */
      tips?: string;

      /** type */
      type?: string;
    }
  }
}

declare namespace API {
  export namespace featurePlatform {
    /**
     * Feature Controller
     */
    export namespace feature {
      /**
       * 新增驱动表和特征拼接之后的表
       * /feature/addFeatureConcatCacheTable
       */
      export namespace addFeatureConcatCacheTable {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureConcatCacheTableRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureConcatCacheTableRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 新增分组
       * /feature/addFeatureGroup
       */
      export namespace addFeatureGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureAddGroupRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureAddGroupRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 添加质量分
       * /feature/addFeatureQualityScore
       */
      export namespace addFeatureQualityScore {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureQualityScoreRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureQualityScoreRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 新增特征到分组里面
       * /feature/addFeatureToGroup
       */
      export namespace addFeatureToGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureAddGroupRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureAddGroupRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 添加特征使用
       * /feature/addFeatureUsage
       */
      export namespace addFeatureUsage {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(bodyParams: string): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: string,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 重新关联已创建的D2统计节点
       * /feature/associateFeatureStatistics
       */
      export namespace associateFeatureStatistics {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = void;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 修改特征基本信息
       * /feature/base
       */
      export namespace updateBaseFeature {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.BaseFeature;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.OdpsTableRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.OdpsTableRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征统计详情批量写接口
       * /feature/batchAddFeatureStatisticDetail
       */
      export namespace batchAddFeatureStatisticDetail {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: Array<defs.featurePlatform.FeatureStatisticDetailRequest>,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: Array<defs.featurePlatform.FeatureStatisticDetailRequest>,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征统计批量写接口
       * /feature/batchAddFeatureStatistics
       */
      export namespace batchAddFeatureStatistics {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: Array<defs.featurePlatform.FeatureStatisticsRequest>,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: Array<defs.featurePlatform.FeatureStatisticsRequest>,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 批量导入横表特征
       * /feature/batchImportHorizontalFeature
       */
      export namespace batchImportHorizontalFeature {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.ImportTableResponse>;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.HorizontalImportTableRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.HorizontalImportTableRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 批量导入横表多分区特征
       * /feature/batchImportHorizontalMutiFeature
       */
      export namespace batchImportHorizontalMutiFeature {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.ImportTableResponse>;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.HorizontalImportTableMutiPartRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.HorizontalImportTableMutiPartRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 批量导入纵表特征
       * /feature/batchImportLongitudinalFeature
       */
      export namespace batchImportLongitudinalFeature {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.ImportTableResponse>;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.LongitudinalImportTableRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.LongitudinalImportTableRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 校验英文名是否存在
       * /feature/checkEnnameExist
       */
      export namespace checkNameEnExist {
        export class Params {
          /** featureEnname */
          featureEnname: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 校验分区是否存在
       * /feature/checkFeaturePartition
       */
      export namespace checkFeaturePartition {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.CheckFeaturePartitionResponseVO;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.CheckFeaturePartitionVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.CheckFeaturePartitionVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 校验输出节点output是否存在
       * /feature/checkNodeOutputExsit
       */
      export namespace checkNodeOutputExsit {
        export class Params {
          /** outputName */
          outputName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除odps表的列与逻辑类型的映射
       * /feature/columnLogicalMapping
       */
      export namespace deleteColumnLogicalMapping {
        export class Params {
          /** mappingId */
          mappingId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = void;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 注册odps表的列与逻辑类型的映射
       * /feature/columnLogicalMapping
       */
      export namespace registerColumnLogicalMapping {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureColumnLogicalMappingRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureColumnLogicalMappingRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 创建或更新特征的统计
       * /feature/createOrUpdateFeatureStatistics
       */
      export namespace createOrUpdateFeatureStatistics {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = void;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 修改特征creator
       * /feature/creator
       */
      export namespace updateFeatureCreator {
        export class Params {
          /** creator */
          creator: string;
          /** featureId */
          featureId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 添加标签的引用特征
       * /feature/delFeatureUsage
       */
      export namespace deleteFeatureUsage {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(bodyParams: string): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: string,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除全部驱动表和特征拼接之后的表
       * /feature/deleteAllFeatureConcatCacheTable
       */
      export namespace deleteAllFeatureConcatCacheTable {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除特征的d2节点
       * /feature/deleteD2Node
       */
      export namespace deleteD2Node {
        export class Params {
          /** featureId */
          featureId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = void;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除特征的d2节点
       * /feature/deleteD2Node
       */
      export namespace deleteDeleteD2Node {
        export class Params {
          /** featureId */
          featureId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = void;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除驱动表和特征拼接之后的表
       * /feature/deleteFeatureConcatCacheTable
       */
      export namespace deleteFeatureConcatCacheTable {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除分组
       * /feature/deleteFeatureGroup
       */
      export namespace deleteFeatureGroup {
        export class Params {
          /** groupName */
          groupName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除分组里面的特征
       * /feature/deleteFeatureGroupRelation
       */
      export namespace deleteFeatureGroupRelation {
        export class Params {
          /** featureId */
          featureId: number;
          /** groupId */
          groupId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 根据表名删除特征表合并数据
       * /feature/deleteFeatureMergeByTableName
       */
      export namespace deleteFeatureMergeByTableName {
        export class Params {
          /** tableName */
          tableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除质量分数据，后门用于删数据
       * /feature/deleteFeatureQualityScore
       */
      export namespace deleteFeatureQualityScore {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 根据特征id删除质量分数据，后门用于删数据
       * /feature/deleteFeatureQualityScoreByFeatureId
       */
      export namespace deleteFeatureQualityScoreByFeatureId {
        export class Params {
          /** featureId */
          featureId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除特征表合并数据
       * /feature/deleteFeatureTableData
       */
      export namespace deleteFeatureTableData {
        export class Params {
          /** appId */
          appId?: number;
          /** bizId */
          bizId?: number;
          /** featureId */
          featureId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询所有特征
       * /feature/getAllFeature
       */
      export namespace getAllFeature {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.BaseFeature>;

        export const init: Response;

        export function request(): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 批量根据特征名获取特征的id
       * /feature/getFeatureIdList
       */
      export namespace getFeatureIdList {
        export class Params {
          /** featureName */
          featureName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<number>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征所属ID类型枚举值
       * /feature/getFeatureIdType.json
       */
      export namespace getFeatureKeyType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.FeatureKeyType>;

        export const init: Response;

        export function request(): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取特征统计信息
       * /feature/getFeatureStatisticInfo
       */
      export namespace getFeatureStatisticInfo {
        export class Params {
          /** featureId */
          featureId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.ResultDTO<
          defs.featurePlatform.FeatureStatisticInfoResponse
        >;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征更新时间
       * /feature/getFeatureUpdateDate
       */
      export namespace getFeatureUpdateDate {
        export class Params {
          /** featureId */
          featureId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.ResultDTO<string>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 导入特征
       * /feature/importFeature
       */
      export namespace importFeature {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.FeatureResponse;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.OdpsTableRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.OdpsTableRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 单条导入横表的特征
       * /feature/importHorizontallFeature
       */
      export namespace importHorizontallFeature {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.HorizontallOdpsTableRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.HorizontallOdpsTableRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 单条导入纵表的特征
       * /feature/importLongitudinallFeature
       */
      export namespace importLongitudinallFeature {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.LongitudinallOdpsTableRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.LongitudinallOdpsTableRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 提供给算法平台根据5级分类id查询特征信息V2
       * /feature/listAlgorithmFeatureByCategoryIdV2
       */
      export namespace listAlgorithmFeatureByCategoryIdV2 {
        export class Params {
          /** categoryIds */
          categoryIds?: string;
          /** categoryType */
          categoryType?: string;
          /** filterQualityScore */
          filterQualityScore?: string;
          /** idType */
          idType?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId?: number;
          /** searchWord */
          searchWord?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.AalgorithmFeatureResponseV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 批量根据特征id查询特征基本信息
       * /feature/listBaseFeatureById
       */
      export namespace listBaseFeatureById {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.BaseFeature>;

        export const init: Response;

        export function request(bodyParams: Array<number>): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: Array<number>,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 批量根据特征id查询特征基本信息
       * /feature/listBaseFeatureById
       */
      export namespace postListBaseFeatureById {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.BaseFeature>;

        export const init: Response;

        export function request(bodyParams: Array<number>): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: Array<number>,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 根据特征分组名查询特征列表
       * /feature/listFeatureByGroupName
       */
      export namespace listFeatureByGroupName {
        export class Params {
          /** groupEnName */
          groupEnName: string;
          /** page */
          page: number;
          /** pageSize */
          pageSize: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.AalgorithmFeatureResponseV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 根据项目id获取特征列表
       * /feature/listFeatureByProjectId
       */
      export namespace listFeatureByProjectId {
        export class Params {
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.BaseFeature>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 批量根据特征id查询特征详细信息
       * /feature/listFeatureDetailById
       */
      export namespace listFeatureDetailById {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.FeatureResponse>;

        export const init: Response;

        export function request(bodyParams: Array<number>): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: Array<number>,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 批量根据特征id查询特征详细信息
       * /feature/listFeatureDetailById
       */
      export namespace postListFeatureDetailById {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.FeatureResponse>;

        export const init: Response;

        export function request(bodyParams: Array<number>): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: Array<number>,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取特征分组列表
       * /feature/listFeatureGroup
       */
      export namespace listFeatureGroup {
        export class Params {
          /** creator */
          creator?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.FeatureGroupResponse;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 查询推荐特征列表
返回推荐特征列表
        * /feature/listRecommendFeature
        */
      export namespace listRecommendFeature {
        export class Params {
          /** filterQualityScore */
          filterQualityScore?: string;
          /** idType */
          idType?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.ListData<
          defs.featurePlatform.FeatureResponse
        >;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取特征的物理表
       * /feature/odpsTableName
       */
      export namespace getOdpsTableName {
        export class Params {
          /** featureName */
          featureName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = string;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 修改特征属性
       * /feature/updateFeatureProperty
       */
      export namespace updateFeatureProperty {
        export class Params {
          /** featureId */
          featureId: number;
          /** propertyName */
          propertyName: string;
          /** propertyValue */
          propertyValue: object;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 更新特征使用
       * /feature/updateFeatureUsage
       */
      export namespace updateFeatureUsage {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(bodyParams: string): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: string,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 修改Physics特征属性
       * /feature/updatePhysicsFeatureProperty
       */
      export namespace updatePhysicsFeatureProperty {
        export class Params {
          /** featureId */
          featureId: number;
          /** propertyName */
          propertyName: string;
          /** propertyValue */
          propertyValue: object;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }
    }

    /**
     * Feature Backend Controller
     */
    export namespace featureBackend {
      /**
       * 新建特征
       * /featurePlatform/addBaseFeature.json
       */
      export namespace addBaseFeature {
        export class Params {
          /** cateId */
          cateId?: number;
          /** creator */
          creator?: string;
          /** defaultOutputNodeName */
          defaultOutputNodeName?: string;
          /** entityType */
          entityType?: number;
          /** featureColumn */
          featureColumn?: string;
          /** featureDescribe */
          featureDescribe?: string;
          /** featureId */
          featureId?: number;
          /** featureKeyEnumItems */
          featureKeyEnumItems?: string;
          /** featureKeyType */
          featureKeyType?: string;
          /** featureKvKeyPhysicalType */
          featureKvKeyPhysicalType?: string;
          /** featureKvKeyType */
          featureKvKeyType?: string;
          /** featureKvValuePhysicalFormat */
          featureKvValuePhysicalFormat?: string;
          /** featureKvValuePhysicalType */
          featureKvValuePhysicalType?: string;
          /** featureKvValueType */
          featureKvValueType?: string;
          /** featureNameCn */
          featureNameCn?: string;
          /** featureNameColumn */
          featureNameColumn?: string;
          /** featureNameEn */
          featureNameEn?: string;
          /** featureOrganizationType */
          featureOrganizationType?: string;
          /** featurePhysicalFormat */
          featurePhysicalFormat?: string;
          /** featurePhysicalType */
          featurePhysicalType?: string;
          /** featureValueEnumItems */
          featureValueEnumItems?: string;
          /** featureValueType */
          featureValueType?: string;
          /** filterColumn */
          filterColumn?: string;
          /** filterCondition */
          filterCondition?: string;
          /** isPublic */
          isPublic?: number;
          /** keyColumn */
          keyColumn?: string;
          /** kvSeparatorKey */
          kvSeparatorKey?: string;
          /** odpsTableName */
          odpsTableName?: string;
          /** partitionColumn */
          partitionColumn?: string;
          /** partitionFormat */
          partitionFormat?: string;
          /** idType */
          idType?: string;
          /** index */
          index?: number;
          /** projectId */
          projectId?: number;
          /** separatorKey */
          separatorKey?: string;
          /** storeType */
          storeType?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 批量提交上架
       * /featurePlatform/batchProduce.json
       */
      export namespace batchProduce {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.BatchFeatureProduceRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.BatchFeatureProduceRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 校验中文名是否重复
       * /featurePlatform/checkNameCnExist.json
       */
      export namespace checkNameCnExist {
        export class Params {
          /** featureNameCn */
          featureNameCn: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 校验英文名是否重复
       * /featurePlatform/checkNameEnExist.json
       */
      export namespace checkNameEnExist {
        export class Params {
          /** featureNameEn */
          featureNameEn: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除特征
       * /featurePlatform/deleteFeature.json
       */
      export namespace deleteFeature {
        export class Params {
          /** appId */
          appId?: number;
          /** bizId */
          bizId?: number;
          /** featureId */
          featureId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取行为表名
       * /featurePlatform/getBhvTableName.json
       */
      export namespace getBhvTableName {
        export class Params {
          /** bhvId */
          bhvId: number;
          /** fieldNames */
          fieldNames?: Array<string>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = string;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征详情
       * /featurePlatform/getFeatureDetail.json
       */
      export namespace getFeatureDetail {
        export class Params {
          /** featureId */
          featureId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.FeatureResponse;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征详情页V2
       * /featurePlatform/getFeatureDetailV2
       */
      export namespace getFeatureDetailV2 {
        export class Params {
          /** featureId */
          featureId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.ResultDTO<
          defs.featurePlatform.FeatureResponse
        >;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征所属实体类型枚举值
       * /featurePlatform/getFeatureEntityType.json
       */
      export namespace getFeatureEntityType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.FeatureEntityType>;

        export const init: Response;

        export function request(): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征所属ID类型枚举值
       * /featurePlatform/getFeatureKeyType.json
       */
      export namespace getFeatureKeyType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.FeatureKeyType>;

        export const init: Response;

        export function request(): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询表的列信息
       * /featurePlatform/getMetaTableColumn.json
       */
      export namespace getMetaTableColumn {
        export class Params {
          /** table */
          table?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.TableColumnMeta>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 新增模板
       * /featurePlatform/insertTemplate.json
       */
      export namespace insertTemplate {
        export class Params {
          /** code */
          code: string;
          /** name */
          name: string;
          /** params */
          params: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取我的特征列表
       * /featurePlatform/listFeatureByOwner.json
       */
      export namespace listFeatureByOwner {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.BaseFeature>;

        export const init: Response;

        export function request(): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 根据项目id获取特征列表
       * /featurePlatform/listFeatureByProjectId.json
       */
      export namespace listFeatureByProjectId {
        export class Params {
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.BaseFeature>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征列表页管理侧接口
       * /featurePlatform/listFeatures
       */
      export namespace listFeatures {
        export class Params {
          /** authStatus */
          authStatus?: string;
          /** categoryIds */
          categoryIds?: string;
          /** idType */
          idType?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId?: number;
          /** queryPublic */
          queryPublic?: boolean;
          /** queryType */
          queryType?: string;
          /** searchWord */
          searchWord?: string;
          /** userId */
          userId?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.FeatureDataDTO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征列表页接口for用户视角
       * /featurePlatform/listFeaturesV2
       */
      export namespace listFeaturesV2 {
        export class Params {
          /** authStatus */
          authStatus?: string;
          /** categoryIds */
          categoryIds?: string;
          /** idType */
          idType?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId?: number;
          /** queryPublic */
          queryPublic?: boolean;
          /** queryType */
          queryType?: string;
          /** searchWord */
          searchWord?: string;
          /** userId */
          userId?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.FeatureDataDTO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 参数值列表
       * /featurePlatform/listParamField.json
       */
      export namespace listParamField {
        export class Params {
          /** bhvId */
          bhvId: number;
          /** fieldNames */
          fieldNames?: Array<string>;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.OptionItem>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 模板列表
       * /featurePlatform/listProduceTemplate.json
       */
      export namespace listProduceTemplate {
        export class Params {
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.featurePlatform.FeatureTemplate>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 预览sql
       * /featurePlatform/previewSql.json
       */
      export namespace previewSql {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = string;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.BatchFeatureProduceRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.BatchFeatureProduceRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 更新基本信息
       * /featurePlatform/updateBaseFeature.json
       */
      export namespace updateBaseFeature {
        export class Params {
          /** cateId */
          cateId?: number;
          /** creator */
          creator?: string;
          /** defaultOutputNodeName */
          defaultOutputNodeName?: string;
          /** entityType */
          entityType?: number;
          /** featureColumn */
          featureColumn?: string;
          /** featureDescribe */
          featureDescribe?: string;
          /** featureId */
          featureId?: number;
          /** featureKeyEnumItems */
          featureKeyEnumItems?: string;
          /** featureKeyType */
          featureKeyType?: string;
          /** featureKvKeyPhysicalType */
          featureKvKeyPhysicalType?: string;
          /** featureKvKeyType */
          featureKvKeyType?: string;
          /** featureKvValuePhysicalFormat */
          featureKvValuePhysicalFormat?: string;
          /** featureKvValuePhysicalType */
          featureKvValuePhysicalType?: string;
          /** featureKvValueType */
          featureKvValueType?: string;
          /** featureNameCn */
          featureNameCn?: string;
          /** featureNameColumn */
          featureNameColumn?: string;
          /** featureNameEn */
          featureNameEn?: string;
          /** featureOrganizationType */
          featureOrganizationType?: string;
          /** featurePhysicalFormat */
          featurePhysicalFormat?: string;
          /** featurePhysicalType */
          featurePhysicalType?: string;
          /** featureValueEnumItems */
          featureValueEnumItems?: string;
          /** featureValueType */
          featureValueType?: string;
          /** filterColumn */
          filterColumn?: string;
          /** filterCondition */
          filterCondition?: string;
          /** isPublic */
          isPublic?: number;
          /** keyColumn */
          keyColumn?: string;
          /** kvSeparatorKey */
          kvSeparatorKey?: string;
          /** odpsTableName */
          odpsTableName?: string;
          /** partitionColumn */
          partitionColumn?: string;
          /** partitionFormat */
          partitionFormat?: string;
          /** idType */
          idType?: string;
          /** index */
          index?: number;
          /** projectId */
          projectId?: number;
          /** separatorKey */
          separatorKey?: string;
          /** storeType */
          storeType?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 更新全量特征信息
       * /featurePlatform/updateFeature.json
       */
      export namespace updateFeature {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.OdpsTableRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.OdpsTableRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }
    }

    /**
     * Feature Engineering Controller
     */
    export namespace featureEngineering {
      /**
       * 特征分区检测，for人群优选场景
       * /feature/engineering/checkFeaturePartition
       */
      export namespace checkFeaturePartition {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.CheckFeaturePartitionRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.CheckFeaturePartitionRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征分区检测V2版本，for标签手动业务流程
       * /feature/engineering/checkFeaturePartitionV2
       */
      export namespace checkFeaturePartitionV2 {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.CheckFeaturePartitionRequestV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.CheckFeaturePartitionRequestV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取特征工程状态及结果
       * /feature/engineering/checkPartitionResult
       */
      export namespace checkPartitionResult {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.CheckPartitionResponse;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征提取任务
       * /feature/engineering/featureExtract
       */
      export namespace featureExtract {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureEngineeringRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureEngineeringRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征提取任务不做union优化
       * /feature/engineering/featureExtractV2
       */
      export namespace featureExtractV2 {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureEngineeringRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureEngineeringRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征提取没有样本
       * /feature/engineering/featureExtractWithOutSample
       */
      export namespace featureExtractWithOutSample {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureExtractRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureExtractRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征预聚合
       * /feature/engineering/featurePreprocess
       */
      export namespace featurePreprocess {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = string;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeaturePreprocessRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeaturePreprocessRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 清除kv编码表
       * /feature/engineering/kv-encoding-table
       */
      export namespace cleanupKvEncodingTable {
        export class Params {
          /** uniqueKey */
          uniqueKey: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = void;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取特征工程状态及结果
       * /feature/engineering/result
       */
      export namespace featureEngineeringResult {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.FeatureEngineeringResponse;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 特征序列化
       * /feature/engineering/serialize
       */
      export namespace serialize {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureSerializeRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureSerializeRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取特征序列化状态及结果
       * /feature/engineering/serialize/result
       */
      export namespace serializeResult {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.FeatureSerializeResponse;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 生成特征序列化sql
       * /feature/engineering/serialize/sql
       */
      export namespace serializeSql {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = string;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureSerializeRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureSerializeRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 生成特征工程SQL
       * /feature/engineering/sql
       */
      export namespace featureEngineeringSql {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = string;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureEngineeringRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureEngineeringRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 提交特征工程任务
       * /feature/engineering/submit
       */
      export namespace featureEngineering {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureEngineeringRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureEngineeringRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取任务执行日志链接
       * /feature/engineering/task/log
       */
      export namespace featureEngineeringTaskLog {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = string;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }
    }

    /**
     * Feature Produce Controller
     */
    export namespace featureProduce {
      /**
       * 特征copy
       * /feature/produce/copyFeature
       */
      export namespace copyFeature {
        export class Params {
          /** featureId */
          featureId: number;
          /** projectId */
          projectId: number;
          /** suffix */
          suffix: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 增强特征注册
       * /feature/produce/featureEnhanceAdd
       */
      export namespace featureEnhance {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.featurePlatform.AddEnhanceFeatureResult;

        export const init: Response;

        export function request(
          bodyParams: defs.featurePlatform.FeatureEnhanceRequest,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.featurePlatform.FeatureEnhanceRequest,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 填充logicalMapping
       * /feature/produce/fillLogicalMapping
       */
      export namespace fillLogicalMappingForFeatureProduce {
        export class Params {
          /** featureId */
          featureId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }
    }
  }
}
