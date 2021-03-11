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
  export namespace daas {
    export class AccountAssetsRelExtBO {
      /** applyData */
      applyData?: string;

      /** applyReason */
      applyReason?: string;

      /** applyStatus */
      applyStatus?: string;

      /** bizScopeName */
      bizScopeName?: string;

      /** cateId */
      cateId?: number;

      /** cateName */
      cateName?: string;

      /** enoughCapacity */
      enoughCapacity?: boolean;

      /** scene */
      scene?: string;
    }

    export class AddLabelParam {
      /** accuracy */
      accuracy?: number;

      /** belongProjectId */
      belongProjectId?: number;

      /** isVersion */
      isVersion?: boolean;

      /** labelLists */
      labelLists?: Array<defs.daas.LabelSimpleParam>;

      /** nodeId */
      nodeId?: string;

      /** odpsTable */
      odpsTable?: string;

      /** primaryKeyList */
      primaryKeyList?: Array<defs.daas.LabelKeyDataSchema>;

      /** source */
      source?: string;
    }

    export class AddOneidParam {
      /** cateId */
      cateId?: number;

      /** dataSchema */
      dataSchema?: string;

      /** description */
      description?: string;

      /** encType */
      encType?: string;

      /** introduce */
      introduce?: string;

      /** name */
      name?: string;

      /** securityLevel */
      securityLevel?: string;

      /** type */
      type?: string;
    }

    export class AoneBO {
      /** aoneId */
      aoneId?: number;

      /** aoneName */
      aoneName?: string;
    }

    export class ApplyingResourceBO {
      /** bpmsId */
      bpmsId?: string;

      /** name */
      name?: string;

      /** owner */
      owner?: defs.daas.EmpBO;

      /** resourceType */
      resourceType?: string;

      /** status */
      status?: string;
    }

    export class AssetApply4BpmsParam {
      /** appName */
      appName?: string;

      /** applyReason */
      applyReason?: string;

      /** creator */
      creator?: string;

      /** entityType */
      entityType?: string;

      /** projectId */
      projectId?: number;

      /** requestId */
      requestId?: string;

      /** responseIds */
      responseIds?: string;

      /** serviceId */
      serviceId?: number;

      /** unityRequestId */
      unityRequestId?: number;
    }

    export class AssetApplyParam {
      /** applyReason */
      applyReason?: string;

      /** assetIdList */
      assetIdList?: Array<number>;

      /** assetScopes */
      assetScopes?: Array<defs.daas.AssetScope>;

      /** assetType */
      assetType?: string;

      /** businessScopeId */
      businessScopeId?: number;

      /** creatorId */
      creatorId?: string;

      /** detailCapacity */
      detailCapacity?: string;

      /** endTime */
      endTime?: string;

      /** enoughCapacity */
      enoughCapacity?: boolean;
    }

    export class AssetGroupBO {
      /** assetGroupExtendInfoBO */
      assetGroupExtendInfoBO?: defs.daas.AssetGroupExtendInfoBO;

      /** code */
      code?: string;

      /** creator */
      creator?: string;

      /** description */
      description?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** keyType */
      keyType?: string;

      /** labelIds */
      labelIds?: Array<number>;

      /** projectId */
      projectId?: number;

      /** serviceId */
      serviceId?: number;

      /** targetApp */
      targetApp?: string;
    }

    export class AssetGroupExtendInfoBO {
      /** admin */
      admin?: string;

      /** configStatus */
      configStatus?: string;

      /** syncStatus */
      syncStatus?: string;

      /** syncedCount */
      syncedCount?: number;

      /** workflowName */
      workflowName?: string;

      /** workflowTaskId */
      workflowTaskId?: number;
    }

    export class AssetPermissionBO {
      /** assetId */
      assetId?: number;

      /** assetType */
      assetType?: string;

      /** hasPermission */
      hasPermission?: boolean;

      /** scenePermissions */
      scenePermissions?: defs.daas.ScenePermission;
    }

    export class AssetScope {
      /** assetId */
      assetId?: number;

      /** hjcCateId */
      hjcCateId?: number;

      /** hjcCateName */
      hjcCateName?: string;

      /** scene */
      scene?: string;
    }

    export class AuthLabelItemVO {
      /** applyDate */
      applyDate?: string;

      /** applyUser */
      applyUser?: defs.daas.Employee;

      /** authStatus */
      authStatus?: string;

      /** bpmsId */
      bpmsId?: string;

      /** creatorId */
      creatorId?: string;

      /** dataTypeId */
      dataTypeId?: number;

      /** endDate */
      endDate?: string;

      /** id */
      id?: number;

      /** idType */
      idType?: defs.daas.IdType;

      /** labelDescription */
      labelDescription?: string;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** useMode */
      useMode?: string;
    }

    export class AuthLabelListParm {
      /** 目标系统 */
      appName?: string;

      /** authStatus */
      authStatus?: string;

      /** 实体类型 */
      entityType?: string;

      /** ID类型 */
      inputIdType?: string;

      /** keyword */
      keyword?: string;

      /** order */
      order?: string;

      /** orderBy */
      orderBy?: string;

      /** page */
      page?: number;

      /** pageSize */
      pageSize?: number;

      /** 项目ID */
      projectId?: number;

      /** requestId */
      requestId?: string;

      /** responseIds */
      responseIds?: number;

      /** 标签范围，my/all */
      scope?: string;

      /** 服务ID */
      serviceId?: number;
    }

    export class AuthType {
      /** inputAuthMsg */
      inputAuthMsg?: string;

      /** inputAuthType */
      inputAuthType?: string;

      /** inputBpmsLink */
      inputBpmsLink?: string;

      /** inputTableName */
      inputTableName?: string;

      /** outputAuthMsg */
      outputAuthMsg?: string;

      /** outputAuthType */
      outputAuthType?: string;

      /** outputTableName */
      outputTableName?: string;

      /** taskId */
      taskId?: number;

      /** type */
      type?: string;

      /** value */
      value?: string;
    }

    export class BehaviorItemBO {
      /** authStatus */
      authStatus?: string;

      /** belongProjectId */
      belongProjectId?: number;

      /** bpmsId */
      bpmsId?: string;

      /** cateId */
      cateId?: number;

      /** creatorId */
      creatorId?: string;

      /** description */
      description?: string;

      /** dwType */
      dwType?: string;

      /** entityType */
      entityType?: string;

      /** env */
      env?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isPublic */
      isPublic?: boolean;

      /** lifecycle */
      lifecycle?: number;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** ownerId */
      ownerId?: string;

      /** owners */
      owners?: defs.daas.EmpBO;

      /** platform */
      platform?: string;

      /** status */
      status?: string;

      /** statusInfo */
      statusInfo?: defs.daas.StatusInfo;

      /** targetCn */
      targetCn?: string;

      /** targetEn */
      targetEn?: string;
    }

    export class BhvBehaviorDO {
      /** belongProjectId */
      belongProjectId?: number;

      /** bhvMetaList */
      bhvMetaList?: Array<defs.daas.BhvMetaDO>;

      /** cateId */
      cateId?: number;

      /** categoryDO */
      categoryDO?: defs.daas.CategoryDO;

      /** creatorId */
      creatorId?: string;

      /** description */
      description?: string;

      /** dwType */
      dwType?: string;

      /** entityType */
      entityType?: string;

      /** entityTypeName */
      entityTypeName?: string;

      /** env */
      env?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isPublic */
      isPublic?: boolean;

      /** lifecycle */
      lifecycle?: number;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** ownerId */
      ownerId?: string;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** platform */
      platform?: string;

      /** status */
      status?: string;

      /** statusInfo */
      statusInfo?: defs.daas.StatusInfo;

      /** tableStatusInfo */
      tableStatusInfo?: defs.daas.StatusInfo;

      /** targetCn */
      targetCn?: string;

      /** targetEn */
      targetEn?: string;
    }

    export class BhvFieldDO {
      /** alias */
      alias?: string;

      /** dataType */
      dataType?: string;

      /** description */
      description?: string;

      /** dimField */
      dimField?: string;

      /** dimNameField */
      dimNameField?: string;

      /** dimTable */
      dimTable?: string;

      /** dimTableProject */
      dimTableProject?: string;

      /** domainId */
      domainId?: number;

      /** enumValues */
      enumValues?: string;

      /** id */
      id?: number;

      /** isBind */
      isBind?: boolean;

      /** isDimTableEnum */
      isDimTableEnum?: boolean;

      /** isEnum */
      isEnum?: boolean;

      /** isSystem */
      isSystem?: boolean;

      /** logicFieldId */
      logicFieldId?: number;

      /** metaId */
      metaId?: number;

      /** name */
      name?: string;

      /** nameEn */
      nameEn?: string;

      /** phyFieldWithUdf */
      phyFieldWithUdf?: string;

      /** sample */
      sample?: string;

      /** sampleList */
      sampleList?: Array<string>;

      /** schemaDescription */
      schemaDescription?: string;

      /** schemaName */
      schemaName?: string;

      /** schemaType */
      schemaType?: string;

      /** secureLevel */
      secureLevel?: string;

      /** standardFieldName */
      standardFieldName?: string;

      /** status */
      status?: string;

      /** statusInfo */
      statusInfo?: defs.daas.StatusInfo;

      /** storageDataType */
      storageDataType?: string;

      /** storageFieldId */
      storageFieldId?: number;

      /** storageFieldName */
      storageFieldName?: string;

      /** storageIsFixed */
      storageIsFixed?: boolean;

      /** storageTableId */
      storageTableId?: number;
    }

    export class BhvMetaDO {
      /** belongProjectId */
      belongProjectId?: number;

      /** bhvId */
      bhvId?: number;

      /** bhvOutputNode */
      bhvOutputNode?: string;

      /** bpmsId */
      bpmsId?: string;

      /** cateId */
      cateId?: number;

      /** categoryDO */
      categoryDO?: defs.daas.CategoryDO;

      /** code */
      code?: string;

      /** creatorId */
      creatorId?: string;

      /** description */
      description?: string;

      /** dwType */
      dwType?: string;

      /** entityType */
      entityType?: string;

      /** env */
      env?: string;

      /** fieldList */
      fieldList?: Array<defs.daas.BhvFieldDO>;

      /** filterConditions */
      filterConditions?: string;

      /** firstAddedTime */
      firstAddedTime?: string;

      /** fullTableName */
      fullTableName?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** idColumn */
      idColumn?: string;

      /** idType */
      idType?: string;

      /** isPublic */
      isPublic?: boolean;

      /** isStore */
      isStore?: boolean;

      /** keyStorageFieldId */
      keyStorageFieldId?: number;

      /** lifecycle */
      lifecycle?: number;

      /** msg */
      msg?: string;

      /** name */
      name?: string;

      /** operatorId */
      operatorId?: string;

      /** operators */
      operators?: Array<defs.daas.EmpBO>;

      /** outputNode */
      outputNode?: string;

      /** ownerId */
      ownerId?: string;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** phyProject */
      phyProject?: string;

      /** phyStoreType */
      phyStoreType?: string;

      /** phyTable */
      phyTable?: string;

      /** phyTableType */
      phyTableType?: string;

      /** phyTimeField */
      phyTimeField?: string;

      /** phyTimeFieldFormatter */
      phyTimeFieldFormatter?: string;

      /** phyType */
      phyType?: string;

      /** platform */
      platform?: string;

      /** preRunResult */
      preRunResult?: string;

      /** secureLevel */
      secureLevel?: string;

      /** status */
      status?: string;

      /** statusInfo */
      statusInfo?: defs.daas.StatusInfo;

      /** storageTableId */
      storageTableId?: number;

      /** storageTableSeq */
      storageTableSeq?: number;

      /** targetCn */
      targetCn?: string;

      /** targetEn */
      targetEn?: string;

      /** testDate */
      testDate?: string;

      /** viewName */
      viewName?: string;

      /** viewProject */
      viewProject?: string;
    }

    export class BhvNameBO {
      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;
    }

    export class BhvParam {
      /** attributeId */
      attributeId?: number;

      /** attributeName */
      attributeName?: string;

      /** bhvId */
      bhvId?: number;

      /** bhvMetaId */
      bhvMetaId?: number;

      /** endDay */
      endDay?: string;

      /** extraInfo */
      extraInfo?: string;

      /** filters */
      filters?: Array<defs.daas.FilterParam>;

      /** objectId */
      objectId?: string;

      /** op */
      op?: string;

      /** startDay */
      startDay?: string;

      /** statisticType */
      statisticType?: string;

      /** timeType */
      timeType?: string;

      /** timespan */
      timespan?: number;

      /** values */
      values?: Array<string>;
    }

    export class BhvParamV2 {
      /** 行为id */
      bhvId?: number;

      /** scope结束日期 */
      endDay?: string;

      /** 扩展信息，前端用 */
      extraInfo?: string;

      /** 过滤条件 */
      filters?: Array<defs.daas.FilterParamV2>;

      /** 唯一id，前端生成 */
      objectId?: string;

      /** scope开始日期 */
      startDay?: string;

      /** 时间类型，动态/静态 */
      timeType?: string;

      /** recent时间配置 */
      timespan?: number;
    }

    export class BhvPlatform {
      /** checked */
      checked?: boolean;

      /** disabled */
      disabled?: boolean;

      /** name */
      name?: string;

      /** platform */
      platform?: string;
    }

    export class BhvPreRunResultBO {
      /** allNum */
      allNum?: string;

      /** bhvId */
      bhvId?: number;

      /** canPublish */
      canPublish?: boolean;

      /** columnNames */
      columnNames?: Array<string>;

      /** dataCreate */
      dataCreate?: string;

      /** dataResultSet */
      dataResultSet?: Array<defs.daas.ObjectMap<string, ObjectMap>>;

      /** statisticalData */
      statisticalData?: object;

      /** success */
      success?: boolean;

      /** tempTableColumnName */
      tempTableColumnName?: string;

      /** tempTableDs */
      tempTableDs?: string;

      /** tempTableKeyName */
      tempTableKeyName?: string;

      /** tempTableName */
      tempTableName?: string;
    }

    export class BhvPreRunSubmitResultBO {
      /** authInfo */
      authInfo?: Array<defs.daas.ObjectMap<string, string>>;

      /** checkSuccess */
      checkSuccess?: boolean;

      /** idList */
      idList?: Array<number>;
    }

    export class BhvSchemaDO {
      /** creatorId */
      creatorId?: string;

      /** dataType */
      dataType?: string;

      /** description */
      description?: string;

      /** dimField */
      dimField?: string;

      /** dimNameField */
      dimNameField?: string;

      /** dimTable */
      dimTable?: string;

      /** dimTableProject */
      dimTableProject?: string;

      /** domainId */
      domainId?: string;

      /** domains */
      domains?: string;

      /** enumValues */
      enumValues?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isBind */
      isBind?: boolean;

      /** isDimTableEnum */
      isDimTableEnum?: boolean;

      /** isEnum */
      isEnum?: boolean;

      /** isSystem */
      isSystem?: boolean;

      /** name */
      name?: string;

      /** status */
      status?: string;

      /** type */
      type?: string;
    }

    export class BrandVO {
      /** brandId */
      brandId?: number;

      /** brandName */
      brandName?: string;
    }

    export class BusinessScopeBO {
      /** admins */
      admins?: Array<defs.daas.EmpBO>;

      /** buCode */
      buCode?: string;

      /** description */
      description?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** group */
      group?: string;

      /** id */
      id?: number;

      /** isAdmin */
      isAdmin?: boolean;

      /** isMember */
      isMember?: boolean;

      /** linkId */
      linkId?: number;

      /** mainIdType */
      mainIdType?: string;

      /** members */
      members?: Array<defs.daas.EmpBO>;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** projectNameCn */
      projectNameCn?: string;

      /** selectStatus */
      selectStatus?: defs.daas.SelectStatus;
    }

    export class CateInfo {
      /** cateId */
      cateId?: number;

      /** cateLevel */
      cateLevel?: number;

      /** cateName */
      cateName?: string;

      /** isLeaf */
      isLeaf?: string;
    }

    export class CateProp {
      /** cateId */
      cateId?: number;

      /** cateName */
      cateName?: string;

      /** propertyId */
      propertyId?: number;

      /** propertyName */
      propertyName?: string;
    }

    export class CatePropValue {
      /** cateId */
      cateId?: number;

      /** cateName */
      cateName?: string;

      /** propertyId */
      propertyId?: number;

      /** propertyName */
      propertyName?: string;

      /** valueId */
      valueId?: number;

      /** valueName */
      valueName?: string;
    }

    export class CategoryBO {
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

    export class CategoryDO {
      /** approverId */
      approverId?: string;

      /** bpmsId */
      bpmsId?: string;

      /** cate1Id */
      cate1Id?: number;

      /** cate2Id */
      cate2Id?: number;

      /** cate3Id */
      cate3Id?: number;

      /** cate4Id */
      cate4Id?: number;

      /** cate5Id */
      cate5Id?: number;

      /** childs */
      childs?: Array<defs.daas.CategoryDO>;

      /** cnt */
      cnt?: number;

      /** creatorId */
      creatorId?: string;

      /** description */
      description?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** ids */
      ids?: string;

      /** isLeaf */
      isLeaf?: boolean;

      /** level */
      level?: number;

      /** levelName */
      levelName?: string;

      /** name */
      name?: string;

      /** pid */
      pid?: number;

      /** status */
      status?: string;

      /** type */
      type?: string;
    }

    export class CategoryResponse {
      /** children */
      children?: Array<defs.daas.CategoryResponse>;

      /** description */
      description?: string;

      /** entityCount */
      entityCount?: number;

      /** id */
      id?: number;

      /** isLeaf */
      isLeaf?: boolean;

      /** level */
      level?: number;

      /** levelName */
      levelName?: string;

      /** name */
      name?: string;

      /** pid */
      pid?: number;

      /** type */
      type?: string;
    }

    export class CheckResult {
      /** canSelect */
      canSelect?: boolean;

      /** msg */
      msg?: string;
    }

    export class ClassificationDTO {
      /** classification */
      classification?: string;

      /** classificationLevel */
      classificationLevel?: string;

      /** classificationTypeName */
      classificationTypeName?: string;

      /** createTimeStamp */
      createTimeStamp?: string;

      /** entityCategory */
      entityCategory?: string;

      /** entityId */
      entityId?: string;

      /** entityName */
      entityName?: string;

      /** guid */
      guid?: string;

      /** propagation */
      propagation?: boolean;

      /** ttl */
      ttl?: number;

      /** updateTimeStamp */
      updateTimeStamp?: string;
    }

    export class Column {
      /** categoryLabel */
      categoryLabel?: string;

      /** comment */
      comment?: string;

      /** defaultValue */
      defaultValue?: string;

      /** extendedlabels */
      extendedlabels?: Array<string>;

      /** genericTypeList */
      genericTypeList?: Array<string>;

      /** label */
      label?: number;

      /** name */
      name?: string;

      /** nullable */
      nullable?: boolean;

      /** type */
      type?:
        | 'BIGINT'
        | 'DOUBLE'
        | 'BOOLEAN'
        | 'DATETIME'
        | 'STRING'
        | 'DECIMAL'
        | 'MAP'
        | 'ARRAY'
        | 'VOID'
        | 'TINYINT'
        | 'SMALLINT'
        | 'INT'
        | 'FLOAT'
        | 'CHAR'
        | 'VARCHAR'
        | 'DATE'
        | 'TIMESTAMP'
        | 'BINARY'
        | 'INTERVAL_DAY_TIME'
        | 'INTERVAL_YEAR_MONTH'
        | 'STRUCT';

      /** typeInfo */
      typeInfo?: defs.daas.TypeInfo;
    }

    export class CommonDataResult {
      /** data */
      data?: string;

      /** msg */
      msg?: string;

      /** res */
      res?: boolean;
    }

    export class CommonItem {
      /** content */
      content?: string;

      /** ext */
      ext?: object;

      /** img */
      img?: string;

      /** subContent */
      subContent?: Array<defs.daas.CommonItem>;

      /** title */
      title?: defs.daas.UrlItem;

      /** urls */
      urls?: Array<defs.daas.UrlItem>;
    }

    export class CommonKVResult {
      /** label */
      label?: string;

      /** tips */
      tips?: string;

      /** type */
      type?: string;

      /** url */
      url?: string;

      /** value */
      value?: object;
    }

    export class CreateBusinessScopeParam {
      /** admin */
      admin?: string;

      /** description */
      description?: string;

      /** diProjectId */
      diProjectId?: number;

      /** id */
      id?: number;

      /** mainIdType */
      mainIdType?: string;

      /** members */
      members?: Array<string>;

      /** name */
      name?: string;

      /** objectConfId */
      objectConfId?: number;

      /** tenantId */
      tenantId?: number;
    }

    export class CrowdBO {
      /** amount */
      amount?: string;

      /** authStatus */
      authStatus?: string;

      /** authorityTypeEnum */
      authorityTypeEnum?: 'EMPTY' | 'MEMBER' | 'ADMIN' | 'JOINED' | 'ALL';

      /** bpmsId */
      bpmsId?: string;

      /** businessScopeId */
      businessScopeId?: number;

      /** businessScopeName */
      businessScopeName?: string;

      /** description */
      description?: string;

      /** expireTime */
      expireTime?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** owner */
      owner?: defs.daas.EmpBO;
    }

    export class CycleCondition {
      /** id */
      id?: number;

      /** key */
      key?: string;

      /** value */
      value?: string;
    }

    export class CycleInfoParam {
      /** 枚举类取值描述 */
      description?: string;

      /** 枚举类取值 */
      name?: string;
    }

    export class DependentLabelParam {
      /** cycle */
      cycle?: string;

      /** labelId */
      labelId?: number;

      /** lastTimePartition */
      lastTimePartition?: string;

      /** name */
      name?: string;
    }

    export class DomainDO {
      /** description */
      description?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: string;

      /** name */
      name?: string;
    }

    export class EmpBO {
      /** buCode */
      buCode?: string;

      /** depName */
      depName?: string;

      /** email */
      email?: string;

      /** empId */
      empId?: string;

      /** empType */
      empType?: string;

      /** gender */
      gender?: string;

      /** id */
      id?: number;

      /** jobName */
      jobName?: string;

      /** jobType */
      jobType?: string;

      /** name */
      name?: string;

      /** nickName */
      nickName?: string;

      /** oneId */
      oneId?: string;

      /** picUrl */
      picUrl?: string;
    }

    export class Employee {
      /** empId */
      empId?: string;

      /** name */
      name?: string;

      /** nickName */
      nickName?: string;
    }

    export class EntityType {
      /** cateType */
      cateType?: string;

      /** entityName */
      entityName?: string;

      /** entityValue */
      entityValue?: string;

      /** idType */
      idType?: string;
    }

    export class FbiBO {
      /** id */
      id?: number;

      /** name */
      name?: string;
    }

    export class FilterParam {
      /** filterFileId */
      filterFileId?: string;

      /** filterFileURL */
      filterFileURL?: string;

      /** filterId */
      filterId?: number;

      /** filterName */
      filterName?: string;

      /** filterType */
      filterType?: string;

      /** op */
      op?: string;

      /** values */
      values?: Array<string>;
    }

    export class FilterParamV2 {
      /** 文件唯一标识 */
      filterFileId?: string;

      /** 文件下载链接 */
      filterFileURL?: string;

      /** 字段id */
      filterId?: number;

      /** 过滤条件手动输入(input)或上传文件(upload) */
      filterType?: string;

      /** 关系 */
      op?: string;

      /** 计算方式，可选 */
      statisticType?: string;

      /** 值 */
      values?: Array<string>;
    }

    export class FormConfigDO {
      /** content */
      content?: string;

      /** id */
      id?: number;
    }

    export class FuwuItemAuthBO {
      /** applyTime */
      applyTime?: string;

      /** applyUser */
      applyUser?: defs.daas.EmpBO;

      /** authStatus */
      authStatus?: string;

      /** canTest */
      canTest?: boolean;

      /** description */
      description?: string;

      /** id */
      id?: number;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** ownerId */
      ownerId?: string;
    }

    export class FuwuItemBO {
      /** callCnt */
      callCnt?: number;

      /** description */
      description?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** interfaceCnt */
      interfaceCnt?: number;

      /** isDataReal */
      isDataReal?: boolean;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** ownerIds */
      ownerIds?: string;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** projectCallCnt */
      projectCallCnt?: number;

      /** serviceType */
      serviceType?: string;

      /** supportGroup */
      supportGroup?: string;

      /** templateConfig */
      templateConfig?: string;
    }

    export class FuwuItemSimpleBO {
      /** description */
      description?: string;

      /** id */
      id?: number;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** serviceType */
      serviceType?: string;
    }

    export class FuwuOverviewBO {
      /** recentList */
      recentList?: Array<defs.daas.FuwuItemSimpleBO>;

      /** recommendList */
      recommendList?: Array<defs.daas.FuwuItemSimpleBO>;

      /** totalCount */
      totalCount?: number;
    }

    export class GprofileAssetBO {
      /** applyDate */
      applyDate?: string;

      /** bpmsId */
      bpmsId?: string;

      /** endDate */
      endDate?: string;

      /** id */
      id?: number;

      /** labelDescription */
      labelDescription?: string;

      /** labelNameCn */
      labelNameCn?: string;

      /** labelNameEn */
      labelNameEn?: string;

      /** labelValue */
      labelValue?: string;

      /** status */
      status?: string;
    }

    export class GuardBpmsBO {
      /** guardBpmsLink */
      guardBpmsLink?: string;

      /** tableName */
      tableName?: string;

      /** taskId */
      taskId?: number;
    }

    export class HsfType {
      /** children */
      children?: Array<defs.daas.HsfType>;

      /** defaultValue */
      defaultValue?: object;

      /** desc */
      desc?: string;

      /** hidden */
      hidden?: boolean;

      /** name */
      name?: string;

      /** required */
      required?: boolean;

      /** sample */
      sample?: string;

      /** type */
      type?: string;
    }

    export class IdMappingAssetBO {
      /** applyDate */
      applyDate?: string;

      /** bpmsId */
      bpmsId?: string;

      /** endDate */
      endDate?: string;

      /** requestId */
      requestId?: number;

      /** requestNameCn */
      requestNameCn?: string;

      /** requestNameEn */
      requestNameEn?: string;

      /** responseId */
      responseId?: number;

      /** responseNameCn */
      responseNameCn?: string;

      /** responseNameEn */
      responseNameEn?: string;

      /** status */
      status?: string;
    }

    export class IdType {
      /** description */
      description?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;
    }

    export class IdTypeDO {
      /** cateId */
      cateId?: number;

      /** cateName */
      cateName?: string;

      /** children */
      children?: Array<object>;

      /** childs */
      childs?: Array<defs.daas.IdTypeDO>;

      /** dataSchema */
      dataSchema?: string;

      /** description */
      description?: string;

      /** encType */
      encType?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** idTypeDataSchema */
      idTypeDataSchema?: defs.daas.IdTypeDataSchema;

      /** introduce */
      introduce?: string;

      /** name */
      name?: string;

      /** securityLevel */
      securityLevel?: string;

      /** source */
      source?: string;

      /** type */
      type?: string;

      /** unifyDataId */
      unifyDataId?: number;
    }

    export class IdTypeDataSchema {
      /** dataFormat */
      dataFormat?: string;

      /** dataType */
      dataType?: string;

      /** rangeType */
      rangeType?: string;

      /** rangeValue */
      rangeValue?: ObjectMap<any, string>;

      /** type */
      type?: string;
    }

    export class IndustryInfo {
      /** ind1Id */
      ind1Id?: number;

      /** ind1Name */
      ind1Name?: string;

      /** xcat1Id */
      xcat1Id?: number;

      /** xcat1Name */
      xcat1Name?: string;
    }

    export class JSONObject {}

    export class LabelApplyStatBO {
      /** applyCnt */
      applyCnt?: number;

      /** applyMode */
      applyMode?: string;
    }

    export class LabelBO {
      /** id */
      id?: number;

      /** labelBaseInfo */
      labelBaseInfo?: defs.daas.LabelBaseInfo;

      /** labelLogicInfo */
      labelLogicInfo?: defs.daas.LabelLogicInfo;

      /** labelPhysicInfo */
      labelPhysicInfo?: defs.daas.LabelPhysicInfo;
    }

    export class LabelBaseInfo {
      /** accuracy */
      accuracy?: number;

      /** authStatus */
      authStatus?: string;

      /** belongProjectId */
      belongProjectId?: number;

      /** bizDomainId */
      bizDomainId?: string;

      /** bizSource */
      bizSource?: string;

      /** bpmsId */
      bpmsId?: string;

      /** cateId */
      cateId?: number;

      /** cateName */
      cateName?: string;

      /** category */
      category?: defs.daas.CategoryBO;

      /** coverCnt */
      coverCnt?: number;

      /** coverCntRange */
      coverCntRange?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorInfo */
      creatorInfo?: defs.daas.EmpBO;

      /** description */
      description?: string;

      /** env */
      env?: string;

      /** example */
      example?: string;

      /** extendDescription */
      extendDescription?: string;

      /** extendInfo */
      extendInfo?: string;

      /** firstAddedTime */
      firstAddedTime?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** infoLevel */
      infoLevel?: string;

      /** isCooperate */
      isCooperate?: boolean;

      /** isOfficial */
      isOfficial?: boolean;

      /** isPublic */
      isPublic?: boolean;

      /** labelCn */
      labelCn?: string;

      /** labelEn */
      labelEn?: string;

      /** labelExtendInfo */
      labelExtendInfo?: defs.daas.LabelExtendInfo;

      /** labelGroupId */
      labelGroupId?: number;

      /** labelGroupNameCn */
      labelGroupNameCn?: string;

      /** labelGroupNameEn */
      labelGroupNameEn?: string;

      /** lastAddedTime */
      lastAddedTime?: string;

      /** operators */
      operators?: Array<defs.daas.EmpBO>;

      /** ownerIds */
      ownerIds?: string;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** platform */
      platform?: string;

      /** produceTime */
      produceTime?: string;

      /** produceType */
      produceType?: number;

      /** securityLevel */
      securityLevel?: string;

      /** seedCrowSource */
      seedCrowSource?: string;

      /** status */
      status?: string;

      /** statusInfo */
      statusInfo?: defs.daas.StatusInfo;

      /** testSampleDesc */
      testSampleDesc?: string;

      /** valDesc */
      valDesc?: string;
    }

    export class LabelBaseParam {
      /** cateId */
      cateId?: number;

      /** configString */
      configString?: string;

      /** copyFromLabelId */
      copyFromLabelId?: number;

      /** description */
      description?: string;

      /** entityType */
      entityType?: string;

      /** isPublic */
      isPublic?: boolean;

      /** labelCn */
      labelCn?: string;

      /** labelEn */
      labelEn?: string;

      /** labelGroupId */
      labelGroupId?: number;

      /** labelId */
      labelId?: number;

      /** produceType */
      produceType?: number;

      /** projectId */
      projectId?: number;
    }

    export class LabelCallStatBO {
      /** callCnt */
      callCnt?: number;

      /** callOffIdCnt */
      callOffIdCnt?: number;

      /** callOlCnt */
      callOlCnt?: number;

      /** labelUnityId */
      labelUnityId?: number;

      /** projectCallCnt */
      projectCallCnt?: number;

      /** projectOffCallCnt */
      projectOffCallCnt?: number;

      /** projectOlCallCnt */
      projectOlCallCnt?: number;

      /** projectStatList */
      projectStatList?: Array<defs.daas.ProjectStatBO>;

      /** statDate */
      statDate?: string;
    }

    export class LabelCheckApplyResultBO {
      /** authStatus */
      authStatus?: string;

      /** checkResult */
      checkResult?: defs.daas.CheckResult;

      /** idType */
      idType?: string;

      /** labelId */
      labelId?: number;

      /** nameCn */
      nameCn?: string;

      /** useMode */
      useMode?: string;
    }

    export class LabelCheckResultBO {
      /** baselineMsg */
      baselineMsg?: string;

      /** labelCnMsg */
      labelCnMsg?: string;

      /** labelEn */
      labelEn?: string;

      /** labelEnMsg */
      labelEnMsg?: string;

      /** res */
      res?: boolean;
    }

    export class LabelConfidenceParam {
      /** description */
      description?: string;

      /** hasConfidence */
      hasConfidence?: boolean;

      /** physColEn */
      physColEn?: string;

      /** template */
      template?: string;

      /** valDataType */
      valDataType?: string;

      /** valDistriType */
      valDistriType?: string;
    }

    export class LabelDO {
      /** accuracy */
      accuracy?: number;

      /** accuracyStr */
      accuracyStr?: string;

      /** applyTime */
      applyTime?: string;

      /** authStatus */
      authStatus?: string;

      /** belongProjectId */
      belongProjectId?: number;

      /** bizDomainId */
      bizDomainId?: string;

      /** bizSource */
      bizSource?: string;

      /** bpmsId */
      bpmsId?: string;

      /** callCnt */
      callCnt?: number;

      /** callOffIdCnt */
      callOffIdCnt?: number;

      /** callOlCnt */
      callOlCnt?: number;

      /** cateId */
      cateId?: number;

      /** cateName */
      cateName?: string;

      /** category */
      category?: defs.daas.CategoryBO;

      /** coverCnt */
      coverCnt?: number;

      /** coverCntRange */
      coverCntRange?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorInfo */
      creatorInfo?: defs.daas.EmpBO;

      /** dataSchema */
      dataSchema?: defs.daas.LabelKVDataSchema;

      /** description */
      description?: string;

      /** entityType */
      entityType?: string;

      /** env */
      env?: string;

      /** example */
      example?: string;

      /** extInfo */
      extInfo?: string;

      /** extendDescription */
      extendDescription?: string;

      /** extendInfo */
      extendInfo?: string;

      /** filterKey */
      filterKey?: string;

      /** firstAddedTime */
      firstAddedTime?: string;

      /** fullTableName */
      fullTableName?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** hasConfidence */
      hasConfidence?: boolean;

      /** id */
      id?: number;

      /** infoLevel */
      infoLevel?: string;

      /** isCooperate */
      isCooperate?: boolean;

      /** isMultiKey */
      isMultiKey?: boolean;

      /** isOfficial */
      isOfficial?: boolean;

      /** isPublic */
      isPublic?: boolean;

      /** keyName */
      keyName?: string;

      /** keyType */
      keyType?: string;

      /** keysInfo */
      keysInfo?: string;

      /** keysList */
      keysList?: Array<defs.daas.LabelKeyDataSchema>;

      /** kind */
      kind?: string;

      /** labelCn */
      labelCn?: string;

      /** labelDetailInfo */
      labelDetailInfo?: string;

      /** labelEn */
      labelEn?: string;

      /** labelExtendInfo */
      labelExtendInfo?: defs.daas.LabelExtendInfo;

      /** labelGroupId */
      labelGroupId?: number;

      /** labelGroupNameCn */
      labelGroupNameCn?: string;

      /** labelGroupNameEn */
      labelGroupNameEn?: string;

      /** labelId */
      labelId?: number;

      /** labelLogicTableId */
      labelLogicTableId?: number;

      /** lastAddedTime */
      lastAddedTime?: string;

      /** lifecycle */
      lifecycle?: number;

      /** logicType */
      logicType?: string;

      /** msg */
      msg?: string;

      /** nodeId */
      nodeId?: string;

      /** operators */
      operators?: Array<defs.daas.EmpBO>;

      /** ownerIds */
      ownerIds?: string;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** period */
      period?: number;

      /** physColCn */
      physColCn?: string;

      /** physColEn */
      physColEn?: string;

      /** physTableEn */
      physTableEn?: string;

      /** platform */
      platform?: string;

      /** primaryKey */
      primaryKey?: string;

      /** produceTime */
      produceTime?: string;

      /** produceType */
      produceType?: number;

      /** projectCallCnt */
      projectCallCnt?: number;

      /** projectName */
      projectName?: string;

      /** ptKey */
      ptKey?: string;

      /** securityLevel */
      securityLevel?: string;

      /** seedCrowSource */
      seedCrowSource?: string;

      /** separator */
      separator?: string;

      /** status */
      status?: string;

      /** statusInfo */
      statusInfo?: defs.daas.StatusInfo;

      /** storeType */
      storeType?: string;

      /** tableName */
      tableName?: string;

      /** taskId */
      taskId?: number;

      /** testSampleDesc */
      testSampleDesc?: string;

      /** valDataType */
      valDataType?: string;

      /** valDesc */
      valDesc?: string;

      /** valDistriType */
      valDistriType?: string;

      /** valDistriTypeName */
      valDistriTypeName?: string;

      /** valOrgType */
      valOrgType?: string;

      /** valOrgTypeName */
      valOrgTypeName?: string;
    }

    export class LabelDataSchema {
      /** dataFormat */
      dataFormat?: string;

      /** dataType */
      dataType?: string;

      /** rangeType */
      rangeType?: string;

      /** rangeValue */
      rangeValue?: ObjectMap<any, string>;

      /** type */
      type?: string;
    }

    export class LabelDetailParam {
      /** accuracy */
      accuracy?: number;

      /** applyReason */
      applyReason?: string;

      /** bizSourceIds */
      bizSourceIds?: Array<string>;

      /** blurCoverCnt */
      blurCoverCnt?: boolean;

      /** cateId */
      cateId?: number;

      /** description */
      description?: string;

      /** extendDescription */
      extendDescription?: string;

      /** isPublic */
      isPublic?: boolean;

      /** labelCn */
      labelCn?: string;

      /** labelConfidenceParam */
      labelConfidenceParam?: defs.daas.LabelConfidenceParam;

      /** labelId */
      labelId?: number;

      /** monitorRules */
      monitorRules?: Array<defs.daas.MonitorRuleInfo>;

      /** needApproval */
      needApproval?: boolean;

      /** ownerIds */
      ownerIds?: string;

      /** period */
      period?: number;

      /** primaryKeyList */
      primaryKeyList?: Array<defs.daas.LabelKeyDataSchema>;

      /** processType */
      processType?: number;

      /** seedCrowSource */
      seedCrowSource?: string;

      /** sensitiveData */
      sensitiveData?: Array<string>;

      /** separatorGroup */
      separatorGroup?: string;

      /** separatorKK */
      separatorKK?: string;

      /** separatorKV */
      separatorKV?: string;

      /** status */
      status?: string;

      /** testSampleDesc */
      testSampleDesc?: string;

      /** valOrgType */
      valOrgType?: string;

      /** valueParams */
      valueParams?: Array<defs.daas.ValueParam>;
    }

    export class LabelDistributeBO {
      /** labelValue */
      labelValue?: string;

      /** labelValueComment */
      labelValueComment?: string;

      /** labelValueRate */
      labelValueRate?: number;
    }

    export class LabelDistributeDO {
      /** dataBizDate */
      dataBizDate?: string;

      /** labelUnityId */
      labelUnityId?: number;

      /** labelValue */
      labelValue?: string;

      /** labelValueCnt */
      labelValueCnt?: number;

      /** labelValueComment */
      labelValueComment?: string;

      /** labelValueRate */
      labelValueRate?: number;

      /** statDate */
      statDate?: string;

      /** valDistriType */
      valDistriType?: string;

      /** valOrgType */
      valOrgType?: string;
    }

    export class LabelExtendInfo {
      /** belongBU */
      belongBU?: string;

      /** blurCoverCnt */
      blurCoverCnt?: boolean;

      /** cate3Name */
      cate3Name?: string;

      /** columnClassification */
      columnClassification?: string;

      /** isContainMajorAndPrivateInfo */
      isContainMajorAndPrivateInfo?: boolean;

      /** isFaceData */
      isFaceData?: boolean;

      /** isMainVersion */
      isMainVersion?: boolean;

      /** isPersonalData */
      isPersonalData?: boolean;

      /** isPublic */
      isPublic?: boolean;

      /** isSensitve */
      isSensitve?: boolean;

      /** level */
      level?: string;

      /** monitorRules */
      monitorRules?: Array<defs.daas.MonitorRuleInfo>;

      /** needAccuracy */
      needAccuracy?: boolean;

      /** needApproval */
      needApproval?: boolean;

      /** operatorIds */
      operatorIds?: string;

      /** processType */
      processType?: number;

      /** sensitiveData */
      sensitiveData?: Array<string>;

      /** source */
      source?: string;

      /** statisticsDataLevel */
      statisticsDataLevel?: string;

      /** topIndex */
      topIndex?: number;
    }

    export class LabelGroupBO {
      /** callCntSum */
      callCntSum?: number;

      /** callProjCntSum */
      callProjCntSum?: number;

      /** canOffline */
      canOffline?: boolean;

      /** canTest */
      canTest?: boolean;

      /** cateId */
      cateId?: number;

      /** category */
      category?: defs.daas.CategoryBO;

      /** children */
      children?: Array<defs.daas.LabelListBO>;

      /** coverCntRange */
      coverCntRange?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorInfo */
      creatorInfo?: defs.daas.EmpBO;

      /** description */
      description?: string;

      /** entityType */
      entityType?: string;

      /** errorUrl */
      errorUrl?: string;

      /** firstAddedTime */
      firstAddedTime?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** hasChildren */
      hasChildren?: boolean;

      /** hasError */
      hasError?: boolean;

      /** id */
      id?: number;

      /** isMultiKey */
      isMultiKey?: boolean;

      /** isOfficial */
      isOfficial?: boolean;

      /** isPublic */
      isPublic?: boolean;

      /** isUpdated */
      isUpdated?: boolean;

      /** keysList */
      keysList?: Array<defs.daas.LabelKeyDataSchema>;

      /** labelId */
      labelId?: number;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** ownerIds */
      ownerIds?: string;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** recent90HasCall */
      recent90HasCall?: boolean;

      /** status */
      status?: string;

      /** syncLabStatus */
      syncLabStatus?: defs.daas.SyncLabStatus;
    }

    export class LabelGroupServiceConfigBO {
      /** code */
      code?: string;

      /** creator */
      creator?: string;

      /** description */
      description?: string;

      /** id */
      id?: number;

      /** keyType */
      keyType?: string;

      /** labelIds */
      labelIds?: Array<number>;

      /** labelList */
      labelList?: Array<defs.daas.LabelBO>;

      /** projectId */
      projectId?: number;

      /** serviceId */
      serviceId?: number;
    }

    export class LabelGroupServiceTaskBO {
      /** admin */
      admin?: Array<defs.daas.EmpBO>;

      /** code */
      code?: string;

      /** configStatus */
      configStatus?: string;

      /** creatorInfo */
      creatorInfo?: Array<defs.daas.EmpBO>;

      /** description */
      description?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** id */
      id?: number;

      /** keyType */
      keyType?: string;

      /** syncStatus */
      syncStatus?: string;

      /** syncedLabelCount */
      syncedLabelCount?: number;

      /** totalLabelCount */
      totalLabelCount?: number;
    }

    export class LabelInfoParam {
      /** extraInfo */
      extraInfo?: string;

      /** labelId */
      labelId?: number;

      /** labelValue */
      labelValue?: Array<defs.daas.LabelValueParam>;

      /** objectId */
      objectId?: string;
    }

    export class LabelInfoParamV2 {
      /** 扩展信息，前端用 */
      extraInfo?: string;

      /** 标签id */
      labelId?: number;

      /** 标签取值 */
      labelValue?: Array<defs.daas.LabelValueParam>;

      /** 唯一id，前端生成 */
      objectId?: string;
    }

    export class LabelInsertProduceInfo {
      /** accuracy */
      accuracy?: number;

      /** applyReason */
      applyReason?: string;

      /** bizSourceIds */
      bizSourceIds?: Array<string>;

      /** blurCoverCnt */
      blurCoverCnt?: boolean;

      /** cateId */
      cateId?: number;

      /** description */
      description?: string;

      /** extendDescription */
      extendDescription?: string;

      /** isPublic */
      isPublic?: boolean;

      /** labelCn */
      labelCn?: string;

      /** labelConfidenceParam */
      labelConfidenceParam?: defs.daas.LabelConfidenceParam;

      /** labelId */
      labelId?: number;

      /** monitorRules */
      monitorRules?: Array<defs.daas.MonitorRuleInfo>;

      /** needAccuracy */
      needAccuracy?: boolean;

      /** needApproval */
      needApproval?: boolean;

      /** ownerIds */
      ownerIds?: string;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** period */
      period?: number;

      /** primaryKeyList */
      primaryKeyList?: Array<defs.daas.LabelKeyDataSchema>;

      /** processType */
      processType?: number;

      /** seedCrowSource */
      seedCrowSource?: string;

      /** sensitiveData */
      sensitiveData?: Array<string>;

      /** separatorGroup */
      separatorGroup?: string;

      /** separatorKK */
      separatorKK?: string;

      /** separatorKV */
      separatorKV?: string;

      /** source */
      source?: string;

      /** status */
      status?: string;

      /** testSampleDesc */
      testSampleDesc?: string;

      /** valOrgType */
      valOrgType?: string;

      /** valueParams */
      valueParams?: Array<defs.daas.ValueParam>;
    }

    export class LabelItemBO {
      /** applyUser */
      applyUser?: defs.daas.EmpBO;

      /** authStatus */
      authStatus?: string;

      /** bpmsId */
      bpmsId?: string;

      /** callCntSum */
      callCntSum?: number;

      /** callProjCntSum */
      callProjCntSum?: number;

      /** canDelete */
      canDelete?: boolean;

      /** canOffline */
      canOffline?: boolean;

      /** canTest */
      canTest?: boolean;

      /** cateId */
      cateId?: number;

      /** category */
      category?: defs.daas.CategoryBO;

      /** children */
      children?: Array<defs.daas.LabelListBO>;

      /** coverCntRange */
      coverCntRange?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorInfo */
      creatorInfo?: defs.daas.EmpBO;

      /** description */
      description?: string;

      /** entityType */
      entityType?: string;

      /** errorUrl */
      errorUrl?: string;

      /** firstAddedTime */
      firstAddedTime?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** groupId */
      groupId?: number;

      /** hasChildren */
      hasChildren?: boolean;

      /** hasError */
      hasError?: boolean;

      /** isMultiKey */
      isMultiKey?: boolean;

      /** isOfficial */
      isOfficial?: boolean;

      /** isPublic */
      isPublic?: boolean;

      /** isUpdated */
      isUpdated?: boolean;

      /** keysList */
      keysList?: Array<defs.daas.LabelKeyDataSchema>;

      /** labelId */
      labelId?: number;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** ownerIds */
      ownerIds?: string;

      /** owners */
      owners?: defs.daas.EmpBO;

      /** produceType */
      produceType?: number;

      /** recent90HasCall */
      recent90HasCall?: boolean;

      /** score */
      score?: number;

      /** status */
      status?: string;

      /** statusInfo */
      statusInfo?: defs.daas.StatusInfo;

      /** syncLabStatus */
      syncLabStatus?: defs.daas.SyncLabStatus;
    }

    export class LabelKVDataSchema {
      /** dataFormat */
      dataFormat?: string;

      /** dataType */
      dataType?: string;

      /** k */
      k?: Array<defs.daas.LabelDataSchema>;

      /** rangeType */
      rangeType?: string;

      /** rangeValue */
      rangeValue?: ObjectMap<any, string>;

      /** type */
      type?: string;

      /** v */
      v?: Array<defs.daas.LabelDataSchema>;
    }

    export class LabelKeyDataSchema {
      /** dataFormat */
      dataFormat?: string;

      /** dataType */
      dataType?: string;

      /** entityId */
      entityId?: number;

      /** entityType */
      entityType?: string;

      /** idType */
      idType?: string;

      /** keyColumn */
      keyColumn?: string;

      /** rangeType */
      rangeType?: string;

      /** rangeValue */
      rangeValue?: ObjectMap<any, string>;

      /** type */
      type?: string;
    }

    export class LabelListBO {
      /** accountAssetsRelExtBO */
      accountAssetsRelExtBO?: defs.daas.AccountAssetsRelExtBO;

      /** applyTime */
      applyTime?: string;

      /** authStatus */
      authStatus?: string;

      /** authStatusName */
      authStatusName?: string;

      /** belongProjectId */
      belongProjectId?: number;

      /** bpmsId */
      bpmsId?: string;

      /** cateId */
      cateId?: number;

      /** cateName */
      cateName?: string;

      /** category */
      category?: defs.daas.CategoryBO;

      /** coverCnt */
      coverCnt?: number;

      /** creatorId */
      creatorId?: string;

      /** creatorInfo */
      creatorInfo?: defs.daas.EmpBO;

      /** dataSchema */
      dataSchema?: defs.daas.LabelKVDataSchema;

      /** description */
      description?: string;

      /** entityFlag */
      entityFlag?: string;

      /** entityType */
      entityType?: string;

      /** entityTypeName */
      entityTypeName?: string;

      /** env */
      env?: string;

      /** example */
      example?: string;

      /** firstAddedTime */
      firstAddedTime?: string;

      /** fullTableName */
      fullTableName?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** infoLevel */
      infoLevel?: string;

      /** isCooperate */
      isCooperate?: boolean;

      /** isOfficial */
      isOfficial?: boolean;

      /** isPublic */
      isPublic?: boolean;

      /** keysList */
      keysList?: Array<defs.daas.LabelKeyDataSchema>;

      /** kind */
      kind?: string;

      /** labelCn */
      labelCn?: string;

      /** labelEn */
      labelEn?: string;

      /** labelGroupId */
      labelGroupId?: number;

      /** labelGroupNameCn */
      labelGroupNameCn?: string;

      /** labelGroupNameEn */
      labelGroupNameEn?: string;

      /** lastAddedTime */
      lastAddedTime?: string;

      /** nodeId */
      nodeId?: string;

      /** ownerIds */
      ownerIds?: string;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** platform */
      platform?: string;

      /** produceType */
      produceType?: number;

      /** score */
      score?: number;

      /** securityLevel */
      securityLevel?: string;

      /** selectStatus */
      selectStatus?: defs.daas.SelectStatus;

      /** status */
      status?: string;

      /** statusInfo */
      statusInfo?: defs.daas.StatusInfo;

      /** syncStatus */
      syncStatus?: Array<defs.daas.OfflineTaskSyncStatusBO>;

      /** taskId */
      taskId?: number;

      /** valDataType */
      valDataType?: string;

      /** valDistriType */
      valDistriType?: string;

      /** valOrgType */
      valOrgType?: string;
    }

    export class LabelLogicInfo {
      /** dataSchema */
      dataSchema?: defs.daas.LabelKVDataSchema;

      /** entityType */
      entityType?: string;

      /** isMultiKey */
      isMultiKey?: boolean;

      /** keysInfo */
      keysInfo?: string;

      /** keysList */
      keysList?: Array<defs.daas.LabelKeyDataSchema>;

      /** kind */
      kind?: string;

      /** labelDetailInfo */
      labelDetailInfo?: string;

      /** period */
      period?: number;

      /** primaryKey */
      primaryKey?: string;

      /** tableName */
      tableName?: string;

      /** valDataType */
      valDataType?: string;

      /** valDistriType */
      valDistriType?: string;

      /** valDistriTypeName */
      valDistriTypeName?: string;

      /** valOrgType */
      valOrgType?: string;

      /** valOrgTypeName */
      valOrgTypeName?: string;
    }

    export class LabelMetaBO {
      /** cnName */
      cnName?: string;

      /** columnName */
      columnName?: string;

      /** dataType */
      dataType?: string;

      /** enName */
      enName?: string;

      /** entityType */
      entityType?: string;

      /** keyColumn */
      keyColumn?: string;

      /** keysInfo */
      keysInfo?: string;

      /** null */
      null?: boolean;

      /** period */
      period?: number;

      /** platform */
      platform?: string;

      /** srcColumnName */
      srcColumnName?: string;

      /** srcKeyColumn */
      srcKeyColumn?: string;

      /** srcKeyType */
      srcKeyType?: string;

      /** srcTableName */
      srcTableName?: string;

      /** tableName */
      tableName?: string;

      /** tagId */
      tagId?: number;

      /** tagType */
      tagType?: string;
    }

    export class LabelNoSampleProduceConfig {
      /** cateIds */
      cateIds?: string;

      /** values */
      values?: Array<string>;
    }

    export class LabelNoSampleProduceParams {
      /** cateIds */
      cateIds?: string;

      /** configs */
      configs?: defs.daas.LabelNoSampleProduceConfig;

      /** crowdSize */
      crowdSize?: string;

      /** crowdType */
      crowdType?: string;

      /** domain */
      domain?: number;

      /** extParams */
      extParams?: ObjectMap<any, string>;

      /** preference */
      preference?: string;

      /** timeRangeConfig */
      timeRangeConfig?: string;

      /** token */
      token?: string;

      /** values */
      values?: string;

      /** version */
      version?: number;
    }

    export class LabelOverviewBO {
      /** 标签总数 */
      labelCount?: number;

      /** 本周新上标签 */
      newLabels?: Array<defs.daas.LabelListBO>;

      /** 官方认证标签 */
      officialLabels?: Array<defs.daas.LabelListBO>;

      /** 最受集团欢迎标签 */
      topPopularLabelsAli?: Array<defs.daas.LabelListBO>;

      /** 最受蚂蚁欢迎标签 */
      topPopularLabelsAnt?: Array<defs.daas.LabelListBO>;
    }

    export class LabelParam {
      /** accuracy */
      accuracy?: number;

      /** accuracyStr */
      accuracyStr?: string;

      /** applyTime */
      applyTime?: string;

      /** authStatus */
      authStatus?: string;

      /** belongProjectId */
      belongProjectId?: number;

      /** bizDomainId */
      bizDomainId?: string;

      /** bizSource */
      bizSource?: string;

      /** bpmsId */
      bpmsId?: string;

      /** callCnt */
      callCnt?: number;

      /** callOffIdCnt */
      callOffIdCnt?: number;

      /** callOlCnt */
      callOlCnt?: number;

      /** cateId */
      cateId?: number;

      /** cateName */
      cateName?: string;

      /** category */
      category?: defs.daas.CategoryBO;

      /** coverCnt */
      coverCnt?: number;

      /** coverCntRange */
      coverCntRange?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorInfo */
      creatorInfo?: defs.daas.EmpBO;

      /** dataSchema */
      dataSchema?: defs.daas.LabelKVDataSchema;

      /** description */
      description?: string;

      /** entityType */
      entityType?: string;

      /** env */
      env?: string;

      /** example */
      example?: string;

      /** extInfo */
      extInfo?: string;

      /** extendDescription */
      extendDescription?: string;

      /** extendInfo */
      extendInfo?: string;

      /** filterKey */
      filterKey?: string;

      /** filterName */
      filterName?: string;

      /** filterType */
      filterType?: string;

      /** firstAddedTime */
      firstAddedTime?: string;

      /** fullTableName */
      fullTableName?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** hasConfidence */
      hasConfidence?: boolean;

      /** id */
      id?: number;

      /** infoLevel */
      infoLevel?: string;

      /** isCooperate */
      isCooperate?: boolean;

      /** isMultiKey */
      isMultiKey?: boolean;

      /** isOfficial */
      isOfficial?: boolean;

      /** isPublic */
      isPublic?: boolean;

      /** keyName */
      keyName?: string;

      /** keyType */
      keyType?: string;

      /** keysInfo */
      keysInfo?: string;

      /** keysList */
      keysList?: Array<defs.daas.LabelKeyDataSchema>;

      /** kind */
      kind?: string;

      /** labelCn */
      labelCn?: string;

      /** labelDetailInfo */
      labelDetailInfo?: string;

      /** labelEn */
      labelEn?: string;

      /** labelExtendInfo */
      labelExtendInfo?: defs.daas.LabelExtendInfo;

      /** labelGroupId */
      labelGroupId?: number;

      /** labelGroupNameCn */
      labelGroupNameCn?: string;

      /** labelGroupNameEn */
      labelGroupNameEn?: string;

      /** labelId */
      labelId?: number;

      /** labelLogicTableId */
      labelLogicTableId?: number;

      /** lastAddedTime */
      lastAddedTime?: string;

      /** lifecycle */
      lifecycle?: number;

      /** logicType */
      logicType?: string;

      /** msg */
      msg?: string;

      /** nodeId */
      nodeId?: string;

      /** operators */
      operators?: Array<defs.daas.EmpBO>;

      /** ownerIds */
      ownerIds?: string;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** period */
      period?: number;

      /** physColCn */
      physColCn?: string;

      /** physColEn */
      physColEn?: string;

      /** physTableEn */
      physTableEn?: string;

      /** platform */
      platform?: string;

      /** primaryKey */
      primaryKey?: string;

      /** produceTime */
      produceTime?: string;

      /** produceType */
      produceType?: number;

      /** projectCallCnt */
      projectCallCnt?: number;

      /** projectName */
      projectName?: string;

      /** ptKey */
      ptKey?: string;

      /** securityLevel */
      securityLevel?: string;

      /** seedCrowSource */
      seedCrowSource?: string;

      /** separator */
      separator?: string;

      /** sortType */
      sortType?: string;

      /** sqlCode */
      sqlCode?: string;

      /** status */
      status?: string;

      /** statusInfo */
      statusInfo?: defs.daas.StatusInfo;

      /** storeType */
      storeType?: string;

      /** tableName */
      tableName?: string;

      /** taskId */
      taskId?: number;

      /** testSampleDesc */
      testSampleDesc?: string;

      /** topN */
      topN?: number;

      /** valDataType */
      valDataType?: string;

      /** valDesc */
      valDesc?: string;

      /** valDistriType */
      valDistriType?: string;

      /** valDistriTypeName */
      valDistriTypeName?: string;

      /** valOrgType */
      valOrgType?: string;

      /** valOrgTypeName */
      valOrgTypeName?: string;
    }

    export class LabelPermissionCheckBO {
      /** 需要申请的标签列表 */
      applyList?: Array<defs.daas.LabelDO>;

      /** 自动授权标签列表 */
      autoAuthList?: Array<defs.daas.LabelDO>;

      /** 已经有权限的标签列表 */
      havePermissionList?: Array<defs.daas.LabelDO>;
    }

    export class LabelPhysicInfo {
      /** fullTableName */
      fullTableName?: string;

      /** keyName */
      keyName?: string;

      /** keyType */
      keyType?: string;

      /** nodeId */
      nodeId?: string;

      /** physColEn */
      physColEn?: string;

      /** physTableEn */
      physTableEn?: string;

      /** projectName */
      projectName?: string;

      /** ptKey */
      ptKey?: string;

      /** separator */
      separator?: string;

      /** storeType */
      storeType?: string;
    }

    export class LabelPreviewDataBO {
      /** allNum */
      allNum?: string;

      /** columnNames */
      columnNames?: Array<string>;

      /** dataResultSet */
      dataResultSet?: Array<defs.daas.ObjectMap<string, ObjectMap>>;

      /** labelId */
      labelId?: number;
    }

    export class LabelPreviewDataNewBO {
      /** canPublish */
      canPublish?: boolean;

      /** columns */
      columns?: Array<string>;

      /** coverage */
      coverage?: string;

      /** dataCreate */
      dataCreate?: string;

      /** dataSource */
      dataSource?: Array<defs.daas.ObjectMap<string, ObjectMap>>;

      /** extendInfo */
      extendInfo?: object;

      /** labelId */
      labelId?: number;
    }

    export class LabelProcessInfoBO {
      /** checkResult */
      checkResult?: boolean;

      /** dataType */
      dataType?: string;

      /** errorMessage */
      errorMessage?: string;

      /** id */
      id?: number;

      /** labelNameCn */
      labelNameCn?: string;

      /** valueType */
      valueType?: string;
    }

    export class LabelProduceBO {
      /** applyingResourceBOList */
      applyingResourceBOList?: Array<defs.daas.ApplyingResourceBO>;

      /** canPublish */
      canPublish?: boolean;

      /** dataCreate */
      dataCreate?: string;

      /** isReedit */
      isReedit?: boolean;

      /** labelPreviewDataBO */
      labelPreviewDataBO?: defs.daas.LabelPreviewDataBO;

      /** labelProduceParams */
      labelProduceParams?: defs.daas.LabelProduceParams;

      /** status */
      status?: string;
    }

    export class LabelProduceInfoBO {
      /** configString */
      configString?: string;

      /** description */
      description?: string;

      /** labelInsertProduceInfo */
      labelInsertProduceInfo?: defs.daas.LabelInsertProduceInfo;

      /** labelNoSampleProduceParams */
      labelNoSampleProduceParams?: defs.daas.LabelNoSampleProduceParams;

      /** publicProduceInfo */
      publicProduceInfo?: defs.daas.PublicProduceInfo;

      /** regularLabelProduceParam */
      regularLabelProduceParam?: defs.daas.RegularLabelProduceParam;
    }

    export class LabelProduceParams {
      /** configString */
      configString?: string;

      /** description */
      description?: string;

      /** labelId */
      labelId?: number;

      /** labelNoSampleProduceParams */
      labelNoSampleProduceParams?: defs.daas.LabelNoSampleProduceParams;

      /** publishType */
      publishType?: string;

      /** regularLabelProduceParam */
      regularLabelProduceParam?: defs.daas.RegularLabelProduceParam;

      /** updateInfo */
      updateInfo?: defs.daas.UpdateParam;
    }

    export class LabelProductionListBO {
      /** creatorId */
      creatorId?: string;

      /** creatorInfo */
      creatorInfo?: defs.daas.EmpBO;

      /** entityType */
      entityType?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** labelGroupId */
      labelGroupId?: number;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** ownerIds */
      ownerIds?: string;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** produceType */
      produceType?: number;

      /** status */
      status?: string;

      /** statusInfo */
      statusInfo?: defs.daas.StatusInfo;
    }

    export class LabelSampleDistriDO {
      /** rate */
      rate?: number;

      /** value */
      value?: string;
    }

    export class LabelSampleResultBO {
      /** data */
      data?: defs.daas.LabelTaskResultDO;

      /** message */
      message?: string;

      /** res */
      res?: boolean;
    }

    export class LabelSimpleParam {
      /** cateId */
      cateId?: number;

      /** description */
      description?: string;

      /** id */
      id?: number;

      /** isPublic */
      isPublic?: boolean;

      /** labelCn */
      labelCn?: string;

      /** labelEn */
      labelEn?: string;

      /** labelGroupId */
      labelGroupId?: number;

      /** physColEn */
      physColEn?: string;

      /** valDataType */
      valDataType?: string;
    }

    export class LabelStabilityDO {
      /** coverCnt */
      coverCnt?: number;

      /** ds */
      ds?: string;

      /** produceTime */
      produceTime?: string;
    }

    export class LabelTaskResultDO {
      /** 覆盖量 */
      coverCnt?: number;

      /** 覆盖率 */
      coverRate?: number;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** 标签ID */
      labelId?: number;

      /** 标签中文名 */
      labelNameCn?: string;

      /** 标签英文名 */
      labelNameEn?: string;

      /** 去重id数 */
      rdIdCnt?: number;

      /** 可识别id数 */
      recIdCnt?: number;

      /** 任务id */
      taskId?: number;

      /** 测试结果（值分布） */
      valDistribute?: string;

      /** valDistributeList */
      valDistributeList?: Array<defs.daas.LabelSampleDistriDO>;

      /** 数据组织类型，single/multivalue/kv/kkv/doc */
      valOrgType?: string;

      /** 值类型 */
      valType?: string;
    }

    export class LabelValueParam {
      /** 关系 */
      op?: string;

      /** 值 */
      values?: Array<string>;
    }

    export class Map<T0 = any, T1 = any> {}

    export class MarketCateTreeBO {
      /** children */
      children?: Array<defs.daas.MarketCateTreeBO>;

      /** ext */
      ext?: object;

      /** label */
      label?: string;

      /** showRunTime */
      showRunTime?: boolean;

      /** supportType */
      supportType?: string;

      /** value */
      value?: string;
    }

    export class MarketServiceBO {
      /** authStatus */
      authStatus?: string;

      /** belongProjectId */
      belongProjectId?: number;

      /** bpmsId */
      bpmsId?: string;

      /** callCnt */
      callCnt?: number;

      /** canTest */
      canTest?: boolean;

      /** canUse */
      canUse?: boolean;

      /** cateId */
      cateId?: number;

      /** category */
      category?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorInfo */
      creatorInfo?: defs.daas.EmpBO;

      /** custom */
      custom?: boolean;

      /** customCnt */
      customCnt?: number;

      /** definition */
      definition?: object;

      /** description */
      description?: string;

      /** detailDesc */
      detailDesc?: string;

      /** env */
      env?: string;

      /** executeMode */
      executeMode?: string;

      /** extendInfo */
      extendInfo?: string;

      /** extendInfoObjects */
      extendInfoObjects?: defs.daas.ServiceExtendBO;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** helpUrl */
      helpUrl?: Array<string>;

      /** id */
      id?: number;

      /** idType */
      idType?: string;

      /** implementType */
      implementType?: string;

      /** isDataReal */
      isDataReal?: boolean;

      /** isPublic */
      isPublic?: boolean;

      /** labelType */
      labelType?: string;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** notifyCase */
      notifyCase?: string;

      /** ownerIds */
      ownerIds?: string;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** parent */
      parent?: defs.daas.MarketServiceBO;

      /** parentId */
      parentId?: number;

      /** projectCallCnt */
      projectCallCnt?: number;

      /** sampleCase */
      sampleCase?: Array<defs.daas.SampleCaseBO>;

      /** sampleCode */
      sampleCode?: string;

      /** secureLevel */
      secureLevel?: string;

      /** serviceDetail */
      serviceDetail?: defs.daas.ServiceDetailBO;

      /** serviceExtendBO */
      serviceExtendBO?: defs.daas.ServiceExtendBO;

      /** serviceFunction */
      serviceFunction?: defs.daas.ServiceFunctionBO;

      /** serviceIds */
      serviceIds?: string;

      /** serviceRef */
      serviceRef?: Array<defs.daas.ServiceRefB0>;

      /** serviceType */
      serviceType?: string;

      /** source */
      source?: defs.daas.MarketServiceBO;

      /** sourceId */
      sourceId?: number;

      /** status */
      status?: string;

      /** statusQueryFunction */
      statusQueryFunction?: defs.daas.ServiceFunctionBO;

      /** supportGroup */
      supportGroup?: string;

      /** templateConfig */
      templateConfig?: string;

      /** version */
      version?: string;

      /** versionCount */
      versionCount?: number;
    }

    export class MarketServiceStatDO {
      /** callCnt */
      callCnt?: number;

      /** projectCallCnt */
      projectCallCnt?: number;

      /** projectStatList */
      projectStatList?: Array<defs.daas.ProjectStatDO>;

      /** serviceId */
      serviceId?: number;

      /** serviceName */
      serviceName?: string;

      /** statDate */
      statDate?: string;
    }

    export class MarketUserConfigDO {
      /** config */
      config?: object;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** type */
      type?: string;

      /** userNumber */
      userNumber?: string;
    }

    export class MarkingParam {
      /** cycleDescription */
      cycleDescription?: string;

      /** description */
      description?: string;

      /** enumValue */
      enumValue?: string;

      /** enumValueType */
      enumValueType?: string;

      /** name */
      name?: string;

      /** statisticValue */
      statisticValue?: defs.daas.StatisticValueParam;

      /** type */
      type?: string;
    }

    export class MarkingParamV2 {
      /** 枚举类，单值/多值输出 */
      enumValueType?: string;

      /** 统计类取值 */
      statisticValue?: defs.daas.StatisticValueParamV2;

      /** 枚举类/非枚举类 */
      type?: string;
    }

    export class MetaApp {
      /** accessAllowFlag */
      accessAllowFlag?: number;

      /** appCharset */
      appCharset?: string;

      /** authTypes */
      authTypes?: string;

      /** bizLine */
      bizLine?: string;

      /** bizModule */
      bizModule?: string;

      /** bizOwnerId */
      bizOwnerId?: string;

      /** blacklistRule */
      blacklistRule?: string;

      /** businessOwnerId */
      businessOwnerId?: string;

      /** caption */
      caption?: string;

      /** comment */
      comment?: string;

      /** createTime */
      createTime?: string;

      /** datasourceGuid */
      datasourceGuid?: string;

      /** dbType */
      dbType?: string;

      /** dbaId */
      dbaId?: string;

      /** deputy */
      deputy?: string;

      /** encoding */
      encoding?: string;

      /** envType */
      envType?: string;

      /** envTypeId */
      envTypeId?: number;

      /** extraAttributes */
      extraAttributes?: string;

      /** gmtCreated */
      gmtCreated?: string;

      /** gmtModified */
      gmtModified?: string;

      /** guid */
      guid?: string;

      /** id */
      id?: number;

      /** importLevel */
      importLevel?: number;

      /** isExternalFlag */
      isExternalFlag?: number;

      /** labels */
      labels?: string;

      /** lifeCycleFlag */
      lifeCycleFlag?: number;

      /** lifeCycleTime */
      lifeCycleTime?: string;

      /** modifyTime */
      modifyTime?: string;

      /** name */
      name?: string;

      /** noSearchFlag */
      noSearchFlag?: number;

      /** ownerId */
      ownerId?: string;

      /** ownerName */
      ownerName?: string;

      /** password */
      password?: string;

      /** projectId */
      projectId?: number;

      /** residentArea */
      residentArea?: string;

      /** srcType */
      srcType?: number;

      /** syncTime */
      syncTime?: string;

      /** sysType */
      sysType?: string;

      /** tenantId */
      tenantId?: number;

      /** url */
      url?: string;

      /** username */
      username?: string;
    }

    export class MobileClientDomainDO {
      /** appId */
      appId?: string;

      /** id */
      id?: number;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** status */
      status?: string;
    }

    export class MonitorRuleInfo {
      /** ruleId */
      ruleId?: number;

      /** ruleValue */
      ruleValue?: string;
    }

    export class Node {
      /** type */
      type?: string;

      /** value */
      value?: string;
    }

    export class OdpsProjectBO {
      /** accessId */
      accessId?: string;

      /** accessKey */
      accessKey?: string;

      /** aliyunAccount */
      aliyunAccount?: string;

      /** d2ProjectName */
      d2ProjectName?: string;

      /** d2bizId */
      d2bizId?: string;
    }

    export class OdpsTableMeta {
      /** columns */
      columns?: Array<defs.daas.Column>;

      /** nodeIds */
      nodeIds?: Array<string>;

      /** outputNodes */
      outputNodes?: Array<string>;

      /** partitionColumns */
      partitionColumns?: Array<defs.daas.Column>;
    }

    export class OfflineTaskConfigBO {
      /** creatorId */
      creatorId?: string;

      /** creatorInfo */
      creatorInfo?: defs.daas.EmpBO;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastFinishTime */
      lastFinishTime?: string;

      /** lastRunStatus */
      lastRunStatus?: string;

      /** lastStatus */
      lastStatus?: string;

      /** lastStatusDetails */
      lastStatusDetails?: Array<defs.daas.OfflineTaskSyncStatusBO>;

      /** metaLink */
      metaLink?: string;

      /** odpsLink */
      odpsLink?: string;

      /** odpsTaskId */
      odpsTaskId?: number;

      /** offlineOrgConfig */
      offlineOrgConfig?: defs.daas.OfflineTaskParam;

      /** orgConfig */
      orgConfig?: defs.daas.SampleTaskParam;

      /** scheduleType */
      scheduleType?: string;

      /** status */
      status?: string;
    }

    export class OfflineTaskConfigDO {
      /** authorityId */
      authorityId?: number;

      /** classId */
      classId?: string;

      /** config */
      config?: string;

      /** creatorId */
      creatorId?: string;

      /** env */
      env?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** inputApplyId */
      inputApplyId?: string;

      /** labelId */
      labelId?: number;

      /** lastRunStatus */
      lastRunStatus?: string;

      /** odpsTaskId */
      odpsTaskId?: number;

      /** orgConfig */
      orgConfig?: string;

      /** outputApplyId */
      outputApplyId?: string;

      /** outputNodeName */
      outputNodeName?: string;

      /** scheduleTime */
      scheduleTime?: string;

      /** scheduleType */
      scheduleType?: string;

      /** serviceId */
      serviceId?: number;

      /** status */
      status?: string;

      /** taskName */
      taskName?: string;
    }

    export class OfflineTaskParam {
      /** addPrimaryKey */
      addPrimaryKey?: boolean;

      /** appName */
      appName?: string;

      /** appNameCn */
      appNameCn?: string;

      /** 服务市场业务空间Id */
      businessScopeId?: number;

      /** cloudServiceEnum */
      cloudServiceEnum?:
        | 'GPROFILE_OFFLINE'
        | 'GPROFILE_MULTI_KEY_OFFLINE'
        | 'UUIC_OFFLINE'
        | 'GPROFILE_UUIC_OFFLINE'
        | 'ONECOMPANY_UUIC_OFFLINE'
        | 'UUIC_OFFLINE_DEVICE'
        | 'ADD_LABEL_OFFLINE'
        | 'SYNC_LABEL_LINDORM'
        | 'GPROFILE_OFFLINE_TEST'
        | 'NEW_CUSTOMER_JUDGEMENT_OFFLINE'
        | 'ONEIP_OFFLINE'
        | 'LABEL_GROUP_QUERY'
        | 'COMPANY_GROUP_LABEL';

      /** cronExpress */
      cronExpress?: string;

      /** customerConfig */
      customerConfig?: defs.daas.WorkflowCustomerParam;

      /** 强依赖的标签ID列表 */
      dependentLabelIds?: Array<number>;

      /** 实体类型，onecompany,gprofile */
      entityType?: string;

      /** extInfo */
      extInfo?: string;

      /** 匹配输出结果条数，默认只有一条，0表示全部 */
      filterTopn?: number;

      /** id 类型 */
      idType?: string;

      /** inEncParamId */
      inEncParamId?: string;

      /** 入参id类型 */
      inParamId?: string;

      /** inputTable */
      inputTable?: defs.daas.WorkflowInputParam;

      /** 标签ID列表 */
      labelIds?: Array<number>;

      /** labelInfo */
      labelInfo?: Array<defs.daas.LabelMetaBO>;

      /** nodeId */
      nodeId?: number;

      /** outEncParamId */
      outEncParamId?: string;

      /** 输出id类型,用于idMapping */
      outParamId?: string;

      /** outputTable */
      outputTable?: defs.daas.WorkflowOutputParam;

      /** day，week，month */
      period?: string;

      /** 周，第几天；月，第几天 */
      periodIndex?: number;

      /** platform */
      platform?: string;

      /** processConfig */
      processConfig?: defs.daas.WorkflowProcessParam;

      /** 服务市场项目帐号Id */
      projectId?: number;

      /** 运行任务，一次性:once，周期性:cycle */
      runType?: string;

      /** 服务接口id */
      serviceId?: number;

      /** 任务ID */
      taskId?: number;

      /** 任务名称 */
      taskName?: string;

      /** 时间：03:02 */
      times?: string;

      /** uuicOptions */
      uuicOptions?: Array<defs.daas.JSONObject>;
    }

    export class OfflineTaskSyncStatusBO {
      /** children */
      children?: Array<defs.daas.OfflineTaskSyncStatusBO>;

      /** key */
      key?: number;

      /** link */
      link?: string;

      /** status */
      status?: string;

      /** value */
      value?: string;
    }

    export class OneIdBO {
      /** acookieId */
      acookieId?: Array<string>;

      /** alipayId */
      alipayId?: Array<string>;

      /** alipayKeys */
      alipayKeys?: Array<defs.daas.Node>;

      /** alitripKeys */
      alitripKeys?: Array<defs.daas.Node>;

      /** autonaviKeys */
      autonaviKeys?: Array<defs.daas.Node>;

      /** cainiaoKeys */
      cainiaoKeys?: Array<defs.daas.Node>;

      /** dianyingKeys */
      dianyingKeys?: Array<defs.daas.Node>;

      /** dingtalkKeys */
      dingtalkKeys?: Array<defs.daas.Node>;

      /** email */
      email?: Array<string>;

      /** idCard */
      idCard?: Array<string>;

      /** idfa */
      idfa?: Array<string>;

      /** imei */
      imei?: Array<string>;

      /** mac */
      mac?: Array<string>;

      /** mobile */
      mobile?: Array<string>;

      /** taobaoId */
      taobaoId?: Array<string>;

      /** taobaoKeys */
      taobaoKeys?: Array<defs.daas.Node>;

      /** taobaoNick */
      taobaoNick?: Array<string>;

      /** ucKeys */
      ucKeys?: Array<defs.daas.Node>;

      /** umengKeys */
      umengKeys?: Array<defs.daas.Node>;

      /** umid */
      umid?: Array<string>;

      /** utdid */
      utdid?: Array<string>;

      /** weiboId */
      weiboId?: Array<string>;

      /** xiamiKeys */
      xiamiKeys?: Array<defs.daas.Node>;

      /** xianyuKeys */
      xianyuKeys?: Array<defs.daas.Node>;

      /** youkuKeys */
      youkuKeys?: Array<defs.daas.Node>;

      /** youkuNick */
      youkuNick?: Array<string>;

      /** yunosUuid */
      yunosUuid?: Array<string>;
    }

    export class PaginatedResult<T0 = any> {
      /** data */
      data?: Array<T0>;

      /** recordCount */
      recordCount?: number;
    }

    export class PaiExperiment {
      /** dependencies */
      dependencies?: Array<defs.daas.PaiExperimentDependency>;

      /** experimentId */
      experimentId?: number;

      /** name */
      name?: string;

      /** params */
      params?: Array<defs.daas.PaiExperimentParam>;

      /** projectName */
      projectName?: string;

      /** userNumber */
      userNumber?: string;
    }

    export class PaiExperimentDependency {
      /** featureNameCn */
      featureNameCn?: string;

      /** featureNameEn */
      featureNameEn?: string;

      /** id */
      id?: number;
    }

    export class PaiExperimentParam {
      /** description */
      description?: string;

      /** name */
      name?: string;

      /** placeholder */
      placeholder?: string;

      /** value */
      value?: string;
    }

    export class PlatformAuthBO {
      /** applyUrl */
      applyUrl?: string;

      /** authCn */
      authCn?: string;

      /** authCode */
      authCode?: string;

      /** authMsg */
      authMsg?: string;

      /** enable */
      enable?: boolean;

      /** id */
      id?: number;

      /** manageUrl */
      manageUrl?: string;

      /** securityLevel */
      securityLevel?: string;

      /** validEndTime */
      validEndTime?: string;

      /** validStartTime */
      validStartTime?: string;
    }

    export class PortalCaidanBO {
      /** crowdValues */
      crowdValues?: Array<defs.daas.Tuple2<number, string>>;

      /** empBO */
      empBO?: defs.daas.EmpBO;

      /** labelValues */
      labelValues?: Array<string>;

      /** medal */
      medal?: string;
    }

    export class PortalModuleBO {
      /** itemList */
      itemList?: Array<defs.daas.CommonItem>;

      /** type */
      type?: string;

      /** url */
      url?: defs.daas.UrlItem;
    }

    export class PortalSearchBO {
      /** count */
      count?: string;

      /** itemList */
      itemList?: Array<defs.daas.SearchItem>;

      /** type */
      type?: string;
    }

    export class PreApplyResourceDO {
      /** applyUserId */
      applyUserId?: string;

      /** authStatus */
      authStatus?: string;

      /** bpmsId */
      bpmsId?: string;

      /** labelType */
      labelType?: string;

      /** ownerId */
      ownerId?: string;

      /** parentResourceId */
      parentResourceId?: number;

      /** parentResourceName */
      parentResourceName?: string;

      /** resourceDesc */
      resourceDesc?: string;

      /** resourceId */
      resourceId?: number;

      /** resourceName */
      resourceName?: string;

      /** resourceType */
      resourceType?: string;
    }

    export class ProjectBO {
      /** admins */
      admins?: Array<defs.daas.EmpBO>;

      /** aoneConfig */
      aoneConfig?: Array<defs.daas.AoneBO>;

      /** authorityType */
      authorityType?: string;

      /** d2Config */
      d2Config?: Array<defs.daas.OdpsProjectBO>;

      /** description */
      description?: string;

      /** fbiConfig */
      fbiConfig?: Array<defs.daas.FbiBO>;

      /** isCrowdProject */
      isCrowdProject?: boolean;

      /** isFusionProject */
      isFusionProject?: boolean;

      /** isFuwuProject */
      isFuwuProject?: boolean;

      /** isIsolationProject */
      isIsolationProject?: boolean;

      /** linkId */
      linkId?: number;

      /** members */
      members?: Array<defs.daas.EmpBO>;

      /** password */
      password?: string;

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** projectNameCn */
      projectNameCn?: string;

      /** projectType */
      projectType?: Array<string>;

      /** status */
      status?: number;
    }

    export class ProjectConfig {
      /** config */
      config?: object;

      /** configType */
      configType?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** projectId */
      projectId?: number;
    }

    export class ProjectStatBO {
      /** callCnt */
      callCnt?: number;

      /** department */
      department?: string;

      /** description */
      description?: string;

      /** ownerId */
      ownerId?: string;

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** projectNameCn */
      projectNameCn?: string;

      /** rate */
      rate?: number;

      /** serviceId */
      serviceId?: number;
    }

    export class ProjectStatDO {
      /** callCnt */
      callCnt?: number;

      /** department */
      department?: string;

      /** description */
      description?: string;

      /** ownerId */
      ownerId?: string;

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** rate */
      rate?: number;

      /** serviceId */
      serviceId?: number;
    }

    export class ProjectUpdateParam {
      /** aoneConfigStr */
      aoneConfigStr?: string;

      /** bizScene */
      bizScene?: string;

      /** creator */
      creator?: string;

      /** d2ConfigStr */
      d2ConfigStr?: string;

      /** empIdList */
      empIdList?: string;

      /** fbiConfigStr */
      fbiConfigStr?: string;

      /** isFusionProject */
      isFusionProject?: boolean;

      /** isIsolationProject */
      isIsolationProject?: boolean;

      /** password */
      password?: string;

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** projectNameCn */
      projectNameCn?: string;

      /** usingProjectConfig */
      usingProjectConfig?: boolean;
    }

    export class PromotionStatus {
      /** canUse */
      canUse?: boolean;

      /** message */
      message?: string;

      /** type */
      type?: number;
    }

    export class PublicProduceInfo {
      /** category */
      category?: defs.daas.CategoryBO;

      /** isPublic */
      isPublic?: boolean;

      /** isReedit */
      isReedit?: boolean;

      /** labelId */
      labelId?: number;

      /** ownerIds */
      ownerIds?: Array<string>;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** period */
      period?: number;

      /** status */
      status?: string;
    }

    export class PublishParam {
      /** labelId */
      labelId?: number;

      /** updateInfo */
      updateInfo?: defs.daas.UpdateParam;
    }

    export class ReadmeLabelDistributeBO {
      /** labelCnt */
      labelCnt?: number;

      /** labelCntRate */
      labelCntRate?: number;

      /** oneid */
      oneid?: string;

      /** sceneName */
      sceneName?: string;

      /** statDate */
      statDate?: string;
    }

    export class ReadmeLabelUserProfileBO {
      /** labelCn */
      labelCn?: string;

      /** labelCnShow */
      labelCnShow?: string;

      /** labelId */
      labelId?: number;

      /** labelProduceLogic */
      labelProduceLogic?: string;

      /** labelType */
      labelType?: string;

      /** labelValue */
      labelValue?: string;

      /** oneid */
      oneid?: string;

      /** statDate */
      statDate?: string;
    }

    export class ReadmeRelationshipBO {
      /** avatar */
      avatar?: string;

      /** name */
      name?: string;

      /** oneId */
      oneId?: string;

      /** relationship */
      relationship?: string;

      /** score */
      score?: string;
    }

    export class ReadmeSurveyBO {
      /** busiList */
      busiList?: Array<string>;

      /** labelCnt */
      labelCnt?: number;

      /** labelScene */
      labelScene?: Array<defs.daas.ReadmeLabelDistributeBO>;

      /** life */
      life?: string;
    }

    export class ReadmeUserLifeBO {
      /** amuseInfos */
      amuseInfos?: Array<defs.daas.ReadmeLabelUserProfileBO>;

      /** assetInfos */
      assetInfos?: Array<defs.daas.ReadmeLabelUserProfileBO>;

      /** baseInfos */
      baseInfos?: Array<defs.daas.ReadmeLabelUserProfileBO>;

      /** localInfos */
      localInfos?: Array<defs.daas.ReadmeLabelUserProfileBO>;

      /** natureInfos */
      natureInfos?: Array<defs.daas.ReadmeLabelUserProfileBO>;

      /** retailInfos */
      retailInfos?: Array<defs.daas.ReadmeLabelUserProfileBO>;

      /** sportInfos */
      sportInfos?: Array<defs.daas.ReadmeLabelUserProfileBO>;

      /** travelInfos */
      travelInfos?: Array<defs.daas.ReadmeLabelUserProfileBO>;
    }

    export class ReapplyResourceParam {
      /** projectId */
      projectId?: number;

      /** resourceGroupBO */
      resourceGroupBO?: defs.daas.ResourceGroupBO;

      /** serviceId */
      serviceId?: number;
    }

    export class RegularConfig {
      /** bhvsInfo */
      bhvsInfo?: Array<defs.daas.BhvParam>;

      /** conditionHashCode */
      conditionHashCode?: number;

      /** cycleInfo */
      cycleInfo?: defs.daas.CycleInfoParam;

      /** cycleInfoHashCode */
      cycleInfoHashCode?: number;

      /** labelsInfo */
      labelsInfo?: Array<defs.daas.LabelInfoParam>;

      /** relationsInfo */
      relationsInfo?: defs.daas.RelationInfoParam;
    }

    export class RegularConfigV2 {
      /** 行为圈人配置 */
      bhvsInfo?: Array<defs.daas.BhvParamV2>;

      /** 枚举类打标配置 */
      cycleInfo?: defs.daas.CycleInfoParam;

      /** 标签圈人配置 */
      labelsInfo?: Array<defs.daas.LabelInfoParamV2>;

      /** 交并差配置 */
      relationsInfo?: defs.daas.RelationInfoParamV2;
    }

    export class RegularLabelProduceParam {
      /** labelId */
      labelId?: number;

      /** markingInfo */
      markingInfo?: defs.daas.MarkingParam;

      /** regularConfigs */
      regularConfigs?: Array<defs.daas.RegularConfig>;
    }

    export class RegularProduceParamV2 {
      /** 主键类型 */
      idTypes?: Array<string>;

      /** 取值配置 */
      markingInfo?: defs.daas.MarkingParamV2;

      /** 交并差配置 */
      regularConfigs?: Array<defs.daas.RegularConfigV2>;
    }

    export class RelationInfoParam {
      /** children */
      children?: Array<defs.daas.RelationInfoParam>;

      /** childs */
      childs?: Array<defs.daas.RelationInfoParam>;

      /** id */
      id?: number;

      /** key */
      key?: string;

      /** objectId */
      objectId?: string;

      /** type */
      type?: string;

      /** value */
      value?: Array<defs.daas.CycleCondition>;
    }

    export class RelationInfoParamV2 {
      /** children */
      childs?: Array<defs.daas.RelationInfoParamV2>;

      /** 标签/行为id */
      id?: number;

      /** 唯一id */
      objectId?: string;

      /** 交并差 */
      type?: string;

      /** 前端用 */
      value?: Array<defs.daas.CycleCondition>;
    }

    export class ResourceAuthBO {
      /** applyUser */
      applyUser?: defs.daas.EmpBO;

      /** applyUserId */
      applyUserId?: string;

      /** bpmsId */
      bpmsId?: string;

      /** cn */
      cn?: string;

      /** description */
      description?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** ownerIds */
      ownerIds?: string;

      /** owners */
      owners?: Array<defs.daas.EmpBO>;

      /** projectId */
      projectId?: number;

      /** resourceId */
      resourceId?: number;

      /** resourceType */
      resourceType?: string;

      /** status */
      status?: string;
    }

    export class ResourceGroupBO {
      /** applyUrl */
      applyUrl?: string;

      /** detailUrl */
      detailUrl?: string;

      /** projectName */
      projectName?: string;

      /** resources */
      resources?: Array<string>;

      /** status */
      status?: string;

      /** type */
      type?: string;
    }

    export class ResultObject<T0 = any> {
      /** code */
      code?: number;

      /** data */
      data?: T0;

      /** message */
      message?: string;
    }

    export class SampleCaseBO {
      /** content */
      content?: string;

      /** title */
      title?: string;

      /** url */
      url?: string;
    }

    export class SampleTaskParam {
      /** encryption */
      encryption?: string;

      /** idType */
      idType?: string;

      /** idTypeCate */
      idTypeCate?: string;

      /** inputIdType */
      inputIdType?: string;

      /** labelId */
      labelId?: number;

      /** labelName */
      labelName?: string;

      /** tableName */
      tableName?: string;
    }

    export class SaveBhvFieldParam {
      /** description */
      description?: string;

      /** id */
      id?: number;

      /** logicFieldId */
      logicFieldId?: number;

      /** metaId */
      metaId?: number;

      /** name */
      name?: string;

      /** nameEn */
      nameEn?: string;

      /** phyFieldWithUdf */
      phyFieldWithUdf?: string;
    }

    export class SaveBhvMetaParam {
      /** dwType */
      dwType?: string;

      /** fieldList */
      fieldList?: Array<defs.daas.SaveBhvFieldParam>;

      /** filterConditions */
      filterConditions?: string;

      /** id */
      id?: number;

      /** idColumn */
      idColumn?: string;

      /** idType */
      idType?: string;

      /** outputNode */
      outputNode?: string;

      /** phyStoreType */
      phyStoreType?: string;

      /** phyTable */
      phyTable?: string;

      /** phyTableType */
      phyTableType?: string;

      /** phyTimeField */
      phyTimeField?: string;

      /** phyTimeFieldFormatter */
      phyTimeFieldFormatter?: string;

      /** phyType */
      phyType?: string;

      /** testDate */
      testDate?: string;
    }

    export class SaveBhvParam {
      /** bhvMetaList */
      bhvMetaList?: Array<defs.daas.SaveBhvMetaParam>;

      /** cateId */
      cateId?: number;

      /** dwType */
      dwType?: string;

      /** entityType */
      entityType?: string;

      /** id */
      id?: number;

      /** isPublic */
      isPublic?: boolean;

      /** nameCn */
      nameCn?: string;

      /** nameEn */
      nameEn?: string;

      /** ownerId */
      ownerId?: string;

      /** platform */
      platform?: Array<string>;

      /** projectId */
      projectId?: number;

      /** targetCn */
      targetCn?: string;

      /** targetEn */
      targetEn?: string;
    }

    export class ScenePermission {
      /** canSync */
      canSync?: boolean;

      /** message */
      message?: string;

      /** scene */
      scene?: string;

      /** text */
      text?: string;
    }

    export class ScheduleInfo {
      /** period */
      period?: number;

      /** scheduleType */
      scheduleType?: 'Day' | 'Week' | 'Month' | 'Manual';
    }

    export class SearchItem {
      /** id */
      id?: number;

      /** isOfficial */
      isOfficial?: boolean;

      /** name */
      name?: string;
    }

    export class SelectStatus {
      /** canSelect */
      canSelect?: boolean;

      /** message */
      message?: string;
    }

    export class Sequence {
      /** id */
      id?: number;

      /** name */
      name?: string;

      /** value */
      value?: number;
    }

    export class ServiceBaseBO {
      /** advantage */
      advantage?: string;

      /** description */
      description?: string;

      /** helpUrl */
      helpUrl?: string;

      /** introduce */
      introduce?: string;

      /** supportGroup */
      supportGroup?: string;

      /** title */
      title?: string;
    }

    export class ServiceCaseBO {
      /** describe */
      describe?: string;

      /** link */
      link?: string;

      /** title */
      title?: string;
    }

    export class ServiceDetailBO {
      /** infoTable */
      infoTable?: Array<defs.daas.ServiceInfoTableBO>;

      /** serviceBase */
      serviceBase?: defs.daas.ServiceBaseBO;

      /** serviceCase */
      serviceCase?: Array<defs.daas.ServiceCaseBO>;

      /** serviceId */
      serviceId?: number;

      /** serviceProcessFlow */
      serviceProcessFlow?: defs.daas.ServiceProcessFlowBO;

      /** serviceScene */
      serviceScene?: Array<defs.daas.ServiceSceneBO>;

      /** serviceType */
      serviceType?: string;
    }

    export class ServiceExtendBO {
      /** entityType */
      entityType?: string;

      /** qps */
      qps?: number;

      /** rt */
      rt?: number;

      /** useMode */
      useMode?: string;
    }

    export class ServiceFunctionBO {
      /** desc */
      desc?: string;

      /** fullServiceName */
      fullServiceName?: string;

      /** functionType */
      functionType?: string;

      /** group */
      group?: string;

      /** methodName */
      methodName?: string;

      /** request */
      request?: Array<defs.daas.HsfType>;

      /** response */
      response?: defs.daas.HsfType;

      /** serviceName */
      serviceName?: string;

      /** version */
      version?: string;
    }

    export class ServiceInfoTableBO {
      /** cate */
      cate?: string;

      /** introduce */
      introduce?: string;

      /** name */
      name?: string;
    }

    export class ServiceParameterTypeBO {
      /** children */
      children?: Array<defs.daas.ServiceParameterTypeBO>;

      /** description */
      description?: string;

      /** integrateDse */
      integrateDse?: boolean;

      /** items */
      items?: defs.daas.ServiceParameterTypeBO;

      /** label */
      label?: string;

      /** name */
      name?: string;

      /** type */
      type?: string;
    }

    export class ServiceProcessFlowBO {
      /** attention */
      attention?: string;

      /** describe */
      describe?: string;

      /** picture */
      picture?: string;

      /** title */
      title?: string;
    }

    export class ServiceRefB0 {
      /** name */
      name?: string;

      /** type */
      type?: string;
    }

    export class ServiceSceneBO {
      /** describe */
      describe?: string;

      /** link */
      link?: string;

      /** picture */
      picture?: string;

      /** serviceCase */
      serviceCase?: defs.daas.ServiceCaseBO;

      /** serviceIds */
      serviceIds?: Array<number>;

      /** title */
      title?: string;
    }

    export class ServiceSchemaBO {
      /** group */
      group?: string;

      /** methods */
      methods?: Array<defs.daas.ServiceFunctionBO>;

      /** name */
      name?: string;

      /** version */
      version?: string;
    }

    export class ServiceTestConfigInfo {
      /** appInfo */
      appInfo?: object;

      /** userConfigs */
      userConfigs?: Array<defs.daas.MarketUserConfigDO>;
    }

    export class StatisticValueParam {
      /** attributeId */
      attributeId?: number;

      /** attributeName */
      attributeName?: string;

      /** bhvId */
      bhvId?: number;

      /** bhvMetaId */
      bhvMetaId?: number;

      /** endDay */
      endDay?: string;

      /** extraInfo */
      extraInfo?: string;

      /** filters */
      filters?: Array<defs.daas.FilterParam>;

      /** kvKeyDim */
      kvKeyDim?: string;

      /** kvKeyDimId */
      kvKeyDimId?: number;

      /** startDay */
      startDay?: string;

      /** statisticType */
      statisticType?: string;

      /** timeType */
      timeType?: string;

      /** timespan */
      timespan?: number;
    }

    export class StatisticValueParamV2 {
      /** 打标的字段Id */
      attributeId?: number;

      /** 行为id */
      bhvId?: number;

      /** scope结束日期 */
      endDay?: string;

      /** 扩展信息，前端用 */
      extraInfo?: string;

      /** 过滤条件 */
      filters?: Array<defs.daas.FilterParamV2>;

      /** 唯一id，前端生成 */
      objectId?: string;

      /** scope开始日期 */
      startDay?: string;

      /** 打标的聚合方式 */
      statisticType?: string;

      /** 时间类型，动态/静态 */
      timeType?: string;

      /** recent时间配置 */
      timespan?: number;
    }

    export class StatusInfo {
      /** ext */
      ext?: object;

      /** message */
      message?: string;

      /** status */
      status?: string;

      /** url */
      url?: string;
    }

    export class SyncLabStatus {
      /** canSyncLab */
      canSyncLab?: boolean;

      /** message */
      message?: string;
    }

    export class TabBO {
      /** count */
      count?: number;

      /** type */
      type?: string;
    }

    export class Table {
      /** desc */
      desc?: string;

      /** guid */
      guid?: string;

      /** nodeId */
      nodeId?: string;

      /** ownerId */
      ownerId?: string;

      /** privilegeSystemEnum */
      privilegeSystemEnum?: 'ANTMETA' | 'ODPS' | 'OTHER' | 'DATAPHIN';

      /** projectName */
      projectName?: string;

      /** tableName */
      tableName?: string;
    }

    export class TableKeyInfoBO {
      /** idType */
      idType?: string;

      /** physColEn */
      physColEn?: string;
    }

    export class TestTask {
      /** args */
      args?: Array<object>;

      /** context */
      context?: object;

      /** creatorId */
      creatorId?: string;

      /** executeMode */
      executeMode?: string;

      /** finishTime */
      finishTime?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** history */
      history?: object;

      /** id */
      id?: number;

      /** implementType */
      implementType?: string;

      /** odpsAccountName */
      odpsAccountName?: string;

      /** projectBizId */
      projectBizId?: number;

      /** projectName */
      projectName?: string;

      /** projectUser */
      projectUser?: string;

      /** result */
      result?: object;

      /** serviceId */
      serviceId?: number;

      /** serviceName */
      serviceName?: string;

      /** serviceNameCn */
      serviceNameCn?: string;

      /** serviceType */
      serviceType?: string;

      /** startTime */
      startTime?: string;

      /** status */
      status?: string;

      /** stopable */
      stopable?: boolean;
    }

    export class Tuple2<T0 = any, T1 = any> {
      /** _1 */
      _1?: number;

      /** _2 */
      _2?: string;
    }

    export class TypeInfo {
      /** odpsType */
      odpsType?:
        | 'BIGINT'
        | 'DOUBLE'
        | 'BOOLEAN'
        | 'DATETIME'
        | 'STRING'
        | 'DECIMAL'
        | 'MAP'
        | 'ARRAY'
        | 'VOID'
        | 'TINYINT'
        | 'SMALLINT'
        | 'INT'
        | 'FLOAT'
        | 'CHAR'
        | 'VARCHAR'
        | 'DATE'
        | 'TIMESTAMP'
        | 'BINARY'
        | 'INTERVAL_DAY_TIME'
        | 'INTERVAL_YEAR_MONTH'
        | 'STRUCT';

      /** typeName */
      typeName?: string;
    }

    export class UpdateParam {
      /** description */
      description?: string;

      /** labelId */
      labelId?: number;

      /** lifecycle */
      lifecycle?: number;

      /** period */
      period?: string;

      /** periodIndex */
      periodIndex?: number;

      /** times */
      times?: string;
    }

    export class UrlItem {
      /** name */
      name?: string;

      /** url */
      url?: string;
    }

    export class ValueParam {
      /** condition */
      condition?: string;

      /** dataFormatter */
      dataFormatter?: string;

      /** dataType */
      dataType?: string;

      /** scope */
      scope?: ObjectMap<any, string>;

      /** tableName */
      tableName?: string;

      /** timePtColumn */
      timePtColumn?: string;

      /** valDistriType */
      valDistriType?: string;

      /** valueColumn */
      valueColumn?: string;

      /** valueDesc */
      valueDesc?: string;

      /** valueDescColumn */
      valueDescColumn?: string;

      /** valueType */
      valueType?: string;
    }

    export class WorkflowCustomerParam {
      /** 业务域 */
      app?: string;

      /** 新客类型 */
      customerType?: string;

      /** 客户粒度：自然人(oneId)、设备(deviceId) */
      idType?: string;

      /** ID 类型 */
      keyType?: string;

      /** 时间周期：30，90，365 */
      newDays?: number;
    }

    export class WorkflowExperiment {
      /** flowName */
      flowName?: string;

      /** userNumber */
      userNumber?: string;
    }

    export class WorkflowInputParam {
      /**  输入字段 */
      cols?: Array<string>;

      /**  0: 明文  1: 密文 */
      encodeMethod?: number;

      /** 标签多主键的情况,使用数组对象方式来传参，一一关系映射 */
      labelPrimaryKeys?: Array<defs.daas.LabelKeyDataSchema>;

      /**  输入表名 */
      name?: string;

      /** 分区字段 */
      partition?: string;

      /**  输入主键字段 */
      primaryKeys?: Array<string>;
    }

    export class WorkflowOutputParam {
      /** 是否自动创建表 */
      autoCreateTable?: boolean;

      /** crontab */
      crontab?: string;

      /** 表的生命周期 */
      lifecycle?: number;

      /** 表名 */
      name?: string;

      /** 输出字段 */
      outKeyCol?: string;

      /** 分区字段名 */
      partitionCol?: string;
    }

    export class WorkflowProcessParam {
      /** appId */
      appId?: number;

      /** keyType */
      keyType?: string;

      /** labelParams */
      labelParams?: Array<defs.daas.LabelParam>;

      /** objectId */
      objectId?: number;
    }
  }
}

