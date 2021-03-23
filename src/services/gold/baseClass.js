class AggregationAnalysisParam {
  /** aggregation */
  aggregation = [];

  /** compGroup */
  compGroup = undefined;

  /** func */
  func = '';

  /** group */
  group = undefined;

  /** view */
  view = undefined;
}

class AlarmInfo {
  /** interval */
  interval = undefined;

  /** method */
  method = '';

  /** msg */
  msg = '';

  /** receiver */
  receiver = '';

  /** ruleId */
  ruleId = undefined;

  /** ruleName */
  ruleName = '';
}

class AnalysisModuleParam {
  /** desc */
  desc = '';

  /** id */
  id = undefined;

  /** labels */
  labels = [];

  /** name */
  name = '';

  /** template */
  template = undefined;

  /** type */
  type = 'single_dimension';

  /** version */
  version = undefined;
}

class ApplyGroupPackageParam {
  /** context */
  context = [];

  /** expire */
  expire = undefined;

  /** packageId */
  packageId = undefined;

  /** systemId */
  systemId = '';

  /** type */
  type = '';
}

class AvailableControl {
  /** aggregation */
  aggregation = [];

  /** filter */
  filter = [];
}

class BatchEditLabelDTO {
  /** defaultDetail */
  defaultDetail = false;

  /** detail */
  detail = false;

  /** labelIds */
  labelIds = [];
}

class BhvParam {
  /** bhvMetaId */
  bhvMetaId = undefined;

  /** dimFilters */
  dimFilters = [];

  /** endDay */
  endDay = '';

  /** startDay */
  startDay = '';

  /** timeType */
  timeType = '';

  /** timespan */
  timespan = undefined;

  /** valueFilters */
  valueFilters = [];
}

class BucUserDTO {
  /** businessUnit */
  businessUnit = '';

  /** deptName */
  deptName = '';

  /** name */
  name = '';

  /** nick */
  nick = '';

  /** workId */
  workId = '';
}

class CatalogDTO {
  /** depth */
  depth = undefined;

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** objectId */
  objectId = undefined;

  /** orderNo */
  orderNo = undefined;

  /** parentId */
  parentId = undefined;
}

class CatalogOrderDTO {
  /** id */
  id = undefined;

  /** objectId */
  objectId = undefined;

  /** targetOrderNo */
  targetOrderNo = undefined;
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

  /** gray_strategy */
  gray_strategy = new GrayStrategyInfoDTO();

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

class CommonOperationVO {
  /** status */
  status = undefined;

  /** tip */
  tip = '';
}

class ControlContentDTO {
  /** dimensionTable */
  dimensionTable = new DimensionTableDTO();

  /** openSearch */
  openSearch = '';

  /** permissionTable */
  permissionTable = new PermissionTableDTO();

  /** valueTemplate */
  valueTemplate = new ValueTemplateDTO();
}

class CountParam {
  /** dsId */
  dsId = undefined;
}

class CrossSystemParam {
  /** applicationWay */
  applicationWay = '';

  /** context */
  context = [];

  /** expiredDate */
  expiredDate = undefined;

  /** groupList */
  groupList = [];

  /** systemId */
  systemId = '';

  /** versionId */
  versionId = undefined;
}

class CrowdLabBhvCondition {
  /** crowdLabBhvProduceParam */
  crowdLabBhvProduceParam = new CrowdLabBhvProduceParam();

  /** desc */
  desc = '';

  /** expiredDate */
  expiredDate = undefined;

  /** groupName */
  groupName = '';

  /** id */
  id = undefined;

  /** isDynamic */
  isDynamic = false;

  /** isOpen */
  isOpen = false;

  /** versionId */
  versionId = undefined;

  /** viewData */
  viewData = '';
}

class CrowdLabBhvProduceParam {
  /** bhvsInfo */
  bhvsInfo = [];
}

class DimFieldFilter {
  /** dimField */
  dimField = '';

