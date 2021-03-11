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
  export namespace gold {
    export class AggregationAnalysisParam {
      /** aggregation */
      aggregation?: Array<number>;

      /** compGroup */
      compGroup?: number;

      /** func */
      func?: string;

      /** group */
      group?: number;

      /** view */
      view?: number;
    }

    export class AlarmInfo {
      /** interval */
      interval?: number;

      /** method */
      method?: string;

      /** msg */
      msg?: string;

      /** receiver */
      receiver?: string;

      /** ruleId */
      ruleId?: number;

      /** ruleName */
      ruleName?: string;
    }

    export class AnalysisModuleParam {
      /** desc */
      desc?: string;

      /** id */
      id?: number;

      /** labels */
      labels?: Array<defs.gold.TypeLabel>;

      /** name */
      name?: string;

      /** template */
      template?: number;

      /** type */
      type?:
        | 'single_dimension'
        | 'multi_dimension'
        | 'fbi'
        | 'interactive_single'
        | 'interactive_multi';

      /** version */
      version?: number;
    }

    export class ApplyGroupPackageParam {
      /** context */
      context?: Array<defs.gold.InputValue>;

      /** expire */
      expire?: number;

      /** packageId */
      packageId?: number;

      /** systemId */
      systemId?: string;

      /** type */
      type?: string;
    }

    export class AvailableControl {
      /** aggregation */
      aggregation?: Array<string>;

      /** filter */
      filter?: Array<Array<any>>;
    }

    export class BatchEditLabelDTO {
      /** defaultDetail */
      defaultDetail?: boolean;

      /** detail */
      detail?: boolean;

      /** labelIds */
      labelIds?: Array<number>;
    }

    export class BhvParam {
      /** bhvMetaId */
      bhvMetaId?: number;

      /** dimFilters */
      dimFilters?: Array<defs.gold.DimFilter>;

      /** endDay */
      endDay?: string;

      /** startDay */
      startDay?: string;

      /** timeType */
      timeType?: string;

      /** timespan */
      timespan?: number;

      /** valueFilters */
      valueFilters?: Array<defs.gold.ValueFilter>;
    }

    export class BucUserDTO {
      /** businessUnit */
      businessUnit?: string;

      /** deptName */
      deptName?: string;

      /** name */
      name?: string;

      /** nick */
      nick?: string;

      /** workId */
      workId?: string;
    }

    export class CatalogDTO {
      /** depth */
      depth?: number;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** objectId */
      objectId?: number;

      /** orderNo */
      orderNo?: number;

      /** parentId */
      parentId?: number;
    }

    export class CatalogOrderDTO {
      /** id */
      id?: number;

      /** objectId */
      objectId?: number;

      /** targetOrderNo */
      targetOrderNo?: number;
    }

    export class ChangeCheckRes {
      /** apply_order_url */
      apply_order_url?: string;

      /** approvers */
      approvers?: Array<defs.gold.ChangefreeApprover>;

      /** change_object */
      change_object?: string;

      /** check_status_enum */
      check_status_enum?:
        | 'CHECK_PASS'
        | 'CHECK_HOLD'
        | 'CHECK_WAIT'
        | 'CHECK_REFUSE'
        | 'CHECK_CANCEL'
        | 'CHECK_UNKNOWN';

      /** freeze_info */
      freeze_info?: Array<defs.gold.FreezeInfo>;

      /** fuse_info */
      fuse_info?: Array<defs.gold.FuseInfo>;

      /** gray_strategy */
      gray_strategy?: defs.gold.GrayStrategyInfoDTO;

      /** source_order_id */
      source_order_id?: string;
    }

    export class ChangefreeApprover {
      /** executors */
      executors?: string;

      /** nameNode */
      nameNode?: string;

      /** rulePass */
      rulePass?: string;

      /** typeNode */
      typeNode?: string;
    }

    export class CommonOperationVO {
      /** status */
      status?: number;

      /** tip */
      tip?: string;
    }

    export class ControlContentDTO {
      /** dimensionTable */
      dimensionTable?: defs.gold.DimensionTableDTO;

      /** openSearch */
      openSearch?: string;

      /** permissionTable */
      permissionTable?: defs.gold.PermissionTableDTO;

      /** valueTemplate */
      valueTemplate?: defs.gold.ValueTemplateDTO;
    }

    export class CountParam {
      /** dsId */
      dsId?: number;
    }

    export class CrossSystemParam {
      /** applicationWay */
      applicationWay?: string;

      /** context */
      context?: Array<defs.gold.InputValue>;

      /** expiredDate */
      expiredDate?: number;

      /** groupList */
      groupList?: Array<number>;

      /** systemId */
      systemId?: string;

      /** versionId */
      versionId?: number;
    }

    export class CrowdLabBhvCondition {
      /** crowdLabBhvProduceParam */
      crowdLabBhvProduceParam?: defs.gold.CrowdLabBhvProduceParam;

      /** desc */
      desc?: string;

      /** expiredDate */
      expiredDate?: number;

      /** groupName */
      groupName?: string;

      /** id */
      id?: number;

      /** isDynamic */
      isDynamic?: boolean;

      /** isOpen */
      isOpen?: boolean;

      /** versionId */
      versionId?: number;

      /** viewData */
      viewData?: string;
    }

    export class CrowdLabBhvProduceParam {
      /** bhvsInfo */
      bhvsInfo?: Array<defs.gold.BhvParam>;
    }

    export class DimFieldFilter {
      /** dimField */
      dimField?: string;

      /** dimId */
      dimId?: number;

      /** dimValues */
      dimValues?: Array<string>;
    }

    export class DimFilter {
      /** dimFieldFilters */
      dimFieldFilters?: Array<defs.gold.DimFieldFilter>;
    }

    export class DimensionTableDTO {
      /** id */
      id?: number;

      /** name */
      name?: string;
    }

    export class EngineConfig {
      /** countParam */
      countParam?: defs.gold.CountParam;

      /** masterDsId */
      masterDsId?: number;

      /** masterTableParam */
      masterTableParam?: defs.gold.MasterTableParam;

      /** perspectiveParam */
      perspectiveParam?: defs.gold.PerspectiveParam;

      /** segmentParam */
      segmentParam?: defs.gold.SegmentParam;
    }

    export class FieldBizType {
      /** format */
      format?: string;

      /** sub */
      sub?: defs.gold.FieldBizType;

      /** value */
      value?: string;
    }

    export class FieldParam {
      /** bizType */
      bizType?: defs.gold.FieldBizType;

      /** name */
      name?: string;
    }

    export class FreezeInfo {
      /** aoneBuList */
      aoneBuList?: Array<string>;

      /** freezeId */
      freezeId?: string;

      /** freezeName */
      freezeName?: string;

      /** hrBuList */
      hrBuList?: Array<string>;
    }

    export class FuseInfo {
      /** aoneBuList */
      aoneBuList?: Array<string>;

      /** fuseId */
      fuseId?: string;

      /** fuseName */
      fuseName?: string;

      /** hrBuList */
      hrBuList?: Array<string>;
    }

    export class GrayBatchConfigDTO {
      /** minMonitorTime */
      minMonitorTime?: number;

      /** monitorInfo */
      monitorInfo?: object;

      /** monitorTimeLeft */
      monitorTimeLeft?: number;

      /** monitorTimeOk */
      monitorTimeOk?: boolean;

      /** monitorType */
      monitorType?: string;
    }

    export class GrayStrategyInfoDTO {
      /** grayBatchConfig */
      grayBatchConfig?: Array<defs.gold.GrayBatchConfigDTO>;

      /** minBatchSum */
      minBatchSum?: number;

      /** pauseTime */
      pauseTime?: number;

      /** pauseType */
      pauseType?: string;

      /** properties */
      properties?: object;

      /** rollbackType */
      rollbackType?: string;
    }

    export class GroupCrossVersionVO {
      /** applicationWay */
      applicationWay?: string;

      /** expiredDate */
      expiredDate?: number;

      /** groupLimited */
      groupLimited?: string;

      /** groupList */
      groupList?: Array<number>;

      /** targetVersionId */
      targetVersionId?: number;
    }

    export class GroupShareParam {
      /** expireDate */
      expireDate?: string;

      /** groupId */
      groupId?: number;

      /** groupList */
      groupList?: Array<number>;

      /** workNumberList */
      workNumberList?: Array<string>;
    }

    export class GtcApp {
      /** activityEndDate */
      activityEndDate?: string;

      /** activityId */
      activityId?: string;

      /** activityName */
      activityName?: string;

      /** activityStartDate */
      activityStartDate?: string;

      /** config */
      config?: object;

      /** creator */
      creator?: string;

      /** extraInfo */
      extraInfo?: object;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** matchActivityId */
      matchActivityId?: string;

      /** matchActivityName */
      matchActivityName?: string;

      /** name */
      name?: string;

      /** remark */
      remark?: string;

      /** sceneDim */
      sceneDim?: ObjectMap<any, string>;

      /** sceneId */
      sceneId?: string;

      /** status */
      status?: string;

      /** versionId */
      versionId?: number;
    }

    export class GtcCrowd {
      /** code */
      code?: string;

      /** creator */
      creator?: string;

      /** crowdConfig */
      crowdConfig?: object;

      /** crowdField */
      crowdField?: string;

      /** description */
      description?: string;

      /** extraInfo */
      extraInfo?: object;

      /** filterField */
      filterField?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isView */
      isView?: boolean;

      /** name */
      name?: string;

      /** tableName */
      tableName?: string;

      /** tablePartition */
      tablePartition?: string;

      /** userField */
      userField?: string;

      /** versionId */
      versionId?: number;
    }

    export class Hook {
      /** config */
      config?: object;

      /** type */
      type?: string;
    }

    export class IPCrowdLabCondition {
      /** desc */
      desc?: string;

      /** expiredDate */
      expiredDate?: number;

      /** groupName */
      groupName?: string;

      /** id */
      id?: number;

      /** ipLabProduceParam */
      ipLabProduceParam?: defs.gold.IPLabProduceParam;

      /** isDynamic */
      isDynamic?: boolean;

      /** isOpen */
      isOpen?: boolean;

      /** versionId */
      versionId?: number;

      /** viewData */
      viewData?: string;

      /** workNo */
      workNo?: string;
    }

    export class IPLabProduceParam {
      /** categoryValue */
      categoryValue?: string;

      /** domain */
      domain?: string;

      /** endDate */
      endDate?: string;

      /** ip */
      ip?: string;

      /** startDate */
      startDate?: string;

      /** userLayer */
      userLayer?: string;
    }

    export class IndustryVO {
      /** authStatus */
      authStatus?: string;

      /** desc */
      desc?: string;

      /** gmtModify */
      gmtModify?: string;

      /** industryId */
      industryId?: number;

      /** industryName */
      industryName?: string;

      /** modifier */
      modifier?: defs.gold.BucUserDTO;

      /** operation */
      operation?: ObjectMap<any, defs.gold.CommonOperationVO>;

      /** owner */
      owner?: defs.gold.BucUserDTO;

      /** processJumpLink */
      processJumpLink?: string;

      /** versionId */
      versionId?: number;
    }

    export class InputValue {
      /** name */
      name?: string;

      /** value */
      value?: Array<string>;
    }

    export class InteractiveConvertParam {
      /** groupIds */
      groupIds?: Array<number>;

      /** labelIds */
      labelIds?: Array<number>;
    }

    export class Label {
      /** displayType */
      displayType?: string;

      /** group */
      group?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** selected */
      selected?: boolean;
    }

    export class LabelAnalysisConfig {
      /** control */
      control?:
        | 'defaultControl'
        | 'dateControl'
        | 'dataRange'
        | 'numberRange'
        | 'checkbox'
        | 'textarea'
        | 'shoppingBasket'
        | 'search'
        | 'frequencyRange'
        | 'dataDist'
        | 'dataDetail'
        | 'dataDefaultDetail'
        | 'kvControl'
        | 'gpslocation'
        | 'time'
        | 'function'
        | 'origin'
        | 'stratify'
        | 'mapping_table'
        | 'mapping_nv'
        | 'timeFunction'
        | 'cascader'
        | 'stringDeault'
        | 'numberDeault'
        | 'dateDeault'
        | 'arrayDeault'
        | 'kvDeault';

      /** value */
      value?: ObjectMap<any, object>;
    }

    export class LabelDTO {
      /** analysis */
      analysis?: defs.gold.LabelAnalysisConfig;

      /** availableControl */
      availableControl?: defs.gold.AvailableControl;

      /** catalogId */
      catalogId?: number;

      /** catalogIds */
      catalogIds?: Array<number>;

      /** controlContent */
      controlContent?: defs.gold.ControlContentDTO;

      /** defaultValue */
      defaultValue?: string;

      /** descr */
      descr?: string;

      /** detailAvailable */
      detailAvailable?: boolean;

      /** fieldBizSubType */
      fieldBizSubType?: string;

      /** fieldBizType */
      fieldBizType?: string;

      /** fieldDataType */
      fieldDataType?: string;

      /** fieldName */
      fieldName?: string;

      /** filterControl */
      filterControl?: Array<string>;

      /** isPreFilter */
      isPreFilter?: boolean;

      /** labelId */
      labelId?: number;

      /** name */
      name?: string;

      /** preFilterOrder */
      preFilterOrder?: number;

      /** projectId */
      projectId?: number;

      /** sourceTable */
      sourceTable?: string;

      /** useType */
      useType?: Array<string>;

      /** vControlContent */
      vControlContent?: defs.gold.ControlContentDTO;

      /** vFilterControl */
      vFilterControl?: string;
    }

    export class Map {}

    export class MarketApplyGroupVO {
      /** groupList */
      groupList?: Array<number>;

      /** sourceVersionId */
      sourceVersionId?: number;

      /** targetVersionId */
      targetVersionId?: number;
    }

    export class MasterTableParam {
      /** pkFields */
      pkFields?: Array<string>;

      /** pkTypes */
      pkTypes?: Array<string>;

      /** tableName */
      tableName?: string;
    }

    export class NameId {
      /** id */
      id?: string;

      /** name */
      name?: string;
    }

    export class ObjectParam {
      /** appId */
      appId?: number;

      /** approver */
      approver?: defs.gold.BucUserDTO;

      /** buNo */
      buNo?: string;

      /** descr */
      descr?: string;

      /** engineConfig */
      engineConfig?: defs.gold.EngineConfig;

      /** group */
      group?: string;

      /** id */
      id?: number;

      /** isOpen */
      isOpen?: boolean;

      /** name */
      name?: string;

      /** type */
      type?: string;
    }

    export class OperationVO {
      /** analysis */
      analysis?: number;

      /** cross */
      cross?: number;

      /** delete */
      delete?: number;

      /** download */
      download?: number;

      /** edit */
      edit?: number;

      /** expand */
      expand?: number;

      /** refer */
      refer?: number;

      /** rename */
      rename?: number;

      /** system */
      system?: number;

      /** track */
      track?: number;
    }

    export class PermissionSetting {
      /** authValue */
      authValue?: string;

      /** id */
      id?: number;

      /** type */
      type?: string;
    }

    export class PermissionTableDTO {
      /** desc */
      desc?: string;

      /** id */
      id?: string;

      /** name */
      name?: string;
    }

    export class PerspectiveParam {
      /** dsId */
      dsId?: number;
    }

    export class PreviewParam {
      /** download */
      download?: boolean;

      /** group */
      group?: string;

      /** labels */
      labels?: string;

      /** order */
      order?: string;
    }

    export class ResultVO<T0 = any> {
      /** code */
      code?: number;

      /** data */
      data?: object;

      /** log */
      log?: string;

      /** message */
      message?: string;

      /** traceId */
      traceId?: string;
    }

    export class SegmentParam {
      /** dsId */
      dsId?: number;

      /** dumpToDsId */
      dumpToDsId?: number;

      /** dumpToOdpsTableName */
      dumpToOdpsTableName?: string;

      /** needRealTime */
      needRealTime?: boolean;
    }

    export class SmartJob {
      /** appInfo */
      appInfo?: object;

      /** creator */
      creator?: string;

      /** desc */
      desc?: string;

      /** endTime */
      endTime?: string;

      /** env */
      env?: number;

      /** extraInfo */
      extraInfo?: object;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** hooks */
      hooks?: Array<defs.gold.Hook>;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** parameters */
      parameters?: object;

      /** serviceId */
      serviceId?: number;

      /** serviceName */
      serviceName?: string;

      /** startTime */
      startTime?: string;

      /** status */
      status?: string;

      /** triggers */
      triggers?: Array<defs.gold.Trigger>;
    }

    export class StrategyGroupVO {
      /** amount */
      amount?: string;

      /** authStatus */
      authStatus?: string;

      /** desc */
      desc?: string;

      /** fromType */
      fromType?: number;

      /** fromTypeName */
      fromTypeName?: string;

      /** groupStatus */
      groupStatus?: string;

      /** id */
      id?: number;

      /** industryId */
      industryId?: number;

      /** modifier */
      modifier?: defs.gold.BucUserDTO;

      /** name */
      name?: string;

      /** operationVO */
      operationVO?: defs.gold.OperationVO;

      /** owner */
      owner?: defs.gold.BucUserDTO;

      /** processJumpLink */
      processJumpLink?: string;

      /** srategyGroupStatus */
      srategyGroupStatus?: number;

      /** srategyGroupStatusName */
      srategyGroupStatusName?: string;

      /** status */
      status?: number;

      /** type */
      type?: number;

      /** typeName */
      typeName?: string;

      /** updateDate */
      updateDate?: string;
    }

    export class SystemConfigDTO {
      /** accessId */
      accessId?: string;

      /** accessKeySecret */
      accessKeySecret?: string;

      /** bucket */
      bucket?: string;

      /** creator */
      creator?: string;

      /** dumpToOdps */
      dumpToOdps?: string;

      /** endpoint */
      endpoint?: string;

      /** exportAccess */
      exportAccess?: Array<string>;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModify */
      gmtModify?: string;

      /** id */
      id?: number;

      /** includeSql */
      includeSql?: boolean;

      /** integrationPurpose */
      integrationPurpose?: string;

      /** modifier */
      modifier?: string;

      /** productOwner */
      productOwner?: defs.gold.BucUserDTO;

      /** pushBackUrl */
      pushBackUrl?: string;

      /** supportClassify */
      supportClassify?: boolean;

      /** supportCyclePush */
      supportCyclePush?: boolean;

      /** supportPush */
      supportPush?: boolean;

      /** supportTrack */
      supportTrack?: boolean;

      /** systemId */
      systemId?: string;

      /** systemName */
      systemName?: string;

      /** systemUrl */
      systemUrl?: string;

      /** technologyOwner */
      technologyOwner?: defs.gold.BucUserDTO;

      /** trackUrl */
      trackUrl?: string;
    }

    export class SystemIntegrationParam {
      /** fields */
      fields?: Array<string>;

      /** id */
      id?: number;

      /** objectId */
      objectId?: number;

      /** qps */
      qps?: number;

      /** systemId */
      systemId?: string;
    }

    export class TableParam {
      /** baseJoinKey */
      baseJoinKey?: Array<string>;

      /** baseKey */
      baseKey?: Array<string>;

      /** baseKeyType */
      baseKeyType?: Array<string>;

      /** dataSourceId */
      dataSourceId?: string;

      /** descr */
      descr?: string;

      /** fieldList */
      fieldList?: Array<defs.gold.FieldParam>;

      /** goodData */
      goodData?: boolean;

      /** id */
      id?: number;

      /** isBase */
      isBase?: boolean;

      /** joinKey */
      joinKey?: Array<string>;

      /** objectId */
      objectId?: number;

      /** tableName */
      tableName?: string;
    }

    export class TagDTO {
      /** catalogId */
      catalogId?: number;

      /** fieldId */
      fieldId?: number;

      /** gdTagId */
      gdTagId?: number;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** objectId */
      objectId?: number;

      /** orderNo */
      orderNo?: number;
    }

    export class TagOrderDTO {
      /** id */
      id?: number;

      /** objectId */
      objectId?: number;

      /** targetOrderNo */
      targetOrderNo?: number;
    }

    export class TaskParam {
      /** act */
      act?: string;

      /** business */
      business?: number;

      /** compAct */
      compAct?: string;

      /** creator */
      creator?: string;

      /** dim */
      dim?: Array<defs.gold.ObjectMap>;

      /** dimScope */
      dimScope?: string;

      /** groupId */
      groupId?: string;

      /** name */
      name?: string;

      /** sceneId */
      sceneId?: string;

      /** taskStartDate */
      taskStartDate?: string;

      /** type */
      type?: string;
    }

    export class Trigger {
      /** config */
      config?: object;

      /** extraInfo */
      extraInfo?: object;

      /** type */
      type?: string;
    }

    export class TypeLabel {
      /** list */
      list?: Array<defs.gold.Label>;

      /** type */
      type?: 'filter' | 'show_dist' | 'show_detail' | 'aggregation';
    }

    export class UploadInteractiveAnalysisParam {
      /** condition */
      condition?: string;

      /** desc */
      desc?: string;

      /** expireDate */
      expireDate?: string;

      /** groupId */
      groupId?: number;

      /** isDynamic */
      isDynamic?: boolean;

      /** isOpen */
      isOpen?: boolean;

      /** name */
      name?: string;

      /** versionId */
      versionId?: number;
    }

    export class ValueFilter {
      /** op */
      op?: string;

      /** value */
      value?: string;

      /** valueField */
      valueField?: string;

      /** valueId */
      valueId?: number;

      /** valueOp */
      valueOp?: string;
    }

    export class ValueTemplateDTO {
      /** separator */
      separator?: string;

      /** textarea */
      textarea?: string;
    }
  }
}