declare namespace API {
  export namespace daas {
    /**
     * 服务管理模块接口
     */
    export namespace admin {
      /**
       * 批量修改服务创建人
       * /admin/services/creator/batchUpdate
       */
      export namespace batchUpdateCreator {
        export class Params {
          /** creator */
          creator: string;
          /** serviceIdList */
          serviceIdList: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 增加服务详情页
       * /admin/services/detail/add
       */
      export namespace addServiceDetail {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.ServiceDetailBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.ServiceDetailBO,
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
       * 修改服务详情页
       * /admin/services/detail/update
       */
      export namespace updateServiceDetail {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.ServiceDetailBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.ServiceDetailBO,
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
       * 批量修改服务负责人
       * /admin/services/owners/batchUpdate
       */
      export namespace batchUpdateOwners {
        export class Params {
          /** owners */
          owners: string;
          /** serviceIdList */
          serviceIdList: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 更新服务信息
       * /admin/services/{serviceId}
       */
      export namespace updateService {
        export class Params {
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceBO
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.MarketServiceBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.MarketServiceBO,
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
       * 重新部署服务
       * /admin/services/{serviceId}/deploy
       */
      export namespace deployService {
        export class Params {
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceBO
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
       * 服务去部署
       * /admin/services/{serviceId}/undeploy
       */
      export namespace undeployService {
        export class Params {
          /** creatorId */
          creatorId: string;
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceBO
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
    }

