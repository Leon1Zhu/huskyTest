class BaseInfoBO {
  /** adminIds */
  adminIds = '';

  /** adminName */
  adminName = '';

  /** department */
  department = '';

  /** des */
  des = '';

  /** id */
  id = undefined;

  /** slaLevel */
  slaLevel = '';

  /** sourceType */
  sourceType = '';
}

class BriefColumn {
  /** inputName */
  inputName = '';

  /** name */
  name = '';

  /** type */
  type = '';
}

class CallResult {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** exception */
  exception = '';

  /** message */
  message = '';
}

class Catalog {
  /** catalogId */
  catalogId = undefined;

  /** catalogName */
  catalogName = '';

  /** catalogType */
  catalogType = 'BIZUNIT';

  /** env */
  env = 'DEV';
}

class ChangeCheckRes {
  /** apply_order_url */
  apply_order_url = '';

  /** approvers */
  approvers = [];

  /** change_object */
  change_object = '';

  /** check_status_enum */
  check_status_enum = 'CHECK_PASS';

  /** freeze_info */
  freeze_info = [];

  /** fuse_info */
  fuse_info = [];

  /** source_order_id */
  source_order_id = '';
}

class ChangefreeApprover {
  /** executors */
  executors = '';

  /** nameNode */
  nameNode = '';

  /** rulePass */
  rulePass = '';

  /** typeNode */
  typeNode = '';
}

class Column {
  /** checked */
  checked = false;

  /** columnFormat */
  columnFormat = '';

  /** finalKey */
  finalKey = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** originalType */
  originalType = '';

  /** partitioned */
  partitioned = false;

  /** relatedFields */
  relatedFields = [];

  /** relatedTableName */
  relatedTableName = '';

  /** relatedTableRoleName */
  relatedTableRoleName = '';

  /** type */
  type = '';
}

class ColumnBO {
  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cn */
  cn = '';

  /** code */
  code = '';

  /** coder */
  coder = '';

  /** commDate */
  commDate = '';

  /** commMsgName */
  commMsgName = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** dbType */
  dbType = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** hot */
  hot = '';

  /** id */
  id = undefined;

  /** isKey */
  isKey = false;

  /** isRequire */
  isRequire = false;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** odpsTable */
  odpsTable = '';

  /** preSuffix */
  preSuffix = '';

  /** reqtCnt1m */
  reqtCnt1m = undefined;

  /** source */
  source = '';

  /** status */
  status = '';

  /** type */
  type = '';
}

class ColumnDO {
  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** authStatus */
  authStatus = '';

  /** cn */
  cn = '';

  /** coder */
  coder = '';

  /** commDate */
  commDate = '';

  /** commMsgName */
  commMsgName = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** dbType */
  dbType = '';

  /** deployerId */
  deployerId = '';

  /** deployerName */
  deployerName = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtDeploy */
  gmtDeploy = '';

  /** gmtModified */
  gmtModified = '';

  /** hasAuthority */
  hasAuthority = false;

  /** id */
  id = undefined;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** mapping */
  mapping = '';

  /** needful */
  needful = false;

  /** odpsTable */
  odpsTable = '';

  /** preSuffix */
  preSuffix = '';

  /** primaryKey */
  primaryKey = false;

  /** reqtCnt1m */
  reqtCnt1m = undefined;

  /** rowState */
  rowState = undefined;

  /** source */
  source = '';

  /** status */
  status = '';

  /** tableId */
  tableId = undefined;

  /** type */
  type = '';
}

class DataSourceBO {
  /** adminIds */
  adminIds = '';

  /** admins */
  admins = [];

  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cn */
  cn = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** dbInstance */
  dbInstance = '';

  /** dbType */
  dbType = '';

  /** dbTypeName */
  dbTypeName = '';

  /** des */
  des = '';

  /** domain */
  domain = '';

  /** en */
  en = '';

  /** envs */
  envs = [];

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** owner */
  owner = new EmpBO();

  /** ownerId */
  ownerId = '';

  /** slaLevel */
  slaLevel = '';

  /** status */
  status = '';
}

class DataSourceEnvBO {
  /** appName */
  appName = '';