declare namespace API {
  export namespace gold {
    /**
     * Admin Analysis Controller
     */
    export namespace adminAnalysis {
      /**
       * deleteAnalysisModule
       * /api/v1/admin/version/analysis/delete
       */
      export namespace deleteAnalysisModule {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteAnalysisModule
       * /api/v1/admin/version/analysis/delete
       */
      export namespace headDelete {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteAnalysisModule
       * /api/v1/admin/version/analysis/delete
       */
      export namespace postDelete {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteAnalysisModule
       * /api/v1/admin/version/analysis/delete
       */
      export namespace putDelete {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteAnalysisModule
       * /api/v1/admin/version/analysis/delete
       */
      export namespace deleteDelete {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteAnalysisModule
       * /api/v1/admin/version/analysis/delete
       */
      export namespace optionsDelete {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteAnalysisModule
       * /api/v1/admin/version/analysis/delete
       */
      export namespace patchDelete {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleDetail
       * /api/v1/admin/version/analysis/detail
       */
      export namespace getAnalysisModuleDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleDetail
       * /api/v1/admin/version/analysis/detail
       */
      export namespace headDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleDetail
       * /api/v1/admin/version/analysis/detail
       */
      export namespace postDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleDetail
       * /api/v1/admin/version/analysis/detail
       */
      export namespace putDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleDetail
       * /api/v1/admin/version/analysis/detail
       */
      export namespace deleteDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleDetail
       * /api/v1/admin/version/analysis/detail
       */
      export namespace optionsDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleDetail
       * /api/v1/admin/version/analysis/detail
       */
      export namespace patchDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAggregationLabelList
       * /api/v1/admin/version/analysis/label/aggregation
       */
      export namespace getAggregationLabelList {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAggregationLabelList
       * /api/v1/admin/version/analysis/label/aggregation
       */
      export namespace headLabelAggregation {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAggregationLabelList
       * /api/v1/admin/version/analysis/label/aggregation
       */
      export namespace postLabelAggregation {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAggregationLabelList
       * /api/v1/admin/version/analysis/label/aggregation
       */
      export namespace putLabelAggregation {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAggregationLabelList
       * /api/v1/admin/version/analysis/label/aggregation
       */
      export namespace deleteLabelAggregation {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAggregationLabelList
       * /api/v1/admin/version/analysis/label/aggregation
       */
      export namespace optionsLabelAggregation {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAggregationLabelList
       * /api/v1/admin/version/analysis/label/aggregation
       */
      export namespace patchLabelAggregation {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getDetailLabelList
       * /api/v1/admin/version/analysis/label/view
       */
      export namespace getDetailLabelList {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getDetailLabelList
       * /api/v1/admin/version/analysis/label/view
       */
      export namespace headLabelView {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getDetailLabelList
       * /api/v1/admin/version/analysis/label/view
       */
      export namespace postLabelView {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getDetailLabelList
       * /api/v1/admin/version/analysis/label/view
       */
      export namespace putLabelView {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getDetailLabelList
       * /api/v1/admin/version/analysis/label/view
       */
      export namespace deleteLabelView {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getDetailLabelList
       * /api/v1/admin/version/analysis/label/view
       */
      export namespace optionsLabelView {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getDetailLabelList
       * /api/v1/admin/version/analysis/label/view
       */
      export namespace patchLabelView {
        export class Params {
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /api/v1/admin/version/analysis/list
       */
      export namespace getAnalysisModuleList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /api/v1/admin/version/analysis/list
       */
      export namespace headList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /api/v1/admin/version/analysis/list
       */
      export namespace postList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /api/v1/admin/version/analysis/list
       */
      export namespace putList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /api/v1/admin/version/analysis/list
       */
      export namespace deleteList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /api/v1/admin/version/analysis/list
       */
      export namespace optionsList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /api/v1/admin/version/analysis/list
       */
      export namespace patchList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveAnalysisModule
       * /api/v1/admin/version/analysis/save
       */
      export namespace saveAnalysisModule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.AnalysisModuleParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.AnalysisModuleParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveAnalysisModule
       * /api/v1/admin/version/analysis/save
       */
      export namespace headSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.AnalysisModuleParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.AnalysisModuleParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveAnalysisModule
       * /api/v1/admin/version/analysis/save
       */
      export namespace postSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.AnalysisModuleParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.AnalysisModuleParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveAnalysisModule
       * /api/v1/admin/version/analysis/save
       */
      export namespace putSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.AnalysisModuleParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.AnalysisModuleParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveAnalysisModule
       * /api/v1/admin/version/analysis/save
       */
      export namespace deleteSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.AnalysisModuleParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.AnalysisModuleParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveAnalysisModule
       * /api/v1/admin/version/analysis/save
       */
      export namespace optionsSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.AnalysisModuleParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.AnalysisModuleParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveAnalysisModule
       * /api/v1/admin/version/analysis/save
       */
      export namespace patchSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.AnalysisModuleParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.AnalysisModuleParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * activeAnalysisModule
       * /api/v1/admin/version/analysis/start
       */
      export namespace activeAnalysisModule {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * activeAnalysisModule
       * /api/v1/admin/version/analysis/start
       */
      export namespace headStart {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * activeAnalysisModule
       * /api/v1/admin/version/analysis/start
       */
      export namespace postStart {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * activeAnalysisModule
       * /api/v1/admin/version/analysis/start
       */
      export namespace putStart {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * activeAnalysisModule
       * /api/v1/admin/version/analysis/start
       */
      export namespace deleteStart {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * activeAnalysisModule
       * /api/v1/admin/version/analysis/start
       */
      export namespace optionsStart {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * activeAnalysisModule
       * /api/v1/admin/version/analysis/start
       */
      export namespace patchStart {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * freezeAnalysisModule
       * /api/v1/admin/version/analysis/stop
       */
      export namespace freezeAnalysisModule {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * freezeAnalysisModule
       * /api/v1/admin/version/analysis/stop
       */
      export namespace headStop {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * freezeAnalysisModule
       * /api/v1/admin/version/analysis/stop
       */
      export namespace postStop {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * freezeAnalysisModule
       * /api/v1/admin/version/analysis/stop
       */
      export namespace putStop {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * freezeAnalysisModule
       * /api/v1/admin/version/analysis/stop
       */
      export namespace deleteStop {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * freezeAnalysisModule
       * /api/v1/admin/version/analysis/stop
       */
      export namespace optionsStop {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * freezeAnalysisModule
       * /api/v1/admin/version/analysis/stop
       */
      export namespace patchStop {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTemplateList
       * /api/v1/admin/version/analysis/template/list
       */
      export namespace getTemplateList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** sys */
          sys: string;
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTemplateList
       * /api/v1/admin/version/analysis/template/list
       */
      export namespace headTemplateList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** sys */
          sys: string;
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTemplateList
       * /api/v1/admin/version/analysis/template/list
       */
      export namespace postTemplateList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** sys */
          sys: string;
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTemplateList
       * /api/v1/admin/version/analysis/template/list
       */
      export namespace putTemplateList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** sys */
          sys: string;
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTemplateList
       * /api/v1/admin/version/analysis/template/list
       */
      export namespace deleteTemplateList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** sys */
          sys: string;
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTemplateList
       * /api/v1/admin/version/analysis/template/list
       */
      export namespace optionsTemplateList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** sys */
          sys: string;
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTemplateList
       * /api/v1/admin/version/analysis/template/list
       */
      export namespace patchTemplateList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** sys */
          sys: string;
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * changefree 接入
     */
    export namespace adminChangefree {
      /**
       * changeCancel
       * /crowdlab/api/v1/change/cancel
       */
      export namespace changeCancel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * check
       * /crowdlab/api/v1/change/check
       */
      export namespace check {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * changeCreate
       * /crowdlab/api/v1/change/create
       */
      export namespace changeCreate {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * changeNotify
       * /crowdlab/api/v1/change/notify
       */
      export namespace changeNotify {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.ChangeCheckRes,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.ChangeCheckRes,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * changeQuery
       * /crowdlab/api/v1/change/query
       */
      export namespace changeQuery {
        export class Params {
          /** doChange */
          doChange: boolean;
          /** sourceId */
          sourceId: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * changeUpdate
       * /crowdlab/api/v1/change/update
       */
      export namespace changeUpdate {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
     * Admin Datasource Controller
     */
    export namespace adminDatasource {
      /**
       * findDatasourceById
       * /api/admin/datasource/findDatasourceById
       */
      export namespace findDatasourceById {
        export class Params {
          /** datasourceId */
          datasourceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * findDatasourceById
       * /api/admin/datasource/findDatasourceById
       */
      export namespace headFindDatasourceById {
        export class Params {
          /** datasourceId */
          datasourceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * findDatasourceById
       * /api/admin/datasource/findDatasourceById
       */
      export namespace postFindDatasourceById {
        export class Params {
          /** datasourceId */
          datasourceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * findDatasourceById
       * /api/admin/datasource/findDatasourceById
       */
      export namespace putFindDatasourceById {
        export class Params {
          /** datasourceId */
          datasourceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * findDatasourceById
       * /api/admin/datasource/findDatasourceById
       */
      export namespace deleteFindDatasourceById {
        export class Params {
          /** datasourceId */
          datasourceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * findDatasourceById
       * /api/admin/datasource/findDatasourceById
       */
      export namespace optionsFindDatasourceById {
        export class Params {
          /** datasourceId */
          datasourceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * findDatasourceById
       * /api/admin/datasource/findDatasourceById
       */
      export namespace patchFindDatasourceById {
        export class Params {
          /** datasourceId */
          datasourceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /api/admin/datasource/list
       */
      export namespace list {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Admin Dimension Table Controller
     */
    export namespace adminDimensionTable {
      /**
       * list
       * /api/admin/dimensionTable/list
       */
      export namespace list {
        export class Params {
          /** keyword */
          keyword?: string;
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Admin Good Data Controller
     */
    export namespace adminGoodData {
      /**
       * getObjectBaseInfo
       * /api/admin/gooddata/object/baseinfo
       */
      export namespace getObjectBaseInfo {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getObjectBaseInfo
       * /api/admin/gooddata/object/baseinfo
       */
      export namespace headObjectBaseinfo {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getObjectBaseInfo
       * /api/admin/gooddata/object/baseinfo
       */
      export namespace postObjectBaseinfo {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getObjectBaseInfo
       * /api/admin/gooddata/object/baseinfo
       */
      export namespace putObjectBaseinfo {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getObjectBaseInfo
       * /api/admin/gooddata/object/baseinfo
       */
      export namespace deleteObjectBaseinfo {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getObjectBaseInfo
       * /api/admin/gooddata/object/baseinfo
       */
      export namespace optionsObjectBaseinfo {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getObjectBaseInfo
       * /api/admin/gooddata/object/baseinfo
       */
      export namespace patchObjectBaseinfo {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getQueryMode
       * /api/admin/gooddata/object/mode
       */
      export namespace getQueryMode {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getQueryMode
       * /api/admin/gooddata/object/mode
       */
      export namespace headObjectMode {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getQueryMode
       * /api/admin/gooddata/object/mode
       */
      export namespace postObjectMode {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getQueryMode
       * /api/admin/gooddata/object/mode
       */
      export namespace putObjectMode {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getQueryMode
       * /api/admin/gooddata/object/mode
       */
      export namespace deleteObjectMode {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getQueryMode
       * /api/admin/gooddata/object/mode
       */
      export namespace optionsObjectMode {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getQueryMode
       * /api/admin/gooddata/object/mode
       */
      export namespace patchObjectMode {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * supportGoodData
       * /api/admin/gooddata/object/support
       */
      export namespace supportGoodData {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * supportGoodData
       * /api/admin/gooddata/object/support
       */
      export namespace headObjectSupport {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * supportGoodData
       * /api/admin/gooddata/object/support
       */
      export namespace postObjectSupport {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * supportGoodData
       * /api/admin/gooddata/object/support
       */
      export namespace putObjectSupport {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * supportGoodData
       * /api/admin/gooddata/object/support
       */
      export namespace deleteObjectSupport {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * supportGoodData
       * /api/admin/gooddata/object/support
       */
      export namespace optionsObjectSupport {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * supportGoodData
       * /api/admin/gooddata/object/support
       */
      export namespace patchObjectSupport {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAuthProject
       * /api/admin/gooddata/projects
       */
      export namespace getAuthProject {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * getAuthProject
       * /api/admin/gooddata/projects
       */
      export namespace headProjects {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * getAuthProject
       * /api/admin/gooddata/projects
       */
      export namespace postProjects {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * getAuthProject
       * /api/admin/gooddata/projects
       */
      export namespace putProjects {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * getAuthProject
       * /api/admin/gooddata/projects
       */
      export namespace deleteProjects {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * getAuthProject
       * /api/admin/gooddata/projects
       */
      export namespace optionsProjects {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * getAuthProject
       * /api/admin/gooddata/projects
       */
      export namespace patchProjects {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * cancelSync
       * /api/admin/gooddata/tags/cancel_sync
       */
      export namespace cancelSync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * cancelSync
       * /api/admin/gooddata/tags/cancel_sync
       */
      export namespace headTagsCancel_sync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * cancelSync
       * /api/admin/gooddata/tags/cancel_sync
       */
      export namespace postTagsCancel_sync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * cancelSync
       * /api/admin/gooddata/tags/cancel_sync
       */
      export namespace putTagsCancel_sync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * cancelSync
       * /api/admin/gooddata/tags/cancel_sync
       */
      export namespace deleteTagsCancel_sync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * cancelSync
       * /api/admin/gooddata/tags/cancel_sync
       */
      export namespace optionsTagsCancel_sync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * cancelSync
       * /api/admin/gooddata/tags/cancel_sync
       */
      export namespace patchTagsCancel_sync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTags
       * /api/admin/gooddata/tags/list
       */
      export namespace getTags {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTags
       * /api/admin/gooddata/tags/list
       */
      export namespace headTagsList {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTags
       * /api/admin/gooddata/tags/list
       */
      export namespace postTagsList {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTags
       * /api/admin/gooddata/tags/list
       */
      export namespace putTagsList {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTags
       * /api/admin/gooddata/tags/list
       */
      export namespace deleteTagsList {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTags
       * /api/admin/gooddata/tags/list
       */
      export namespace optionsTagsList {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTags
       * /api/admin/gooddata/tags/list
       */
      export namespace patchTagsList {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * showSynclog
       * /api/admin/gooddata/tags/show_sync_log
       */
      export namespace showSynclog {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * showSynclog
       * /api/admin/gooddata/tags/show_sync_log
       */
      export namespace headTagsShow_sync_log {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * showSynclog
       * /api/admin/gooddata/tags/show_sync_log
       */
      export namespace postTagsShow_sync_log {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * showSynclog
       * /api/admin/gooddata/tags/show_sync_log
       */
      export namespace putTagsShow_sync_log {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * showSynclog
       * /api/admin/gooddata/tags/show_sync_log
       */
      export namespace deleteTagsShow_sync_log {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * showSynclog
       * /api/admin/gooddata/tags/show_sync_log
       */
      export namespace optionsTagsShow_sync_log {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * showSynclog
       * /api/admin/gooddata/tags/show_sync_log
       */
      export namespace patchTagsShow_sync_log {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * sync
       * /api/admin/gooddata/tags/sync
       */
      export namespace sync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * sync
       * /api/admin/gooddata/tags/sync
       */
      export namespace headTagsSync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * sync
       * /api/admin/gooddata/tags/sync
       */
      export namespace postTagsSync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * sync
       * /api/admin/gooddata/tags/sync
       */
      export namespace putTagsSync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * sync
       * /api/admin/gooddata/tags/sync
       */
      export namespace deleteTagsSync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * sync
       * /api/admin/gooddata/tags/sync
       */
      export namespace optionsTagsSync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * sync
       * /api/admin/gooddata/tags/sync
       */
      export namespace patchTagsSync {
        export class Params {
          /** objectId */
          objectId?: number;
          /** tagId */
          tagId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Admin Monitor Controller
     */
    export namespace adminMonitor {
      /**
       * addRule
       * /api/admin/monitor/addRule
       */
      export namespace addRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * addRule
       * /api/admin/monitor/addRule
       */
      export namespace headAddRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * addRule
       * /api/admin/monitor/addRule
       */
      export namespace postAddRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * addRule
       * /api/admin/monitor/addRule
       */
      export namespace putAddRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * addRule
       * /api/admin/monitor/addRule
       */
      export namespace deleteAddRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * addRule
       * /api/admin/monitor/addRule
       */
      export namespace optionsAddRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * addRule
       * /api/admin/monitor/addRule
       */
      export namespace patchAddRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * delRule
       * /api/admin/monitor/delRule
       */
      export namespace delRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * delRule
       * /api/admin/monitor/delRule
       */
      export namespace headDelRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * delRule
       * /api/admin/monitor/delRule
       */
      export namespace postDelRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * delRule
       * /api/admin/monitor/delRule
       */
      export namespace putDelRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * delRule
       * /api/admin/monitor/delRule
       */
      export namespace deleteDelRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * delRule
       * /api/admin/monitor/delRule
       */
      export namespace optionsDelRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * delRule
       * /api/admin/monitor/delRule
       */
      export namespace patchDelRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * editRule
       * /api/admin/monitor/editRule
       */
      export namespace editRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * editRule
       * /api/admin/monitor/editRule
       */
      export namespace headEditRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * editRule
       * /api/admin/monitor/editRule
       */
      export namespace postEditRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * editRule
       * /api/admin/monitor/editRule
       */
      export namespace putEditRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * editRule
       * /api/admin/monitor/editRule
       */
      export namespace deleteEditRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * editRule
       * /api/admin/monitor/editRule
       */
      export namespace optionsEditRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * editRule
       * /api/admin/monitor/editRule
       */
      export namespace patchEditRule {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * alarm
       * /api/admin/monitor/list
       */
      export namespace alarm {
        export class Params {
          /** hour */
          hour?: number;
          /** status */
          status?:
            | 'init'
            | 'schedule'
            | 'running'
            | 'canceled'
            | 'failed'
            | 'succeed';
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * alarm
       * /api/admin/monitor/list
       */
      export namespace headList {
        export class Params {
          /** hour */
          hour?: number;
          /** status */
          status?:
            | 'init'
            | 'schedule'
            | 'running'
            | 'canceled'
            | 'failed'
            | 'succeed';
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * alarm
       * /api/admin/monitor/list
       */
      export namespace postList {
        export class Params {
          /** hour */
          hour?: number;
          /** status */
          status?:
            | 'init'
            | 'schedule'
            | 'running'
            | 'canceled'
            | 'failed'
            | 'succeed';
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * alarm
       * /api/admin/monitor/list
       */
      export namespace putList {
        export class Params {
          /** hour */
          hour?: number;
          /** status */
          status?:
            | 'init'
            | 'schedule'
            | 'running'
            | 'canceled'
            | 'failed'
            | 'succeed';
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * alarm
       * /api/admin/monitor/list
       */
      export namespace deleteList {
        export class Params {
          /** hour */
          hour?: number;
          /** status */
          status?:
            | 'init'
            | 'schedule'
            | 'running'
            | 'canceled'
            | 'failed'
            | 'succeed';
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * alarm
       * /api/admin/monitor/list
       */
      export namespace optionsList {
        export class Params {
          /** hour */
          hour?: number;
          /** status */
          status?:
            | 'init'
            | 'schedule'
            | 'running'
            | 'canceled'
            | 'failed'
            | 'succeed';
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * alarm
       * /api/admin/monitor/list
       */
      export namespace patchList {
        export class Params {
          /** hour */
          hour?: number;
          /** status */
          status?:
            | 'init'
            | 'schedule'
            | 'running'
            | 'canceled'
            | 'failed'
            | 'succeed';
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * ruleList
       * /api/admin/monitor/ruleList
       */
      export namespace ruleList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * ruleList
       * /api/admin/monitor/ruleList
       */
      export namespace headRuleList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * ruleList
       * /api/admin/monitor/ruleList
       */
      export namespace postRuleList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * ruleList
       * /api/admin/monitor/ruleList
       */
      export namespace putRuleList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * ruleList
       * /api/admin/monitor/ruleList
       */
      export namespace deleteRuleList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * ruleList
       * /api/admin/monitor/ruleList
       */
      export namespace optionsRuleList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * ruleList
       * /api/admin/monitor/ruleList
       */
      export namespace patchRuleList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * warnTest
       * /api/admin/monitor/warntest
       */
      export namespace warnTest {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.gold.AlarmInfo>;

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
     * Admin Object Controller
     */
    export namespace adminObject {
      /**
       * add
       * /api/admin/object/add
       */
      export namespace add {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.ObjectParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.ObjectParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /api/admin/object/delete
       */
      export namespace remove {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(bodyParams: object): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: object,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setDistinct
       * /api/admin/object/distinct
       */
      export namespace setDistinct {
        export class Params {
          /** id */
          id: number;
          /** on */
          on: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setDistinct
       * /api/admin/object/distinct
       */
      export namespace headDistinct {
        export class Params {
          /** id */
          id: number;
          /** on */
          on: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setDistinct
       * /api/admin/object/distinct
       */
      export namespace postDistinct {
        export class Params {
          /** id */
          id: number;
          /** on */
          on: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setDistinct
       * /api/admin/object/distinct
       */
      export namespace putDistinct {
        export class Params {
          /** id */
          id: number;
          /** on */
          on: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setDistinct
       * /api/admin/object/distinct
       */
      export namespace deleteDistinct {
        export class Params {
          /** id */
          id: number;
          /** on */
          on: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setDistinct
       * /api/admin/object/distinct
       */
      export namespace optionsDistinct {
        export class Params {
          /** id */
          id: number;
          /** on */
          on: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setDistinct
       * /api/admin/object/distinct
       */
      export namespace patchDistinct {
        export class Params {
          /** id */
          id: number;
          /** on */
          on: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * edit
       * /api/admin/object/edit
       */
      export namespace edit {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.ObjectParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.ObjectParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /api/admin/object/get
       */
      export namespace get {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getDetail
       * /api/admin/object/getDetail
       */
      export namespace getDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /api/admin/object/list
       */
      export namespace list {
        export class Params {
          /** appId */
          appId?: number;
          /** keyword */
          keyword?: string;
          /** pageNumber */
          pageNumber?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listAllBu
       * /api/admin/object/listAllBu
       */
      export namespace listAllBu {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * getUsers
       * /api/admin/object/users
       */
      export namespace getUsers {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getUsers
       * /api/admin/object/users
       */
      export namespace headUsers {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getUsers
       * /api/admin/object/users
       */
      export namespace postUsers {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getUsers
       * /api/admin/object/users
       */
      export namespace putUsers {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getUsers
       * /api/admin/object/users
       */
      export namespace deleteUsers {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getUsers
       * /api/admin/object/users
       */
      export namespace optionsUsers {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getUsers
       * /api/admin/object/users
       */
      export namespace patchUsers {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Admin Page Controller
     */
    export namespace adminPage {
      /**
       * batchDelLabel
       * /api/admin/page/batchDelLabel
       */
      export namespace batchDelLabel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(bodyParams: object): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: object,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * batchEditLabel
       * /api/admin/page/batchEditLabel
       */
      export namespace batchEditLabel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.BatchEditLabelDTO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.BatchEditLabelDTO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteLabel
       * /api/admin/page/deleteLabel
       */
      export namespace deleteLabel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.TagDTO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.TagDTO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteLabelCatalog
       * /api/admin/page/deleteLabelCatalog
       */
      export namespace deleteLabelCatalog {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.CatalogDTO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.CatalogDTO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * editLabel
       * /api/admin/page/editLabel
       */
      export namespace editLabel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.LabelDTO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.LabelDTO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * editLabelCatalog
       * /api/admin/page/editLabelCatalog
       */
      export namespace editLabelCatalog {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.CatalogDTO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.CatalogDTO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * editLabelCatalogOrder
       * /api/admin/page/editLabelCatalogOrder
       */
      export namespace editLabelCatalogOrder {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.CatalogOrderDTO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.CatalogOrderDTO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * editLabelOrder
       * /api/admin/page/editLabelOrder
       */
      export namespace editLabelOrder {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.TagOrderDTO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.TagOrderDTO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * fieldList
       * /api/admin/page/fieldList
       */
      export namespace fieldList {
        export class Params {
          /** tableId */
          tableId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getCatalogTree
       * /api/admin/page/getCatalogTree
       */
      export namespace getCatalogTree {
        export class Params {
          /** objectId */
          objectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getLabel
       * /api/admin/page/getLabel
       */
      export namespace getLabel {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getLabelTree
       * /api/admin/page/getLabelTree
       */
      export namespace getLabelTree {
        export class Params {
          /** objectId */
          objectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * goodDataFieldList
       * /api/admin/page/gooddata/fieldList
       */
      export namespace goodDataFieldList {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setLabelPermission
       * /api/admin/page/label/setPermission
       */
      export namespace setLabelPermission {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.PermissionSetting,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.PermissionSetting,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setLabelPermission
       * /api/admin/page/label/setPermission
       */
      export namespace headLabelSetPermission {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.PermissionSetting,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.PermissionSetting,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setLabelPermission
       * /api/admin/page/label/setPermission
       */
      export namespace postLabelSetPermission {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.PermissionSetting,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.PermissionSetting,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setLabelPermission
       * /api/admin/page/label/setPermission
       */
      export namespace putLabelSetPermission {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.PermissionSetting,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.PermissionSetting,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setLabelPermission
       * /api/admin/page/label/setPermission
       */
      export namespace deleteLabelSetPermission {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.PermissionSetting,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.PermissionSetting,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setLabelPermission
       * /api/admin/page/label/setPermission
       */
      export namespace optionsLabelSetPermission {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.PermissionSetting,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.PermissionSetting,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * setLabelPermission
       * /api/admin/page/label/setPermission
       */
      export namespace patchLabelSetPermission {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.PermissionSetting,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.PermissionSetting,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveLabel
       * /api/admin/page/saveLabel
       */
      export namespace saveLabel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.TagDTO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.TagDTO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveLabelCatalog
       * /api/admin/page/saveLabelCatalog
       */
      export namespace saveLabelCatalog {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.CatalogDTO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.CatalogDTO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Admin Permission Table Controller
     */
    export namespace adminPermissionTable {
      /**
       * listPermissionType
       * /api/admin/permission/type
       */
      export namespace listPermissionType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
     * 租户管理模块
     */
    export namespace adminProject {
      /**
       * 获取可以绑定的FBI项目列表
       * /api/admin/project/list
       */
      export namespace listFbi {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * list
       * /api/admin/project/listwithApp
       */
      export namespace list {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * 获取可以绑定的FBI项目列表
       * /crowdlab/api/admin/project/list
       */
      export namespace getCrowdlabApiAdminProjectList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * list
       * /crowdlab/api/admin/project/listwithApp
       */
      export namespace getCrowdlabApiAdminProjectListwithApp {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
     * Admin Service Controller
     */
    export namespace adminService {
      /**
       * getVersionService
       * /api/v1/admin/service
       */
      export namespace getVersionService {
        export class Params {
          /** id */
          id: number;
          /** isModify */
          isModify?: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * addVersionService
       * /api/v1/admin/service/add
       */
      export namespace addVersionService {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * listApi
       * /api/v1/admin/service/api/list
       */
      export namespace listApi {
        export class Params {
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteVersionService
       * /api/v1/admin/service/delete
       */
      export namespace deleteVersionService {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * editVersionService
       * /api/v1/admin/service/edit
       */
      export namespace editVersionService {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * listVersionService
       * /api/v1/admin/service/list
       */
      export namespace listVersionService {
        export class Params {
          /** objectId */
          objectId: number;
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listServiceSysParam
       * /api/v1/admin/service/param/sys/list
       */
      export namespace listServiceSysParam {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * searchParamValue
       * /api/v1/admin/service/parameter/searchOptions
       */
      export namespace searchParamValue {
        export class Params {
          /** keyword */
          keyword?: string;
          /** parameterName */
          parameterName: string;
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getServiceTemplate
       * /api/v1/admin/service/template
       */
      export namespace getServiceTemplate {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * addServiceTemplate
       * /api/v1/admin/service/template/add
       */
      export namespace addServiceTemplate {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * deleteServiceTemplate
       * /api/v1/admin/service/template/delete
       */
      export namespace deleteServiceTemplate {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * editServiceTemplate
       * /api/v1/admin/service/template/edit
       */
      export namespace editServiceTemplate {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * listServiceTemplate
       * /api/v1/admin/service/template/list
       */
      export namespace listServiceTemplate {
        export class Params {
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Admin System Config Controller
     */
    export namespace adminSystemConfig {
      /**
       * add
       * /api/admin/systemConfig/add
       */
      export namespace add {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.SystemConfigDTO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.SystemConfigDTO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * del
       * /api/admin/systemConfig/del
       */
      export namespace del {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(bodyParams: object): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: object,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * edit
       * /api/admin/systemConfig/edit
       */
      export namespace edit {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.SystemConfigDTO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.SystemConfigDTO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /api/admin/systemConfig/list
       */
      export namespace list {
        export class Params {
          /** keyword */
          keyword?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Admin System Integration Controller
     */
    export namespace adminSystemIntegration {
      /**
       * add
       * /api/admin/systemIntegration/add
       */
      export namespace add {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.SystemIntegrationParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.SystemIntegrationParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * del
       * /api/admin/systemIntegration/del
       */
      export namespace del {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(bodyParams: object): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: object,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * edit
       * /api/admin/systemIntegration/edit
       */
      export namespace edit {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.SystemIntegrationParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.SystemIntegrationParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /api/admin/systemIntegration/list
       */
      export namespace list {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * 黄金策/后台表管理
     */
    export namespace adminTable {
      /**
       * fieldList
       * /api/admin/table/DbSchemaFieldList
       */
      export namespace fieldList {
        export class Params {
          /** dataSourceId */
          dataSourceId: number;
          /** tableName */
          tableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 添加扩展表
       * /api/admin/table/add
       */
      export namespace add {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.TableParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.TableParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 添加主表
       * /api/admin/table/addBase
       */
      export namespace addBase {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.TableParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.TableParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /api/admin/table/delete
       */
      export namespace remove {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(bodyParams: object): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: object,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * edit
       * /api/admin/table/edit
       */
      export namespace edit {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.TableParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.TableParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * editBase
       * /api/admin/table/editBase
       */
      export namespace editBase {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.TableParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.TableParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * fieldList
       * /api/admin/table/fieldList
       */
      export namespace getFieldList {
        export class Params {
          /** dataSourceId */
          dataSourceId: number;
          /** objectId */
          objectId: number;
          /** tableName */
          tableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /api/admin/table/list
       */
      export namespace list {
        export class Params {
          /** objectId */
          objectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * syncTable
       * /api/admin/table/syncTable
       */
      export namespace syncTable {
        export class Params {
          /** tableId */
          tableId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * syncTable
       * /api/admin/table/syncTable
       */
      export namespace headSyncTable {
        export class Params {
          /** tableId */
          tableId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * syncTable
       * /api/admin/table/syncTable
       */
      export namespace postSyncTable {
        export class Params {
          /** tableId */
          tableId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * syncTable
       * /api/admin/table/syncTable
       */
      export namespace putSyncTable {
        export class Params {
          /** tableId */
          tableId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * syncTable
       * /api/admin/table/syncTable
       */
      export namespace deleteSyncTable {
        export class Params {
          /** tableId */
          tableId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * syncTable
       * /api/admin/table/syncTable
       */
      export namespace optionsSyncTable {
        export class Params {
          /** tableId */
          tableId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * syncTable
       * /api/admin/table/syncTable
       */
      export namespace patchSyncTable {
        export class Params {
          /** tableId */
          tableId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Admin Ui Form Controller
     */
    export namespace adminUiForm {
      /**
       * addForm
       * /api/admin/form/add
       */
      export namespace addForm {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * deleteForm
       * /api/admin/form/delete
       */
      export namespace deleteForm {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateForm
       * /api/admin/form/update
       */
      export namespace updateForm {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
    }