    /**
     * 审批获取标签详情
     */
    export namespace approval {
      /**
       * 用于datawin获取标签详情
       * /api/approval/getLabelInfo.json
       */
      export namespace getLabelInfo {
        export class Params {
          /** labelIdList */
          labelIdList: Array<number>;
          /** token */
          token: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<defs.daas.LabelBO>>;

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
     * 标签组
     */
    export namespace assetGroup {
      /**
       * 新增组
       * /assetGroup/save.json
       */
      export namespace saveGroup {
        export class Params {
          /** 标签组名称（Code） */
          code?: string;
          /** 创建人 */
          creator?: string;
          /** 标签组描述 */
          description?: string;
          /** id */
          id?: number;
          /** 输入ID类型 */
          inParamId?: string;
          /** 选择的标签 */
          labelIds?: Array<number>;
          /** 归属项目 */
          projectId?: number;
          /** 归属服务 */
          serviceId?: number;
          /** 调用应用名称 */
          targetApp?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.AssetGroupBO>;

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
     * Auth Label Controller
     */
    export namespace authLabel {
      /**
       * 获取授权标签列表
       * /auth/getAuthLabels.json
       */
      export namespace getAuthLabels {
        export class Params {
          /** 目标系统 */
          appName?: string;
          /** authStatus */
          authStatus?: string;
          /** 实体类型 */
          entityType?: string;
          /** ID类型 */
          inputIdType?: string;
          /** keyword */
          keyword?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 项目ID */
          projectId?: number;
          /** requestId */
          requestId?: string;
          /** responseIds */
          responseIds?: number;
          /** 标签范围，my/all */
          scope?: string;
          /** 服务ID */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.AuthLabelItemVO>
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
       * 删除失败的信息
       * /auth/removeAuthLabelRecord.json
       */
      export namespace removeRecord {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.AuthLabelListParm,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.AuthLabelListParm,
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
     * 行为注册、管理等
     */
    export namespace bhv {
      /**
       * 删除未上架的行为
       * /bhv/deleteBhv.json
       */
      export namespace deleteBhv {
        export class Params {
          /** bhvId */
          bhvId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 删除银行推送记录
       * /bhv/deletePushRecord.json
       */
      export namespace deletePushRecord {
        export class Params {
          /** bhvMetaId */
          bhvMetaId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 行为生产列表
       * /bhv/geBhvs4Produce.json
       */
      export namespace geBhvs4Produce {
        export class Params {
          /** 类目ids，如[1,2,'3,4,5',null] */
          categoryIds?: string;
          /** 入参id类型，逗号分隔 */
          idTypes?: string;
          /** 是否用于行为打标 */
          is4Mark?: boolean;
          /** 是否枚举 */
          isEnum?: boolean;
          /** keyword */
          keyword?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 项目id */
          projectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CategoryResponse>
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
       * 查询资源申请列表
       * /bhv/getApplyingResource.json
       */
      export namespace getApplyingResource {
        export class Params {
          /** bhvId */
          bhvId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.ApplyingResourceBO>
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
       * 行为详情
       * /bhv/getBhvInfo.json
       */
      export namespace getBhvInfo {
        export class Params {
          /** bhvId */
          bhvId: number;
          /** isAdded */
          isAdded?: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.BhvBehaviorDO>;

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
       * 查看预跑结果
       * /bhv/getPreRunResult.json
       */
      export namespace getPreRunResult {
        export class Params {
          /** bhvId */
          bhvId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.BhvPreRunResultBO>
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
       * 行为字段列表
       * /bhv/listBhvFields.json
       */
      export namespace listBhvFields {
        export class Params {
          /** bhvId */
          bhvId: number;
          /** selectedFields */
          selectedFields?: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.BhvFieldDO>
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
       * 行为名称列表
       * /bhv/listBhvNames.json
       */
      export namespace listBhvNames {
        export class Params {
          /** cateId */
          cateId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.BhvNameBO>
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
       * 工作台行为列表
       * /bhv/listMyBhv.json
       */
      export namespace listMyBhv {
        export class Params {
          /** 标签申请状态。传none代表无权限 */
          authStatus?: string;
          /** cate1Id */
          cate1Id?: string;
          /** cate2Id */
          cate2Id?: string;
          /** cate3Id */
          cate3Id?: string;
          /** 类目ids，如[1,2,'3,4,5',null] */
          categoryIds?: string;
          /** 实体类型 */
          entityType?: string;
          /** keyword */
          keyword?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 使用平台：dtmarket、dataBank */
          platform?: string;
          /** 行为归属项目id */
          projectId?: number;
          /** 查询范围 */
          scope?: string;
          /** 上架状态 */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.BehaviorItemBO>
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
       * 维度&度量列表
       * /bhv/listSchema.json
       */
      export namespace listSchema {
        export class Params {
          /** domainId */
          domainId?: number;
          /** dwType */
          dwType?: string;
          /** entityType */
          entityType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.BhvSchemaDO>
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
       * 预跑
       * /bhv/preRun.json
       */
      export namespace preRun {
        export class Params {
          /** bhvId */
          bhvId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.BhvPreRunSubmitResultBO
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
       * 发布
       * /bhv/publishBhv.json
       */
      export namespace publishBhv {
        export class Params {
          /** bhvMetaId */
          bhvMetaId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
       * 保存行为
       * /bhv/saveBhv.json
       */
      export namespace saveBhv {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<number>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.SaveBhvParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.SaveBhvParam,
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
       * 修改行为表状态
       * /bhv/updateBhvMetaStatus.json
       */
      export namespace updateStatus {
        export class Params {
          /** bhvMetaId */
          bhvMetaId: number;
          /** status */
          status: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 修改行为状态
       * /bhv/updateBhvStatus.json
       */
      export namespace updateBhvStatus {
        export class Params {
          /** bhvId */
          bhvId: number;
          /** status */
          status: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 修改标准字段业务域
       * /bhv/updateSchemaDomain.json
       */
      export namespace updateSchemaDomain {
        export class Params {
          /** addDomains */
          addDomains?: Array<number>;
          /** allDomains */
          allDomains?: Array<number>;
          /** schemaId */
          schemaId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
     * Bpms Controller
     */
    export namespace bpms {
      /**
       * 创建核心资产服务数据权限申请审批流
       * /bpms/create.json
       */
      export namespace getCrowdType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.AssetApply4BpmsParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.AssetApply4BpmsParam,
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
     * 品牌搜索接口
     */
    export namespace brand {
      /**
       * 根据品牌名称查询品牌列表
       * /dim/queryBrands
       */
      export namespace queryBrand {
        export class Params {
          /** brandName */
          brandName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<defs.daas.BrandVO>>;

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
     * 业务空间模块接口
     */
    export namespace businessScope {
      /**
       * 给业务空间申请资产
       * /businessscope/applyAssets.json
       */
      export namespace applyAssets {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.AssetApplyParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.AssetApplyParam,
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
       * 判断业务空间是否有资产权限
       * /businessscope/checkHasPermission.json
       */
      export namespace checkHasPermission {
        export class Params {
          /** applyReason */
          applyReason?: string;
          /** assetIdList */
          assetIdList?: Array<number>;
          /** assetType */
          assetType?: string;
          /** businessScopeId */
          businessScopeId?: number;
          /** creatorId */
          creatorId?: string;
          /** endTime */
          endTime?: string;
          /** scene */
          scene?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.AssetPermissionBO>
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
       * 新建业务空间
       * /businessscope/createBusinessScope.json
       */
      export namespace createBusinessScope {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<number>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.CreateBusinessScopeParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.CreateBusinessScopeParam,
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
       * 业务空间详情
       * /businessscope/getBusinessScope.json
       */
      export namespace getBusinessScope {
        export class Params {
          /** businessScopeId */
          businessScopeId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.BusinessScopeBO
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
       * 业务空间下申请的标签列表
       * /businessscope/listAppliedLabel.json
       */
      export namespace listAppliedLabel {
        export class Params {
          /** businessScopeId */
          businessScopeId: number;
          /** isPublic */
          isPublic?: boolean;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.LabelListBO>
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
       * 业务空间列表
       * /businessscope/listBusinessScope.json
       */
      export namespace listBusinessScope {
        export class Params {
          /** authorityType */
          authorityType?: string;
          /** keyword */
          keyword?: string;
          /** labelId */
          labelId?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.BusinessScopeBO>
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
       * 业务空间申请人群列表
       * /businessscope/listCrowd.json
       */
      export namespace listCrowd {
        export class Params {
          /** 状态筛选条件 */
          authStatus?: string;
          /** 用户权限类型 */
          authorityType?: string;
          /** 业务空间id，查看空间下资产时使用 */
          businessScopeId?: number;
          /** keyword */
          keyword?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.CrowdBO>
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
       * 获取某个资产已经加入的业务空间
       * /businessscope/listJoinedBusinessScope.json
       */
      export namespace listJoinedBusinessScope {
        export class Params {
          /** assetId */
          assetId: number;
          /** assetType */
          assetType: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.BusinessScopeBO>
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
       * 标签申请列表
       * /businessscope/listLabel.json
       */
      export namespace listLabel {
        export class Params {
          /** Dse 中的 appId */
          appId?: number;
          /** 应用名 */
          appName?: string;
          /** 权限审批状态，查看申请状态时用。传none代表无权限 */
          authStatus?: string;
          /** 用户权限类型 */
          authorityType?: string;
          /** 业务空间id，查看空间下资产时使用 */
          businessScopeId?: number;
          /** cate1Id */
          cate1Id?: string;
          /** cate2Id */
          cate2Id?: string;
          /** cate3Id */
          cate3Id?: string;
          /** cate4Id */
          cate4Id?: string;
          /** cate5Id */
          cate5Id?: string;
          /** 类目ids，如[1,2,'3,4,5',null] */
          categoryIds?: string;
          /** 是否要屏蔽无效的选项，如果要，则展示出无法选择的标签原因，默认false */
          disableSelectSwitch?: boolean;
          /** 是否要屏蔽同步状态的选项，默认false */
          disableSyncStatusSwitch?: boolean;
          /** 入参id类型 */
          idType?: string;
          /** isPublic */
          isPublic?: boolean;
          /** keyword */
          keyword?: string;
          /** labelCateType */
          labelCateType?: string;
          /** 标签类型，gprofile/onelocation/onecompany */
          labelType?: string;
          /** dse 中的objectId */
          objectId?: number;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 标签生产类型，1:接入；2:规则生产；3:高阶生产 */
          produceType?: number;
          /** 项目id，查看申请状态时用 */
          projectId?: number;
          /** 服务id，查看申请状态时用 */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.LabelListBO>
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
    }