  /** area */
  area = '';

  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cn */
  cn = '';

  /** connectProperties */
  connectProperties = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** dbId */
  dbId = undefined;

  /** dbType */
  dbType = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** status */
  status = '';
}

class DataVerifyParam {
  /** actUser */
  actUser = new User();

  /** area */
  area = '';

  /** clazz */
  clazz = '';

  /** dbId */
  dbId = undefined;

  /** env */
  env = '';

  /** method */
  method = '';

  /** params */
  params = [];

  /** projectId */
  projectId = undefined;

  /** projectName */
  projectName = '';

  /** sqlType */
  sqlType = '';

  /** useAdmin */
  useAdmin = false;

  /** user */
  user = new User();
}

class DataVerifyParamResultBO {
  /** area */
  area = '';

  /** dataVerifyParam */
  dataVerifyParam = new DataVerifyParam();

  /** dataVerifyResultBO */
  dataVerifyResultBO = new DataVerifyResultBO();

  /** gmtCreate */
  gmtCreate = '';
}

class DataVerifyResultBO {
  /** extraMsg */
  extraMsg = '';

  /** method */
  method = '';

  /** physSql */
  physSql = new ExecuteSql();

  /** queryLink */
  queryLink = '';

  /** recordCount */
  recordCount = undefined;

  /** result */
  result = undefined;

  /** spendTime */
  spendTime = undefined;

  /** startTime */
  startTime = '';

  /** subPhysSqls */
  subPhysSqls = [];

  /** success */
  success = false;

  /** usedCache */
  usedCache = false;

  /** warning */
  warning = '';
}

class DatabaseBO {
  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cn */
  cn = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** dbType */
  dbType = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** name */
  name = '';

  /** status */
  status = '';
}

class DataphinColumnPermissionBO {
  /** bizUnitName */
  bizUnitName = '';

  /** hasPermission */
  hasPermission = false;

  /** resourceName */
  resourceName = '';
}

class DataphinPermissionBO {
  /** columns */
  columns = [];

  /** projectName */
  projectName = '';
}

class DataphinRefluxConfigBO {
  /** bizUnitCnName */
  bizUnitCnName = '';

  /** bizUnitId */
  bizUnitId = undefined;

  /** bizUnitName */
  bizUnitName = '';

  /** briefColumns */
  briefColumns = [];

  /** columns */
  columns = [];

  /** id */
  id = undefined;

  /** level1Columns */
  level1Columns = [];

  /** lindormGuid */
  lindormGuid = '';

  /** logicTableId */
  logicTableId = undefined;

  /** logicTableName */
  logicTableName = '';

  /** logicTableType */
  logicTableType = '';

  /** nodeId */
  nodeId = undefined;

  /** nodeName */
  nodeName = '';

  /** params */
  params = '';

  /** partition */
  partition = '';

  /** projectId */
  projectId = '';

  /** projectName */
  projectName = '';

  /** refluxProjectName */
  refluxProjectName = '';

  /** withRelation */
  withRelation = false;
}

class DepartmentBO {
  /** id */
  id = '';

  /** name */
  name = '';
}

class DeployRecordDO {
  /** applyOrderUrl */
  applyOrderUrl = '';

  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cn */
  cn = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** deployerId */
  deployerId = '';

  /** deployerName */
  deployerName = '';

  /** des */
  des = '';

  /** displayName */
  displayName = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtDeploy */
  gmtDeploy = '';

  /** gmtModified */
  gmtModified = '';

  /** gmtOlDeploy */
  gmtOlDeploy = '';

  /** gmtPreDeploy */
  gmtPreDeploy = '';

  /** hbaseTableId */
  hbaseTableId = undefined;

  /** id */
  id = undefined;

  /** isOl */
  isOl = '';

  /** isPre */
  isPre = '';

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** logicTableId */
  logicTableId = undefined;

  /** sourceOrderId */
  sourceOrderId = '';

  /** sqlId */
  sqlId = undefined;

  /** srcContent */
  srcContent = '';

  /** status */
  status = '';

  /** updateDetail */
  updateDetail = '';

  /** updateSummary */
  updateSummary = '';
}