  /** dimId */
  dimId = undefined;

  /** dimValues */
  dimValues = [];
}

class DimFilter {
  /** dimFieldFilters */
  dimFieldFilters = [];
}

class DimensionTableDTO {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

class EngineConfig {
  /** countParam */
  countParam = new CountParam();

  /** masterDsId */
  masterDsId = undefined;

  /** masterTableParam */
  masterTableParam = new MasterTableParam();

  /** perspectiveParam */
  perspectiveParam = new PerspectiveParam();

  /** segmentParam */
  segmentParam = new SegmentParam();
}

class FieldBizType {
  /** format */
  format = '';

  /** sub */
  sub = {};

  /** value */
  value = '';
}

class FieldParam {
  /** bizType */
  bizType = new FieldBizType();

  /** name */
  name = '';
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

class GrayBatchConfigDTO {
  /** minMonitorTime */
  minMonitorTime = undefined;

  /** monitorInfo */
  monitorInfo = undefined;

  /** monitorTimeLeft */
  monitorTimeLeft = undefined;

  /** monitorTimeOk */
  monitorTimeOk = false;

  /** monitorType */
  monitorType = '';
}

class GrayStrategyInfoDTO {
  /** grayBatchConfig */
  grayBatchConfig = [];

  /** minBatchSum */
  minBatchSum = undefined;

  /** pauseTime */
  pauseTime = undefined;

  /** pauseType */
  pauseType = '';

  /** properties */
  properties = undefined;

  /** rollbackType */
  rollbackType = '';
}

class GroupCrossVersionVO {
  /** applicationWay */
  applicationWay = '';

  /** expiredDate */
  expiredDate = undefined;

  /** groupLimited */
  groupLimited = '';

  /** groupList */
  groupList = [];

  /** targetVersionId */
  targetVersionId = undefined;
}

class GroupShareParam {
  /** expireDate */
  expireDate = '';

  /** groupId */
  groupId = undefined;

  /** groupList */
  groupList = [];

  /** workNumberList */
  workNumberList = [];
}

class GtcApp {
  /** activityEndDate */
  activityEndDate = '';

  /** activityId */
  activityId = '';

  /** activityName */
  activityName = '';

  /** activityStartDate */
  activityStartDate = '';

  /** config */
  config = undefined;

  /** creator */
  creator = '';

  /** extraInfo */
  extraInfo = undefined;

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** matchActivityId */
  matchActivityId = '';

  /** matchActivityName */
  matchActivityName = '';

  /** name */
  name = '';

  /** remark */
  remark = '';

  /** sceneDim */
  sceneDim = undefined;

  /** sceneId */
  sceneId = '';

  /** status */
  status = '';

  /** versionId */
  versionId = undefined;
}

class GtcCrowd {
  /** code */
  code = '';

  /** creator */
  creator = '';

  /** crowdConfig */
  crowdConfig = undefined;

  /** crowdField */
  crowdField = '';

  /** description */
  description = '';

  /** extraInfo */
  extraInfo = undefined;

  /** filterField */
  filterField = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** isView */
  isView = false;

  /** name */
  name = '';

  /** tableName */
  tableName = '';

  /** tablePartition */
  tablePartition = '';

  /** userField */
  userField = '';

  /** versionId */
  versionId = undefined;
}

class Hook {
  /** config */
  config = undefined;

  /** type */
  type = '';
}

class IPCrowdLabCondition {
  /** desc */
  desc = '';

  /** expiredDate */
  expiredDate = undefined;

  /** groupName */
  groupName = '';

  /** id */
  id = undefined;

  /** ipLabProduceParam */
  ipLabProduceParam = new IPLabProduceParam();

  /** isDynamic */
  isDynamic = false;

  /** isOpen */
  isOpen = false;

  /** versionId */
  versionId = undefined;

  /** viewData */
  viewData = '';