    /**
     * Cate Prop Controller
     */
    export namespace cateProp {
      /**
       * 根据类目ID获取属性列表
       * /dim/listCateProperties
       */
      export namespace listCateProperties {
        export class Params {
          /** cateId */
          cateId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CateProp>
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
       * 根据类目ID及属性ID获取属性值列表
       * /dim/listCatePropertyValues
       */
      export namespace listCatePropertyValues {
        export class Params {
          /** cateId */
          cateId: number;
          /** propertyId */
          propertyId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CatePropValue>
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
       * 获取行业+一级大类列表
       * /dim/listIndustries
       */
      export namespace listIndustries {
        export class Params {
          /** ind1Id */
          ind1Id?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.IndustryInfo>
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
       * 根据行业或当前类目获取子类目列表
       * /dim/listSubCates
       */
      export namespace listSubCates {
        export class Params {
          /** cateId */
          cateId?: number;
          /** cateLevel */
          cateLevel: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CateInfo>
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
       * 类目搜索
       * /dim/queryCates
       */
      export namespace queryCates {
        export class Params {
          /** cateLevel */
          cateLevel: number;
          /** cateName */
          cateName: string;
          /** parentCateId */
          parentCateId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CateInfo>
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
    }

    /**
     * 服务市场类目
     */
    export namespace category {
      /**
       * 资产图谱
       * /category/assetMap.json
       */
      export namespace getAssetMap {
        export class Params {
          /** project过滤，防止混淆 */
          authProjectId?: number;
          /** 一级类目，默认全部 */
          cate1Id?: string;
          /** 二级类目，默认全部 */
          cate2Id?: string;
          /** 三级类目，默认全部 */
          cate3Id?: string;
          /** 四级类目，默认全部 */
          cate4Id?: string;
          /** 五级类目，默认全部 */
          cate5Id?: string;
          /** 类目类型，对应到类目表里的type字段。默认gprofile，可选：gprofile/onecompany/onelocation/bhv,特殊的是特征传gprofile即可 */
          cateType?: string;
          /** 类目类型，对应到类目表里的type字段。默认gprofile，可选：gprofile/onecompany/onelocation/bhv,特殊的是特征传gprofile即可 */
          categoryType?: string;
          /** 类目cnt的关联对象，用于计算类目下的标签/特征/行为总数。默认gprofile，特征feature,行为bhv */
          entityType?: string;
          /** idType */
          idType?: string;
          /** 是否取全部标签状态 */
          isAllStatus?: boolean;
          /** 是否取标签组 */
          isGroup?: boolean;
          /** 是否关联自己的标签 */
          isSelf?: boolean;
          /** 搜索词 */
          labelKeyword?: string;
          /** 是否需要绑定实体到类目下 */
          needBindEntity?: boolean;
          /** 是否需要过滤标签分布类型 */
          needFilterDistriType?: boolean;
          /** 关联自己的标签时，project过滤（对应标签的belongProjectId） */
          projectId?: number;
          /** 类目cnt的关联对象，用于计算类目下的标签/特征/行为总数。默认gprofile，特征feature,行为bhv */
          queryType?: string;
          /** 搜索词 */
          searchWord?: string;
          /** 服务id */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CategoryDO>
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
       * 列出所有类目
       * /category/getAllCategorys.json
       */
      export namespace getAllCategorys {
        export class Params {
          /** cateType */
          cateType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CategoryDO>
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
       * 所有一级类目
       * /category/getCategory1.json
       */
      export namespace getCategory1 {
        export class Params {
          /** cateType */
          cateType?: string;
          /** queryType */
          queryType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CategoryDO>
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
       * 类目筛选，后续不再使用。当前还剩标签展示页未迁移
       * /category/getCategoryByIds.json
       */
      export namespace getCategoryByIds {
        export class Params {
          /** project过滤，防止混淆 */
          authProjectId?: number;
          /** 一级类目，默认全部 */
          cate1Id?: string;
          /** 二级类目，默认全部 */
          cate2Id?: string;
          /** 三级类目，默认全部 */
          cate3Id?: string;
          /** 四级类目，默认全部 */
          cate4Id?: string;
          /** 五级类目，默认全部 */
          cate5Id?: string;
          /** 类目类型，对应到类目表里的type字段。默认gprofile，可选：gprofile/onecompany/onelocation/bhv,特殊的是特征传gprofile即可 */
          cateType?: string;
          /** 类目类型，对应到类目表里的type字段。默认gprofile，可选：gprofile/onecompany/onelocation/bhv,特殊的是特征传gprofile即可 */
          categoryType?: string;
          /** 类目cnt的关联对象，用于计算类目下的标签/特征/行为总数。默认gprofile，特征feature,行为bhv */
          entityType?: string;
          /** idType */
          idType?: string;
          /** 是否取全部标签状态 */
          isAllStatus?: boolean;
          /** 是否取标签组 */
          isGroup?: boolean;
          /** 是否关联自己的标签 */
          isSelf?: boolean;
          /** 搜索词 */
          labelKeyword?: string;
          /** 是否需要绑定实体到类目下 */
          needBindEntity?: boolean;
          /** 是否需要过滤标签分布类型 */
          needFilterDistriType?: boolean;
          /** 关联自己的标签时，project过滤（对应标签的belongProjectId） */
          projectId?: number;
          /** 类目cnt的关联对象，用于计算类目下的标签/特征/行为总数。默认gprofile，特征feature,行为bhv */
          queryType?: string;
          /** 搜索词 */
          searchWord?: string;
          /** 服务id */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CategoryDO>
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
       * 类目筛选
       * /category/getCategoryTree.json
       */
      export namespace getCategoryTree {
        export class Params {
          /** appName */
          appName?: string;
          /** 业务空间id，个人中心传 */
          businessScopeId?: number;
          /** 类目类型，对应到类目表里的type字段。默认gprofile，可选：gprofile/onecompany/onelocation/bhv等 */
          categoryType?: string;
          /** entityType */
          entityType?: string;
          /** 额外参数，map结构，k取值如serviceId、idType */
          ext?: string;
          /** extMap */
          extMap?: object;
          /** 项目id，工作台都传 */
          projectId?: number;
          /** 取资产的场景 */
          scene?: string;
          /** 资产搜索词 */
          searchWord?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CategoryResponse>
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
       * 首页，查询核心资产标签统计信息
       * /category/getLabelDomainInfo.json
       */
      export namespace getLabelDomainInfo {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<ObjectMap>;

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
       * 新增类目
       * /category/insertCategory.json
       */
      export namespace insertCategory {
        export class Params {
          /** 审批人工号 */
          approverId?: string;
          /** 类目全名，多层级通过'-'分隔。例如：基本信息-大淘宝-资产信息-汽车 */
          fullName?: string;
          /** 类目类型，gprofile/onecompany/bhv等 */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 类目筛选，在标签详情页中使用，提供给同步服务使用
       * /category/listHjcCategory.json
       */
      export namespace listHjcCategory {
        export class Params {
          /** businessScopeId */
          businessScopeId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CategoryDO>
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
    }