class DtmktHBaseColumnBO {
  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cn */
  cn = '';

  /** columnCoder */
  columnCoder = '';

  /** columnCoderText */
  columnCoderText = '';

  /** columnMapping */
  columnMapping = '';

  /** columnName */
  columnName = '';

  /** columnType */
  columnType = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtDeploy */
  gmtDeploy = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** route */
  route = undefined;

  /** status */
  status = '';

  /** tableId */
  tableId = '';
}

class DtmktHBaseRowkeyBO {
  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cn */
  cn = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtDeploy */
  gmtDeploy = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** needful */
  needful = false;

  /** preSuffix */
  preSuffix = '';

  /** rowkeyCoder */
  rowkeyCoder = '';

  /** rowkeyName */
  rowkeyName = '';

  /** rowkeyType */
  rowkeyType = '';

  /** status */
  status = '';

  /** tableId */
  tableId = '';
}

class DtmktHBaseTableBO {
  /** actualName */
  actualName = '';

  /** adminId */
  adminId = '';

  /** adminName */
  adminName = '';

  /** appId */
  appId = '';

  /** appIdList */
  appIdList = [];

  /** appIds */
  appIds = '';

  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** canDelete */
  canDelete = '';

  /** cn */
  cn = '';

  /** columnList */
  columnList = [];

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** dbId */
  dbId = undefined;

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** isAppId */
  isAppId = false;

  /** isRealTime */
  isRealTime = false;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** routeList */
  routeList = '';

  /** rowCoder */
  rowCoder = '';

  /** rowkey */
  rowkey = '';

  /** rowkeyList */
  rowkeyList = [];

  /** rowkeyRule */
  rowkeyRule = '';

  /** slaveDb */
  slaveDb = '';

  /** status */
  status = '';

  /** tableName */
  tableName = '';
}

class DtmktLogicDetailResponse {
  /** callCnt */
  callCnt = undefined;

  /** userCallDetailList */
  userCallDetailList = [];

  /** userCnt */
  userCnt = undefined;
}

class DtmktLogicTableBO {
  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** bindedPhysTableName */
  bindedPhysTableName = [];

  /** bu */
  bu = '';

  /** callCnt7d */
  callCnt7d = undefined;

  /** cn */
  cn = '';

  /** createTime */
  createTime = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** isRt */
  isRt = false;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** name */
  name = '';

  /** ownerId */
  ownerId = '';

  /** ownerName */
  ownerName = '';

  /** sqlIdCnt */
  sqlIdCnt = undefined;

  /** status */
  status = '';

  /** userCnt */
  userCnt = undefined;
}

class DtmktLogicTableDetailBO {
  /** adminId */
  adminId = '';

  /** admins */
  admins = [];

  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cn */
  cn = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** department */
  department = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** introduction */
  introduction = '';

  /** introductionUrl */
  introductionUrl = '';

  /** isNoPaging */
  isNoPaging = false;

  /** keys */
  keys = [];

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** limitCnt */
  limitCnt = undefined;

  /** ownerIds */
  ownerIds = '';

  /** physTables */
  physTables = [];

  /** status */
  status = '';

  /** tags */
  tags = [];

  /** topicId */
  topicId = undefined;

  /** topicName */
  topicName = '';
}

class DtmktPhysColumnBO {
  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cn */
  cn = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** isKey */
  isKey = false;

  /** isPrimaryKey */
  isPrimaryKey = false;

  /** isRequire */
  isRequire = false;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** logicColId */
  logicColId = undefined;

  /** logicColName */
  logicColName = '';

  /** needRename */
  needRename = '';

  /** physTableId */
  physTableId = undefined;

  /** physTableName */
  physTableName = '';

  /** resourceColName */
  resourceColName = '';

  /** status */
  status = '';

  /** type */
  type = '';
}

class DtmktPhysTableBO {
  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cacheMinutes */
  cacheMinutes = undefined;

  /** cn */
  cn = '';

  /** columnList */
  columnList = [];

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** dbId */
  dbId = undefined;

  /** dbName */
  dbName = '';

  /** dbResourceType */
  dbResourceType = '';