    /**
     * Config Controller
     */
    export namespace config {
      /**
       * aplusLogicalRouteStrategy
       * /crowdlab/api/admin/config/aplusLogicalRouteStrategy
       */
      export namespace aplusLogicalRouteStrategy {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * aplusLogicalStoreSwitch
       * /crowdlab/api/admin/config/aplusLogicalStoreSwitch
       */
      export namespace aplusLogicalStoreSwitch {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * aplusPhysicalSwitch
       * /crowdlab/api/admin/config/aplusPhysicalSwitch
       */
      export namespace aplusPhysicalSwitch {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * aplusSnapshotPhysicalSwitch
       * /crowdlab/api/admin/config/aplusSnapshotPhysicalSwitch
       */
      export namespace aplusSnapshotPhysicalSwitch {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * aplushSwitch
       * /crowdlab/api/admin/config/aplushSwitch
       */
      export namespace aplushSwitch {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * dingdingTest
       * /crowdlab/api/admin/config/dingdingTest
       */
      export namespace dingdingTest {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * failInitGroupsPlan
       * /crowdlab/api/admin/config/exePlan/failInitGroupsPlan
       */
      export namespace failInitGroupsPlan {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * failInitPlan
       * /crowdlab/api/admin/config/exePlan/failInitPlan
       */
      export namespace failInitPlan {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * updateExportConfig
       * /crowdlab/api/admin/config/exportConfig/update
       */
      export namespace updateExportConfig {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * 将动态群组更新为静态群组
       * /crowdlab/api/admin/config/group/dynamic/update
       */
      export namespace updateDynamic {
        export class Params {
          /** groupId */
          groupId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 手动重新获取pushService
       * /crowdlab/api/admin/config/group/push/register
       */
      export namespace pushServiceRegister {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * addMarketGroupConfig
       * /crowdlab/api/admin/config/marketTestApply/add
       */
      export namespace addMarketGroupConfig {
        export class Params {
          /** groupId */
          groupId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteMarketGroupConfig
       * /crowdlab/api/admin/config/marketTestApply/delete
       */
      export namespace deleteMarketGroupConfig {
        export class Params {
          /** groupId */
          groupId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * recoverPreviewAndDownloadAcl
       * /crowdlab/api/admin/config/previewAndDownloadAclMerge
       */
      export namespace recoverPreviewAndDownloadAcl {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * rerunWithSourceGroup
       * /crowdlab/api/admin/config/rerunWithSourceGroup
       */
      export namespace rerunWithSourceGroup {
        export class Params {
          /** groupId */
          groupId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * stopServiceConf
       * /crowdlab/api/admin/config/stopServiceConf
       */
      export namespace stopServiceConf {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * switchMasterTable
       * /crowdlab/api/admin/config/switchMasterTable
       */
      export namespace switchMasterTable {
        export class Params {
          /** dimensionId */
          dimensionId: number;
          /** masterId */
          masterId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateFbiId
       * /crowdlab/api/admin/config/updateFbiId
       */
      export namespace updateFbiId {
        export class Params {
          /** fbiId */
          fbiId: number;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateVersionDatasource
       * /crowdlab/api/admin/config/updateHjcDatasource
       */
      export namespace updateVersionDatasource {
        export class Params {
          /** dsId */
          dsId: number;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateHjcTableTemp
       * /crowdlab/api/admin/config/updateHjcTableTemp
       */
      export namespace updateHjcTableTemp {
        export class Params {
          /** dimensionId */
          dimensionId: number;
          /** masterId */
          masterId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateTableMeta
       * /crowdlab/api/admin/config/updateTableMeta
       */
      export namespace updateTableMeta {
        export class Params {
          /** dataSource */
          dataSource: number;
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateTagCanPerspective
       * /crowdlab/api/admin/config/updateTagCanPerspective
       */
      export namespace updateTagCanPerspective {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * addVersionPreviewAclPolicy
       * /crowdlab/api/admin/config/version/previewAndDownload/acl/add
       */
      export namespace addVersionPreviewAclPolicy {
        export class Params {
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Demo
     */
    export namespace demo {
      /**
       * 删除标签脏数据
       * /crowdlab/clean/cleanLabel
       */
      export namespace addSystemDocUrl {
        export class Params {
          /** id */
          id: number;
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getFilterKind
       * /crowdlab/demo
       */
      export namespace getFilterKind {
        export class Params {
          /** business */
          business: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 直播判定任务重启
       * /crowdlab/determination/restart
       */
      export namespace restartDetermination {
        export class Params {
          /** groupId */
          groupId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteAllData清理数据
       * /crowdlab/groupOperationRecord/deleteAllData
       */
      export namespace deleteAllData {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * 修改系统的链接及描述链接
       * /crowdlab/systemConfig/updateSystemUrl
       */
      export namespace getSystemConfigUpdateSystemUrl {
        export class Params {
          /** docUrl */
          docUrl?: string;
          /** id */
          id: number;
          /** systemUrl */
          systemUrl?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Dict Controller
     */
    export namespace dict {
      /**
       * addDictRecord
       * /crowdlab/api/admin/dict/add
       */
      export namespace addDictRecord {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * deleteDictRecord
       * /crowdlab/api/admin/dict/delete
       */
      export namespace deleteDictRecord {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateDictRecord
       * /crowdlab/api/admin/dict/update
       */
      export namespace updateDictRecord {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
    }