  /** workNo */
  workNo = '';
}

class IPLabProduceParam {
  /** categoryValue */
  categoryValue = '';

  /** domain */
  domain = '';

  /** endDate */
  endDate = '';

  /** ip */
  ip = '';

  /** startDate */
  startDate = '';

  /** userLayer */
  userLayer = '';
}

class IndustryVO {
  /** authStatus */
  authStatus = '';

  /** desc */
  desc = '';

  /** gmtModify */
  gmtModify = '';

  /** industryId */
  industryId = undefined;

  /** industryName */
  industryName = '';

  /** modifier */
  modifier = new BucUserDTO();

  /** operation */
  operation = undefined;

  /** owner */
  owner = new BucUserDTO();

  /** processJumpLink */
  processJumpLink = '';

  /** versionId */
  versionId = undefined;
}

class InputValue {
  /** name */
  name = '';

  /** value */
  value = [];
}

class InteractiveConvertParam {
  /** groupIds */
  groupIds = [];

  /** labelIds */
  labelIds = [];
}

class Label {
  /** displayType */
  displayType = '';

  /** group */
  group = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** selected */
  selected = false;
}

class LabelAnalysisConfig {
  /** control */
  control = 'defaultControl';

  /** value */
  value = undefined;
}

class LabelDTO {
  /** analysis */
  analysis = new LabelAnalysisConfig();

  /** availableControl */
  availableControl = new AvailableControl();

  /** catalogId */
  catalogId = undefined;

  /** catalogIds */
  catalogIds = [];

  /** controlContent */
  controlContent = new ControlContentDTO();

  /** defaultValue */
  defaultValue = '';

  /** descr */
  descr = '';

  /** detailAvailable */
  detailAvailable = false;

  /** fieldBizSubType */
  fieldBizSubType = '';

  /** fieldBizType */
  fieldBizType = '';

  /** fieldDataType */
  fieldDataType = '';

  /** fieldName */
  fieldName = '';

  /** filterControl */
  filterControl = [];

  /** isPreFilter */
  isPreFilter = false;

  /** labelId */
  labelId = undefined;

  /** name */
  name = '';

  /** preFilterOrder */
  preFilterOrder = undefined;

  /** projectId */
  projectId = undefined;

  /** sourceTable */
  sourceTable = '';

  /** useType */
  useType = [];

  /** vControlContent */
  vControlContent = new ControlContentDTO();

  /** vFilterControl */
  vFilterControl = '';
}

class Map {}

class MarketApplyGroupVO {
  /** groupList */
  groupList = [];

  /** sourceVersionId */
  sourceVersionId = undefined;

  /** targetVersionId */
  targetVersionId = undefined;
}

class MasterTableParam {
  /** pkFields */
  pkFields = [];

  /** pkTypes */
  pkTypes = [];

  /** tableName */
  tableName = '';
}

class NameId {
  /** id */
  id = '';

  /** name */
  name = '';
}

class ObjectParam {
  /** appId */
  appId = undefined;

  /** approver */
  approver = new BucUserDTO();

  /** buNo */
  buNo = '';

  /** descr */
  descr = '';

  /** engineConfig */
  engineConfig = new EngineConfig();

  /** group */
  group = '';

  /** id */
  id = undefined;

  /** isOpen */
  isOpen = false;

  /** name */
  name = '';

  /** type */
  type = '';
}

class OperationVO {
  /** analysis */
  analysis = undefined;

  /** cross */
  cross = undefined;

  /** delete */
  delete = undefined;

  /** download */
  download = undefined;

  /** edit */
  edit = undefined;

  /** expand */
  expand = undefined;

  /** refer */
  refer = undefined;

  /** rename */
  rename = undefined;

  /** system */
  system = undefined;

  /** track */
  track = undefined;
}

class PermissionSetting {
  /** authValue */
  authValue = '';

  /** id */
  id = undefined;

  /** type */
  type = '';
}

class PermissionTableDTO {
  /** desc */
  desc = '';