  /** dbType */
  dbType = '';

  /** deployerId */
  deployerId = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtDeploy */
  gmtDeploy = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** isCache */
  isCache = false;

  /** isMasterTable */
  isMasterTable = false;

  /** lastCacheDate */
  lastCacheDate = undefined;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** logicTableId */
  logicTableId = undefined;

  /** logicTableName */
  logicTableName = '';

  /** refluxConfig */
  refluxConfig = new DataphinRefluxConfigBO();

  /** source */
  source = '';

  /** status */
  status = '';
}

class DtmktSqlIDBO {
  /** adminId */
  adminId = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** id */
  id = undefined;

  /** logicTableId */
  logicTableId = undefined;

  /** origin */
  origin = '';

  /** ownerId */
  ownerId = '';

  /** params */
  params = '';
}

class EmpBO {
  /** empId */
  empId = '';

  /** name */
  name = '';

  /** nickName */
  nickName = '';
}

class ExecuteSql {
  /** dbSet */
  dbSet = [];

  /** params */
  params = undefined;

  /** sql */
  sql = '';
}

class FreezeInfo {
  /** aoneBuList */
  aoneBuList = [];

  /** freezeId */
  freezeId = '';

  /** freezeName */
  freezeName = '';

  /** hrBuList */
  hrBuList = [];
}

class FuseInfo {
  /** aoneBuList */
  aoneBuList = [];

  /** fuseId */
  fuseId = '';

  /** fuseName */
  fuseName = '';

  /** hrBuList */
  hrBuList = [];
}

class HbaseAppForm {
  /** appId */
  appId = undefined;

  /** columnList */
  columnList = [];

  /** enableSlave */
  enableSlave = false;

  /** routes */
  routes = [];

  /** rowCoder */
  rowCoder = '';

  /** rowState */
  rowState = undefined;

  /** rowkeyList */
  rowkeyList = [];
}

class HbaseColumnForm {
  /** columnCoder */
  columnCoder = '';

  /** columnMapping */
  columnMapping = '';

  /** columnName */
  columnName = '';

  /** columnType */
  columnType = '';

  /** des */
  des = '';

  /** id */
  id = undefined;

  /** route */
  route = undefined;
}

class HbaseMetaForm {
  /** adminId */
  adminId = '';

  /** dbId */
  dbId = undefined;

  /** hbaseApps */
  hbaseApps = [];

  /** id */
  id = undefined;

  /** isAppId */
  isAppId = false;

  /** isRealTime */
  isRealTime = false;

  /** tableName */
  tableName = '';
}

class HbaseRouteForm {
  /** actualName */
  actualName = '';

  /** hbaseGroup */
  hbaseGroup = '';

  /** remark */
  remark = '';

  /** type */
  type = undefined;
}

class HbaseRowkeyForm {
  /** des */
  des = '';

  /** id */
  id = undefined;

  /** needful */
  needful = false;

  /** preSuffix */
  preSuffix = '';

  /** rowkeyCoder */
  rowkeyCoder = '';

  /** rowkeyName */
  rowkeyName = '';

  /** rowkeyType */
  rowkeyType = '';
}

class IdNameDO {
  /** id */
  id = '';

  /** name */
  name = '';
}

class LogicDerivedDO {
  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cn */
  cn = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** deployerId */
  deployerId = '';

  /** deployerName */
  deployerName = '';

  /** derivedExpr */
  derivedExpr = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtDeploy */
  gmtDeploy = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** logicTableId */
  logicTableId = undefined;

  /** status */
  status = '';
}

class LogicKeyDO {
  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** bindFields */
  bindFields = [];

  /** cn */
  cn = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** deployerId */
  deployerId = '';

  /** deployerName */
  deployerName = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtDeploy */
  gmtDeploy = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** isRequire */
  isRequire = false;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** logicTableId */
  logicTableId = undefined;

  /** rowState */
  rowState = undefined;

  /** status */
  status = '';
}

class LogicMetaParam {
  /** logicKeys */
  logicKeys = [];

  /** logicTable */
  logicTable = new LogicTableDO();
}

