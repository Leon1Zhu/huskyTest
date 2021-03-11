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
  export namespace oneService {
    export class BaseInfoBO {
      /** adminIds */
      adminIds?: string;

      /** adminName */
      adminName?: string;

      /** department */
      department?: string;

      /** des */
      des?: string;

      /** id */
      id?: number;

      /** slaLevel */
      slaLevel?: string;

      /** sourceType */
      sourceType?: string;
    }

    export class BriefColumn {
      /** inputName */
      inputName?: string;

      /** name */
      name?: string;

      /** type */
      type?: string;
    }

    export class CallResult<T0 = any> {
      /** code */
      code?: number;

      /** data */
      data?: object;

      /** exception */
      exception?: string;

      /** message */
      message?: string;
    }

    export class Catalog {
      /** catalogId */
      catalogId?: number;

      /** catalogName */
      catalogName?: string;

      /** catalogType */
      catalogType?: 'BIZUNIT' | 'LOGICALDB' | 'PHYSICALDB' | 'OTHER';

      /** env */
      env?: 'DEV' | 'PROD';
    }

    export class ChangeCheckRes {
      /** apply_order_url */
      apply_order_url?: string;

      /** approvers */
      approvers?: Array<defs.oneService.ChangefreeApprover>;

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
      freeze_info?: Array<defs.oneService.FreezeInfo>;

      /** fuse_info */
      fuse_info?: Array<defs.oneService.FuseInfo>;

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

    export class Column {
      /** checked */
      checked?: boolean;

      /** columnFormat */
      columnFormat?: string;

      /** finalKey */
      finalKey?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** originalType */
      originalType?: string;

      /** partitioned */
      partitioned?: boolean;

      /** relatedFields */
      relatedFields?: Array<defs.oneService.Column>;

      /** relatedTableName */
      relatedTableName?: string;

      /** relatedTableRoleName */
      relatedTableRoleName?: string;

      /** type */
      type?: string;
    }

    export class ColumnBO {
      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cn */
      cn?: string;

      /** code */
      code?: string;

      /** coder */
      coder?: string;

      /** commDate */
      commDate?: string;

      /** commMsgName */
      commMsgName?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** dbType */
      dbType?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** hot */
      hot?: string;

      /** id */
      id?: number;

      /** isKey */
      isKey?: boolean;

      /** isRequire */
      isRequire?: boolean;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** odpsTable */
      odpsTable?: string;

      /** preSuffix */
      preSuffix?: string;

      /** reqtCnt1m */
      reqtCnt1m?: number;

      /** source */
      source?: string;

      /** status */
      status?: string;

      /** type */
      type?: string;
    }

    export class ColumnDO {
      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** authStatus */
      authStatus?: string;

      /** cn */
      cn?: string;

      /** coder */
      coder?: string;

      /** commDate */
      commDate?: string;

      /** commMsgName */
      commMsgName?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** dbType */
      dbType?: string;

      /** deployerId */
      deployerId?: string;

      /** deployerName */
      deployerName?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtDeploy */
      gmtDeploy?: string;

      /** gmtModified */
      gmtModified?: string;

      /** hasAuthority */
      hasAuthority?: boolean;

      /** id */
      id?: number;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** mapping */
      mapping?: string;

      /** needful */
      needful?: boolean;

      /** odpsTable */
      odpsTable?: string;

      /** preSuffix */
      preSuffix?: string;

      /** primaryKey */
      primaryKey?: boolean;

      /** reqtCnt1m */
      reqtCnt1m?: number;

      /** rowState */
      rowState?: number;

      /** source */
      source?: string;

      /** status */
      status?: string;

      /** tableId */
      tableId?: number;

      /** type */
      type?: string;
    }

    export class DataSourceBO {
      /** adminIds */
      adminIds?: string;

      /** admins */
      admins?: Array<defs.oneService.EmpBO>;

      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cn */
      cn?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** dbInstance */
      dbInstance?: string;

      /** dbType */
      dbType?: string;

      /** dbTypeName */
      dbTypeName?: string;

      /** des */
      des?: string;

      /** domain */
      domain?: string;

      /** en */
      en?: string;

      /** envs */
      envs?: Array<defs.oneService.DataSourceEnvBO>;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** owner */
      owner?: defs.oneService.EmpBO;

      /** ownerId */
      ownerId?: string;

      /** slaLevel */
      slaLevel?: string;

      /** status */
      status?: string;
    }

    export class DataSourceEnvBO {
      /** appName */
      appName?: string;

      /** area */
      area?: string;

      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cn */
      cn?: string;

      /** connectProperties */
      connectProperties?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** dbId */
      dbId?: number;

      /** dbType */
      dbType?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** status */
      status?: string;
    }

    export class DataVerifyParam {
      /** actUser */
      actUser?: defs.oneService.User;

      /** area */
      area?: string;

      /** clazz */
      clazz?: string;

      /** dbId */
      dbId?: number;

      /** env */
      env?: string;

      /** method */
      method?: string;

      /** params */
      params?: Array<defs.oneService.MethodParam>;

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** sqlType */
      sqlType?: string;

      /** useAdmin */
      useAdmin?: boolean;

      /** user */
      user?: defs.oneService.User;
    }

    export class DataVerifyParamResultBO {
      /** area */
      area?: string;

      /** dataVerifyParam */
      dataVerifyParam?: defs.oneService.DataVerifyParam;

      /** dataVerifyResultBO */
      dataVerifyResultBO?: defs.oneService.DataVerifyResultBO;

      /** gmtCreate */
      gmtCreate?: string;
    }

    export class DataVerifyResultBO {
      /** extraMsg */
      extraMsg?: string;

      /** method */
      method?: string;

      /** physSql */
      physSql?: defs.oneService.ExecuteSql;

      /** queryLink */
      queryLink?: string;

      /** recordCount */
      recordCount?: number;

      /** result */
      result?: object;

      /** spendTime */
      spendTime?: number;

      /** startTime */
      startTime?: string;

      /** subPhysSqls */
      subPhysSqls?: Array<defs.oneService.ExecuteSql>;

      /** success */
      success?: boolean;

      /** usedCache */
      usedCache?: boolean;

      /** warning */
      warning?: string;
    }

    export class DatabaseBO {
      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cn */
      cn?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** dbType */
      dbType?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** name */
      name?: string;

      /** status */
      status?: string;
    }

    export class DataphinColumnPermissionBO {
      /** bizUnitName */
      bizUnitName?: string;

      /** hasPermission */
      hasPermission?: boolean;

      /** resourceName */
      resourceName?: string;
    }

    export class DataphinPermissionBO {
      /** columns */
      columns?: Array<defs.oneService.DataphinColumnPermissionBO>;

      /** projectName */
      projectName?: string;
    }

    export class DataphinRefluxConfigBO {
      /** bizUnitCnName */
      bizUnitCnName?: string;

      /** bizUnitId */
      bizUnitId?: number;

      /** bizUnitName */
      bizUnitName?: string;

      /** briefColumns */
      briefColumns?: Array<defs.oneService.BriefColumn>;

      /** columns */
      columns?: Array<defs.oneService.Column>;

      /** id */
      id?: number;

      /** level1Columns */
      level1Columns?: Array<defs.oneService.Column>;

      /** lindormGuid */
      lindormGuid?: string;

      /** logicTableId */
      logicTableId?: number;

      /** logicTableName */
      logicTableName?: string;

      /** logicTableType */
      logicTableType?: string;

      /** nodeId */
      nodeId?: number;

      /** nodeName */
      nodeName?: string;

      /** params */
      params?: string;

      /** partition */
      partition?: string;

      /** projectId */
      projectId?: string;

      /** projectName */
      projectName?: string;

      /** refluxProjectName */
      refluxProjectName?: string;

      /** withRelation */
      withRelation?: boolean;
    }

    export class DepartmentBO {
      /** id */
      id?: string;

      /** name */
      name?: string;
    }

    export class DeployRecordDO {
      /** applyOrderUrl */
      applyOrderUrl?: string;

      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cn */
      cn?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** deployerId */
      deployerId?: string;

      /** deployerName */
      deployerName?: string;

      /** des */
      des?: string;

      /** displayName */
      displayName?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtDeploy */
      gmtDeploy?: string;

      /** gmtModified */
      gmtModified?: string;

      /** gmtOlDeploy */
      gmtOlDeploy?: string;

      /** gmtPreDeploy */
      gmtPreDeploy?: string;

      /** hbaseTableId */
      hbaseTableId?: number;

      /** id */
      id?: number;

      /** isOl */
      isOl?: string;

      /** isPre */
      isPre?: string;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** logicTableId */
      logicTableId?: number;

      /** sourceOrderId */
      sourceOrderId?: string;

      /** sqlId */
      sqlId?: number;

      /** srcContent */
      srcContent?: string;

      /** status */
      status?: string;

      /** updateDetail */
      updateDetail?: string;

      /** updateSummary */
      updateSummary?: string;
    }

    export class DtmktHBaseColumnBO {
      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cn */
      cn?: string;

      /** columnCoder */
      columnCoder?: string;

      /** columnCoderText */
      columnCoderText?: string;

      /** columnMapping */
      columnMapping?: string;

      /** columnName */
      columnName?: string;

      /** columnType */
      columnType?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtDeploy */
      gmtDeploy?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** route */
      route?: number;

      /** status */
      status?: string;

      /** tableId */
      tableId?: string;
    }

    export class DtmktHBaseRowkeyBO {
      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cn */
      cn?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtDeploy */
      gmtDeploy?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** needful */
      needful?: boolean;

      /** preSuffix */
      preSuffix?: string;

      /** rowkeyCoder */
      rowkeyCoder?: string;

      /** rowkeyName */
      rowkeyName?: string;

      /** rowkeyType */
      rowkeyType?: string;

      /** status */
      status?: string;

      /** tableId */
      tableId?: string;
    }

    export class DtmktHBaseTableBO {
      /** actualName */
      actualName?: string;

      /** adminId */
      adminId?: string;

      /** adminName */
      adminName?: string;

      /** appId */
      appId?: string;

      /** appIdList */
      appIdList?: Array<string>;

      /** appIds */
      appIds?: string;

      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** canDelete */
      canDelete?: string;

      /** cn */
      cn?: string;

      /** columnList */
      columnList?: Array<defs.oneService.DtmktHBaseColumnBO>;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** dbId */
      dbId?: number;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isAppId */
      isAppId?: boolean;

      /** isRealTime */
      isRealTime?: boolean;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** routeList */
      routeList?: string;

      /** rowCoder */
      rowCoder?: string;

      /** rowkey */
      rowkey?: string;

      /** rowkeyList */
      rowkeyList?: Array<defs.oneService.DtmktHBaseRowkeyBO>;

      /** rowkeyRule */
      rowkeyRule?: string;

      /** slaveDb */
      slaveDb?: string;

      /** status */
      status?: string;

      /** tableName */
      tableName?: string;
    }

    export class DtmktLogicDetailResponse {
      /** callCnt */
      callCnt?: number;

      /** userCallDetailList */
      userCallDetailList?: Array<defs.oneService.ObjectMap<string, ObjectMap>>;

      /** userCnt */
      userCnt?: number;
    }

    export class DtmktLogicTableBO {
      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** bindedPhysTableName */
      bindedPhysTableName?: Array<string>;

      /** bu */
      bu?: string;

      /** callCnt7d */
      callCnt7d?: number;

      /** cn */
      cn?: string;

      /** createTime */
      createTime?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isRt */
      isRt?: boolean;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** name */
      name?: string;

      /** ownerId */
      ownerId?: string;

      /** ownerName */
      ownerName?: string;

      /** sqlIdCnt */
      sqlIdCnt?: number;

      /** status */
      status?: string;

      /** userCnt */
      userCnt?: number;
    }

    export class DtmktLogicTableDetailBO {
      /** adminId */
      adminId?: string;

      /** admins */
      admins?: Array<defs.oneService.EmpBO>;

      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cn */
      cn?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** department */
      department?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** introduction */
      introduction?: string;

      /** introductionUrl */
      introductionUrl?: string;

      /** isNoPaging */
      isNoPaging?: boolean;

      /** keys */
      keys?: Array<defs.oneService.LogicTablePK>;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** limitCnt */
      limitCnt?: number;

      /** ownerIds */
      ownerIds?: string;

      /** physTables */
      physTables?: Array<defs.oneService.DtmktPhysTableBO>;

      /** status */
      status?: string;

      /** tags */
      tags?: Array<string>;

      /** topicId */
      topicId?: number;

      /** topicName */
      topicName?: string;
    }

    export class DtmktPhysColumnBO {
      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cn */
      cn?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isKey */
      isKey?: boolean;

      /** isPrimaryKey */
      isPrimaryKey?: boolean;

      /** isRequire */
      isRequire?: boolean;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** logicColId */
      logicColId?: number;

      /** logicColName */
      logicColName?: string;

      /** needRename */
      needRename?: string;

      /** physTableId */
      physTableId?: number;

      /** physTableName */
      physTableName?: string;

      /** resourceColName */
      resourceColName?: string;

      /** status */
      status?: string;

      /** type */
      type?: string;
    }

    export class DtmktPhysTableBO {
      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cacheMinutes */
      cacheMinutes?: number;

      /** cn */
      cn?: string;

      /** columnList */
      columnList?: Array<defs.oneService.DtmktPhysColumnBO>;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** dbId */
      dbId?: number;

      /** dbName */
      dbName?: string;

      /** dbResourceType */
      dbResourceType?: string;

      /** dbType */
      dbType?: string;

      /** deployerId */
      deployerId?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtDeploy */
      gmtDeploy?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isCache */
      isCache?: boolean;

      /** isMasterTable */
      isMasterTable?: boolean;

      /** lastCacheDate */
      lastCacheDate?: number;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** logicTableId */
      logicTableId?: number;

      /** logicTableName */
      logicTableName?: string;

      /** refluxConfig */
      refluxConfig?: defs.oneService.DataphinRefluxConfigBO;

      /** source */
      source?: string;

      /** status */
      status?: string;
    }

    export class DtmktSqlIDBO {
      /** adminId */
      adminId?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** id */
      id?: number;

      /** logicTableId */
      logicTableId?: number;

      /** origin */
      origin?: string;

      /** ownerId */
      ownerId?: string;

      /** params */
      params?: string;
    }

    export class EmpBO {
      /** empId */
      empId?: string;

      /** name */
      name?: string;

      /** nickName */
      nickName?: string;
    }

    export class ExecuteSql {
      /** dbSet */
      dbSet?: Array<string>;

      /** params */
      params?: object;

      /** sql */
      sql?: string;
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

    export class HbaseAppForm {
      /** appId */
      appId?: number;

      /** columnList */
      columnList?: Array<defs.oneService.HbaseColumnForm>;

      /** enableSlave */
      enableSlave?: boolean;

      /** routes */
      routes?: Array<defs.oneService.HbaseRouteForm>;

      /** rowCoder */
      rowCoder?: string;

      /** rowState */
      rowState?: number;

      /** rowkeyList */
      rowkeyList?: Array<defs.oneService.HbaseRowkeyForm>;
    }

    export class HbaseColumnForm {
      /** columnCoder */
      columnCoder?: string;

      /** columnMapping */
      columnMapping?: string;

      /** columnName */
      columnName?: string;

      /** columnType */
      columnType?: string;

      /** des */
      des?: string;

      /** id */
      id?: number;

      /** route */
      route?: number;
    }

    export class HbaseMetaForm {
      /** adminId */
      adminId?: string;

      /** dbId */
      dbId?: number;

      /** hbaseApps */
      hbaseApps?: Array<defs.oneService.HbaseAppForm>;

      /** id */
      id?: number;

      /** isAppId */
      isAppId?: boolean;

      /** isRealTime */
      isRealTime?: boolean;

      /** tableName */
      tableName?: string;
    }

    export class HbaseRouteForm {
      /** actualName */
      actualName?: string;

      /** hbaseGroup */
      hbaseGroup?: string;

      /** remark */
      remark?: string;

      /** type */
      type?: number;
    }

    export class HbaseRowkeyForm {
      /** des */
      des?: string;

      /** id */
      id?: number;

      /** needful */
      needful?: boolean;

      /** preSuffix */
      preSuffix?: string;

      /** rowkeyCoder */
      rowkeyCoder?: string;

      /** rowkeyName */
      rowkeyName?: string;

      /** rowkeyType */
      rowkeyType?: string;
    }

    export class IdNameDO {
      /** id */
      id?: string;

      /** name */
      name?: string;
    }

    export class LogicDerivedDO {
      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cn */
      cn?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** deployerId */
      deployerId?: string;

      /** deployerName */
      deployerName?: string;

      /** derivedExpr */
      derivedExpr?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtDeploy */
      gmtDeploy?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** logicTableId */
      logicTableId?: number;

      /** status */
      status?: string;
    }

    export class LogicKeyDO {
      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** bindFields */
      bindFields?: Array<defs.oneService.ObjectMap<string, string>>;

      /** cn */
      cn?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** deployerId */
      deployerId?: string;

      /** deployerName */
      deployerName?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtDeploy */
      gmtDeploy?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isRequire */
      isRequire?: boolean;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** logicTableId */
      logicTableId?: number;

      /** rowState */
      rowState?: number;

      /** status */
      status?: string;
    }

    export class LogicMetaParam {
      /** logicKeys */
      logicKeys?: Array<defs.oneService.LogicKeyDO>;

      /** logicTable */
      logicTable?: defs.oneService.LogicTableDO;
    }

    export class LogicTableBO {
      /** adminId */
      adminId?: string;

      /** adminName */
      adminName?: string;

      /** admins */
      admins?: Array<defs.oneService.EmpBO>;

      /** applyOrderUrl */
      applyOrderUrl?: string;

      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cate */
      cate?: string;

      /** cn */
      cn?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** department */
      department?: string;

      /** deriveds */
      deriveds?: Array<defs.oneService.LogicDerivedDO>;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** introduction */
      introduction?: string;

      /** introductionUrl */
      introductionUrl?: string;

      /** isNoPaging */
      isNoPaging?: boolean;

      /** isRt */
      isRt?: boolean;

      /** keys */
      keys?: Array<defs.oneService.LogicKeyDO>;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** limitCnt */
      limitCnt?: number;

      /** noticerId */
      noticerId?: string;

      /** noticerName */
      noticerName?: string;

      /** owner */
      owner?: defs.oneService.EmpBO;

      /** ownerId */
      ownerId?: string;

      /** ownerName */
      ownerName?: string;

      /** physicalTables */
      physicalTables?: Array<defs.oneService.PhysicalTableDO>;

      /** status */
      status?: string;

      /** topicId */
      topicId?: number;

      /** topicName */
      topicName?: string;
    }

    export class LogicTableDO {
      /** adminId */
      adminId?: string;

      /** adminName */
      adminName?: string;

      /** applyOrderUrl */
      applyOrderUrl?: string;

      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cn */
      cn?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** department */
      department?: string;

      /** deployerId */
      deployerId?: string;

      /** deployerName */
      deployerName?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtDeploy */
      gmtDeploy?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** introduction */
      introduction?: string;

      /** introductionUrl */
      introductionUrl?: string;

      /** isNoPaging */
      isNoPaging?: boolean;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** limitCnt */
      limitCnt?: number;

      /** noticerId */
      noticerId?: string;

      /** noticerName */
      noticerName?: string;

      /** ownerId */
      ownerId?: string;

      /** ownerName */
      ownerName?: string;

      /** status */
      status?: string;

      /** topicId */
      topicId?: number;

      /** topicName */
      topicName?: string;
    }

    export class LogicTablePK {
      /** bindFields */
      bindFields?: Array<defs.oneService.PhysColMapping>;

      /** cn */
      cn?: string;

      /** desc */
      desc?: string;

      /** en */
      en?: string;

      /** id */
      id?: number;

      /** isRequire */
      isRequire?: boolean;

      /** logicTableId */
      logicTableId?: number;

      /** rowState */
      rowState?: number;
    }

    export class LogicalColumn {
      /** catalog */
      catalog?: defs.oneService.Catalog;

      /** columnCnName */
      columnCnName?: string;

      /** columnFormat */
      columnFormat?: string;

      /** columnId */
      columnId?: number;

      /** columnName */
      columnName?: string;

      /** columnPartitionType */
      columnPartitionType?: 'HOUR' | 'MINUTE' | 'DATE';

      /** columnType */
      columnType?:
        | 'INT'
        | 'TINYINT'
        | 'SMALLINT'
        | 'BIGINT'
        | 'VARCHAR'
        | 'CHAR'
        | 'STRING'
        | 'BINARY'
        | 'FLOAT'
        | 'DOUBLE'
        | 'DECIMAL'
        | 'BOOLEAN'
        | 'DATETIME'
        | 'DATE'
        | 'TIMESTAMP'
        | 'ARRAY'
        | 'MAP'
        | 'STRUCT'
        | 'UNION';

      /** datePartitions */
      datePartitions?: Array<string>;

      /** extensionInfo */
      extensionInfo?: ObjectMap<any, string>;

      /** isPartitionKey */
      isPartitionKey?: boolean;

      /** isPhysical */
      isPhysical?: boolean;

      /** isPrimaryKey */
      isPrimaryKey?: boolean;

      /** lifecycle */
      lifecycle?: number;

      /** logic */
      logic?: string;

      /** partitionAlignType */
      partitionAlignType?: 'PARTITION_ALIGN' | 'MAX_PT';

      /** physicalDB */
      physicalDB?: defs.oneService.Catalog;

      /** productDate */
      productDate?: string;

      /** refDim */
      refDim?: defs.oneService.LogicalTable;

      /** refDimRole */
      refDimRole?: string;

      /** refType */
      refType?: 'REF' | 'INHERIT' | 'SELF';

      /** sourceType */
      sourceType?: 'SELF_LOGICAL' | 'PHYSICAL_MOUNTING' | 'IDE_DRAFT';

      /** table */
      table?: string;
    }

    export class LogicalTable {
      /** catalog */
      catalog?: defs.oneService.Catalog;

      /** columnList */
      columnList?: Array<defs.oneService.LogicalColumn>;

      /** dimensionEnum */
      dimensionEnum?: 'NORMAL' | 'ENUM' | 'BRIDGE' | 'VIRTUAL' | 'HIERARCHY';

      /** extensionInfo */
      extensionInfo?: ObjectMap<any, string>;

      /** factType */
      factType?: string;

      /** logicalTableType */
      logicalTableType?:
        | 'SUMMARY_TABLE'
        | 'FACT_TABLE'
        | 'DIMENSION_TABLE'
        | 'EXTRACTION_TABLE';

      /** modelType */
      modelType?: 'DIM' | 'DWD' | 'DWS';

      /** owner */
      owner?: string;

      /** parentTable */
      parentTable?: string;

      /** productMethod */
      productMethod?: 'AUTO' | 'CUSTOM' | 'MOUNT' | 'COMBINE';

      /** schema */
      schema?: string;

      /** summaryType */
      summaryType?: string;

      /** tableDwLevelType */
      tableDwLevelType?: 'CDM' | 'ODM' | 'OTHER';

      /** tableId */
      tableId?: number;

      /** tableName */
      tableName?: string;

      /** timeliness */
      timeliness?: string;
    }

    export class Map<T0 = any, T1 = any> {}

    export class MethodParam {
      /** clazz */
      clazz?: string;

      /** name */
      name?: string;

      /** value */
      value?: object;
    }

    export class Os2PlanBO {
      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** desc */
      desc?: string;

      /** description */
      description?: string;

      /** groupId */
      groupId?: number;

      /** id */
      id?: number;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** logicTableId */
      logicTableId?: number;

      /** originDb */
      originDb?: string;

      /** originDbId */
      originDbId?: number;

      /** originDbType */
      originDbType?: string;

      /** physTableId */
      physTableId?: number;

      /** physTableName */
      physTableName?: string;

      /** slaveDb */
      slaveDb?: string;

      /** slaveDbId */
      slaveDbId?: number;

      /** slaveDbType */
      slaveDbType?: string;

      /** status */
      status?: string;
    }

    export class PaginatedResult<T0 = any> {
      /** count */
      count?: number;

      /** list */
      list?: Array<T0>;
    }

    export class PhysColMapping {
      /** physColName */
      physColName?: string;

      /** physTableName */
      physTableName?: string;
    }

    export class PhysicalTableDO {
      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** cacheMinutes */
      cacheMinutes?: number;

      /** canWrite */
      canWrite?: boolean;

      /** cn */
      cn?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** dbId */
      dbId?: number;

      /** dbName */
      dbName?: string;

      /** dbType */
      dbType?: string;

      /** deployerId */
      deployerId?: string;

      /** deployerName */
      deployerName?: string;

      /** des */
      des?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtDeploy */
      gmtDeploy?: string;

      /** gmtModified */
      gmtModified?: string;

      /** hasWaitingCol */
      hasWaitingCol?: boolean;

      /** id */
      id?: number;

      /** isCache */
      isCache?: boolean;

      /** isLogOpen */
      isLogOpen?: boolean;

      /** isMasterTable */
      isMasterTable?: boolean;

      /** lastCacheDate */
      lastCacheDate?: number;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** logicTableId */
      logicTableId?: number;

      /** logicTableName */
      logicTableName?: string;

      /** source */
      source?: string;

      /** status */
      status?: string;
    }

    export class ResObject<T0 = any> {
      /** code */
      code?: number;

      /** data */
      data?: T0;

      /** message */
      message?: string;
    }

    export class ResultObject {
      /** code */
      code?: number;

      /** data */
      data?: object;

      /** message */
      message?: string;
    }

    export class SourceActionBO {
      /** action */
      action?: string;

      /** content */
      content?: string;

      /** sourceId */
      sourceId?: number;

      /** sourceIds */
      sourceIds?: string;

      /** sourceType */
      sourceType?: string;
    }

    export class SqlContainerBO {
      /** params */
      params?: Array<defs.oneService.SqlParamBO>;

      /** tableId */
      tableId?: number;
    }

    export class SqlMetaDO {
      /** adminId */
      adminId?: string;

      /** admins */
      admins?: Array<defs.oneService.EmpBO>;

      /** applyOrderUrl */
      applyOrderUrl?: string;

      /** auditorId */
      auditorId?: string;

      /** auditorName */
      auditorName?: string;

      /** bpmId */
      bpmId?: string;

      /** callCnt7d */
      callCnt7d?: number;

      /** cn */
      cn?: string;

      /** columnMetaList */
      columnMetaList?: Array<defs.oneService.LogicTableBO>;

      /** creatorId */
      creatorId?: string;

      /** creatorName */
      creatorName?: string;

      /** deployerId */
      deployerId?: string;

      /** deployerName */
      deployerName?: string;

      /** des */
      des?: string;

      /** descText */
      descText?: string;

      /** en */
      en?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtDeploy */
      gmtDeploy?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isRt */
      isRt?: boolean;

      /** lastOpId */
      lastOpId?: string;

      /** lastOpName */
      lastOpName?: string;

      /** logicTableId */
      logicTableId?: number;

      /** logicTableName */
      logicTableName?: string;

      /** origin */
      origin?: string;

      /** owner */
      owner?: defs.oneService.EmpBO;

      /** ownerId */
      ownerId?: string;

      /** ownerName */
      ownerName?: string;

      /** owners */
      owners?: Array<defs.oneService.EmpBO>;

      /** params */
      params?: string;

      /** similarIds */
      similarIds?: string;

      /** sqlName */
      sqlName?: string;

      /** statement */
      statement?: string;

      /** status */
      status?: string;
    }

    export class SqlParamBO {
      /** displayName */
      displayName?: string;

      /** optional */
      optional?: boolean;

      /** paramName */
      paramName?: string;

      /** paramType */
      paramType?: string;

      /** sampleValue */
      sampleValue?: string;
    }

    export class TableSearchDTO {
      /** bizUnitId */
      bizUnitId?: string;

      /** bizUnitName */
      bizUnitName?: string;

      /** createTime */
      createTime?: string;

      /** dataLayer */
      dataLayer?: string;

      /** desc */
      desc?: string;

      /** developMode */
      developMode?: string;

      /** dpOwner */
      dpOwner?: string;

      /** dpProjectId */
      dpProjectId?: string;

      /** dpProjectName */
      dpProjectName?: string;

      /** dpTenantId */
      dpTenantId?: string;

      /** entityType */
      entityType?: string;

      /** env */
      env?: string;

      /** guid */
      guid?: string;

      /** logicSubType */
      logicSubType?: string;

      /** modelType */
      modelType?: string;

      /** name */
      name?: string;

      /** nameCn */
      nameCn?: string;

      /** owner */
      owner?: string;

      /** ownerNickName */
      ownerNickName?: string;

      /** phyFileSize */
      phyFileSize?: number;

      /** subType */
      subType?: string;

      /** tableId */
      tableId?: string;

      /** tableType */
      tableType?: string;
    }

    export class TypeEnumsDO {
      /** des */
      des?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** pid */
      pid?: number;

      /** sequence */
      sequence?: number;

      /** type */
      type?: number;

      /** value */
      value?: object;
    }

    export class User {
      /** appName */
      appName?: string;

      /** name */
      name?: string;

      /** password */
      password?: string;

      /** type */
      type?: number;
    }

    export class UserChargeDO {
      /** aliWang */
      aliWang?: string;

      /** authId */
      authId?: number;

      /** bpmId */
      bpmId?: string;

      /** buMail */
      buMail?: string;

      /** bucId */
      bucId?: number;

      /** deptName */
      deptName?: string;

      /** empId */
      empId?: string;

      /** empStatus */
      empStatus?: number;

      /** id */
      id?: number;

      /** isAdmin */
      isAdmin?: boolean;

      /** loginAccount */
      loginAccount?: string;

      /** name */
      name?: string;

      /** nickName */
      nickName?: string;

      /** originalEmpId */
      originalEmpId?: string;

      /** realName */
      realName?: string;

      /** status */
      status?: string;

      /** tbWang */
      tbWang?: string;
    }
  }
}

declare namespace API {
  export namespace oneService {
    /**
     * Admin Controller
     */
    export namespace admin {
      /**
       * getByAdmin
       * /one-service/admin/getByAdmin.json
       */
      export namespace getByAdmin {
        export class Params {
          /** admin */
          admin: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * search
       * /one-service/admin/getUserByWorkNo.json
       */
      export namespace search {
        export class Params {
          /** workNo */
          workNo: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listByAdmin
       * /one-service/admin/listByAdmins.json
       */
      export namespace listByAdmin {
        export class Params {
          /** admins */
          admins: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Auth Controller
     */
    export namespace auth {
      /**
       * updateLogicTableColumnAuth
       * /one-service/auth/applyAuth.json
       */
      export namespace updateLogicTableColumnAuth {
        export class Params {
          /** authId */
          authId: number;
          /** columns */
          columns: string;
          /** comment */
          comment: string;
          /** logicTable */
          logicTable: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * batchSyncDtmktAuth
       * /one-service/auth/batchSyncDtmktAuth.json
       */
      export namespace batchSyncDtmktAuth {
        export class Params {
          /** ids */
          ids: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * checkUser
       * /one-service/auth/checkUser.json
       */
      export namespace checkUser {
        export class Params {
          /** sourceIds */
          sourceIds: string;
          /** sourceType */
          sourceType: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listAuthColByTable
       * /one-service/auth/listAuthCols.json
       */
      export namespace listAuthColByTable {
        export class Params {
          /** authId */
          authId: number;
          /** keyword */
          keyword?: string;
          /** logicTableId */
          logicTableId: number;
          /** status */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listAuthTable
       * /one-service/auth/listAuthTable
       */
      export namespace listAuthTable {
        export class Params {
          /** projectId */
          projectId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listAuthCol
       * /one-service/auth/listMyAuth.json
       */
      export namespace listAuthCol {
        export class Params {
          /** keyword */
          keyword?: string;
          /** projectId */
          projectId: number;
          /** sqlId */
          sqlId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listTableByTopic
       * /one-service/auth/listTableByTopic.json
       */
      export namespace listTableByTopic {
        export class Params {
          /** topicId */
          topicId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * syncDtmktAuth
       * /one-service/auth/syncDtmktAuth.json
       */
      export namespace syncDtmktAuth {
        export class Params {
          /** endId */
          endId: number;
          /** startId */
          startId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * withdraw
       * /one-service/auth/withdrawAuth.json
       */
      export namespace withdraw {
        export class Params {
          /** authColId */
          authColId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Base Error Controller
     */
    export namespace baseError {
      /**
       * handleError
       * /error
       */
      export namespace handleError {
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
       * handleError
       * /error
       */
      export namespace headError {
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
       * handleError
       * /error
       */
      export namespace postError {
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
       * handleError
       * /error
       */
      export namespace putError {
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
       * handleError
       * /error
       */
      export namespace deleteError {
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
       * handleError
       * /error
       */
      export namespace optionsError {
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
       * handleError
       * /error
       */
      export namespace patchError {
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
    }

    /**
     * Common Controller
     */
    export namespace common {
      /**
       * action
       * /one-service/common/action.json
       */
      export namespace action {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.SourceActionBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.SourceActionBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * eventNotify
       * /one-service/common/eventNotify.json
       */
      export namespace eventNotify {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.SourceActionBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.SourceActionBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateBaseInfo
       * /one-service/common/updateBaseInfo.json
       */
      export namespace updateBaseInfo {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.BaseInfoBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.BaseInfoBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Data Source Controller
     */
    export namespace dataSource {
      /**
       * deleteDataSource
       * /one-service/datasource/delete.json
       */
      export namespace deleteDataSource {
        export class Params {
          /** dbId */
          dbId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getDataSource
       * /one-service/datasource/detail.json
       */
      export namespace getDataSource {
        export class Params {
          /** dbId */
          dbId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.DataSourceBO
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
       * deleteDataSourceEnv
       * /one-service/datasource/env/delete.json
       */
      export namespace deleteDataSourceEnv {
        export class Params {
          /** area */
          area: string;
          /** dbId */
          dbId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getDataSourceEnv
       * /one-service/datasource/env/getDetail.json
       */
      export namespace getDataSourceEnv {
        export class Params {
          /** area */
          area: string;
          /** dbId */
          dbId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.DataSourceEnvBO
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
       * publishDataSourceEnv
       * /one-service/datasource/env/publish.json
       */
      export namespace publishDataSourceEnv {
        export class Params {
          /** area */
          area: string;
          /** dbId */
          dbId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveDataSourceEnv
       * /one-service/datasource/env/save.json
       */
      export namespace saveDataSourceEnv {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<number>;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.DataSourceEnvBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.DataSourceEnvBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * testConnect
       * /one-service/datasource/env/testConnect.json
       */
      export namespace testConnect {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.DataSourceEnvBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.DataSourceEnvBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /one-service/datasource/list.json
       */
      export namespace list {
        export class Params {
          /** categoryIds */
          categoryIds?: string;
          /** isSelf */
          isSelf?: boolean;
          /** keyword */
          keyword?: string;
          /** orderByField */
          orderByField?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.PaginatedResult<defs.oneService.DataSourceBO>
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
       * saveDataSource
       * /one-service/datasource/save.json
       */
      export namespace saveDataSource {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<number>;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.DataSourceBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.DataSourceBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Data Verify Controller
     */
    export namespace dataVerify {
      /**
       * getSqlIdParam
       * /one-service/dataverify/getSqlIdParam.json
       */
      export namespace getSqlIdParam {
        export class Params {
          /** sqlId */
          sqlId: string;
          /** sqlType */
          sqlType: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.SqlContainerBO
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
       * 获取用户的测试记录
       * /one-service/dataverify/getTestRecord.json
       */
      export namespace getTestRecord {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          ArrayList<defs.oneService.DataVerifyParamResultBO>
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
       * listColumnsByApp
       * /one-service/dataverify/listColumnsByApp.json
       */
      export namespace listColumnsByApp {
        export class Params {
          /** appId */
          appId: number;
          /** authId */
          authId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.ColumnDO>
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
       * listColumnsBySql
       * /one-service/dataverify/listColumnsBySql.json
       */
      export namespace listColumnsBySql {
        export class Params {
          /** authId */
          authId: number;
          /** sqlId */
          sqlId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.ColumnDO>
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
       * search
       * /one-service/dataverify/search.json
       */
      export namespace search {
        export class Params {
          /** param */
          param: string;
          /** skipCheck */
          skipCheck?: boolean;
          /** userId */
          userId?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.DataVerifyResultBO
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
       * search
       * /one-service/dataverify/search.json
       */
      export namespace postSearch {
        export class Params {
          /** param */
          param: string;
          /** skipCheck */
          skipCheck?: boolean;
          /** userId */
          userId?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.DataVerifyResultBO
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
     * Dataphin Controller
     */
    export namespace dataphin {
      /**
       * detail
       * /one-service/dataphin/logic/detail.json
       */
      export namespace detail {
        export class Params {
          /** dpBizUnitName */
          dpBizUnitName: string;
          /** dpTableName */
          dpTableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.LogicalTable
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
       * hasPermission
       * /one-service/dataphin/logic/hasPermission.json
       */
      export namespace hasPermission {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.DataphinPermissionBO
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.DataphinPermissionBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.DataphinPermissionBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * search
       * /one-service/dataphin/logic/search.json
       */
      export namespace search {
        export class Params {
          /** keyword */
          keyword: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TableSearchDTO>
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
     * Dtmkt Controller
     */
    export namespace dtmkt {
      /**
       * getCategoryTree
       * /one-service/category/getCategoryTree.json
       */
      export namespace getCategoryTree {
        export class Params {
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getLindormGuidList
       * /one-service/lindorm/guidList.json
       */
      export namespace getLindormGuidList {
        export class Params {
          /** tableName */
          tableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<Array<string>>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * cntDetail
       * /one-service/logicTable/cntDetail.json
       */
      export namespace cntDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.DtmktLogicDetailResponse
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
       * getLogicTableList
       * /one-service/logicTable/list.json
       */
      export namespace getLogicTableList {
        export class Params {
          /** biz */
          biz?: string;
          /** dbs */
          dbs?: string;
          /** dim */
          dim?: string;
          /** isRt */
          isRt?: string;
          /** isSelf */
          isSelf?: boolean;
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

        export type Response = defs.oneService.ResObject<
          defs.oneService.PaginatedResult<defs.oneService.DtmktLogicTableBO>
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
       * searchLogicTableList
       * /one-service/logicTable/search.json
       */
      export namespace searchLogicTableList {
        export class Params {
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

        export type Response = defs.oneService.ResObject<
          defs.oneService.PaginatedResult<defs.oneService.DtmktLogicTableBO>
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
     * Dtmkt Project Sync Controller
     */
    export namespace dtmktProjectSync {
      /**
       * syncProject
       * /one-service/sync/project.json
       */
      export namespace syncProject {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = string;

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
     * Logic Controller
     */
    export namespace logic {
      /**
       * isLogicUsed
       * /one-service/logic/canDeleteLogic.json
       */
      export namespace isLogicUsed {
        export class Params {
          /** logicTableId */
          logicTableId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteTable
       * /one-service/logic/deleteTable.json
       */
      export namespace deleteTable {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getLogicTableBaseInfo
       * /one-service/logic/getLogicTableBaseInfo
       */
      export namespace getLogicTableBaseInfo {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.LogicTableBO
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
       * listLogicTableByPk
       * /one-service/logic/listLogicByPk.json
       */
      export namespace listLogicTableByPk {
        export class Params {
          /** keyCols */
          keyCols: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listPubRecord
       * /one-service/logic/listPubRecord.json
       */
      export namespace listPubRecord {
        export class Params {
          /** logicTableId */
          logicTableId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.DeployRecordDO>
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
       * getLogicTableList
       * /one-service/logic/listTable.json
       */
      export namespace getLogicTableList {
        export class Params {
          /** biz */
          biz?: string;
          /** dbs */
          dbs?: string;
          /** dim */
          dim?: string;
          /** isRt */
          isRt?: string;
          /** isSelf */
          isSelf?: boolean;
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

        export type Response = defs.oneService.ResObject<
          defs.oneService.PaginatedResult<defs.oneService.DtmktLogicTableBO>
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
       * insertTableDraft
       * /one-service/logic/saveDraft.json
       */
      export namespace insertTableDraft {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.LogicMetaParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.LogicMetaParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveLogicTable
       * /one-service/logic/saveLogicTable.json
       */
      export namespace saveLogicTable {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.DtmktLogicTableDetailBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.DtmktLogicTableDetailBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * transferOwner
       * /one-service/logic/transferOwner.json
       */
      export namespace transferOwner {
        export class Params {
          /** logicTable */
          logicTable: string;
          /** workNo */
          workNo: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Logic Table View Controller
     */
    export namespace logicTableView {
      /**
       * getLogicTableBaseInfo
       * /one-service/logicTableView/getLogicTableBaseInfo.json
       */
      export namespace getLogicTableBaseInfo {
        export class Params {
          /** tableId */
          tableId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.LogicTableBO
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
       * listAppId
       * /one-service/logicTableView/listAppId.json
       */
      export namespace listAppId {
        export class Params {
          /** tableId */
          tableId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.IdNameDO>
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
       * listColumnByLogicTableId
       * /one-service/logicTableView/listColumnByLogicTableId.json
       */
      export namespace listColumnByLogicTableId {
        export class Params {
          /** tableId */
          tableId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.ColumnBO>
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
       * listLogicTableDetailByApp
       * /one-service/logicTableView/listLogicTableDetailByApp.json
       */
      export namespace listLogicTableDetailByApp {
        export class Params {
          /** appId */
          appId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listOpenSql
       * /one-service/logicTableView/listOpenSql.json
       */
      export namespace listOpenSql {
        export class Params {
          /** currentPage */
          currentPage?: number;
          /** pageSize */
          pageSize?: number;
          /** tableId */
          tableId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Migrate Controller
     */
    export namespace migrate {
      /**
       * initClusterConfig
       * /one-service/migrate/initClusterConfig.json
       */
      export namespace initClusterConfig {
        export class Params {
          /** isOnline */
          isOnline: boolean;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * initDFaaSEnv
       * /one-service/migrate/initDFaaSEnv.json
       */
      export namespace initDFaaSEnv {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

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
       * initDsPermission
       * /one-service/migrate/initDsPermission.json
       */
      export namespace initDsPermission {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

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
     * Os 2 Database Controller
     */
    export namespace os2Database {
      /**
       * detail
       * /one-service/database/detail.json
       */
      export namespace detail {
        export class Params {
          /** dbName */
          dbName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listDbApp
       * /one-service/database/enums.json
       */
      export namespace listDbApp {
        export class Params {
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * fetch
       * /one-service/database/fetch.json
       */
      export namespace fetch {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Os 2 Footprint Controller
     */
    export namespace os2Footprint {
      /**
       * list
       * /one-service/footprint/recent.json
       */
      export namespace list {
        export class Params {
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Os 2 Hbase Meta Controller
     */
    export namespace os2HbaseMeta {
      /**
       * deleteHbaseTable
       * /one-service/hbasetable/deleteTable.json
       */
      export namespace deleteHbaseTable {
        export class Params {
          /** id */
          id?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteHbaseTable
       * /one-service/hbasetable/deleteTable.json
       */
      export namespace headDeleteTable {
        export class Params {
          /** id */
          id?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteHbaseTable
       * /one-service/hbasetable/deleteTable.json
       */
      export namespace postDeleteTable {
        export class Params {
          /** id */
          id?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteHbaseTable
       * /one-service/hbasetable/deleteTable.json
       */
      export namespace putDeleteTable {
        export class Params {
          /** id */
          id?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteHbaseTable
       * /one-service/hbasetable/deleteTable.json
       */
      export namespace deleteDeleteTable {
        export class Params {
          /** id */
          id?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteHbaseTable
       * /one-service/hbasetable/deleteTable.json
       */
      export namespace optionsDeleteTable {
        export class Params {
          /** id */
          id?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deleteHbaseTable
       * /one-service/hbasetable/deleteTable.json
       */
      export namespace patchDeleteTable {
        export class Params {
          /** id */
          id?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getAppHbaseTable
       * /one-service/hbasetable/getAppTable.json
       */
      export namespace getAppHbaseTable {
        export class Params {
          /** appId */
          appId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getNewAppId
       * /one-service/hbasetable/getNewAppId.json
       */
      export namespace getNewAppId {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

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
       * getHbaseTable
       * /one-service/hbasetable/getTable.json
       */
      export namespace getHbaseTable {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listHbaseTable
       * /one-service/hbasetable/listTable.json
       */
      export namespace listHbaseTable {
        export class Params {
          /** dbType */
          dbType?: string;
          /** isSelf */
          isSelf?: boolean;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** status */
          status?: string;
          /** userId */
          userId?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * save
       * /one-service/hbasetable/save.json
       */
      export namespace save {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.HbaseMetaForm,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.HbaseMetaForm,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * search
       * /one-service/hbasetable/search.json
       */
      export namespace search {
        export class Params {
          /** categoryIds */
          categoryIds?: string;
          /** isSelf */
          isSelf?: boolean;
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Os 2 Pre Phys Sql Config Controller
     */
    export namespace os2PrePhysSqlConfig {
      /**
       * candidates
       * /one-service/phys-sql-config/candidates.json
       */
      export namespace candidates {
        export class Params {
          /** isOnline */
          isOnline: string;
          /** sqlId */
          sqlId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.DeployRecordDO>
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
       * create
       * /one-service/phys-sql-config/create.json
       */
      export namespace create {
        export class Params {
          /** dbId */
          dbId?: number;
          /** des */
          des?: string;
          /** en */
          en?: string;
          /** id */
          id?: number;
          /** origin */
          origin?: string;
          /** ownerId */
          ownerId?: string;
          /** params */
          params?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * create
       * /one-service/phys-sql-config/create.json
       */
      export namespace postCreate {
        export class Params {
          /** dbId */
          dbId?: number;
          /** des */
          des?: string;
          /** en */
          en?: string;
          /** id */
          id?: number;
          /** origin */
          origin?: string;
          /** ownerId */
          ownerId?: string;
          /** params */
          params?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /one-service/phys-sql-config/delete.json
       */
      export namespace remove {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deploy
       * /one-service/phys-sql-config/deploy.json
       */
      export namespace deploy {
        export class Params {
          /** ids */
          ids: Array<number>;
          /** isOnline */
          isOnline: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deploy
       * /one-service/phys-sql-config/deploy.json
       */
      export namespace postDeploy {
        export class Params {
          /** ids */
          ids: Array<number>;
          /** isOnline */
          isOnline: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * detail
       * /one-service/phys-sql-config/detail.json
       */
      export namespace detail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /one-service/phys-sql-config/edit.json
       */
      export namespace edit {
        export class Params {
          /** dbId */
          dbId?: number;
          /** des */
          des?: string;
          /** en */
          en?: string;
          /** id */
          id?: number;
          /** origin */
          origin?: string;
          /** ownerId */
          ownerId?: string;
          /** params */
          params?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /one-service/phys-sql-config/edit.json
       */
      export namespace postEdit {
        export class Params {
          /** dbId */
          dbId?: number;
          /** des */
          des?: string;
          /** en */
          en?: string;
          /** id */
          id?: number;
          /** origin */
          origin?: string;
          /** ownerId */
          ownerId?: string;
          /** params */
          params?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /one-service/phys-sql-config/list.json
       */
      export namespace list {
        export class Params {
          /** bpmId */
          bpmId?: string;
          /** creatorId */
          creatorId?: string;
          /** creatorName */
          creatorName?: string;
          /** dbId */
          dbId?: number;
          /** dbName */
          dbName?: string;
          /** dbType */
          dbType?: string;
          /** en */
          en?: string;
          /** lastOpId */
          lastOpId?: string;
          /** lastOpName */
          lastOpName?: string;
          /** order */
          order?: string;
          /** orderBy */
          orderBy?: string;
          /** ownerId */
          ownerId?: string;
          /** ownerName */
          ownerName?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** status */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Os 2 Reflux Controller
     */
    export namespace os2Reflux {
      /**
       * getDestTableMeta
       * /one-service/reflux/getDestTableMeta.json
       */
      export namespace getDestTableMeta {
        export class Params {
          /** destDbId */
          destDbId: number;
          /** destDbType */
          destDbType: string;
          /** destTableName */
          destTableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getHbaseDatabase
       * /one-service/reflux/getHbaseDatabase.json
       */
      export namespace getHbaseDatabase {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

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
       * getHybridDatabase
       * /one-service/reflux/getJdbcDatabase.json
       */
      export namespace getHybridDatabase {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

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
       * getLindormDatabase
       * /one-service/reflux/getLindormDatabase.json
       */
      export namespace getLindormDatabase {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

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
       * getMysqlDatabase
       * /one-service/reflux/getMysqlDatabase.json
       */
      export namespace getMysqlDatabase {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

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
       * getOdpsMeta
       * /one-service/reflux/getOdpsMeta.json
       */
      export namespace getOdpsMeta {
        export class Params {
          /** fullTableName */
          fullTableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listLogicTableKey
       * /one-service/reflux/listLogicTableInfo.json
       */
      export namespace listLogicTableKey {
        export class Params {
          /** logicTableName */
          logicTableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * syncData
       * /one-service/reflux/submitSyncDataTask.json
       */
      export namespace syncData {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

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
       * listRowCoder
       * /one-service/reflux/type/listRowCoder.json
       */
      export namespace listRowCoder {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

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
     * Os 2 Saber Controller
     */
    export namespace os2Saber {
      /**
       * run
       * /one-service/saber/run.json
       */
      export namespace run {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

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
     * Os 2 Workflow Controller
     */
    export namespace os2Workflow {
      /**
       * applyCreateDatabase
       * /one-service/workflow/applyCreateDatabase.json
       */
      export namespace applyCreateDatabase {
        export class Params {
          /** databaseType */
          databaseType:
            | 'TDDL'
            | 'HBASE'
            | 'PHOENIX'
            | 'OPEN_SEARCH'
            | 'TAIR'
            | 'LINDORM'
            | 'JDBC';
          /** password */
          password?: string;
          /** remark */
          remark?: string;
          /** url */
          url: string;
          /** username */
          username?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * applyCreateDatabase
       * /one-service/workflow/applyCreateDatabase.json
       */
      export namespace postApplyCreateDatabase {
        export class Params {
          /** databaseType */
          databaseType:
            | 'TDDL'
            | 'HBASE'
            | 'PHOENIX'
            | 'OPEN_SEARCH'
            | 'TAIR'
            | 'LINDORM'
            | 'JDBC';
          /** password */
          password?: string;
          /** remark */
          remark?: string;
          /** url */
          url: string;
          /** username */
          username?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * detail
       * /one-service/workflow/detail.json
       */
      export namespace detail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /one-service/workflow/list.json
       */
      export namespace list {
        export class Params {
          /** bpmsInstanceId */
          bpmsInstanceId?: string;
          /** name */
          name?: string;
          /** operatorNickname */
          operatorNickname?: string;
          /** operatorNo */
          operatorNo?: string;
          /** orderGmtCreate */
          orderGmtCreate?: 'ASC' | 'DESC';
          /** orderGmtModified */
          orderGmtModified?: 'ASC' | 'DESC';
          /** orderId */
          orderId?: 'ASC' | 'DESC';
          /** pageNum */
          pageNum?: number;
          /** pageSize */
          pageSize?: number;
          /** remark */
          remark?: string;
          /** status */
          status?: string;
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * refresh
       * /one-service/workflow/refresh.json
       */
      export namespace refresh {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * refresh
       * /one-service/workflow/refresh.json
       */
      export namespace postRefresh {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * refreshBmpsInstance
       * /one-service/workflow/refreshBmpsInstance.json
       */
      export namespace refreshBmpsInstance {
        export class Params {
          /** processInstanceId */
          processInstanceId: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * refreshBmpsInstance
       * /one-service/workflow/refreshBmpsInstance.json
       */
      export namespace postRefreshBmpsInstance {
        export class Params {
          /** processInstanceId */
          processInstanceId: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Phys Controller
     */
    export namespace phys {
      /**
       * deleteHBase
       * /one-service/phys/deleteHBase.json
       */
      export namespace deleteHBase {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getHBaseTableDetail
       * /one-service/phys/getHBaseTableDetail.json
       */
      export namespace getHBaseTableDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.DtmktHBaseTableBO
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
       * getTableDetail
       * /one-service/phys/getTableDetail.json
       */
      export namespace getTableDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.DtmktPhysTableBO
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
       * listHBase
       * /one-service/phys/listHBase.json
       */
      export namespace listHBase {
        export class Params {
          /** isSelf */
          isSelf?: boolean;
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.PaginatedResult<defs.oneService.DtmktHBaseTableBO>
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
       * listMetaCols
       * /one-service/phys/listMetaCols.json
       */
      export namespace listMetaCols {
        export class Params {
          /** dbId */
          dbId: number;
          /** logicTableId */
          logicTableId: number;
          /** physTableId */
          physTableId?: number;
          /** physTableName */
          physTableName: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.DtmktPhysColumnBO>
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
       * listPhysTables
       * /one-service/phys/listPhysTables.json
       */
      export namespace listPhysTables {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.DtmktPhysTableBO>
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
       * saveHbase
       * /one-service/phys/saveHbase.json
       */
      export namespace saveHbase {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.DtmktHBaseTableBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.DtmktHBaseTableBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * searchPhysTables
       * /one-service/phys/search.json
       */
      export namespace searchPhysTables {
        export class Params {
          /** keyword */
          keyword: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateLogicTableDb
       * /one-service/phys/updateLogicTableDb.json
       */
      export namespace updateLogicTableDb {
        export class Params {
          /** destDbId */
          destDbId: number;
          /** isOnline */
          isOnline: string;
          /** physicalTable */
          physicalTable: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateLogicTableDb
       * /one-service/phys/updateLogicTableDb.json
       */
      export namespace postUpdateLogicTableDb {
        export class Params {
          /** destDbId */
          destDbId: number;
          /** isOnline */
          isOnline: string;
          /** physicalTable */
          physicalTable: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Plan Controller
     */
    export namespace plan {
      /**
       * deletePlan
       * /one-service/slave/deletePlan.json
       */
      export namespace deletePlan {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getPlan
       * /one-service/slave/getPlan.json
       */
      export namespace getPlan {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listPlans
       * /one-service/slave/listPlans.json
       */
      export namespace listPlans {
        export class Params {
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * pubPlan
       * /one-service/slave/pubPlan.json
       */
      export namespace pubPlan {
        export class Params {
          /** id */
          id: number;
          /** isOnline */
          isOnline: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * savePlan
       * /one-service/slave/savePlan.json
       */
      export namespace savePlan {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.Os2PlanBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.Os2PlanBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Publish Controller
     */
    export namespace publish {
      /**
       * deploy
       * /one-service/pub/deploy.json
       */
      export namespace deploy {
        export class Params {
          /** ids */
          ids: string;
          /** isOnline */
          isOnline: string;
          /** sourceType */
          sourceType?: string;
          /** sqlType */
          sqlType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * deployLogic
       * /one-service/pub/deployLogic.json
       */
      export namespace deployLogic {
        export class Params {
          /** isOnline */
          isOnline: string;
          /** logicTableId */
          logicTableId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listHbaseDeploy
       * /one-service/pub/listHbaseDeploy.json
       */
      export namespace listHbaseDeploy {
        export class Params {
          /** hbaseTable */
          hbaseTable: string;
          /** isOnline */
          isOnline: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.DeployRecordDO>
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
       * listLogicDeploy
       * /one-service/pub/listLogicDeploy.json
       */
      export namespace listLogicDeploy {
        export class Params {
          /** isOnline */
          isOnline: string;
          /** logicTableId */
          logicTableId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.DeployRecordDO>
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
       * listMyPublish
       * /one-service/pub/listMyPublish.json
       */
      export namespace listMyPublish {
        export class Params {
          /** currentPage */
          currentPage?: number;
          /** isOnline */
          isOnline?: string;
          /** logicTableId */
          logicTableId: number;
          /** pageSize */
          pageSize?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.PaginatedResult<defs.oneService.DeployRecordDO>
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
       * listSqlDeploy
       * /one-service/pub/listSqlDeploy.json
       */
      export namespace listSqlDeploy {
        export class Params {
          /** isOnline */
          isOnline: string;
          /** sqlId */
          sqlId: number;
          /** sqlType */
          sqlType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.DeployRecordDO>
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
     * Sql Controller
     */
    export namespace sql {
      /**
       * deleteSql
       * /one-service/sqlid/deleteSql.json
       */
      export namespace deleteSql {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * getSql
       * /one-service/sqlid/getSql.json
       */
      export namespace getSql {
        export class Params {
          /** id */
          id: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.SqlMetaDO
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
       * listMySql
       * /one-service/sqlid/listMySqlId.json
       */
      export namespace listMySql {
        export class Params {
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

        export type Response = defs.oneService.ResultObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * listOpenSql
       * /one-service/sqlid/listOpenSql.json
       */
      export namespace listOpenSql {
        export class Params {
          /** logicTableId */
          logicTableId: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.PaginatedResult<defs.oneService.SqlMetaDO>
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
       * listPubRecord
       * /one-service/sqlid/listPubRecord.json
       */
      export namespace listPubRecord {
        export class Params {
          /** sqlId */
          sqlId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.DeployRecordDO>
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
       * createOrUpdateSqlInterface
       * /one-service/sqlid/save.json
       */
      export namespace createOrUpdateSqlInterface {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<number>;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.DtmktSqlIDBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.DtmktSqlIDBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * save
       * /one-service/sqlid/saveBaseInfo.json
       */
      export namespace save {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<number>;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.DtmktSqlIDBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.DtmktSqlIDBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * transferOwner
       * /one-service/sqlid/transferOwner.json
       */
      export namespace transferOwner {
        export class Params {
          /** sqlId */
          sqlId: number;
          /** workNo */
          workNo: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<boolean>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveSubmit
       * /one-service/sqlid/validate.json
       */
      export namespace saveSubmit {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.DtmktSqlIDBO
        >;

        export const init: Response;

        export function request(
          bodyParams: defs.oneService.DtmktSqlIDBO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.oneService.DtmktSqlIDBO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Statistics Controller
     */
    export namespace statistics {
      /**
       * search
       * /one-service/statistics/search.json
       */
      export namespace search {
        export class Params {
          /** categoryIds */
          categoryIds?: string;
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
          /** sourceType */
          sourceType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Type Controller
     */
    export namespace type {
      /**
       * listDbAreaAlias
       * /one-service/type/dbAreas.json
       */
      export namespace listDbAreaAlias {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TypeEnumsDO>
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
       * listDbTypeAlias
       * /one-service/type/dbTypes.json
       */
      export namespace listDbTypeAlias {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TypeEnumsDO>
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
       * listCache
       * /one-service/type/listCache.json
       */
      export namespace listCache {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TypeEnumsDO>
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
       * listColType
       * /one-service/type/listColType.json
       */
      export namespace listColType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TypeEnumsDO>
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
       * listColumnCoder
       * /one-service/type/listColumnCoder.json
       */
      export namespace listColumnCoder {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TypeEnumsDO>
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
       * listColumnType
       * /one-service/type/listColumnType.json
       */
      export namespace listColumnType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TypeEnumsDO>
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
       * listDbApp
       * /one-service/type/listDb.json
       */
      export namespace listDbApp {
        export class Params {
          /** isSelf */
          isSelf?: boolean;
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.DatabaseBO>
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
       * listDbType
       * /one-service/type/listDbType.json
       */
      export namespace listDbType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TypeEnumsDO>
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
       * listHbaseGroup
       * /one-service/type/listHbaseGroup.json
       */
      export namespace listHbaseGroup {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TypeEnumsDO>
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
       * listRowCoder
       * /one-service/type/listRowCoder.json
       */
      export namespace listRowCoder {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TypeEnumsDO>
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
       * listSqlIdParamType
       * /one-service/type/listSqlIdParamType.json
       */
      export namespace listSqlIdParamType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TypeEnumsDO>
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
       * listColType
       * /one-service/type/public/type/listColType.json
       */
      export namespace getPublicTypeListColType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TypeEnumsDO>
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
       * listSlaLevel
       * /one-service/type/slaLevel.json
       */
      export namespace listSlaLevel {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.TypeEnumsDO>
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
     * User Controller
     */
    export namespace user {
      /**
       * getUser
       * /one-service/user/getEmp.json
       */
      export namespace getUser {
        export class Params {
          /** workNo */
          workNo: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          defs.oneService.UserChargeDO
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
       * getDepartmentList
       * /one-service/user/listDepartment.json
       */
      export namespace getDepartmentList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.DepartmentBO>
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
       * listEmp
       * /one-service/user/listEmp.json
       */
      export namespace listEmp {
        export class Params {
          /** keyword */
          keyword: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.oneService.ResObject<
          Array<defs.oneService.UserChargeDO>
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