  /** id */
  id = '';

  /** name */
  name = '';
}

class PerspectiveParam {
  /** dsId */
  dsId = undefined;
}

class PreviewParam {
  /** download */
  download = false;

  /** group */
  group = '';

  /** labels */
  labels = '';

  /** order */
  order = '';
}

class ResultVO {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** log */
  log = '';

  /** message */
  message = '';

  /** traceId */
  traceId = '';
}

class SegmentParam {
  /** dsId */
  dsId = undefined;

  /** dumpToDsId */
  dumpToDsId = undefined;

  /** dumpToOdpsTableName */
  dumpToOdpsTableName = '';

  /** needRealTime */
  needRealTime = false;
}

class SmartJob {
  /** appInfo */
  appInfo = undefined;

  /** creator */
  creator = '';

  /** desc */
  desc = '';

  /** endTime */
  endTime = '';

  /** env */
  env = undefined;

  /** extraInfo */
  extraInfo = undefined;

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** hooks */
  hooks = [];

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** parameters */
  parameters = undefined;

  /** serviceId */
  serviceId = undefined;

  /** serviceName */
  serviceName = '';

  /** startTime */
  startTime = '';

  /** status */
  status = '';

  /** triggers */
  triggers = [];
}

class StrategyGroupVO {
  /** amount */
  amount = '';

  /** authStatus */
  authStatus = '';

  /** desc */
  desc = '';

  /** fromType */
  fromType = undefined;

  /** fromTypeName */
  fromTypeName = '';

  /** groupStatus */
  groupStatus = '';

  /** id */
  id = undefined;

  /** industryId */
  industryId = undefined;

  /** modifier */
  modifier = new BucUserDTO();

  /** name */
  name = '';

  /** operationVO */
  operationVO = new OperationVO();

  /** owner */
  owner = new BucUserDTO();

  /** processJumpLink */
  processJumpLink = '';

  /** srategyGroupStatus */
  srategyGroupStatus = undefined;

  /** srategyGroupStatusName */
  srategyGroupStatusName = '';

  /** status */
  status = undefined;

  /** type */
  type = undefined;

  /** typeName */
  typeName = '';

  /** updateDate */
  updateDate = '';
}

class SystemConfigDTO {
  /** accessId */
  accessId = '';

  /** accessKeySecret */
  accessKeySecret = '';

  /** bucket */
  bucket = '';

  /** creator */
  creator = '';

  /** dumpToOdps */
  dumpToOdps = '';

  /** endpoint */
  endpoint = '';

  /** exportAccess */
  exportAccess = [];

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModify */
  gmtModify = '';

  /** id */
  id = undefined;

  /** includeSql */
  includeSql = false;

  /** integrationPurpose */
  integrationPurpose = '';

  /** modifier */
  modifier = '';

  /** productOwner */
  productOwner = new BucUserDTO();

  /** pushBackUrl */
  pushBackUrl = '';

  /** supportClassify */
  supportClassify = false;

  /** supportCyclePush */
  supportCyclePush = false;

  /** supportPush */
  supportPush = false;

  /** supportTrack */
  supportTrack = false;

  /** systemId */
  systemId = '';

  /** systemName */
  systemName = '';

  /** systemUrl */
  systemUrl = '';

  /** technologyOwner */
  technologyOwner = new BucUserDTO();

  /** trackUrl */
  trackUrl = '';
}

class SystemIntegrationParam {
  /** fields */
  fields = [];

  /** id */
  id = undefined;

  /** objectId */
  objectId = undefined;

  /** qps */
  qps = undefined;

  /** systemId */
  systemId = '';
}

class TableParam {
  /** baseJoinKey */
  baseJoinKey = [];

  /** baseKey */
  baseKey = [];

  /** baseKeyType */
  baseKeyType = [];

  /** dataSourceId */
  dataSourceId = '';

  /** descr */
  descr = '';

  /** fieldList */
  fieldList = [];