class LogicTableBO {
  /** adminId */
  adminId = '';

  /** adminName */
  adminName = '';

  /** admins */
  admins = [];

  /** applyOrderUrl */
  applyOrderUrl = '';

  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cate */
  cate = '';

  /** cn */
  cn = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** department */
  department = '';

  /** deriveds */
  deriveds = [];

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** introduction */
  introduction = '';

  /** introductionUrl */
  introductionUrl = '';

  /** isNoPaging */
  isNoPaging = false;

  /** isRt */
  isRt = false;

  /** keys */
  keys = [];

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** limitCnt */
  limitCnt = undefined;

  /** noticerId */
  noticerId = '';

  /** noticerName */
  noticerName = '';

  /** owner */
  owner = new EmpBO();

  /** ownerId */
  ownerId = '';

  /** ownerName */
  ownerName = '';

  /** physicalTables */
  physicalTables = [];

  /** status */
  status = '';

  /** topicId */
  topicId = undefined;

  /** topicName */
  topicName = '';
}

class LogicTableDO {
  /** adminId */
  adminId = '';

  /** adminName */
  adminName = '';

  /** applyOrderUrl */
  applyOrderUrl = '';

  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cn */
  cn = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** department */
  department = '';

  /** deployerId */
  deployerId = '';

  /** deployerName */
  deployerName = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtDeploy */
  gmtDeploy = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** introduction */
  introduction = '';

  /** introductionUrl */
  introductionUrl = '';

  /** isNoPaging */
  isNoPaging = false;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** limitCnt */
  limitCnt = undefined;

  /** noticerId */
  noticerId = '';

  /** noticerName */
  noticerName = '';

  /** ownerId */
  ownerId = '';

  /** ownerName */
  ownerName = '';

  /** status */
  status = '';

  /** topicId */
  topicId = undefined;

  /** topicName */
  topicName = '';
}

class LogicTablePK {
  /** bindFields */
  bindFields = [];

  /** cn */
  cn = '';

  /** desc */
  desc = '';

  /** en */
  en = '';

  /** id */
  id = undefined;

  /** isRequire */
  isRequire = false;

  /** logicTableId */
  logicTableId = undefined;

  /** rowState */
  rowState = undefined;
}

class LogicalColumn {
  /** catalog */
  catalog = new Catalog();

  /** columnCnName */
  columnCnName = '';

  /** columnFormat */
  columnFormat = '';

  /** columnId */
  columnId = undefined;

  /** columnName */
  columnName = '';

  /** columnPartitionType */
  columnPartitionType = 'HOUR';

  /** columnType */
  columnType = 'INT';

  /** datePartitions */
  datePartitions = [];

  /** extensionInfo */
  extensionInfo = undefined;

  /** isPartitionKey */
  isPartitionKey = false;

  /** isPhysical */
  isPhysical = false;

  /** isPrimaryKey */
  isPrimaryKey = false;

  /** lifecycle */
  lifecycle = undefined;

  /** logic */
  logic = '';

  /** partitionAlignType */
  partitionAlignType = 'PARTITION_ALIGN';

  /** physicalDB */
  physicalDB = new Catalog();

  /** productDate */
  productDate = '';

  /** refDim */
  refDim = new LogicalTable();

  /** refDimRole */
  refDimRole = '';

  /** refType */
  refType = 'REF';

  /** sourceType */
  sourceType = 'SELF_LOGICAL';

  /** table */
  table = '';
}

class LogicalTable {
  /** catalog */
  catalog = new Catalog();

  /** columnList */
  columnList = [];

  /** dimensionEnum */
  dimensionEnum = 'NORMAL';

  /** extensionInfo */
  extensionInfo = undefined;

  /** factType */
  factType = '';

  /** logicalTableType */
  logicalTableType = 'SUMMARY_TABLE';

  /** modelType */
  modelType = 'DIM';

  /** owner */
  owner = '';

  /** parentTable */
  parentTable = '';

  /** productMethod */
  productMethod = 'AUTO';

  /** schema */
  schema = '';

  /** summaryType */
  summaryType = '';

  /** tableDwLevelType */
  tableDwLevelType = 'CDM';