    /**
     * Gtc Controller
     */
    export namespace gtc {
      /**
       * createJob
       * /api/v1/gtc/add
       */
      export namespace createJob {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * compute
       * /api/v1/gtc/compute
       */
      export namespace compute {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * computeData
       * /api/v1/gtc/computeData
       */
      export namespace computeData {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteApp
       * /api/v1/gtc/delete
       */
      export namespace deleteApp {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getApp
       * /api/v1/gtc/get
       */
      export namespace getApp {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * initialize
       * /api/v1/gtc/initialize
       */
      export namespace initialize {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listApps
       * /api/v1/gtc/list
       */
      export namespace listApps {
        export class Params {
          /** activityId */
          activityId?: string;
          /** keyword */
          keyword?: string;
          /** matchActivityId */
          matchActivityId?: string;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * resetApp
       * /api/v1/gtc/reset
       */
      export namespace resetApp {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * addResult
       * /api/v1/gtc/result/add
       */
      export namespace addResult {
        export class Params {
          /** appId */
          appId: number;
          /** bizdate */
          bizdate: string;
          /** status */
          status: string;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(bodyParams: object): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: object,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteResult
       * /api/v1/gtc/result/delete
       */
      export namespace deleteResult {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listResult
       * /api/v1/gtc/result/list
       */
      export namespace listResult {
        export class Params {
          /** appId */
          appId: number;
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * review
       * /api/v1/gtc/review
       */
      export namespace review {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getSj
       * /api/v1/gtc/sj/get
       */
      export namespace getSj {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateSj
       * /api/v1/gtc/sj/update
       */
      export namespace updateSj {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.SmartJob,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.SmartJob,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * track
       * /api/v1/gtc/track
       */
      export namespace track {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateJob
       * /api/v1/gtc/update
       */
      export namespace updateJob {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.GtcApp,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.GtcApp,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * GTC/配置及维表信息
     */
    export namespace gtcConfig {
      /**
       * getCurrency
       * /crowdlab/api/v1/gtc/currency
       */
      export namespace getCurrency {
        export class Params {
          /** business */
          business: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listCrowdType
       * /crowdlab/api/v1/gtc/task/crowd/list
       */
      export namespace listCrowdType {
        export class Params {
          /** business */
          business: number;
          /** dimScope */
          dimScope?: string;
          /** parents */
          parents?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO<Array<defs.gold.NameId>>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTaskDimConfig
       * /crowdlab/api/v1/gtc/task/dim/config
       */
      export namespace getTaskDimConfig {
        export class Params {
          /** business */
          business: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTaskDimConfigV2
       * /crowdlab/api/v1/gtc/task/dim/configV2
       */
      export namespace getTaskDimConfigV2 {
        export class Params {
          /** business */
          business: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO<
          defs.gold.ObjectMap<string, ObjectMap>
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
       * getTaskDimValue
       * /crowdlab/api/v1/gtc/task/dim/value
       */
      export namespace getTaskDimValue {
        export class Params {
          /** query */
          query: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTaskDimValueV2
       * /crowdlab/api/v1/gtc/task/dim/valueV2
       */
      export namespace getTaskDimValueV2 {
        export class Params {
          /** query */
          query: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取任务列表查询参数配置
       * /crowdlab/api/v1/gtc/task/list/param/config
       */
      export namespace getTaskListParamConfig {
        export class Params {
          /** business */
          business: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listMatchAct
       * /crowdlab/api/v1/gtc/task/overview/param/act/comp/list
       */
      export namespace listMatchAct {
        export class Params {
          /** business */
          business: number;
          /** keyword */
          keyword?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listAct
       * /crowdlab/api/v1/gtc/task/overview/param/act/list
       */
      export namespace listAct {
        export class Params {
          /** business */
          business: number;
          /** keyword */
          keyword?: string;
          /** list */
          list?: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listCrowdType
       * /crowdlab/api/v1/gtc/task/overview/param/crowd/list
       */
      export namespace getTaskOverviewParamCrowdList {
        export class Params {
          /** business */
          business: number;
          /** dimScope */
          dimScope?: string;
          /** parents */
          parents?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO<Array<defs.gold.NameId>>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 任务详情对应报表配置
       * /crowdlab/api/v1/gtc/task/report/config
       */
      export namespace getReportConfig {
        export class Params {
          /** task */
          task: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Gtc Crowd Controller
     */
    export namespace gtcCrowd {
      /**
       * addCrowd
       * /api/v1/gtc/crowd/add
       */
      export namespace addCrowd {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO<ObjectMap>;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.GtcCrowd,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.GtcCrowd,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteCrowd
       * /api/v1/gtc/crowd/delete
       */
      export namespace deleteCrowd {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO<boolean>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getCrowd
       * /api/v1/gtc/crowd/get
       */
      export namespace getCrowd {
        export class Params {
          /** code */
          code: string;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO<defs.gold.GtcCrowd>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listCrowds
       * /api/v1/gtc/crowd/list
       */
      export namespace listCrowds {
        export class Params {
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO<Array<defs.gold.GtcCrowd>>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateCrowd
       * /api/v1/gtc/crowd/update
       */
      export namespace updateCrowd {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO<defs.gold.GtcCrowd>;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.GtcCrowd,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.GtcCrowd,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * GTC/效果追踪
     */
    export namespace gtcEffect {
      /**
       * loadEffect
       * /crowdlab/api/v1/gtc/effect/load
       */
      export namespace loadEffect {
        export class Params {
          /** crowd */
          crowd: string;
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * loadEffect2
       * /crowdlab/api/v1/gtc/effect/load2
       */
      export namespace loadEffect2 {
        export class Params {
          /** crowd */
          crowd: string;
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * loadCrowds
       * /crowdlab/api/v1/gtc/effect/loadCrowds
       */
      export namespace loadCrowds {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * loadEffectDebug
       * /crowdlab/api/v1/gtc/effect/loadDebug
       */
      export namespace loadEffectDebug {
        export class Params {
          /** id */
          id: number;
          /** isLatest */
          isLatest: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * loadReviewData
       * /crowdlab/api/v1/gtc/effect/loadReview
       */
      export namespace loadReviewData {
        export class Params {
          /** ids */
          ids: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Gtc Model Controller
     */
    export namespace gtcModel {
      /**
       * get
       * /api/v1/gtc/model
       */
      export namespace get {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * predict
       * /api/v1/gtc/model/predict
       */
      export namespace predict {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * train
       * /api/v1/gtc/model/train
       */
      export namespace train {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * GTC相关任务分组
     */
    export namespace gtcRelatedTask {
      /**
       * 相关任务分组配置
       * /crowdlab/api/v1/gtc/task/relatedTaskGroup/config
       */
      export namespace getRelatedTaskGroupConfig {
        export class Params {
          /** task */
          task: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO<ObjectMap>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 相关任务分组详情
       * /crowdlab/api/v1/gtc/task/relatedTaskGroup/detail
       */
      export namespace getRelatedTaskGroupDetail {
        export class Params {
          /** groupType */
          groupType: string;
          /** stageType */
          stageType: string;
          /** task */
          task: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO<ObjectMap>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * GTC/活动复盘
     */
    export namespace gtcReview {
      /**
       * getReviewData
       * /crowdlab/api/v1/gtc/review/loadData
       */
      export namespace getReviewData {
        export class Params {
          /** id */
          id: number;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getReviewInfo
       * /crowdlab/api/v1/gtc/review/loadInfo
       */
      export namespace getReviewInfo {
        export class Params {
          /** id */
          id: number;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getReviewTableData
       * /crowdlab/api/v1/gtc/review/loadTable
       */
      export namespace getReviewTableData {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * GTC/目标拆解
     */
    export namespace gtcTask {
      /**
       * cleanUserConfig
       * /crowdlab/api/v1/gtc/task/cleanUserConfig
       */
      export namespace cleanUserConfig {
        export class Params {
          /** appId */
          appId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getMetricsValue
       * /crowdlab/api/v1/gtc/task/getMetricsValue
       */
      export namespace getMetricsValue {
        export class Params {
          /** appId */
          appId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTaskData
       * /crowdlab/api/v1/gtc/task/loadData
       */
      export namespace getTaskData {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: ObjectMap<any, object>,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: ObjectMap<any, object>,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTaskMetrics
       * /crowdlab/api/v1/gtc/task/loadMetrics
       */
      export namespace getTaskMetrics {
        export class Params {
          /** date */
          date?: string;
          /** id */
          id: number;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTaskAudienceInfo
       * /crowdlab/api/v1/gtc/task/loadTaskAudienceInfo
       */
      export namespace getTaskAudienceInfo {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getTaskInfo
       * /crowdlab/api/v1/gtc/task/loadTaskInfo
       */
      export namespace getTaskInfo {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getMatchActivity
       * /crowdlab/api/v1/gtc/task/matchActivity
       */
      export namespace getMatchActivity {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * paramSave
       * /crowdlab/api/v1/gtc/task/save
       */
      export namespace paramSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: ObjectMap<any, object>,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: ObjectMap<any, object>,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * gmvKpiSave
       * /crowdlab/api/v1/gtc/task/saveKpi
       */
      export namespace gmvKpiSave {
        export class Params {
          /** appIds */
          appIds: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * gmvKpiSave2
       * /crowdlab/api/v1/gtc/task/saveKpi2
       */
      export namespace gmvKpiSave2 {
        export class Params {
          /** appId */
          appId: number;
          /** gmvKpi */
          gmvKpi: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Lab Admin Analysis Controller
     */
    export namespace labAdminAnalysis {
      /**
       * getAnalysisModuleList
       * /crowdlab/api/v1/admin/version/analysis/list
       */
      export namespace getAnalysisModuleList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Lab Admin Service Controller
     */
    export namespace labAdminService {
      /**
       * getVersionService
       * /crowdlab/api/v1/admin/service
       */
      export namespace getVersionService {
        export class Params {
          /** id */
          id: number;
          /** isModify */
          isModify?: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listVersionService
       * /crowdlab/api/v1/admin/service/list
       */
      export namespace listVersionService {
        export class Params {
          /** objectId */
          objectId: number;
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * searchParamValue
       * /crowdlab/api/v1/admin/service/parameter/searchOptions
       */
      export namespace searchParamValue {
        export class Params {
          /** keyword */
          keyword?: string;
          /** parameterName */
          parameterName: string;
          /** serviceId */
          serviceId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Lab Admin Table Controller
     */
    export namespace labAdminTable {
      /**
       * 获取业务域主表信息
       * /crowdlab/api/admin/table/getByVersionId
       */
      export namespace getAggregationLabel {
        export class Params {
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 校验表权限及获取表列
       * /crowdlab/api/admin/table/getOdpsTableColumn
       */
      export namespace getOdpsTableColumn {
        export class Params {
          /** tableName */
          tableName: string;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 返回支持的id类型
       * /crowdlab/api/admin/table/idTypeList
       */
      export namespace getIdTypeList {
        export class Params {
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Lab Analysis Controller
     */
    export namespace labAnalysis {
      /**
       * startAggregationAnalysis
       * /crowdlab/api/v1/analysis/aggregation
       */
      export namespace startAggregationAnalysis {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.AggregationAnalysisParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.AggregationAnalysisParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAggregationAnalysisResult
       * /crowdlab/api/v1/analysis/aggregation/result
       */
      export namespace getAggregationAnalysisResult {
        export class Params {
          /** task */
          task: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAggregationLabel
       * /crowdlab/api/v1/analysis/convert/to/crowdcup
       */
      export namespace getAggregationLabel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.InteractiveConvertParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.InteractiveConvertParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteAnalysis
       * /crowdlab/api/v1/analysis/delete
       */
      export namespace deleteAnalysis {
        export class Params {
          /** analysis */
          analysis: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 提交预览/下载任务
       * /crowdlab/api/v1/analysis/detail
       */
      export namespace startDetailAnalysis {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.PreviewParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.PreviewParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取预览/下载结果
       * /crowdlab/api/v1/analysis/detail/result
       */
      export namespace getDetailAnalysisResult {
        export class Params {
          /** task */
          task: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAggregationFunction
       * /crowdlab/api/v1/analysis/func/aggregation
       */
      export namespace getAggregationFunction {
        export class Params {
          /** module */
          module?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAggregationLabel
       * /crowdlab/api/v1/analysis/label/aggregation
       */
      export namespace getLabelAggregation {
        export class Params {
          /** module */
          module: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getViewLabel
       * /crowdlab/api/v1/analysis/label/view
       */
      export namespace getViewLabel {
        export class Params {
          /** module */
          module: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getMyAnalysisOfType
       * /crowdlab/api/v1/analysis/list
       */
      export namespace getMyAnalysisOfType {
        export class Params {
          /** keyword */
          keyword?: string;
          /** pageSize */
          pageSize: number;
          /** startPage */
          startPage: number;
          /** type */
          type: string;
          /** versionId */
          versionId?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * startInsightAnalysis
       * /crowdlab/api/v1/analysis/obviously
       */
      export namespace startInsightAnalysis {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * getInsightAnalysisInfo
       * /crowdlab/api/v1/analysis/obviously/get
       */
      export namespace getInsightAnalysisInfo {
        export class Params {
          /** analysisId */
          analysisId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getInsightAnalysisResult
       * /crowdlab/api/v1/analysis/obviously/result
       */
      export namespace getInsightAnalysisResult {
        export class Params {
          /** analysisId */
          analysisId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getStatisticsDetail
       * /crowdlab/api/v1/analysis/statistics
       */
      export namespace getStatisticsDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getStatisticsDetail
       * /crowdlab/api/v1/analysis/statistics
       */
      export namespace headStatistics {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getStatisticsDetail
       * /crowdlab/api/v1/analysis/statistics
       */
      export namespace postStatistics {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getStatisticsDetail
       * /crowdlab/api/v1/analysis/statistics
       */
      export namespace putStatistics {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getStatisticsDetail
       * /crowdlab/api/v1/analysis/statistics
       */
      export namespace deleteStatistics {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getStatisticsDetail
       * /crowdlab/api/v1/analysis/statistics
       */
      export namespace optionsStatistics {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getStatisticsDetail
       * /crowdlab/api/v1/analysis/statistics
       */
      export namespace patchStatistics {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveStatisticalAnalysis
       * /crowdlab/api/v1/analysis/statistics/save
       */
      export namespace saveStatisticalAnalysis {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * saveStatisticalAnalysis
       * /crowdlab/api/v1/analysis/statistics/save
       */
      export namespace headStatisticsSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * saveStatisticalAnalysis
       * /crowdlab/api/v1/analysis/statistics/save
       */
      export namespace postStatisticsSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * saveStatisticalAnalysis
       * /crowdlab/api/v1/analysis/statistics/save
       */
      export namespace putStatisticsSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * saveStatisticalAnalysis
       * /crowdlab/api/v1/analysis/statistics/save
       */
      export namespace deleteStatisticsSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * saveStatisticalAnalysis
       * /crowdlab/api/v1/analysis/statistics/save
       */
      export namespace optionsStatisticsSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * saveStatisticalAnalysis
       * /crowdlab/api/v1/analysis/statistics/save
       */
      export namespace patchStatisticsSave {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * getAnalysisListStatus
       * /crowdlab/api/v1/analysis/status
       */
      export namespace getAnalysisListStatus {
        export class Params {
          /** analysisList */
          analysisList: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * uploadInteractiveAnalysis
       * /crowdlab/api/v1/analysis/uploadInteractiveAnalysis
       */
      export namespace uploadInteractiveAnalysis {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * uploadInteractiveAnalysis
       * /crowdlab/api/v1/analysis/uploadInteractiveAnalysis
       */
      export namespace headUploadInteractiveAnalysis {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * uploadInteractiveAnalysis
       * /crowdlab/api/v1/analysis/uploadInteractiveAnalysis
       */
      export namespace postUploadInteractiveAnalysis {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * uploadInteractiveAnalysis
       * /crowdlab/api/v1/analysis/uploadInteractiveAnalysis
       */
      export namespace putUploadInteractiveAnalysis {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * uploadInteractiveAnalysis
       * /crowdlab/api/v1/analysis/uploadInteractiveAnalysis
       */
      export namespace deleteUploadInteractiveAnalysis {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * uploadInteractiveAnalysis
       * /crowdlab/api/v1/analysis/uploadInteractiveAnalysis
       */
      export namespace optionsUploadInteractiveAnalysis {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * uploadInteractiveAnalysis
       * /crowdlab/api/v1/analysis/uploadInteractiveAnalysis
       */
      export namespace patchUploadInteractiveAnalysis {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.UploadInteractiveAnalysisParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Lab Application Controller
     */
    export namespace labApplication {
      /**
       * 批量跨系统应用
       * /crowdlab/api/v1/application/batchCrossSystemApplication
       */
      export namespace batchApply {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.CrossSystemParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.CrossSystemParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除应用配置
       * /crowdlab/api/v1/application/deleteSystemConfig
       */
      export namespace deleteSystemConfig {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询对外应用记录
       * /crowdlab/api/v1/application/getCrossSystemApplicationList
       */
      export namespace getExternalApplicationList {
        export class Params {
          /** groupList */
          groupList?: string;
          /** keyword */
          keyword?: string;
          /** page */
          page: number;
          /** pageSize */
          pageSize: number;
          /** versionId */
          versionId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取提交任务的实例列表
       * /crowdlab/api/v1/application/getJobTaskList
       */
      export namespace getTaskList {
        export class Params {
          /** jobId */
          jobId: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询对外应用系统下拉列表
       * /crowdlab/api/v1/application/getSystemList
       */
      export namespace getSystemList {
        export class Params {
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Lab Autocomplete Controller
     */
    export namespace labAutocomplete {
      /**
       * autocomplete
       * /crowdlab/api/v1/autocomplete
       */
      export namespace autocomplete {
        export class Params {
          /** controlId */
          controlId?: number;
          /** keyword */
          keyword: string;
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * completeUser
       * /crowdlab/api/v1/autocomplete/user
       */
      export namespace completeUser {
        export class Params {
          /** callback */
          callback: string;
          /** search */
          search: string;
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
     * Lab Filter Controller
     */
    export namespace labFilter {
      /**
       * startCountTask
       * /crowdlab/api/v1/filter/count
       */
      export namespace startCountTask {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * getCountTriggerMode
       * /crowdlab/api/v1/filter/count/mode
       */
      export namespace getCountTriggerMode {
        export class Params {
          /** business */
          business: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveGroup
       * /crowdlab/api/v1/filter/group
       */
      export namespace saveGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * limit
       * /crowdlab/api/v1/filter/limit
       */
      export namespace limit {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * getCountResult
       * /crowdlab/api/v1/filter/result
       */
      export namespace getCountResult {
        export class Params {
          /** task */
          task: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Lab Group Controller
     */
    export namespace labGroup {
      /**
       * 获取人群
       * /crowdlab/api/v1/group
       */
      export namespace getGroup {
        export class Params {
          /** group */
          group: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 跨域流转接口，生成新的跨域流转人群
       * /crowdlab/api/v1/group/batchCrossVersionApplication
       */
      export namespace groupCrossDomainTransfer {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.GroupCrossVersionVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.GroupCrossVersionVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 批量删除人群
       * /crowdlab/api/v1/group/batchDeleteGroupByIDs
       */
      export namespace batchDeleteGroupByIDs {
        export class Params {
          /** groupList */
          groupList: Array<number>;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 域内群组批量分享
       * /crowdlab/api/v1/group/batchGroupShare
       */
      export namespace batchGroupShare {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.GroupShareParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.GroupShareParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 市场上批量生成接口，生成新的跨域流转人群
       * /crowdlab/api/v1/group/batchMarketApplyGroup
       */
      export namespace batchMarketApplyGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.MarketApplyGroupVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.MarketApplyGroupVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询行为圈人信息
       * /crowdlab/api/v1/group/bhvCrowd
       */
      export namespace bhvCrowd {
        export class Params {
          /** crowdId */
          crowdId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 群组复制
       * /crowdlab/api/v1/group/clone
       */
      export namespace cloneGroup {
        export class Params {
          /** group */
          group: number;
          /** name */
          name: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 已创建的人群数量
       * /crowdlab/api/v1/group/createNumber
       */
      export namespace createNumber {
        export class Params {
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除跨域流转记录
       * /crowdlab/api/v1/group/deleteCrossRecord
       */
      export namespace deleteCrossRecord {
        export class Params {
          /** jobId */
          jobId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 有种子人群放大
       * /crowdlab/api/v1/group/expand
       */
      export namespace expandGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * 无种子人群放大
       * /crowdlab/api/v1/group/expandNoSeed
       */
      export namespace expandNoSeed {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * 查询某个分析对象的群组
       * /crowdlab/api/v1/group/find
       */
      export namespace getMyGroupOfVersion {
        export class Params {
          /** groupId */
          groupId?: number;
          /** keyword */
          keyword?: string;
          /** limit */
          limit?: number;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查看跨域流转记录
       * /crowdlab/api/v1/group/getCrossVersionApplicationList
       */
      export namespace getCrossVersionApplicationList {
        export class Params {
          /** groupList */
          groupList: Array<number>;
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** versionId */
          versionId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取群组被分享的列表
       * /crowdlab/api/v1/group/getShareGroupList
       */
      export namespace shareGroupList {
        export class Params {
          /** groupId */
          groupId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 手动执行跨域流转，生成新的跨域流转人群
       * /crowdlab/api/v1/group/groupCross
       */
      export namespace groupCross {
        export class Params {
          /** sourceGroupId */
          sourceGroupId: number;
          /** targetGroupId */
          targetGroupId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 域内群组分享
       * /crowdlab/api/v1/group/groupShare
       */
      export namespace groupShare {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.GroupShareParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.GroupShareParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 群组转交
       * /crowdlab/api/v1/group/handover
       */
      export namespace groupHandover {
        export class Params {
          /** groupIdList */
          groupIdList: Array<number>;
          /** workNumber */
          workNumber: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询ip圈人信息
       * /crowdlab/api/v1/group/ipCrowd
       */
      export namespace ipCrowd {
        export class Params {
          /** crowdId */
          crowdId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 根据类型和关键字查询人群列表
       * /crowdlab/api/v1/group/list
       */
      export namespace getMyGroupOfType {
        export class Params {
          /** keyword */
          keyword?: string;
          /** pageSize */
          pageSize: number;
          /** startPage */
          startPage: number;
          /** type */
          type: string;
          /** versionId */
          versionId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询行为的维度和值信息
       * /crowdlab/api/v1/group/listBhvDim
       */
      export namespace listBhvDim {
        export class Params {
          /** bhvIdList */
          bhvIdList: Array<number>;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询指定分类下的行为列表
       * /crowdlab/api/v1/group/listCrowdLabBhvCateMeta
       */
      export namespace listCrowdLabBhvCateMeta {
        export class Params {
          /** type */
          type?: string;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询维度维表的信息
       * /crowdlab/api/v1/group/listDimData
       */
      export namespace listDimData {
        export class Params {
          /** dataId */
          dataId: string;
          /** keyWord */
          keyWord?: string;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询ip分类信息
       * /crowdlab/api/v1/group/listIPCategory
       */
      export namespace listIPCategory {
        export class Params {
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 群组交并
       * /crowdlab/api/v1/group/merge
       */
      export namespace mergeGroup {
        export class Params {
          /** expireDate */
          expireDate?: string;
          /** group */
          group?: number;
          /** groupList */
          groupList: string;
          /** isDynamic */
          isDynamic?: boolean;
          /** isOpen */
          isOpen?: boolean;
          /** name */
          name: string;
          /** remark */
          remark?: string;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * mock市场上批量生成接口，生成新的跨域流转人群
       * /crowdlab/api/v1/group/mockBatchMarketApplyGroup
       */
      export namespace mockBatchMarketApplyGroup {
        export class Params {
          /** groupId */
          groupId?: number;
          /** versionId */
          versionId?: number;
          /** workNo */
          workNo?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取可引用的群组列表
       * /crowdlab/api/v1/group/refer
       */
      export namespace getCanBeReferedGroups {
        export class Params {
          /** business */
          business: number;
          /** group */
          group?: number;
          /** keyword */
          keyword?: string;
          /** limit */
          limit?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 群组更新
       * /crowdlab/api/v1/group/rerun
       */
      export namespace rerunGroup {
        export class Params {
          /** group */
          group: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 任务恢复
       * /crowdlab/api/v1/group/revoveryTask
       */
      export namespace revoveryTask {
        export class Params {
          /** executionId */
          executionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 行为圈人
       * /crowdlab/api/v1/group/saveBhvCrowd
       */
      export namespace saveBhvCrowd {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.CrowdLabBhvCondition,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.CrowdLabBhvCondition,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * ip圈人
       * /crowdlab/api/v1/group/saveIPCrowd
       */
      export namespace saveIPCrowd {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.IPCrowdLabCondition,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.IPCrowdLabCondition,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 同步状态检查
       * /crowdlab/api/v1/group/status
       */
      export namespace getGroupListStatus {
        export class Params {
          /** groupList */
          groupList: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getCanUnionGroups
       * /crowdlab/api/v1/group/union
       */
      export namespace getCanUnionGroups {
        export class Params {
          /** business */
          business: number;
          /** groupId */
          groupId?: number;
          /** keyword */
          keyword?: string;
          /** limit */
          limit?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 文件上传人群
       * /crowdlab/api/v1/group/upload/file
       */
      export namespace uploadFileAsGroup {
        export class Params {
          /** baseKeyType */
          baseKeyType?: string;
          /** expireDate */
          expireDate?: string;
          /** group */
          group?: number;
          /** groupName */
          groupName: string;
          /** isOpen */
          isOpen?: boolean;
          /** remark */
          remark?: string;
          /** versionId */
          versionId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * odps表上传人群
       * /crowdlab/api/v1/group/upload/odps
       */
      export namespace useOdpsTableAsGroup {
        export class Params {
          /** expireDate */
          expireDate?: string;
          /** groupId */
          groupId?: number;
          /** groupName */
          groupName: string;
          /** isDynamic */
          isDynamic?: boolean;
          /** isOpen */
          isOpen?: boolean;
          /** remark */
          remark?: string;
          /** uploadedOdpsStr */
          uploadedOdpsStr: string;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Lab Label Controller
     */
    export namespace labLabel {
      /**
       * addLabelDependency
       * /crowdlab/api/v1/label/dependency/add
       */
      export namespace addLabelDependency {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * deleteLabelDependency
       * /crowdlab/api/v1/label/dependency/delete
       */
      export namespace deleteLabelDependency {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * updateLabelDependency
       * /crowdlab/api/v1/label/dependency/update
       */
      export namespace updateLabelDependency {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * getFilterKind
       * /crowdlab/api/v1/label/filter/kind
       */
      export namespace getFilterKind {
        export class Params {
          /** business */
          business: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAvailableFilterLabel
       * /crowdlab/api/v1/label/filter/list
       */
      export namespace getAvailableFilterLabel {
        export class Params {
          /** keyword */
          keyword?: string;
          /** kind */
          kind: number;
          /** scene */
          scene?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateFilter
       * /crowdlab/api/v1/label/filter/update
       */
      export namespace updateFilter {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateLabelDesc
       * /crowdlab/api/v1/label/filter/updateLabelDesc
       */
      export namespace updateLabelDesc {
        export class Params {
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getCascaderComponents
       * /crowdlab/api/v1/label/getCascaderComponents
       */
      export namespace getCascaderComponents {
        export class Params {
          /** labelId */
          labelId: number;
          /** parentId */
          parentId: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getComponentsByLabelId
       * /crowdlab/api/v1/label/getComponentsByLabelId
       */
      export namespace getComponentsByLabelId {
        export class Params {
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * batchUpdateExePlan
       * /crowdlab/api/v1/label/plan/update
       */
      export namespace batchUpdateExePlan {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * batchUpdatePlanCheck
       * /crowdlab/api/v1/label/planCheck/update
       */
      export namespace batchUpdatePlanCheck {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * 获取预览指标
       * /crowdlab/api/v1/label/show/detail/list
       */
      export namespace getAvailableShowDetailLabel {
        export class Params {
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * 任务权限验证
     */
    export namespace labPermission {
      /**
       * listVersionService
       * /crowdlab/api/admin/permission/version/check
       */
      export namespace listVersionService {
        export class Params {
          /** versionId */
          versionId: number;
          /** workNumber */
          workNumber: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Lab Strategy Group Controller
     */
    export namespace labStrategyGroup {
      /**
       * 后台新增策略组
       * /crowdlab/api/v1/strategy/group/addIndustry
       */
      export namespace addIndustry {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.IndustryVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.IndustryVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 后台新增策略人群对象和人群之间的关系
       * /crowdlab/api/v1/strategy/group/addStrategyGroup
       */
      export namespace addStrategyGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.StrategyGroupVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.StrategyGroupVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取当前分析对象下的所有策略组
       * /crowdlab/api/v1/strategy/group/all
       */
      export namespace getStrategyALL {
        export class Params {
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 人群资产应用提交
       * /crowdlab/api/v1/strategy/group/apply
       */
      export namespace apply {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.ApplyGroupPackageParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.ApplyGroupPackageParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 人群资产应用记录
       * /crowdlab/api/v1/strategy/group/apply/instance/list
       */
      export namespace applyInstanceList {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 人群资产应用记录
       * /crowdlab/api/v1/strategy/group/apply/list
       */
      export namespace applyList {
        export class Params {
          /** pageIndex */
          pageIndex?: number;
          /** pageSize */
          pageSize?: number;
          /** pkg */
          pkg?: number;
          /** system */
          system?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 创建策略组权限点
       * /crowdlab/api/v1/strategy/group/createAcl
       */
      export namespace createAclPermission {
        export class Params {
          /** industryId */
          industryId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 后台删除策略组
       * /crowdlab/api/v1/strategy/group/deleteIndustry
       */
      export namespace deleteIndustry {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.IndustryVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.IndustryVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 后台删除策略人群
       * /crowdlab/api/v1/strategy/group/deleteStrategyGroup
       */
      export namespace deleteStrategyGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.StrategyGroupVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.StrategyGroupVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取策略组的信息
       * /crowdlab/api/v1/strategy/group/getIndustry
       */
      export namespace getIndustry {
        export class Params {
          /** industryId */
          industryId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 后台页面获取分析对象下的所有策略组
       * /crowdlab/api/v1/strategy/group/industry
       */
      export namespace getIndustries {
        export class Params {
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 前台页面获取有权限的策略人群列表信息
       * /crowdlab/api/v1/strategy/group/list
       */
      export namespace getStrategyGroupList {
        export class Params {
          /** industryId */
          industryId: number;
          /** keyword */
          keyword: string;
          /** pageSize */
          pageSize?: number;
          /** startPage */
          startPage?: number;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 分页获取当前分析对象下的所有策略组
       * /crowdlab/api/v1/strategy/group/listIndustries
       */
      export namespace listIndustries {
        export class Params {
          /** pageSize */
          pageSize: number;
          /** startPage */
          startPage: number;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 后台页面获取策略组中的所有人群
       * /crowdlab/api/v1/strategy/group/listStrategyGroup
       */
      export namespace listStrategyGroup {
        export class Params {
          /** industryId */
          industryId: number;
          /** pageSize */
          pageSize: number;
          /** startPage */
          startPage: number;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取有策略组的分析对象
       * /crowdlab/api/v1/strategy/group/listVersion
       */
      export namespace listVersionHasStrategyGroup {
        export class Params {
          /** keyword */
          keyword?: string;
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 后台策略人群状态修改为下线
       * /crowdlab/api/v1/strategy/group/offlineStrategyGroup
       */
      export namespace offlineStrategyGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.StrategyGroupVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.StrategyGroupVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 后台策略人群状态修改为上线
       * /crowdlab/api/v1/strategy/group/onlineStrategyGroup
       */
      export namespace onlineStrategyGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.StrategyGroupVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.StrategyGroupVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 给策略组添加人群时，搜索分析对象下符合条件的人群
       * /crowdlab/api/v1/strategy/group/searchGroup
       */
      export namespace searchGroup {
        export class Params {
          /** keyword */
          keyword: string;
          /** pageSize */
          pageSize: number;
          /** startPage */
          startPage: number;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 检索策略人群组
       * /crowdlab/api/v1/strategy/group/searchIndustry
       */
      export namespace searchIndustry {
        export class Params {
          /** keyword */
          keyword: string;
          /** pageSize */
          pageSize: number;
          /** startPage */
          startPage: number;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 获取人群资产应用列表
       * /crowdlab/api/v1/strategy/group/sys/list
       */
      export namespace listAppliedSys {
        export class Params {
          /** industry */
          industry: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 后台修改策略组
       * /crowdlab/api/v1/strategy/group/updateIndustry
       */
      export namespace updateIndustry {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.IndustryVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.IndustryVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 后台更新策略人群
       * /crowdlab/api/v1/strategy/group/updateStrategyGroup
       */
      export namespace updateStrategyGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.StrategyGroupVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.StrategyGroupVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Lab Version Controller
     */
    export namespace labVersion {
      /**
       * getAnalysisModuleList
       * /crowdlab/api/v1/version/analysis/list
       */
      export namespace getAnalysisModuleList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /crowdlab/api/v1/version/analysis/list
       */
      export namespace headAnalysisList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /crowdlab/api/v1/version/analysis/list
       */
      export namespace postAnalysisList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /crowdlab/api/v1/version/analysis/list
       */
      export namespace putAnalysisList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /crowdlab/api/v1/version/analysis/list
       */
      export namespace deleteAnalysisList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /crowdlab/api/v1/version/analysis/list
       */
      export namespace optionsAnalysisList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAnalysisModuleList
       * /crowdlab/api/v1/version/analysis/list
       */
      export namespace patchAnalysisList {
        export class Params {
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type?:
            | 'single_dimension'
            | 'multi_dimension'
            | 'fbi'
            | 'interactive_single'
            | 'interactive_multi';
          /** version */
          version: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /crowdlab/api/v1/version/get
       */
      export namespace get {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询有权限的分析对象
       * /crowdlab/api/v1/version/listAccessable
       */
      export namespace listAccessable {
        export class Params {
          /** keyword */
          keyword?: string;
          /** omitUserInfo */
          omitUserInfo?: boolean;
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询所有分析对象
       * /crowdlab/api/v1/version/listAll
       */
      export namespace listAll {
        export class Params {
          /** keyword */
          keyword?: string;
          /** omitUserInfo */
          omitUserInfo?: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 查询登陆用户有权限的分析对象,供跨域流转时使用
       * /crowdlab/api/v1/version/listHavePermissionVersion
       */
      export namespace listHavePermissionVersion {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
     * Market Group Controller
     */
    export namespace marketGroup {
      /**
       * 人群规模
       * /crowdlab/assetmarket/api/v1/crowd/amount
       */
      export namespace getCrowdDailyAmount {
        export class Params {
          /** crowdId */
          crowdId: number;
          /** recent */
          recent: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 保存人群规模
       * /crowdlab/assetmarket/api/v1/crowd/amount/save
       */
      export namespace saveAmount {
        export class Params {
          /** amount */
          amount: number;
          /** crowdId */
          crowdId: number;
          /** date */
          date: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 人群详情
       * /crowdlab/assetmarket/api/v1/crowd/detail
       */
      export namespace getGroupDetail {
        export class Params {
          /** crowdId */
          crowdId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 热门人群
       * /crowdlab/assetmarket/api/v1/crowd/hot/list
       */
      export namespace listHotGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * 人群列表
       * /crowdlab/assetmarket/api/v1/crowd/list
       */
      export namespace list {
        export class Params {
          /** businessScopeId */
          businessScopeId?: number;
          /** hasAuth */
          hasAuth?: boolean;
          /** ids */
          ids?: string;
          /** in */
          in?: boolean;
          /** page */
          page: number;
          /** pageSize */
          pageSize: number;
          /** searchWord */
          searchWord?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 人群判定
       * /crowdlab/assetmarket/api/v1/crowd/match
       */
      export namespace match {
        export class Params {
          /** crowdId */
          crowdId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 人群从市场下架
       * /crowdlab/assetmarket/api/v1/crowd/offline
       */
      export namespace offlineGroup {
        export class Params {
          /** crowdId */
          crowdId: number;
          /** strategyId */
          strategyId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 上架人群到市场
       * /crowdlab/assetmarket/api/v1/crowd/online
       */
      export namespace onlineGroup {
        export class Params {
          /** crowdId */
          crowdId: number;
          /** desc */
          desc: string;
          /** logic */
          logic: string;
          /** strategyId */
          strategyId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /crowdlab/assetmarket/api/v1/crowd/scope/list
       */
      export namespace listScope {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
       * 策略详情
       * /crowdlab/assetmarket/api/v1/crowd/strategy/detail
       */
      export namespace getStrategyDetail {
        export class Params {
          /** strategyId */
          strategyId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 策略人群列表
       * /crowdlab/assetmarket/api/v1/crowd/strategy/list
       */
      export namespace listStrategy {
        export class Params {
          /** page */
          page: number;
          /** pageSize */
          pageSize: number;
          /** searchWord */
          searchWord?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 上架策略到市场
       * /crowdlab/assetmarket/api/v1/crowd/strategy/online
       */
      export namespace onlineStrategy {
        export class Params {
          /** desc */
          desc: string;
          /** name */
          name: string;
          /** versionId */
          versionId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 全量同步图灵主搜人群数据
       * /crowdlab/assetmarket/api/v1/crowd/sync/market/groups
       */
      export namespace synMarketGroups {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

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
     * GTC/报表
     */
    export namespace report {
      /**
       * 获取报表数据
       * /crowdlab/api/v1/gtc/report/data
       */
      export namespace getReportData {
        export class Params {
          /** query */
          query: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * GTC/任务
     */
    export namespace task {
      /**
       * 删除任务
       * /crowdlab/api/v1/gtc/task/delete
       */
      export namespace deleteTask {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 单个任务下载
       * /crowdlab/api/v1/gtc/task/download
       */
      export namespace downloadTask {
        export class Params {
          /** task */
          task: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 任务列表
       * /crowdlab/api/v1/gtc/task/list
       */
      export namespace listTask {
        export class Params {
          /** act */
          act?: string;
          /** business */
          business: number;
          /** creator */
          creator?: string;
          /** dimName */
          dimName?: string;
          /** dimType */
          dimType?: string;
          /** dimValue */
          dimValue?: string;
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** taskId */
          taskId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * GTC/任务总览
     */
    export namespace taskOverview {
      /**
       * addTask
       * /crowdlab/api/v1/gtc/task/overview/add
       */
      export namespace addTask {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.TaskParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.TaskParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * addTaskV2
       * /crowdlab/api/v1/gtc/task/overview/addV2
       */
      export namespace addTaskV2 {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(
          bodyParams: defs.gold.TaskParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.gold.TaskParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 任务总览下载
       * /crowdlab/api/v1/gtc/task/overview/download
       */
      export namespace downloadTaskOverview {
        export class Params {
          /** act */
          act?: string;
          /** business */
          business: number;
          /** dimType */
          dimType?: string;
          /** dimValue */
          dimValue?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 任务总览列表
       * /crowdlab/api/v1/gtc/task/overview/list
       */
      export namespace listTaskOverview {
        export class Params {
          /** act */
          act?: string;
          /** business */
          business: number;
          /** dimType */
          dimType?: string;
          /** dimValue */
          dimValue?: string;
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** type */
          type: string;
          /** user */
          user?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.gold.ResultVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