  /** goodData */
  goodData = false;

  /** id */
  id = undefined;

  /** isBase */
  isBase = false;

  /** joinKey */
  joinKey = [];

  /** objectId */
  objectId = undefined;

  /** tableName */
  tableName = '';
}

class TagDTO {
  /** catalogId */
  catalogId = undefined;

  /** fieldId */
  fieldId = undefined;

  /** gdTagId */
  gdTagId = undefined;

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** objectId */
  objectId = undefined;

  /** orderNo */
  orderNo = undefined;
}

class TagOrderDTO {
  /** id */
  id = undefined;

  /** objectId */
  objectId = undefined;

  /** targetOrderNo */
  targetOrderNo = undefined;
}

class TaskParam {
  /** act */
  act = '';

  /** business */
  business = undefined;

  /** compAct */
  compAct = '';

  /** creator */
  creator = '';

  /** dim */
  dim = [];

  /** dimScope */
  dimScope = '';

  /** groupId */
  groupId = '';

  /** name */
  name = '';

  /** sceneId */
  sceneId = '';

  /** taskStartDate */
  taskStartDate = '';

  /** type */
  type = '';
}

class Trigger {
  /** config */
  config = undefined;

  /** extraInfo */
  extraInfo = undefined;

  /** type */
  type = '';
}

class TypeLabel {
  /** list */
  list = [];

  /** type */
  type = 'filter';
}

class UploadInteractiveAnalysisParam {
  /** condition */
  condition = '';

  /** desc */
  desc = '';

  /** expireDate */
  expireDate = '';

  /** groupId */
  groupId = undefined;

  /** isDynamic */
  isDynamic = false;

  /** isOpen */
  isOpen = false;

  /** name */
  name = '';

  /** versionId */
  versionId = undefined;
}

class ValueFilter {
  /** op */
  op = '';

  /** value */
  value = '';

  /** valueField */
  valueField = '';

  /** valueId */
  valueId = undefined;

  /** valueOp */
  valueOp = '';
}

class ValueTemplateDTO {
  /** separator */
  separator = '';

  /** textarea */
  textarea = '';
}

export const gold = {
  AggregationAnalysisParam,
  AlarmInfo,
  AnalysisModuleParam,
  ApplyGroupPackageParam,
  AvailableControl,
  BatchEditLabelDTO,
  BhvParam,
  BucUserDTO,
  CatalogDTO,
  CatalogOrderDTO,
  ChangeCheckRes,
  ChangefreeApprover,
  CommonOperationVO,
  ControlContentDTO,
  CountParam,
  CrossSystemParam,
  CrowdLabBhvCondition,
  CrowdLabBhvProduceParam,
  DimFieldFilter,
  DimFilter,
  DimensionTableDTO,
  EngineConfig,
  FieldBizType,
  FieldParam,
  FreezeInfo,
  FuseInfo,
  GrayBatchConfigDTO,
  GrayStrategyInfoDTO,
  GroupCrossVersionVO,
  GroupShareParam,
  GtcApp,
  GtcCrowd,
  Hook,
  IPCrowdLabCondition,
  IPLabProduceParam,
  IndustryVO,
  InputValue,
  InteractiveConvertParam,
  Label,
  LabelAnalysisConfig,
  LabelDTO,
  Map,
  MarketApplyGroupVO,
  MasterTableParam,
  NameId,
  ObjectParam,
  OperationVO,
  PermissionSetting,
  PermissionTableDTO,
  PerspectiveParam,
  PreviewParam,
  ResultVO,
  SegmentParam,
  SmartJob,
  StrategyGroupVO,
  SystemConfigDTO,
  SystemIntegrationParam,
  TableParam,
  TagDTO,
  TagOrderDTO,
  TaskParam,
  Trigger,
  TypeLabel,
  UploadInteractiveAnalysisParam,
  ValueFilter,
  ValueTemplateDTO,
};