  /** tableId */
  tableId = undefined;

  /** tableName */
  tableName = '';

  /** timeliness */
  timeliness = '';
}

class Map {}

class MethodParam {
  /** clazz */
  clazz = '';

  /** name */
  name = '';

  /** value */
  value = undefined;
}

class Os2PlanBO {
  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** desc */
  desc = '';

  /** description */
  description = '';

  /** groupId */
  groupId = undefined;

  /** id */
  id = undefined;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** logicTableId */
  logicTableId = undefined;

  /** originDb */
  originDb = '';

  /** originDbId */
  originDbId = undefined;

  /** originDbType */
  originDbType = '';

  /** physTableId */
  physTableId = undefined;

  /** physTableName */
  physTableName = '';

  /** slaveDb */
  slaveDb = '';

  /** slaveDbId */
  slaveDbId = undefined;

  /** slaveDbType */
  slaveDbType = '';

  /** status */
  status = '';
}

class PaginatedResult {
  /** count */
  count = undefined;

  /** list */
  list = [];
}

class PhysColMapping {
  /** physColName */
  physColName = '';

  /** physTableName */
  physTableName = '';
}

class PhysicalTableDO {
  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** cacheMinutes */
  cacheMinutes = undefined;

  /** canWrite */
  canWrite = false;

  /** cn */
  cn = '';

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** dbId */
  dbId = undefined;

  /** dbName */
  dbName = '';

  /** dbType */
  dbType = '';

  /** deployerId */
  deployerId = '';

  /** deployerName */
  deployerName = '';

  /** des */
  des = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtDeploy */
  gmtDeploy = '';

  /** gmtModified */
  gmtModified = '';

  /** hasWaitingCol */
  hasWaitingCol = false;

  /** id */
  id = undefined;

  /** isCache */
  isCache = false;

  /** isLogOpen */
  isLogOpen = false;

  /** isMasterTable */
  isMasterTable = false;

  /** lastCacheDate */
  lastCacheDate = undefined;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** logicTableId */
  logicTableId = undefined;

  /** logicTableName */
  logicTableName = '';

  /** source */
  source = '';

  /** status */
  status = '';
}

class ResObject {
  /** code */
  code = undefined;

  /** data */
  data = new DataSourceBO();

  /** message */
  message = '';
}

class ResultObject {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** message */
  message = '';
}

class SourceActionBO {
  /** action */
  action = '';

  /** content */
  content = '';

  /** sourceId */
  sourceId = undefined;

  /** sourceIds */
  sourceIds = '';

  /** sourceType */
  sourceType = '';
}

class SqlContainerBO {
  /** params */
  params = [];

  /** tableId */
  tableId = undefined;
}

class SqlMetaDO {
  /** adminId */
  adminId = '';

  /** admins */
  admins = [];

  /** applyOrderUrl */
  applyOrderUrl = '';

  /** auditorId */
  auditorId = '';

  /** auditorName */
  auditorName = '';

  /** bpmId */
  bpmId = '';

  /** callCnt7d */
  callCnt7d = undefined;

  /** cn */
  cn = '';

  /** columnMetaList */
  columnMetaList = [];

  /** creatorId */
  creatorId = '';

  /** creatorName */
  creatorName = '';

  /** deployerId */
  deployerId = '';

  /** deployerName */
  deployerName = '';

  /** des */
  des = '';

  /** descText */
  descText = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtDeploy */
  gmtDeploy = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** isRt */
  isRt = false;

  /** lastOpId */
  lastOpId = '';

  /** lastOpName */
  lastOpName = '';

  /** logicTableId */
  logicTableId = undefined;

  /** logicTableName */
  logicTableName = '';

  /** origin */
  origin = '';

  /** owner */
  owner = new EmpBO();

  /** ownerId */
  ownerId = '';

  /** ownerName */
  ownerName = '';

  /** owners */
  owners = [];

  /** params */
  params = '';

  /** similarIds */
  similarIds = '';

  /** sqlName */
  sqlName = '';

  /** statement */
  statement = '';

  /** status */
  status = '';
}

class SqlParamBO {
  /** displayName */
  displayName = '';