    /**
     * 数据流通
     */
    export namespace circulation {
      /**
       * 查看标签对应类型
       * /label/circulation/customProcessType.json
       */
      export namespace getLabelSchema {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.ObjectMap<string, string>>
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
       * 获取当前用户在DSE 的租户信息
       * /label/circulation/getDseAppConf.json
       */
      export namespace getDseAppConf {
        export class Params {
          /** entityType */
          entityType: string;
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.MarketCateTreeBO>
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
       * 查看标签对应类型的参数模板信息
       * /label/circulation/getLabelTemplate.json
       */
      export namespace getLabelTemplate {
        export class Params {
          /** labelId */
          labelId: number;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
       * 校验标签加工逻辑是否正确
       * /label/circulation/validateProcess.json
       */
      export namespace validateProcess {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.LabelProcessInfoBO>
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.OfflineTaskParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.OfflineTaskParam,
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
     * Cookie Controller
     */
    export namespace cookie {
      /**
       * 查询cookie 信息
       * /dev/cookie/getCookie.json
       */
      export namespace getCookie {
        export class Params {
          /** key */
          key: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
       * 设置cookie 信息，maxAge 为过期时间，单位为秒
       * /dev/cookie/setCookie.json
       */
      export namespace setCookie {
        export class Params {
          /** key */
          key: string;
          /** maxAge */
          maxAge?: number;
          /** value */
          value: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
     * 枚举数据类型接口
     */
    export namespace dataType {
      /**
       * 获取用户申请过权限的ID类型列表
       * /type/data/getAuthIdTypes
       */
      export namespace getAuthIdTypes {
        export class Params {
          /** projectId */
          projectId: number;
          /** serviceId */
          serviceId: number;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.IdTypeDO>
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
       * 行为注册平台
       * /type/data/getBhvPlatfrom
       */
      export namespace getBhvPlatform {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.BhvPlatform>
        >;

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
       * 获取更新周期列表
       * /type/data/getDataPeriod
       */
      export namespace getDataPeriod {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject;

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
       * 获取业务域信息
       * /type/data/getDomains
       */
      export namespace getDomains {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.DomainDO>
        >;

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
       * 获取ID类型分类列表,type=oneid/onelocationid/onecompanyid
       * /type/data/getIdGroupTypes
       */
      export namespace getIdGroupTypes {
        export class Params {
          /** filterKey */
          filterKey?: string;
          /** scene */
          scene?: string;
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.IdTypeDO>
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
       * 获取ID类型列表
       * /type/data/getIdTypes
       */
      export namespace getIdTypes {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.IdTypeDO>
        >;

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
       * 获取新客识别业务域信息
       * /type/data/getMobileClientDomains
       */
      export namespace getMobileClientDomains {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.MobileClientDomainDO>
        >;

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
       * 获取新客识别id类型
       * /type/data/getMobileClientIdTypes
       */
      export namespace getMobileClientIdTypes {
        export class Params {
          /** app */
          app: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.IdTypeDO>
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
       * 获取ID类型分类分层
       * /type/data/getOneidSource.json
       */
      export namespace getOneidSource {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.IdTypeDO>
        >;

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
       * 获取数据分布类型列表
       * /type/data/getValueDistriTypes
       */
      export namespace getValueTypes {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject;

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
       * 获取数据组织类型列表
       * /type/data/getValueOrgTypes
       */
      export namespace getValueOrgTypes {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject;

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
       * 新增oneid
       * /type/data/insertId
       */
      export namespace insertId {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<number>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.AddOneidParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.AddOneidParam,
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
       * 实体类型。type=label/bhv/feature
       * /type/data/listEntityType
       */
      export namespace listEntityType {
        export class Params {
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.EntityType>
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
       * 监控规则
       * /type/data/monitorRules
       */
      export namespace monitorRules {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CommonKVResult>
        >;

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
       * 敏感信息
       * /type/data/sensitiveData
       */
      export namespace sensitiveData {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CommonKVResult>
        >;

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
    }