  /** optional */
  optional = false;

  /** paramName */
  paramName = '';

  /** paramType */
  paramType = '';

  /** sampleValue */
  sampleValue = '';
}

class TableSearchDTO {
  /** bizUnitId */
  bizUnitId = '';

  /** bizUnitName */
  bizUnitName = '';

  /** createTime */
  createTime = '';

  /** dataLayer */
  dataLayer = '';

  /** desc */
  desc = '';

  /** developMode */
  developMode = '';

  /** dpOwner */
  dpOwner = '';

  /** dpProjectId */
  dpProjectId = '';

  /** dpProjectName */
  dpProjectName = '';

  /** dpTenantId */
  dpTenantId = '';

  /** entityType */
  entityType = '';

  /** env */
  env = '';

  /** guid */
  guid = '';

  /** logicSubType */
  logicSubType = '';

  /** modelType */
  modelType = '';

  /** name */
  name = '';

  /** nameCn */
  nameCn = '';

  /** owner */
  owner = '';

  /** ownerNickName */
  ownerNickName = '';

  /** phyFileSize */
  phyFileSize = undefined;

  /** subType */
  subType = '';

  /** tableId */
  tableId = '';

  /** tableType */
  tableType = '';
}

class TypeEnumsDO {
  /** des */
  des = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** pid */
  pid = undefined;

  /** sequence */
  sequence = undefined;

  /** type */
  type = undefined;

  /** value */
  value = undefined;
}

class User {
  /** appName */
  appName = '';

  /** name */
  name = '';

  /** password */
  password = '';

  /** type */
  type = undefined;
}

class UserChargeDO {
  /** aliWang */
  aliWang = '';

  /** authId */
  authId = undefined;

  /** bpmId */
  bpmId = '';

  /** buMail */
  buMail = '';

  /** bucId */
  bucId = undefined;

  /** deptName */
  deptName = '';

  /** empId */
  empId = '';

  /** empStatus */
  empStatus = undefined;

  /** id */
  id = undefined;

  /** isAdmin */
  isAdmin = false;

  /** loginAccount */
  loginAccount = '';

  /** name */
  name = '';

  /** nickName */
  nickName = '';

  /** originalEmpId */
  originalEmpId = '';

  /** realName */
  realName = '';

  /** status */
  status = '';

  /** tbWang */
  tbWang = '';
}

export const oneService = {
  BaseInfoBO,
  BriefColumn,
  CallResult,
  Catalog,
  ChangeCheckRes,
  ChangefreeApprover,
  Column,
  ColumnBO,
  ColumnDO,
  DataSourceBO,
  DataSourceEnvBO,
  DataVerifyParam,
  DataVerifyParamResultBO,
  DataVerifyResultBO,
  DatabaseBO,
  DataphinColumnPermissionBO,
  DataphinPermissionBO,
  DataphinRefluxConfigBO,
  DepartmentBO,
  DeployRecordDO,
  DtmktHBaseColumnBO,
  DtmktHBaseRowkeyBO,
  DtmktHBaseTableBO,
  DtmktLogicDetailResponse,
  DtmktLogicTableBO,
  DtmktLogicTableDetailBO,
  DtmktPhysColumnBO,
  DtmktPhysTableBO,
  DtmktSqlIDBO,
  EmpBO,
  ExecuteSql,
  FreezeInfo,
  FuseInfo,
  HbaseAppForm,
  HbaseColumnForm,
  HbaseMetaForm,
  HbaseRouteForm,
  HbaseRowkeyForm,
  IdNameDO,
  LogicDerivedDO,
  LogicKeyDO,
  LogicMetaParam,
  LogicTableBO,
  LogicTableDO,
  LogicTablePK,
  LogicalColumn,
  LogicalTable,
  Map,
  MethodParam,
  Os2PlanBO,
  PaginatedResult,
  PhysColMapping,
  PhysicalTableDO,
  ResObject,
  ResultObject,
  SourceActionBO,
  SqlContainerBO,
  SqlMetaDO,
  SqlParamBO,
  TableSearchDTO,
  TypeEnumsDO,
  User,
  UserChargeDO,
};