    /**
     * 表单配置模块接口
     */
    export namespace formConfig {
      /**
       * 将模板关联到服务中
       * /dev/form/config/connectTemplate2Service.json
       */
      export namespace connectService {
        export class Params {
          /** id */
          id: number;
          /** serviceIds */
          serviceIds: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 将模板关联到服务中
       * /dev/form/config/connectTemplate2Service.json
       */
      export namespace headConnectTemplate2Service {
        export class Params {
          /** id */
          id: number;
          /** serviceIds */
          serviceIds: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 将模板关联到服务中
       * /dev/form/config/connectTemplate2Service.json
       */
      export namespace postConnectTemplate2Service {
        export class Params {
          /** id */
          id: number;
          /** serviceIds */
          serviceIds: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 将模板关联到服务中
       * /dev/form/config/connectTemplate2Service.json
       */
      export namespace putConnectTemplate2Service {
        export class Params {
          /** id */
          id: number;
          /** serviceIds */
          serviceIds: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 将模板关联到服务中
       * /dev/form/config/connectTemplate2Service.json
       */
      export namespace deleteConnectTemplate2Service {
        export class Params {
          /** id */
          id: number;
          /** serviceIds */
          serviceIds: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 将模板关联到服务中
       * /dev/form/config/connectTemplate2Service.json
       */
      export namespace optionsConnectTemplate2Service {
        export class Params {
          /** id */
          id: number;
          /** serviceIds */
          serviceIds: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 将模板关联到服务中
       * /dev/form/config/connectTemplate2Service.json
       */
      export namespace patchConnectTemplate2Service {
        export class Params {
          /** id */
          id: number;
          /** serviceIds */
          serviceIds: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * delete
       * /dev/form/config/delete.json
       */
      export namespace remove {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<ObjectMap>;

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
       * get
       * /dev/form/config/get.json
       */
      export namespace get {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.FormConfigDO>;

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
       * list
       * /dev/form/config/list.json
       */
      export namespace list {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.FormConfigDO>
        >;

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
       * 保存接口
       * /dev/form/config/save.json
       */
      export namespace saveOrUpdate {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<number>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.FormConfigDO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.FormConfigDO,
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
     * 方法管理模块接口
     */
    export namespace functionAdmin {
      /**
       * getPlatformStatus
       * /admin/function/getPlatformStatus
       */
      export namespace getPlatformStatus {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PromotionStatus
        >;

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
       * getPlatformStatus
       * /admin/function/getPlatformStatus
       */
      export namespace headGetPlatformStatus {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PromotionStatus
        >;

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
       * getPlatformStatus
       * /admin/function/getPlatformStatus
       */
      export namespace postGetPlatformStatus {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PromotionStatus
        >;

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
       * getPlatformStatus
       * /admin/function/getPlatformStatus
       */
      export namespace putGetPlatformStatus {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PromotionStatus
        >;

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
       * getPlatformStatus
       * /admin/function/getPlatformStatus
       */
      export namespace deleteGetPlatformStatus {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PromotionStatus
        >;

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
       * getPlatformStatus
       * /admin/function/getPlatformStatus
       */
      export namespace optionsGetPlatformStatus {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PromotionStatus
        >;

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
       * getPlatformStatus
       * /admin/function/getPlatformStatus
       */
      export namespace patchGetPlatformStatus {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PromotionStatus
        >;

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
    }

    /**
     * 初始化数据
     */
    export namespace initData {
      /**
       * 新增蚂蚁类目
       * /init/initAntCate.json
       */
      export namespace initAntCate {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 蚂蚁标签导入
       * /init/initAntLabel.json
       */
      export namespace initAntLabel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * initBhvSample
       * /init/initBhvSample.json
       */
      export namespace initBhvSample {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 蚂蚁标签导入
       * /init/initCompanyLabel.json
       */
      export namespace initCompanyLabel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * initKeysInfo
       * /init/initKeysInfo.json
       */
      export namespace initKeysInfo {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * Label表初始化
       * /init/initLabel.json
       */
      export namespace initLabel {
        export class Params {
          /** date */
          date?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * initSource
       * /init/initSource.json
       */
      export namespace initSource {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
    }

    /**
     * 标签服务接口，包含标签查询、测试、接入、编辑等
     */
    export namespace label {
      /**
       * 取消上架申请
       * /label/cancel.json
       */
      export namespace cancel {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 标签申请检测接口
       * /label/checkLabelCanApply4Service.json
       */
      export namespace checkLabelCanApply4Service {
        export class Params {
          /** appName */
          appName?: string;
          /** businessScopeId */
          businessScopeId?: number;
          /** inputIdType */
          inputIdType?: string;
          /** labelIds */
          labelIds?: Array<number>;
          /** projectId */
          projectId?: number;
          /** serviceId */
          serviceId?: number;
          /** userId */
          userId?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.LabelCheckApplyResultBO>
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
       * 校验标签主键、表名、nodeId
       * /label/checkLabelKeys.json
       */
      export namespace checkLabelKeys {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.AddLabelParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.AddLabelParam,
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
       * 校验标签名称、基线
       * /label/checkLabelNames.json
       */
      export namespace checkLabelNames {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.LabelCheckResultBO>
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.AddLabelParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.AddLabelParam,
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
       * 是否需要重新发起审批
       * /label/checkNeedBpmsAgain.json
       */
      export namespace checkNeedBpmsAgain {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.LabelDetailParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.LabelDetailParam,
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
       * 删除标签
       * /label/deleteLabel.json
       */
      export namespace deleteLabel {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 获取可复制的版本列表
       * /label/getCanCopyVersions.json
       */
      export namespace getCanCopyVersions {
        export class Params {
          /** labelGroupId */
          labelGroupId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.LabelListBO>
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
       * 置信度分布
       * /label/getConfidenceDistribute.json
       */
      export namespace getConfidenceDistribute {
        export class Params {
          /** labelId */
          labelId: number;
          /** labelValue */
          labelValue?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.LabelDistributeBO>
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
       * Grofile已有权限及审批中列表(申请记录)
       * /label/getGprofileApplyLabels.json
       */
      export namespace getGprofileApplyLabels {
        export class Params {
          /** appName */
          appName?: string;
          /** entityType */
          entityType?: string;
          /** inputIdType */
          inputIdType: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId: number;
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.GprofileAssetBO>
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
       * IDMapping已有权限及审批中列表
       * /label/getIdMappingApplyLabels.json
       */
      export namespace getIdMappingApplyLabels {
        export class Params {
          /** idType */
          idType?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId: number;
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.IdMappingAssetBO>
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
       * 标签应用情况
       * /label/getLabelApplyInfo.json
       */
      export namespace getLabelApplyInfo {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.LabelApplyStatBO>
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
       * 标签基础信息
       * /label/getLabelBaseInfo.json
       */
      export namespace getLabelBaseInfo {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.LabelDO>;

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
       * 标签调用信息
       * /label/getLabelCallInfo.json
       */
      export namespace getLabelCallInfo {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.LabelCallStatBO
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
       * 标签分布（除KV中的Value）
       * /label/getLabelDistribute.json
       */
      export namespace getLabelDistribute {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.LabelDistributeDO>
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
       * KV中的Value的标签分布
       * /label/getLabelDistributeKV.json
       */
      export namespace getLabelDistributeKV {
        export class Params {
          /** labelId */
          labelId: string;
          /** labelKey */
          labelKey: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.LabelDistributeBO>
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
       * 查询标签组信息
       * /label/getLabelGroupDetail.json
       */
      export namespace getLabelGroupDetail {
        export class Params {
          /** isAdded */
          isAdded?: boolean;
          /** labelId */
          labelId: number;
          /** projectId */
          projectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.LabelGroupBO>;

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
       * 资产市场列表页
       * /label/getLabelGroupPage.json
       */
      export namespace getLabelGroupPage {
        export class Params {
          /** 标签上架状态。传none代表无权限 */
          authStatus?: string;
          /** cate1Id */
          cate1Id?: string;
          /** cate2Id */
          cate2Id?: string;
          /** cate3Id */
          cate3Id?: string;
          /** cate4Id */
          cate4Id?: string;
          /** cate5Id */
          cate5Id?: string;
          /** 类目ids，如[1,2,'3,4,5',null] */
          categoryIds?: string;
          /** 标签类型，gprofile/onelocation/onecompany */
          entityType?: string;
          /** 是否官方认证 */
          isOfficial?: boolean;
          /** 是否最近上架 */
          isRecent?: boolean;
          /** keyword */
          keyword?: string;
          /** labelCateType */
          labelCateType?: string;
          /** 标签类型，gprofile/onelocation/onecompany */
          labelType?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 标签生产类型，LabelProduceTypeEnum。0表示全部  */
          produceType?: number;
          /** 项目id，查看申请状态时用 */
          projectId?: number;
          /** 标签范围，my/all */
          scope?: string;
          /** 标签上架状态。传none代表无权限 */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.LabelItemBO>
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
       * 查询odps表已经接入过的标签列表
       * /label/getLabelInMarket.json
       */
      export namespace getLabelInMarket {
        export class Params {
          /** odpsTable */
          odpsTable: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<defs.daas.LabelDO>>;

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
       * 标签基础信息
       * /label/getLabelInfos.json
       */
      export namespace getLabelInfos {
        export class Params {
          /** labelIds */
          labelIds: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.LabelMetaBO>
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
       * 标签基础信息
       * /label/getLabelInfos.json
       */
      export namespace postGetLabelInfos {
        export class Params {
          /** labelIds */
          labelIds: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.LabelMetaBO>
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
       * 标签动态概况
       * /label/getLabelOverview.json
       */
      export namespace getLabelOverview {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.LabelOverviewBO
        >;

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
       * 标签稳定性信息
       * /label/getLabelStabilityInfo.json
       */
      export namespace getLabelStabilityInfo {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.LabelStabilityDO>
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
       * 服务资产申请列表
       * /label/getLabels4Apply.json
       */
      export namespace getLabels4Apply {
        export class Params {
          /** Dse 中的 appId */
          appId?: number;
          /** 应用名 */
          appName?: string;
          /** 权限审批状态，查看申请状态时用。传none代表无权限 */
          authStatus?: string;
          /** 用户权限类型 */
          authorityType?: string;
          /** 业务空间id，查看空间下资产时使用 */
          businessScopeId?: number;
          /** cate1Id */
          cate1Id?: string;
          /** cate2Id */
          cate2Id?: string;
          /** cate3Id */
          cate3Id?: string;
          /** cate4Id */
          cate4Id?: string;
          /** cate5Id */
          cate5Id?: string;
          /** 类目ids，如[1,2,'3,4,5',null] */
          categoryIds?: string;
          /** 是否要屏蔽无效的选项，如果要，则展示出无法选择的标签原因，默认false */
          disableSelectSwitch?: boolean;
          /** 是否要屏蔽同步状态的选项，默认false */
          disableSyncStatusSwitch?: boolean;
          /** 入参id类型 */
          idType?: string;
          /** isPublic */
          isPublic?: boolean;
          /** keyword */
          keyword?: string;
          /** labelCateType */
          labelCateType?: string;
          /** 标签类型，gprofile/onelocation/onecompany */
          labelType?: string;
          /** dse 中的objectId */
          objectId?: number;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 标签生产类型，1:接入；2:规则生产；3:高阶生产 */
          produceType?: number;
          /** 项目id，查看申请状态时用 */
          projectId?: number;
          /** 服务id，查看申请状态时用 */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.LabelListBO>
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
       * 标签列表（for资产市场）
       * /label/getLabels4Market.json
       */
      export namespace getLabels4Market {
        export class Params {
          /** 标签上架状态。传none代表无权限 */
          authStatus?: string;
          /** cate1Id */
          cate1Id?: string;
          /** cate2Id */
          cate2Id?: string;
          /** cate3Id */
          cate3Id?: string;
          /** cate4Id */
          cate4Id?: string;
          /** cate5Id */
          cate5Id?: string;
          /** 类目ids，如[1,2,'3,4,5',null] */
          categoryIds?: string;
          /** 标签类型，gprofile/onelocation/onecompany */
          entityType?: string;
          /** 是否官方认证 */
          isOfficial?: boolean;
          /** 是否最近上架 */
          isRecent?: boolean;
          /** keyword */
          keyword?: string;
          /** labelCateType */
          labelCateType?: string;
          /** 标签类型，gprofile/onelocation/onecompany */
          labelType?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 标签生产类型，LabelProduceTypeEnum。0表示全部  */
          produceType?: number;
          /** 项目id，查看申请状态时用 */
          projectId?: number;
          /** 标签范围，my/all */
          scope?: string;
          /** 标签上架状态。传none代表无权限 */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.LabelItemBO>
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
       * 资产生产列表
       * /label/getLabels4Produce.json
       */
      export namespace getLabels4Produce {
        export class Params {
          /** 类目ids，如[1,2,'3,4,5',null] */
          categoryIds?: string;
          /** 入参id类型，逗号分隔 */
          idTypes?: string;
          /** 是否枚举 */
          isEnum?: boolean;
          /** keyword */
          keyword?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 项目id */
          projectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.LabelListBO>
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
       * 标签列表 （for资产管理）
       * /label/getLabels4Workbench.json
       */
      export namespace getLabels4Workbench {
        export class Params {
          /** 标签上架状态。传none代表无权限 */
          authStatus?: string;
          /** cate1Id */
          cate1Id?: string;
          /** cate2Id */
          cate2Id?: string;
          /** cate3Id */
          cate3Id?: string;
          /** cate4Id */
          cate4Id?: string;
          /** cate5Id */
          cate5Id?: string;
          /** 类目ids，如[1,2,'3,4,5',null] */
          categoryIds?: string;
          /** 标签类型，gprofile/onelocation/onecompany */
          entityType?: string;
          /** 是否官方认证 */
          isOfficial?: boolean;
          /** 是否最近上架 */
          isRecent?: boolean;
          /** keyword */
          keyword?: string;
          /** labelCateType */
          labelCateType?: string;
          /** 标签类型，gprofile/onelocation/onecompany */
          labelType?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 标签生产类型，LabelProduceTypeEnum。0表示全部  */
          produceType?: number;
          /** 项目id，查看申请状态时用 */
          projectId?: number;
          /** 标签范围，my/all */
          scope?: string;
          /** 标签上架状态。传none代表无权限 */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.LabelItemBO>
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
       * 获取用户可以创建多版本的标签组列表
       * /label/getOwnLabelGroups.json
       */
      export namespace getOwnLabelGroups {
        export class Params {
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.LabelGroupBO>
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
       * 工作台左侧查看用户上架的资产列表（标签组）
       * /label/getProducedLabels.json
       */
      export namespace getProducedLabels {
        export class Params {
          /** 标签上架状态。传none代表无权限 */
          authStatus?: string;
          /** cate1Id */
          cate1Id?: string;
          /** cate2Id */
          cate2Id?: string;
          /** cate3Id */
          cate3Id?: string;
          /** cate4Id */
          cate4Id?: string;
          /** cate5Id */
          cate5Id?: string;
          /** 类目ids，如[1,2,'3,4,5',null] */
          categoryIds?: string;
          /** 标签类型，gprofile/onelocation/onecompany */
          entityType?: string;
          /** 是否官方认证 */
          isOfficial?: boolean;
          /** 是否最近上架 */
          isRecent?: boolean;
          /** keyword */
          keyword?: string;
          /** labelCateType */
          labelCateType?: string;
          /** 标签类型，gprofile/onelocation/onecompany */
          labelType?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 标签生产类型，LabelProduceTypeEnum。0表示全部  */
          produceType?: number;
          /** 项目id，查看申请状态时用 */
          projectId?: number;
          /** 标签范围，my/all */
          scope?: string;
          /** 标签上架状态。传none代表无权限 */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.LabelProductionListBO>
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
       * 获取用户最近测试任务
       * /label/getRecentSampleTasks.json
       */
      export namespace getRecentSampleTasks {
        export class Params {
          /** labelId */
          labelId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.OfflineTaskConfigBO>
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
       * 获取样本测试结果
       * /label/getSampleTaskResult.json
       */
      export namespace getSampleTaskResult {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.LabelSampleResultBO
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
       * 表已接入标签的主键类型与字段
       * /label/getTableKeyInfo.json
       */
      export namespace getTableKeyInfo {
        export class Params {
          /** odpsTable */
          odpsTable: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.TableKeyInfoBO>
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
       * 资产管理(标签组）
       * /label/getUploadedLabelGroups.json
       */
      export namespace getUploadedLabelGroups {
        export class Params {
          /** 标签上架状态。传none代表无权限 */
          authStatus?: string;
          /** cate1Id */
          cate1Id?: string;
          /** cate2Id */
          cate2Id?: string;
          /** cate3Id */
          cate3Id?: string;
          /** cate4Id */
          cate4Id?: string;
          /** cate5Id */
          cate5Id?: string;
          /** 类目ids，如[1,2,'3,4,5',null] */
          categoryIds?: string;
          /** 标签类型，gprofile/onelocation/onecompany */
          entityType?: string;
          /** 是否官方认证 */
          isOfficial?: boolean;
          /** 是否最近上架 */
          isRecent?: boolean;
          /** keyword */
          keyword?: string;
          /** labelCateType */
          labelCateType?: string;
          /** 标签类型，gprofile/onelocation/onecompany */
          labelType?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 标签生产类型，LabelProduceTypeEnum。0表示全部  */
          produceType?: number;
          /** 项目id，查看申请状态时用 */
          projectId?: number;
          /** 标签范围，my/all */
          scope?: string;
          /** 标签上架状态。传none代表无权限 */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.LabelItemBO>
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
       * 是否默认使用maxpt
       * /label/getUsingMaxPt.json
       */
      export namespace getUsingMaxPt {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.JSONObject>;

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
       * 资产是否有申请权限。审核中：waiting；有权限：hasPermission；无权限：noPermission
       * /label/hasApplyPermission.json
       */
      export namespace hasApplyPermission {
        export class Params {
          /** projectId */
          projectId: number;
          /** requestId */
          requestId: number;
          /** responseId */
          responseId: number;
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
       * 新增标签
       * /label/insertLabel.json
       */
      export namespace insertLabel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<number>>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.AddLabelParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.AddLabelParam,
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
       * 已上架标签下架标签
       * /label/offlineLabel.json
       */
      export namespace offlineLabel {
        export class Params {
          /** applyReason */
          applyReason?: string;
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 急速测试接口，使用个人的员工帐号来查看个人的标签数据
       * /label/personalLabelTest.json
       */
      export namespace personalLabelTest {
        export class Params {
          /** idType */
          idType?: string;
          /** isQuickTest */
          isQuickTest?: boolean;
          /** labelIds */
          labelIds: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<ObjectMap>;

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
       * 标签上架
       * /label/publishAccessLabel.json
       */
      export namespace publishAccessLabel {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
       * 已上架标签申请变更
       * /label/rePublish.json
       */
      export namespace rePublish {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.LabelDetailParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.LabelDetailParam,
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
       * 编辑标签详情
       * /label/saveLabelDetails.json
       */
      export namespace saveLabelDetails {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.LabelDetailParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.LabelDetailParam,
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
       * 提交样本测试
       * /label/submitSampleTask.json
       */
      export namespace submitSampleTask {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.CommonDataResult
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.SampleTaskParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.SampleTaskParam,
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
     * Label Produce Controller
     */
    export namespace labelProduce {
      /**
       * 批量申请标签、行为、特征
       * /labelProduce/batchApplyLabel.json
       */
      export namespace batchApplyLabel {
        export class Params {
          /** applyReason */
          applyReason: string;
          /** projectId */
          projectId: number;
          /** resourceIds */
          resourceIds: string;
          /** resourceType */
          resourceType: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<ObjectMap>;

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
       * 校验标签权限,返回哪些需要申请，哪些可以自动授权
       * /labelProduce/checkLabelsApplyPermission.json
       */
      export namespace checkLabelsApplyPermission {
        export class Params {
          /** appName */
          appName?: string;
          /** 入参ID */
          idType?: string;
          /** 项目id */
          projectId?: number;
          /** 标签id,逗号分隔 */
          resourceIds?: string;
          /** 资源类型 */
          resourceType?: string;
          /** 服务id */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.LabelPermissionCheckBO
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
       * 校验标签权限,返回哪些需要申请，哪些可以自动授权
       * /labelProduce/checkLabelsProducePermission.json
       */
      export namespace checkLabelsProducePermission {
        export class Params {
          /** appName */
          appName?: string;
          /** 入参ID */
          idType?: string;
          /** 项目id */
          projectId?: number;
          /** 标签id,逗号分隔 */
          resourceIds?: string;
          /** 资源类型 */
          resourceType?: string;
          /** 服务id */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.LabelPermissionCheckBO
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
       * 新建标签组
       * /labelProduce/createLabelGroup.json
       */
      export namespace createLabelGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<number>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.LabelBaseParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.LabelBaseParam,
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
       * 新建标签（版本）
       * /labelProduce/createLabelVersion.json
       */
      export namespace createLabelVersion {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<number>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.LabelBaseParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.LabelBaseParam,
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
       * 上架标签再次编辑
       * /labelProduce/editLabel.json
       */
      export namespace editLabel {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 生成下载链接
       * /labelProduce/generateDownloadUrl.json
       */
      export namespace generateDownloadUrl {
        export class Params {
          /** objectId */
          objectId: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
       * 查询资源申请列表
       * /labelProduce/getApplyingResource.json
       */
      export namespace getApplyingResource {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.ApplyingResourceBO>
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
       * 标签详情查询
       * /labelProduce/getLabelProduceInfo.json
       */
      export namespace getLabelProduceInfo {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.LabelProduceInfoBO
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
       * 标签生产简要信息，用于详情页展示
       * /labelProduce/getLabelProduceInfoSimple.json
       */
      export namespace getLabelProduceInfoSimple {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.CommonKVResult>
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
       * 查询预跑标签数据
       * /labelProduce/getPreviewData.json
       */
      export namespace getPreviewData {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.LabelPreviewDataNewBO
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
       * 标签、特生、行为前置申请列表
       * /labelProduce/getResources4Apply.json
       */
      export namespace getResources4Apply {
        export class Params {
          /** 权限审批状态，查看申请状态时用。传none代表无权限 */
          authStatus?: string;
          /** 一级类目，0代表全部，不支持多个 */
          cate1Id?: string;
          /** 二级类目，0代表全部；多个用逗号分隔 */
          cate2Id?: string;
          /** 三级类目，0代表全部；多个用逗号分隔 */
          cate3Id?: string;
          /** 四级类目，0代表全部；多个用逗号分隔 */
          cate4Id?: string;
          /** 五级类目，0代表全部；多个用逗号分隔 */
          cate5Id?: string;
          /** 类目ids，如[1,2,'3,4,5',null] */
          categoryIds?: string;
          /** 实体类型，gprofile/onecompany/onelocation... */
          entityType?: string;
          /** keyword */
          keyword?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 项目id，查看申请状态时用 */
          projectId?: number;
          /** 标签类型，前端要传的枚举类：标签gprofile 行为bhv,特征feature */
          resourceType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.PreApplyResourceDO>
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
       * 保存调度信息
       * /labelProduce/getSchedulerInfo.json
       */
      export namespace getSchedulerInfo {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.UpdateParam>;

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
       * 预跑标签数据
       * /labelProduce/previewData.json
       */
      export namespace previewData {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.LabelProduceParams,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.LabelProduceParams,
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
       * /labelProduce/previewSql.json
       */
      export namespace previewSql {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.LabelProduceParams,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.LabelProduceParams,
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
       * 上架标签
       * /labelProduce/publishLabel.json
       */
      export namespace publishLabel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.PublishParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.PublishParam,
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
       * 上架无样本标签
       * /labelProduce/publishNoSampleLabel.json
       */
      export namespace publishNoSampleLabel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.LabelProduceParams,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.LabelProduceParams,
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
       * 标签生产信息查询
       * /labelProduce/queryLabelProduceInfo.json
       */
      export namespace queryLabelProduceInfo {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.LabelProduceBO>;

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
       * 查询相似标签
       * /labelProduce/querySimilarLabel.json
       */
      export namespace querySimilarLabel {
        export class Params {
          /** labelId */
          labelId: number;
          /** name */
          name: string;
          /** nameType */
          nameType: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<defs.daas.LabelDO>>;

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
       * 保存标签详情
       * /labelProduce/saveLabelDetail.json
       */
      export namespace saveLabeDetail {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.LabelProduceParams,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.LabelProduceParams,
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
       * 保存调度信息
       * /labelProduce/saveSchedulerInfo.json
       */
      export namespace saveSchedulerInfo {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.UpdateParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.UpdateParam,
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
       * 上传文件
       * /labelProduce/uploadFile.json
       */
      export namespace uploadFile {
        export class Params {
          /** fileId */
          fileId: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
     * 核心资产服务模块
     */
    export namespace marketAssetsService {
      /**
       * 核心资产服务授权代码
       * /service/authCode.json
       */
      export namespace authCode {
        export class Params {
          /** tableName */
          tableName?: string;
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
       * 检查离线任务请求的输入输出表权限
       * /service/checkTaskAuth.json
       */
      export namespace checkAuthAndCreateTable {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.AuthType>;

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
       * 在安全卫士中创建bpsm 申请表的审批信息
       * /service/createApplyTableOnGuardBpms.json
       */
      export namespace createApplyTableOnGuardBpms {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.GuardBpmsBO>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.GuardBpmsBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.GuardBpmsBO,
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
       * 提交odps 任务，以及创建输出表
       * /service/createTaskAndTable.json
       */
      export namespace createTaskAndCreateTable {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.AuthType>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.OfflineTaskParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.OfflineTaskParam,
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
       * 删除离线任务配置信息
       * /service/deleteOfflineTask.json
       */
      export namespace deleteOfflineTask {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 依赖的标签信息
       * /service/dependentLabelInfo.json
       */
      export namespace getDependentLabelInfo {
        export class Params {
          /** labelIds */
          labelIds: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.DependentLabelParam>
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
       * 检查离线任务请求的输入输出表权限
       * /service/getDefaultPtKey.json
       */
      export namespace getDefaultPtKey {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<string>>;

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
       * 标签组查询服务配置列表
       * /service/getLabelPublishTaskList.json
       */
      export namespace getLabelPublishTaskList {
        export class Params {
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId: number;
          /** serviceId */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.LabelGroupServiceTaskBO>
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
       * 标签组查询服务配置详情
       * /service/getLabelPublishTaskMeta.json
       */
      export namespace getLabelPublishTaskMeta {
        export class Params {
          /** code */
          code: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.LabelGroupServiceConfigBO
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
       * 根据odps节点id查找任务信息
       * /service/getOfflineTask.json
       */
      export namespace getOfflineTask {
        export class Params {
          /** nodeId */
          nodeId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.OfflineTaskConfigDO
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
       * 离线任务列表
       * /service/offlineTaskList.json
       */
      export namespace offlineTaskList {
        export class Params {
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId: number;
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.OfflineTaskConfigBO>
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
       * 重跑odps 任务
       * /service/reRunTask.json
       */
      export namespace reRunTask {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 离线任务启动
       * /service/startOfflineTask.json
       */
      export namespace startOfflineTask {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 离线任务暂停
       * /service/stopOfflineTask.json
       */
      export namespace stopOfflineTask {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 提交离线任务请求
       * /service/submitOfflineTask.json
       */
      export namespace submitOfflineTask {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 更新离线任务配置信息
       * /service/updateOfflineConfig.json
       */
      export namespace updateOfflineConfig {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.OfflineTaskParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.OfflineTaskParam,
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
     * 人群测一测
     */
    export namespace marketCrowd {
      /**
       * testInCrowd
       * /market/crowd/testInCrowd.json
       */
      export namespace testInCrowd {
        export class Params {
          /** crowdId */
          crowdId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
     * 服务模块接口
     */
    export namespace marketService {
      /**
       * 服务权限申请
       * /service/applyService.json
       */
      export namespace applyService {
        export class Params {
          /** creator */
          creator?: string;
          /** dailyRequest */
          dailyRequest?: number;
          /** dailyUv */
          dailyUv?: number;
          /** description */
          description?: string;
          /** executeMode */
          executeMode?: string;
          /** loss */
          loss?: boolean;
          /** peakOs */
          peakOs?: number;
          /** projectId */
          projectId?: number;
          /** responseTime */
          responseTime?: number;
          /** serviceId */
          serviceId?: number;
          /** serviceType */
          serviceType?: string;
          /** traffic */
          traffic?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 删除服务
       * /service/deleteService.json
       */
      export namespace deleteService {
        export class Params {
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 删除测试服务及相关的权限配置
       * /service/deleteServiceInfo.json
       */
      export namespace deleteServiceInfo {
        export class Params {
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * 部署智能服务
       * /service/deployService.json
       */
      export namespace deployService {
        export class Params {
          /** serviceId */
          serviceId?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceBO
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.MarketServiceBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.MarketServiceBO,
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
       * 生成服务API定义
       * /service/generateApiSchema.json
       */
      export namespace generateApiSchema {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceBO
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.MarketServiceBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.MarketServiceBO,
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
       * 生成智能服务使用样例代码
       * /service/generateIntelligentJavaCode.json
       */
      export namespace generateIntelligentJavaCode {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.MarketServiceBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.MarketServiceBO,
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
       * 生成使用样例代码
       * /service/generateJavaCode.json
       */
      export namespace generateJavaCode {
        export class Params {
          /** idType */
          idType?: string;
          /** params */
          params?: string;
          /** projectId */
          projectId?: number;
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceBO
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
       * 生成通知样例
       * /service/generateNotifySample.json
       */
      export namespace generateNotifySample {
        export class Params {
          /** params */
          params?: string;
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
       * 查询服务所有定制版本列表
       * /service/getAllCustomServiceList.json
       */
      export namespace getAllCustomServiceList {
        export class Params {
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.MarketServiceBO>
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
       * 获取Hsf信息
       * /service/getHsfInfo.json
       */
      export namespace getHsfInfo {
        export class Params {
          /** 环境信息 */
          env?: string;
          /** 服务分组 */
          group?: string;
          /** 服务名称（含版本号） */
          serviceName?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.ServiceSchemaBO
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
       * 服务详情。如果传projectId，则返回结果会带上权限信息
       * /service/getServiceDetail.json
       */
      export namespace getServiceDetail {
        export class Params {
          /** projectId */
          projectId?: number;
          /** serviceId */
          serviceId?: number;
          /** serviceName */
          serviceName?: string;
          /** serviceType */
          serviceType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceBO
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
       * 获取离线服务的统计次数
       * /service/getServiceInvokeCnt.json
       */
      export namespace getServiceInvokeCnt {
        export class Params {
          /** labelId */
          labelId?: number;
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<number>;

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
       * 获取服务引导列表，提供给资产详情使用
       * /service/getServiceList4Detail.json
       */
      export namespace getServiceList4Detail {
        export class Params {
          /** entityType */
          entityType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.FuwuItemSimpleBO>
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
       * 获取标签可用的服务
       * /service/getServiceList4LabelApply.json
       */
      export namespace getServiceList4LabelApply {
        export class Params {
          /** entityType */
          entityType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.FuwuItemSimpleBO>
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
       * 获取标签可用的服务
       * /service/getServiceList4Workbench.json
       */
      export namespace getServiceList4Workbench {
        export class Params {
          /** endDate */
          endDate?: string;
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId?: number;
          /** serviceId */
          serviceId?: number;
          /** serviceType */
          serviceType?: string;
          /** startDate */
          startDate?: string;
          /** status */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.FuwuItemAuthBO>
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
       * 服务详情。如果传projectId，则返回结果会带上权限信息
       * /service/getServiceResource.json
       */
      export namespace getServiceResource {
        export class Params {
          /** projectId */
          projectId: number;
          /** serviceId */
          serviceId: number;
          /** serviceType */
          serviceType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.ResourceGroupBO>
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
       * 服务统计数据
       * /service/getServiceStat.json
       */
      export namespace getServiceStat {
        export class Params {
          /** serviceId */
          serviceId: number;
          /** serviceType */
          serviceType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceStatDO
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
       * 智能服务接入
       * /service/insertService.json
       */
      export namespace insertService {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceBO
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.MarketServiceBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.MarketServiceBO,
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
       * 服务概览
       * /service/overview.json
       */
      export namespace overview {
        export class Params {
          /** serviceType */
          serviceType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.FuwuOverviewBO>;

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
       * 查询智能服务参数类型列表
       * /service/parameterTypes.json
       */
      export namespace getServiceParameterTypes {
        export class Params {
          /** filter */
          filter?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.ServiceParameterTypeBO>
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
       * 上架已经审核通过的智能服务
       * /service/publishApprovedService.json
       */
      export namespace publishApprovedService {
        export class Params {
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceBO
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
       * 上架发布智能服务
       * /service/publishService.json
       */
      export namespace publishService {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceBO
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.MarketServiceBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.MarketServiceBO,
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
       * 资源、函数被拒绝后，手动触发重新申请
       * /service/reapplyServiceResource.json
       */
      export namespace reapplyServiceResource {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.ResourceGroupBO
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.ReapplyResourceParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.ReapplyResourceParam,
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
       * 服务搜索(callCnt(最热)/gmtModified(最新))
       * /service/search.json
       */
      export namespace search {
        export class Params {
          /** cate1Id */
          cate1Id?: string;
          /** cate2Id */
          cate2Id?: string;
          /** cate3Id */
          cate3Id?: string;
          /** cate4Id */
          cate4Id?: string;
          /** 类目ids，如[1,2,'3,4,5'] */
          categoryIds?: string;
          /** 搜索关键词 */
          keyword?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 服务类型 */
          serviceType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.FuwuItemBO>
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
       * 去部署服务
       * /service/undeployService.json
       */
      export namespace undeployService {
        export class Params {
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceBO
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
       * 服务编辑
       * /service/updateService.json
       */
      export namespace updateService {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketServiceBO
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.MarketServiceBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.MarketServiceBO,
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
       * 更新服务模板信息
       * /service/updateServiceTemplate.json
       */
      export namespace updateServiceTemplate {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.MarketServiceBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.MarketServiceBO,
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
       * 用户可定制的服务列表
       * /service/workbench/customList.json
       */
      export namespace getWorkBenchCustomList {
        export class Params {
          /** implementType */
          implementType?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** status */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.MarketServiceBO>
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
       * 工作台已申请服务列表。serviceType:assets，核心资产；intelligent：智能服务；tabType:1.使用的服务；2.接入的服务；status可以不传
       * /service/workbench/list.json
       */
      export namespace getWorkBenchList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId?: number;
          /** serviceType */
          serviceType?: string;
          /** status */
          status?: string;
          /** tabType */
          tabType?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.MarketServiceBO>
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
       * 工作台服务tab。tabType:1.使用的服务；2.接入的服务
       * /service/workbench/tab.json
       */
      export namespace getWorkBenchTab {
        export class Params {
          /** projectId */
          projectId?: number;
          /** tabType */
          tabType?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<defs.daas.TabBO>>;

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
     * odps 元数据服务接口
     */
    export namespace odps {
      /**
       * 检查表是否存在及有无权限，若无权限并获取对应的授权码。authType=none时只校验表是否存在
       * /storage/odps/checkTableAndAuth
       */
      export namespace checkTableAndAuth {
        export class Params {
          /** 鉴权项目空间 */
          accountName?: string;
          /** authType */
          authType?: string;
          /** 鉴权账号类型 */
          checkAccountType?: string;
          /** odpsTable */
          odpsTable: string;
          /** projectId */
          projectId?: number;
          /** versionId */
          versionId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.AuthType>;

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
       * 获取odps的元数据信息，无须授权
       * /storage/odps/getOdpsTableMeta
       */
      export namespace getOdpsTableMeta {
        export class Params {
          /** filterExistColumns */
          filterExistColumns?: boolean;
          /** ignoreColumns */
          ignoreColumns?: string;
          /** needColumns */
          needColumns?: boolean;
          /** needNodeId */
          needNodeId?: boolean;
          /** needOutputNode */
          needOutputNode?: boolean;
          /** needPartitionColumns */
          needPartitionColumns?: boolean;
          /** odpsTable */
          odpsTable: string;
          /** versionId */
          versionId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.OdpsTableMeta>;

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
       * 根据表owner所在BU，判断是哪个域。ali/ant
       * /storage/odps/getPlatform
       */
      export namespace getPlatform {
        export class Params {
          /** odpsTable */
          odpsTable: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
       * 获取odps表的列，不包括平台已接入的列
       * /storage/odps/getTableSchema
       */
      export namespace getTableSchema {
        export class Params {
          /** odpsTable */
          odpsTable: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<defs.daas.Column>>;

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
     * PAI模块接口
     */
    export namespace pai {
      /**
       * 查询关联实验依赖特征
       * /pai/dependencies
       */
      export namespace getDependency {
        export class Params {
          /** experimentId */
          experimentId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.PaiExperimentDependency>
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
       * 查询实验详情
       * /pai/experimentDetail
       */
      export namespace getExperimentDetail {
        export class Params {
          /** experimentId */
          experimentId: number;
          /** userNumber */
          userNumber: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.PaiExperimentParam>
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
       * 列出用户实验列表
       * /pai/experiments
       */
      export namespace listExperiments {
        export class Params {
          /** userNumber */
          userNumber: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.PaiExperiment>
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
    }

    /**
     * 图灵平台首页
     */
    export namespace portal {
      /**
       * 首页彩蛋
       * /portal/caidan.json
       */
      export namespace caidan {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.PortalCaidanBO>;

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
       * 首页通用配置接口
       * /portal/config.json
       */
      export namespace config {
        export class Params {
          /** types */
          types: Array<string>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.PortalModuleBO>
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
       * 员工信息，带职业、性别
       * /portal/empInfo.json
       */
      export namespace empInfo {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.EmpBO>;

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
       * 用户测试反馈，type：label、crowd、caidan；feedback：0:不准，1:准，2:不确定；data：标签人群id、彩蛋值，多个逗号分隔
       * /portal/feedback.json
       */
      export namespace feedback {
        export class Params {
          /** data */
          data?: string;
          /** feedback */
          feedback?: string;
          /** others */
          others?: string;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 下线配置
       * /portal/offConfig.json
       */
      export namespace offConfig {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 搜索
       * /portal/search.json
       */
      export namespace search {
        export class Params {
          /** keyword */
          keyword: string;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.PortalSearchBO>
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
       * 分享彩蛋到内网
       * /portal/share.json
       */
      export namespace share {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
     * 项目接口
     */
    export namespace project {
      /**
       * aone项目模糊搜索
       * /project/aoneSearch.json
       */
      export namespace aoneSearch {
        export class Params {
          /** keyword */
          keyword: string;
          /** maxCount */
          maxCount?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<defs.daas.AoneBO>>;

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
       * 申请加入项目，返回bpmsId
       * /project/applyProject.json
       */
      export namespace applyProject {
        export class Params {
          /** applyReason */
          applyReason: string;
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
       * 项目owner转交
       * /project/changeOwner.json
       */
      export namespace changeOwner {
        export class Params {
          /** adminId */
          adminId: string;
          /** projectId */
          projectId: number;
          /** quit */
          quit: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 判断是否有权限添加aone项目
       * /project/checkAonePermission.json
       */
      export namespace checkAonePermission {
        export class Params {
          /** aoneId */
          aoneId: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 判断项目名是否已经存在
       * /project/checkProjectIsExist.json
       */
      export namespace checkProjectIsExist {
        export class Params {
          /** projectName */
          projectName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 判断某个项目是否有某个服务的权限
       * /project/checkServicePermission.json
       */
      export namespace checkServicePermission {
        export class Params {
          /** projectId */
          projectId: number;
          /** serviceId */
          serviceId: number;
          /** serviceType */
          serviceType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.AuthType>;

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
       * 删除项目（仅管理员有权限）
       * /project/deleteProject.json
       */
      export namespace deleteProject {
        export class Params {
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 员工模糊搜索
       * /project/empSearch.json
       */
      export namespace empSearch {
        export class Params {
          /** keyword */
          keyword: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<defs.daas.EmpBO>>;

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
       * 获取用户有权限绑定的aone应用列表
       * /project/getAoneList.json
       */
      export namespace getAoneList {
        export class Params {
          /** projectId */
          projectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<defs.daas.AoneBO>>;

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
       * 获取标签场景列表
       * /project/getLabelSceneList.json
       */
      export namespace getLabelSceneList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<string>>;

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
       * 获取项目详情
       * /project/getProjectInfo.json
       */
      export namespace getProjectInfo {
        export class Params {
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.ProjectBO>;

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
       * 用户项目列表，仅包括项目id和名称，无其他信息
       * /project/getSimpleProjectList.json
       */
      export namespace getSimpleProjectList {
        export class Params {
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.ProjectBO>
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
       * 检查当前用户是否是任意一个项目的管理员
       * /project/isProjectAdmin.json
       */
      export namespace isProjectAdmin {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 项目列表
       * /project/listProject.json
       */
      export namespace listProject {
        export class Params {
          /** authorityType */
          authorityType?: string;
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectType */
          projectType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.ProjectBO>
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
       * 记录用户选择的项目
       * /project/logVisitedProject.json
       */
      export namespace logVisitedProject {
        export class Params {
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 保存项目
       * /project/saveProject.json
       */
      export namespace saveProject {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<number>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.ProjectUpdateParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.ProjectUpdateParam,
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
     * 项目管理模块接口
     */
    export namespace projectAdmin {
      /**
       * 给项目添加服务权限
       * /admin/projects/{projectId}/permissions
       */
      export namespace addServicePermission {
        export class Params {
          /** projectId */
          projectId: number;
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<void>;

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
     * Project Admin Api Controller
     */
    export namespace projectAdminApi {
      /**
       * changeProjectOwner
       * /api/project/changeProjectOwner.json
       */
      export namespace changeProjectOwner {
        export class Params {
          /** owner */
          owner: string;
          /** projectName */
          projectName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
     * 项目配置接口
     */
    export namespace projectConfig {
      /**
       * 添加AiStudio应用
       * /project/config/addAiStudioAppConfig
       */
      export namespace addAiStudioAppConfig {
        export class Params {
          /** appNameCn */
          appNameCn: string;
          /** appNameEn */
          appNameEn: string;
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 绑定AiStudio业务域
       * /project/config/bindAiStudioBizConfig
       */
      export namespace bindAiStudioBizConfig {
        export class Params {
          /** bizNameCn */
          bizNameCn: string;
          /** bizNameEn */
          bizNameEn: string;
          /** level */
          level?: number;
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 查询项目配置
       * /project/config/getConfig
       */
      export namespace getProjectConfig {
        export class Params {
          /** name */
          name?: string;
          /** projectId */
          projectId?: number;
          /** projectName */
          projectName?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.ProjectConfig>;

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
       * 查询项目配置
       * /project/config/listApp4LabelGroupService
       */
      export namespace getConfigByType {
        export class Params {
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<string>>;

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
     * Readme Controller
     */
    export namespace readme {
      /**
       * 新增用户授权文案信息
       * /readme/addUserCopywriteData.json
       */
      export namespace addUserCopywriteData {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<number>;

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
       * 侠者名录
       * /readme/getChivalrousManList.json
       */
      export namespace getChivalrousManList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.ReadmeUserLifeBO
        >;

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
       * 江湖生活
       * /readme/getLifeList.json
       */
      export namespace getLifeList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.ReadmeUserLifeBO
        >;

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
       * 查询id列表信息
       * /readme/getMyIds.json
       */
      export namespace getMyIds {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.OneIdBO>;

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
       * 聚义堂
       * /readme/getRelationship.json
       */
      export namespace getRelationship {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.ReadmeRelationshipBO>
        >;

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
       * 首页概况
       * /readme/getSurveyList.json
       */
      export namespace getSurveyList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.ReadmeSurveyBO>;

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
       * 查询用户授权文案的状态
       * /readme/getUserCopywriteData.json
       */
      export namespace getUserCopywriteData {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 查询用户信息
       * /readme/getUserInfo.json
       */
      export namespace getUserInfo {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.EmpBO>;

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
    }

    /**
     * 权限接口
     */
    export namespace resPermission {
      /**
       * 被拒绝后重新发起申请
       * /permission/applyRejectedRes.json
       */
      export namespace applyRejectedRes {
        export class Params {
          /** projectId */
          projectId: number;
          /** resourceId */
          resourceId: number;
          /** resourceType */
          resourceType: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 用户权限申请记录列表
       * /permission/getPermissionList.json
       */
      export namespace getPermissionList {
        export class Params {
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
          /** resourceType */
          resourceType?: string;
          /** status */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.ResourceAuthBO>
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
    }

    /**
     * sequence 模块
     */
    export namespace sequenc {
      /**
        * 获取所有用户
查询所有用户
        * /sequence/get
        */
      export namespace get {
        export class Params {
          /** 名字 */
          name?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.Sequence;

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
     * Statemachine Admin Controller
     */
    export namespace statemachineAdmin {
      /**
       * insertRecord
       * /api/statemachine/insertRecord.json
       */
      export namespace insertRecord {
        export class Params {
          /** assetId */
          assetId: number;
          /** assetType */
          assetType: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * sendEvent
       * /api/statemachine/sendEvent.json
       */
      export namespace sendEvent {
        export class Params {
          /** event */
          event: string;
          /** loginUserId */
          loginUserId: string;
          /** resourceId */
          resourceId: number;
          /** resourceType */
          resourceType: string;
          /** success */
          success: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = ObjectMap<any, boolean>;

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
       * updateStateMachine
       * /api/statemachine/updateState.json
       */
      export namespace updateStateMachine {
        export class Params {
          /** id */
          id: number;
          /** loginUserId */
          loginUserId: string;
          /** state */
          state: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
     * Test Controller
     */
    export namespace test {
      /**
       * updateLabelToDse
       * /dse/updateLabelToDse.json
       */
      export namespace updateLabelToDse {
        export class Params {
          /** read */
          read: boolean;
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * getBatchByAmdp
       * /getBatchByAmdp.json
       */
      export namespace getBatchByAmdp {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<ObjectMap>;

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
       * getByAmdp
       * /getByAmdp.json
       */
      export namespace getByAmdp {
        export class Params {
          /** empId */
          empId: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<ObjectMap>;

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
       * 查员工职位，逗号分隔
       * /getEmpInfos.json
       */
      export namespace getEmpInfos {
        export class Params {
          /** userIds */
          userIds: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<defs.daas.EmpBO>>;

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
       * getWrongLabels
       * /getWrongLabels.json
       */
      export namespace getWrongLabels {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<number>>;

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
       * initMetaServer
       * /init/initMetaServer
       */
      export namespace initMetaServer {
        export class Params {
          /** projectId */
          projectId?: number;
          /** serviceId */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = any;

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
       * initMetaServer
       * /init/initMetaServer
       */
      export namespace headInitInitMetaServer {
        export class Params {
          /** projectId */
          projectId?: number;
          /** serviceId */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = any;

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
       * initMetaServer
       * /init/initMetaServer
       */
      export namespace postInitInitMetaServer {
        export class Params {
          /** projectId */
          projectId?: number;
          /** serviceId */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = any;

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
       * initMetaServer
       * /init/initMetaServer
       */
      export namespace putInitInitMetaServer {
        export class Params {
          /** projectId */
          projectId?: number;
          /** serviceId */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = any;

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
       * initMetaServer
       * /init/initMetaServer
       */
      export namespace deleteInitInitMetaServer {
        export class Params {
          /** projectId */
          projectId?: number;
          /** serviceId */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = any;

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
       * initMetaServer
       * /init/initMetaServer
       */
      export namespace optionsInitInitMetaServer {
        export class Params {
          /** projectId */
          projectId?: number;
          /** serviceId */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = any;

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
       * initMetaServer
       * /init/initMetaServer
       */
      export namespace patchInitInitMetaServer {
        export class Params {
          /** projectId */
          projectId?: number;
          /** serviceId */
          serviceId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = any;

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
       * 查询钉钉消息发送结果
       * /message/getResult
       */
      export namespace getResult {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * searchByAmdp
       * /searchByAmdp.json
       */
      export namespace searchByAmdp {
        export class Params {
          /** keyword */
          keyword: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<ObjectMap>;

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
       * bindingApp
       * /test/630/bindingApp.json
       */
      export namespace bindingApp {
        export class Params {
          /** fbiId */
          fbiId: number;
          /** fbiName */
          fbiName: string;
          /** linkId */
          linkId: number;
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * createBizScope
       * /test/630/createBizScope.json
       */
      export namespace createBizScope {
        export class Params {
          /** admin */
          admin: string;
          /** description */
          description: string;
          /** id */
          id: number;
          /** idType */
          idType: string;
          /** name */
          name: string;
          /** tenantId */
          tenantId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * updateProjectName
       * /test/630/updateProjectName.json
       */
      export namespace updateProjectName {
        export class Params {
          /** description */
          description: string;
          /** nameCn */
          nameCn: string;
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * updateTair
       * /test/630/updateTair.json
       */
      export namespace updateTair {
        export class Params {
          /** tableName */
          tableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * addLindormTable
       * /test/addLindormTable
       */
      export namespace addLindormTable {
        export class Params {
          /** splitSize */
          splitSize?: number;
          /** tableName */
          tableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * addNodeInput
       * /test/addNodeInput.json
       */
      export namespace addNodeInput {
        export class Params {
          /** tableName */
          tableName: string;
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<ObjectMap>;

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
       * changeLabelOperator
       * /test/changeLabelOperator
       */
      export namespace changeLabelOperator {
        export class Params {
          /** labelId */
          labelId: number;
          /** operator */
          operator: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * checkTableAuth
       * /test/checkLabelAuth
       */
      export namespace checkTableAuth {
        export class Params {
          /** tableName */
          tableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
       * createDag
       * /test/createDag.json
       */
      export namespace createDag {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * createInstance
       * /test/createInstance
       */
      export namespace createInstance {
        export class Params {
          /** labelId */
          labelId: number;
          /** workflowId */
          workflowId: number;
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
       * createWorkflowOnline
       * /test/createWorkflowOnline
       */
      export namespace createWorkflowOnline {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = any;

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
       * createWorkflowPre
       * /test/createWorkflowPre
       */
      export namespace createWorkflowPre {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = any;

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
       * deleteAssetGroup
       * /test/deleteAssetGroup
       */
      export namespace deleteAssetGroup {
        export class Params {
          /** id */
          id: number;
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
       * deleteLabelSyncInfoByLabelId
       * /test/deleteLabelSyncInfoByLabelId
       */
      export namespace deleteLabelSyncInfoByLabelId {
        export class Params {
          /** labelId */
          labelId: number;
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
       * deleteServiceDataAuth
       * /test/deleteServiceDataAuth
       */
      export namespace deleteServiceDataAuth {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = any;

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
       * getAssetGroupSql
       * /test/getAssetGroupSql
       */
      export namespace getAssetGroupSql {
        export class Params {
          /** bizDate */
          bizDate: string;
          /** srcTableName */
          srcTableName: string;
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
       * getMetaInfo
       * /test/getDbMeta.json
       */
      export namespace getMetaInfo {
        export class Params {
          /** dbName */
          dbName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.MetaApp;

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
       * getMetaInfo
       * /test/getDbMeta.json
       */
      export namespace headTestGetDbMeta {
        export class Params {
          /** dbName */
          dbName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.MetaApp;

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
       * getMetaInfo
       * /test/getDbMeta.json
       */
      export namespace postTestGetDbMeta {
        export class Params {
          /** dbName */
          dbName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.MetaApp;

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
       * getMetaInfo
       * /test/getDbMeta.json
       */
      export namespace putTestGetDbMeta {
        export class Params {
          /** dbName */
          dbName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.MetaApp;

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
       * getMetaInfo
       * /test/getDbMeta.json
       */
      export namespace deleteTestGetDbMeta {
        export class Params {
          /** dbName */
          dbName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.MetaApp;

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
       * getMetaInfo
       * /test/getDbMeta.json
       */
      export namespace optionsTestGetDbMeta {
        export class Params {
          /** dbName */
          dbName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.MetaApp;

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
       * getMetaInfo
       * /test/getDbMeta.json
       */
      export namespace patchTestGetDbMeta {
        export class Params {
          /** dbName */
          dbName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.MetaApp;

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
       * getNodesByOutput
       * /test/getNodesByOutput.json
       */
      export namespace getNodesByOutput {
        export class Params {
          /** tableName */
          tableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<ObjectMap>;

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
       * getUserInfo
       * /test/getUserInfo
       */
      export namespace getUserInfo {
        export class Params {
          /** userId */
          userId: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * listLabelOwnerIds
       * /test/listLabelOwnerIds.json
       */
      export namespace listLabelOwnerIds {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<string>>;

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
       * sendEvent
       * /test/sendEvent.json
       */
      export namespace sendEvent {
        export class Params {
          /** event */
          event: string;
          /** resourceId */
          resourceId: number;
          /** resourceType */
          resourceType: string;
          /** success */
          success: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * submitDWProject
       * /test/submitDWProject
       */
      export namespace submitDWProject {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * submitDWProjectLindorm
       * /test/submitDWProjectLindorm
       */
      export namespace submitDWProjectLindorm {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * testCheckNodeIdExist
       * /test/testCheckNodeIdExist
       */
      export namespace testCheckNodeIdExist {
        export class Params {
          /** nodeId */
          nodeId: number;
          /** ownerId */
          ownerId: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * testKfc
       * /test/testKfc
       */
      export namespace testKfc {
        export class Params {
          /** keyword */
          keyword: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
       * testQuickCheck
       * /test/testQuickCheck
       */
      export namespace testQuickCheck {
        export class Params {
          /** nodeId */
          nodeId: string;
          /** tableName */
          tableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * testService
       * /test/testService
       */
      export namespace testService {
        export class Params {
          /** appName */
          appName: string;
          /** objects */
          objects: string;
          /** password */
          password: string;
          /** projectName */
          projectName: string;
          /** serviceName */
          serviceName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * testTaskCmd
       * /test/testTaskCmd
       */
      export namespace testTaskCmd {
        export class Params {
          /** labelIds */
          labelIds: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * updateAssetGroup
       * /test/updateAssetGroup
       */
      export namespace updateAssetGroup {
        export class Params {
          /** code */
          code: string;
          /** status */
          status: string;
          /** taskStatus */
          taskStatus: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * updateNodeId
       * /test/updateNodeId.json
       */
      export namespace updateNodeId {
        export class Params {
          /** labelId */
          labelId: number;
          /** nodeId */
          nodeId: string;
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
       * updatePeriod
       * /test/updatePeriod.json
       */
      export namespace updatePeriod {
        export class Params {
          /** period */
          period: number;
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
       * updateTaskCron
       * /test/updateTaskCron
       */
      export namespace updateTaskCron {
        export class Params {
          /** cron */
          cron: string;
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
       * testProduceParam
       * /testProduceParam.json
       */
      export namespace testProduceParam {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.RegularProduceParamV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.RegularProduceParamV2,
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
       * testProduceSql
       * /testProduceSql.json
       */
      export namespace testProduceSql {
        export class Params {
          /** config */
          config: string;
          /** isPreview */
          isPreview: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<string>;

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
     * 测试模块
     */
    export namespace testTask {
      /**
       * 创建测试任务请求样例
       * /test/defaultParameters
       */
      export namespace getDefaultParameters {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<Array<ObjectMap>>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.ServiceFunctionBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.ServiceFunctionBO,
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
       * 查询测试任务列表
       * /test/tasks
       */
      export namespace listTestTasks {
        export class Params {
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** serviceName */
          serviceName?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.PaginatedResult<defs.daas.TestTask>
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
       * 创建测试任务
       * /test/tasks
       */
      export namespace createTestTask {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.TestTask>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.TestTask,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.TestTask,
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
       * 查询测试用例详情
       * /test/tasks/{taskId}
       */
      export namespace getTestTask {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.TestTask>;

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
       * 检查测试用例
       * /test/tasks/{taskId}/check
       */
      export namespace checkTestTask {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.TestTask>;

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
       * 手动失败测试用例
       * /test/tasks/{taskId}/fail
       */
      export namespace failTestTask {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.TestTask>;

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
       * 停止测试用例
       * /test/tasks/{taskId}/stop
       */
      export namespace stopTestTask {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<defs.daas.TestTask>;

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
     * 服务管理模块接口
     */
    export namespace userConfig {
      /**
       * 增加用户配置
       * /admin/user/config/add
       */
      export namespace addConfig {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketUserConfigDO
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.MarketUserConfigDO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.MarketUserConfigDO,
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
       * 删除用户配置
       * /admin/user/config/delete
       */
      export namespace deleteConfig {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketUserConfigDO
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
       * 查询用户测试智能服务额外配置
       * /admin/user/config/getTestConfigInfo
       */
      export namespace getTestConfigInfo {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.ServiceTestConfigInfo
        >;

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
       * 查询用户所有配置
       * /admin/user/config/list
       */
      export namespace list {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.MarketUserConfigDO>
        >;

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
       * 修改用户配置
       * /admin/user/config/update
       */
      export namespace updateConfig {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          defs.daas.MarketUserConfigDO
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.MarketUserConfigDO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.MarketUserConfigDO,
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
     * 用户水印图片获取
     */
    export namespace waterMark {
      /**
       * 获取服务查询次数接口
       * /watermark/get.json
       */
      export namespace get {
        export class Params {
          /** algName */
          algName?: string;
          /** fontSize */
          fontSize?: number;
          /** markMode */
          markMode?: string;
          /** noframe */
          noframe?: number;
          /** ratio */
          ratio?: number;
          /** rgb */
          rgb?: string;
          /** scene */
          scene?: string;
          /** transparent */
          transparent?: string;
          /** visibletransparent */
          visibletransparent?: number;
          /** webWatermarkBase64 */
          webWatermarkBase64?: number;
          /** width */
          width?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = object;

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
     * 白名单接口
     */
    export namespace white {
      /**
       * 新增平台权限
       * /whiteList/addPlatformAuth.json
       */
      export namespace addPlatformAuth {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.PlatformAuthBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.PlatformAuthBO,
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
       * 是否允许登录
       * /whiteList/allowLogin.json
       */
      export namespace allowLogin {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 判断当前登录用户是否在白名单
       * /whiteList/checkIsWhiteList.json
       */
      export namespace checkIsWhiteList {
        export class Params {
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

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
       * 平台权限列表
       * /whiteList/listAllPlatformAuth.json
       */
      export namespace listAllPlatformAuth {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.PlatformAuthBO>
        >;

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
       * 平台权限列表
       * /whiteList/listPlatformAuth.json
       */
      export namespace listPlatformAuthList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.PlatformAuthBO>
        >;

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
       * 更新平台权限
       * /whiteList/updatePlatformAuth.json
       */
      export namespace updatePlatformAuth {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.daas.PlatformAuthBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.daas.PlatformAuthBO,
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
     * 智能服务workflow相关api
     */
    export namespace workflow {
      /**
       * 创建标签组服务workflow
       * /workflow/createAssetGroupWorkflow
       */
      export namespace createAssetGroupWorkflow {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<number>;

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
       * 列出用户workflow列表
       * /workflow/flows
       */
      export namespace listExperiments {
        export class Params {
          /** userNumber */
          userNumber: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.daas.ResultObject<
          Array<defs.daas.WorkflowExperiment>
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
    }
  }
}
