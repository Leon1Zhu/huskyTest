class AccountAssetsRelExtBO {
  /** applyData */
  applyData = '';

  /** applyReason */
  applyReason = '';

  /** applyStatus */
  applyStatus = '';

  /** bizScopeName */
  bizScopeName = '';

  /** cateId */
  cateId = undefined;

  /** cateName */
  cateName = '';

  /** enoughCapacity */
  enoughCapacity = false;

  /** scene */
  scene = '';
}

class AddLabelParam {
  /** accuracy */
  accuracy = undefined;

  /** belongProjectId */
  belongProjectId = undefined;

  /** isVersion */
  isVersion = false;

  /** labelLists */
  labelLists = [];

  /** nodeId */
  nodeId = '';

  /** odpsTable */
  odpsTable = '';

  /** primaryKeyList */
  primaryKeyList = [];

  /** source */
  source = '';
}

class AddOneidParam {
  /** cateId */
  cateId = undefined;

  /** dataSchema */
  dataSchema = '';

  /** description */
  description = '';

  /** encType */
  encType = '';

  /** introduce */
  introduce = '';

  /** name */
  name = '';

  /** securityLevel */
  securityLevel = '';

  /** type */
  type = '';
}

class AoneBO {
  /** aoneId */
  aoneId = undefined;

  /** aoneName */
  aoneName = '';
}

class ApplyingResourceBO {
  /** bpmsId */
  bpmsId = '';

  /** name */
  name = '';

  /** owner */
  owner = new EmpBO();

  /** resourceType */
  resourceType = '';

  /** status */
  status = '';
}

class AssetApply4BpmsParam {
  /** appName */
  appName = '';

  /** applyReason */
  applyReason = '';

  /** creator */
  creator = '';

  /** entityType */
  entityType = '';

  /** projectId */
  projectId = undefined;

  /** requestId */
  requestId = '';

  /** responseIds */
  responseIds = '';

  /** serviceId */
  serviceId = undefined;

  /** unityRequestId */
  unityRequestId = undefined;
}

class AssetApplyParam {
  /** applyReason */
  applyReason = '';

  /** assetIdList */
  assetIdList = [];

  /** assetScopes */
  assetScopes = [];

  /** assetType */
  assetType = '';

  /** businessScopeId */
  businessScopeId = undefined;

  /** creatorId */
  creatorId = '';

  /** detailCapacity */
  detailCapacity = '';

  /** endTime */
  endTime = '';

  /** enoughCapacity */
  enoughCapacity = false;
}

class AssetGroupBO {
  /** assetGroupExtendInfoBO */
  assetGroupExtendInfoBO = new AssetGroupExtendInfoBO();

  /** code */
  code = '';

  /** creator */
  creator = '';

  /** description */
  description = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** keyType */
  keyType = '';

  /** labelIds */
  labelIds = [];

  /** projectId */
  projectId = undefined;

  /** serviceId */
  serviceId = undefined;

  /** targetApp */
  targetApp = '';
}

class AssetGroupExtendInfoBO {
  /** admin */
  admin = '';

  /** configStatus */
  configStatus = '';

  /** syncStatus */
  syncStatus = '';

  /** syncedCount */
  syncedCount = undefined;

  /** workflowName */
  workflowName = '';

  /** workflowTaskId */
  workflowTaskId = undefined;
}

class AssetPermissionBO {
  /** assetId */
  assetId = undefined;

  /** assetType */
  assetType = '';

  /** hasPermission */
  hasPermission = false;

  /** scenePermissions */
  scenePermissions = new ScenePermission();
}

class AssetScope {
  /** assetId */
  assetId = undefined;

  /** hjcCateId */
  hjcCateId = undefined;

  /** hjcCateName */
  hjcCateName = '';

  /** scene */
  scene = '';
}

class AuthLabelItemVO {
  /** applyDate */
  applyDate = '';

  /** applyUser */
  applyUser = new Employee();

  /** authStatus */
  authStatus = '';

  /** bpmsId */
  bpmsId = '';

  /** creatorId */
  creatorId = '';

  /** dataTypeId */
  dataTypeId = undefined;

  /** endDate */
  endDate = '';

  /** id */
  id = undefined;

  /** idType */
  idType = new IdType();

  /** labelDescription */
  labelDescription = '';

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** useMode */
  useMode = '';
}

class AuthLabelListParm {
  /** 目标系统 */
  appName = '';

  /** authStatus */
  authStatus = '';

  /** 实体类型 */
  entityType = '';

  /** ID类型 */
  inputIdType = '';

  /** keyword */
  keyword = '';

  /** order */
  order = '';

  /** orderBy */
  orderBy = '';

  /** page */
  page = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 项目ID */
  projectId = undefined;

  /** requestId */
  requestId = '';

  /** responseIds */
  responseIds = undefined;

  /** 标签范围，my/all */
  scope = '';

  /** 服务ID */
  serviceId = undefined;
}

class AuthType {
  /** inputAuthMsg */
  inputAuthMsg = '';

  /** inputAuthType */
  inputAuthType = '';

  /** inputBpmsLink */
  inputBpmsLink = '';

  /** inputTableName */
  inputTableName = '';

  /** outputAuthMsg */
  outputAuthMsg = '';

  /** outputAuthType */
  outputAuthType = '';

  /** outputTableName */
  outputTableName = '';

  /** taskId */
  taskId = undefined;

  /** type */
  type = '';

  /** value */
  value = '';
}

class BehaviorItemBO {
  /** authStatus */
  authStatus = '';

  /** belongProjectId */
  belongProjectId = undefined;

  /** bpmsId */
  bpmsId = '';

  /** cateId */
  cateId = undefined;

  /** creatorId */
  creatorId = '';

  /** description */
  description = '';

  /** dwType */
  dwType = '';

  /** entityType */
  entityType = '';

  /** env */
  env = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** isPublic */
  isPublic = false;

  /** lifecycle */
  lifecycle = undefined;

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** ownerId */
  ownerId = '';

  /** owners */
  owners = new EmpBO();

  /** platform */
  platform = '';

  /** status */
  status = '';

  /** statusInfo */
  statusInfo = new StatusInfo();

  /** targetCn */
  targetCn = '';

  /** targetEn */
  targetEn = '';
}

class BhvBehaviorDO {
  /** belongProjectId */
  belongProjectId = undefined;

  /** bhvMetaList */
  bhvMetaList = [];

  /** cateId */
  cateId = undefined;

  /** categoryDO */
  categoryDO = new CategoryDO();

  /** creatorId */
  creatorId = '';

  /** description */
  description = '';

  /** dwType */
  dwType = '';

  /** entityType */
  entityType = '';

  /** entityTypeName */
  entityTypeName = '';

  /** env */
  env = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** isPublic */
  isPublic = false;

  /** lifecycle */
  lifecycle = undefined;

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** ownerId */
  ownerId = '';

  /** owners */
  owners = [];

  /** platform */
  platform = '';

  /** status */
  status = '';

  /** statusInfo */
  statusInfo = new StatusInfo();

  /** tableStatusInfo */
  tableStatusInfo = new StatusInfo();

  /** targetCn */
  targetCn = '';

  /** targetEn */
  targetEn = '';
}

class BhvFieldDO {
  /** alias */
  alias = '';

  /** dataType */
  dataType = '';

  /** description */
  description = '';

  /** dimField */
  dimField = '';

  /** dimNameField */
  dimNameField = '';

  /** dimTable */
  dimTable = '';

  /** dimTableProject */
  dimTableProject = '';

  /** domainId */
  domainId = undefined;

  /** enumValues */
  enumValues = '';

  /** id */
  id = undefined;

  /** isBind */
  isBind = false;

  /** isDimTableEnum */
  isDimTableEnum = false;

  /** isEnum */
  isEnum = false;

  /** isSystem */
  isSystem = false;

  /** logicFieldId */
  logicFieldId = undefined;

  /** metaId */
  metaId = undefined;

  /** name */
  name = '';

  /** nameEn */
  nameEn = '';

  /** phyFieldWithUdf */
  phyFieldWithUdf = '';

  /** sample */
  sample = '';

  /** sampleList */
  sampleList = [];

  /** schemaDescription */
  schemaDescription = '';

  /** schemaName */
  schemaName = '';

  /** schemaType */
  schemaType = '';

  /** secureLevel */
  secureLevel = '';

  /** standardFieldName */
  standardFieldName = '';

  /** status */
  status = '';

  /** statusInfo */
  statusInfo = new StatusInfo();

  /** storageDataType */
  storageDataType = '';

  /** storageFieldId */
  storageFieldId = undefined;

  /** storageFieldName */
  storageFieldName = '';

  /** storageIsFixed */
  storageIsFixed = false;

  /** storageTableId */
  storageTableId = undefined;
}

class BhvMetaDO {
  /** belongProjectId */
  belongProjectId = undefined;

  /** bhvId */
  bhvId = undefined;

  /** bhvOutputNode */
  bhvOutputNode = '';

  /** bpmsId */
  bpmsId = '';

  /** cateId */
  cateId = undefined;

  /** categoryDO */
  categoryDO = new CategoryDO();

  /** code */
  code = '';

  /** creatorId */
  creatorId = '';

  /** description */
  description = '';

  /** dwType */
  dwType = '';

  /** entityType */
  entityType = '';

  /** env */
  env = '';

  /** fieldList */
  fieldList = [];

  /** filterConditions */
  filterConditions = '';

  /** firstAddedTime */
  firstAddedTime = '';

  /** fullTableName */
  fullTableName = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** idColumn */
  idColumn = '';

  /** idType */
  idType = '';

  /** isPublic */
  isPublic = false;

  /** isStore */
  isStore = false;

  /** keyStorageFieldId */
  keyStorageFieldId = undefined;

  /** lifecycle */
  lifecycle = undefined;

  /** msg */
  msg = '';

  /** name */
  name = '';

  /** operatorId */
  operatorId = '';

  /** operators */
  operators = [];

  /** outputNode */
  outputNode = '';

  /** ownerId */
  ownerId = '';

  /** owners */
  owners = [];

  /** phyProject */
  phyProject = '';

  /** phyStoreType */
  phyStoreType = '';

  /** phyTable */
  phyTable = '';

  /** phyTableType */
  phyTableType = '';

  /** phyTimeField */
  phyTimeField = '';

  /** phyTimeFieldFormatter */
  phyTimeFieldFormatter = '';

  /** phyType */
  phyType = '';

  /** platform */
  platform = '';

  /** preRunResult */
  preRunResult = '';

  /** secureLevel */
  secureLevel = '';

  /** status */
  status = '';

  /** statusInfo */
  statusInfo = new StatusInfo();

  /** storageTableId */
  storageTableId = undefined;

  /** storageTableSeq */
  storageTableSeq = undefined;

  /** targetCn */
  targetCn = '';

  /** targetEn */
  targetEn = '';

  /** testDate */
  testDate = '';

  /** viewName */
  viewName = '';

  /** viewProject */
  viewProject = '';
}

class BhvNameBO {
  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';
}

class BhvParam {
  /** attributeId */
  attributeId = undefined;

  /** attributeName */
  attributeName = '';

  /** bhvId */
  bhvId = undefined;

  /** bhvMetaId */
  bhvMetaId = undefined;

  /** endDay */
  endDay = '';

  /** extraInfo */
  extraInfo = '';

  /** filters */
  filters = [];

  /** objectId */
  objectId = '';

  /** op */
  op = '';

  /** startDay */
  startDay = '';

  /** statisticType */
  statisticType = '';

  /** timeType */
  timeType = '';

  /** timespan */
  timespan = undefined;

  /** values */
  values = [];
}

class BhvParamV2 {
  /** 行为id */
  bhvId = undefined;

  /** scope结束日期 */
  endDay = '';

  /** 扩展信息，前端用 */
  extraInfo = '';

  /** 过滤条件 */
  filters = [];

  /** 唯一id，前端生成 */
  objectId = '';

  /** scope开始日期 */
  startDay = '';

  /** 时间类型，动态/静态 */
  timeType = '';

  /** recent时间配置 */
  timespan = undefined;
}

class BhvPlatform {
  /** checked */
  checked = false;

  /** disabled */
  disabled = false;

  /** name */
  name = '';

  /** platform */
  platform = '';
}

class BhvPreRunResultBO {
  /** allNum */
  allNum = '';

  /** bhvId */
  bhvId = undefined;

  /** canPublish */
  canPublish = false;

  /** columnNames */
  columnNames = [];

  /** dataCreate */
  dataCreate = '';

  /** dataResultSet */
  dataResultSet = [];

  /** statisticalData */
  statisticalData = undefined;

  /** success */
  success = false;

  /** tempTableColumnName */
  tempTableColumnName = '';

  /** tempTableDs */
  tempTableDs = '';

  /** tempTableKeyName */
  tempTableKeyName = '';

  /** tempTableName */
  tempTableName = '';
}

class BhvPreRunSubmitResultBO {
  /** authInfo */
  authInfo = [];

  /** checkSuccess */
  checkSuccess = false;

  /** idList */
  idList = [];
}

class BhvSchemaDO {
  /** creatorId */
  creatorId = '';

  /** dataType */
  dataType = '';

  /** description */
  description = '';

  /** dimField */
  dimField = '';

  /** dimNameField */
  dimNameField = '';

  /** dimTable */
  dimTable = '';

  /** dimTableProject */
  dimTableProject = '';

  /** domainId */
  domainId = '';

  /** domains */
  domains = '';

  /** enumValues */
  enumValues = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** isBind */
  isBind = false;

  /** isDimTableEnum */
  isDimTableEnum = false;

  /** isEnum */
  isEnum = false;

  /** isSystem */
  isSystem = false;

  /** name */
  name = '';

  /** status */
  status = '';

  /** type */
  type = '';
}

class BrandVO {
  /** brandId */
  brandId = undefined;

  /** brandName */
  brandName = '';
}

class BusinessScopeBO {
  /** admins */
  admins = [];

  /** buCode */
  buCode = '';

  /** description */
  description = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** group */
  group = '';

  /** id */
  id = undefined;

  /** isAdmin */
  isAdmin = false;

  /** isMember */
  isMember = false;

  /** linkId */
  linkId = undefined;

  /** mainIdType */
  mainIdType = '';

  /** members */
  members = [];

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** projectId */
  projectId = undefined;

  /** projectName */
  projectName = '';

  /** projectNameCn */
  projectNameCn = '';

  /** selectStatus */
  selectStatus = new SelectStatus();
}

class CateInfo {
  /** cateId */
  cateId = undefined;

  /** cateLevel */
  cateLevel = undefined;

  /** cateName */
  cateName = '';

  /** isLeaf */
  isLeaf = '';
}

class CateProp {
  /** cateId */
  cateId = undefined;

  /** cateName */
  cateName = '';

  /** propertyId */
  propertyId = undefined;

  /** propertyName */
  propertyName = '';
}

class CatePropValue {
  /** cateId */
  cateId = undefined;

  /** cateName */
  cateName = '';

  /** propertyId */
  propertyId = undefined;

  /** propertyName */
  propertyName = '';

  /** valueId */
  valueId = undefined;

  /** valueName */
  valueName = '';
}

class CategoryBO {
  /** cate1Id */
  cate1Id = undefined;

  /** cate1Name */
  cate1Name = '';

  /** cate2Id */
  cate2Id = undefined;

  /** cate2Name */
  cate2Name = '';

  /** cate3Id */
  cate3Id = undefined;

  /** cate3Name */
  cate3Name = '';

  /** cate4Id */
  cate4Id = undefined;

  /** cate4Name */
  cate4Name = '';

  /** cate5Id */
  cate5Id = undefined;

  /** cate5Name */
  cate5Name = '';
}

class CategoryDO {
  /** approverId */
  approverId = '';

  /** bpmsId */
  bpmsId = '';

  /** cate1Id */
  cate1Id = undefined;

  /** cate2Id */
  cate2Id = undefined;

  /** cate3Id */
  cate3Id = undefined;

  /** cate4Id */
  cate4Id = undefined;

  /** cate5Id */
  cate5Id = undefined;

  /** childs */
  childs = [];

  /** cnt */
  cnt = undefined;

  /** creatorId */
  creatorId = '';

  /** description */
  description = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** ids */
  ids = '';

  /** isLeaf */
  isLeaf = false;

  /** level */
  level = undefined;

  /** levelName */
  levelName = '';

  /** name */
  name = '';

  /** pid */
  pid = undefined;

  /** status */
  status = '';

  /** type */
  type = '';
}

class CategoryResponse {
  /** children */
  children = [];

  /** description */
  description = '';

  /** entityCount */
  entityCount = undefined;

  /** id */
  id = undefined;

  /** isLeaf */
  isLeaf = false;

  /** level */
  level = undefined;

  /** levelName */
  levelName = '';

  /** name */
  name = '';

  /** pid */
  pid = undefined;

  /** type */
  type = '';
}

class CheckResult {
  /** canSelect */
  canSelect = false;

  /** msg */
  msg = '';
}

class ClassificationDTO {
  /** classification */
  classification = '';

  /** classificationLevel */
  classificationLevel = '';

  /** classificationTypeName */
  classificationTypeName = '';

  /** createTimeStamp */
  createTimeStamp = '';

  /** entityCategory */
  entityCategory = '';

  /** entityId */
  entityId = '';

  /** entityName */
  entityName = '';

  /** guid */
  guid = '';

  /** propagation */
  propagation = false;

  /** ttl */
  ttl = undefined;

  /** updateTimeStamp */
  updateTimeStamp = '';
}

class Column {
  /** categoryLabel */
  categoryLabel = '';

  /** comment */
  comment = '';

  /** defaultValue */
  defaultValue = '';

  /** extendedlabels */
  extendedlabels = [];

  /** genericTypeList */
  genericTypeList = [];

  /** label */
  label = undefined;

  /** name */
  name = '';

  /** nullable */
  nullable = false;

  /** type */
  type = 'BIGINT';

  /** typeInfo */
  typeInfo = new TypeInfo();
}

class CommonDataResult {
  /** data */
  data = '';

  /** msg */
  msg = '';

  /** res */
  res = false;
}

class CommonItem {
  /** content */
  content = '';

  /** ext */
  ext = undefined;

  /** img */
  img = '';

  /** subContent */
  subContent = [];

  /** title */
  title = new UrlItem();

  /** urls */
  urls = [];
}

class CommonKVResult {
  /** label */
  label = '';

  /** tips */
  tips = '';

  /** type */
  type = '';

  /** url */
  url = '';

  /** value */
  value = undefined;
}

class CreateBusinessScopeParam {
  /** admin */
  admin = '';

  /** description */
  description = '';

  /** diProjectId */
  diProjectId = undefined;

  /** id */
  id = undefined;

  /** mainIdType */
  mainIdType = '';

  /** members */
  members = [];

  /** name */
  name = '';

  /** objectConfId */
  objectConfId = undefined;

  /** tenantId */
  tenantId = undefined;
}

class CrowdBO {
  /** amount */
  amount = '';

  /** authStatus */
  authStatus = '';

  /** authorityTypeEnum */
  authorityTypeEnum = 'EMPTY';

  /** bpmsId */
  bpmsId = '';

  /** businessScopeId */
  businessScopeId = undefined;

  /** businessScopeName */
  businessScopeName = '';

  /** description */
  description = '';

  /** expireTime */
  expireTime = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** owner */
  owner = new EmpBO();
}

class CycleCondition {
  /** id */
  id = undefined;

  /** key */
  key = '';

  /** value */
  value = '';
}

class CycleInfoParam {
  /** 枚举类取值描述 */
  description = '';

  /** 枚举类取值 */
  name = '';
}

class DependentLabelParam {
  /** cycle */
  cycle = '';

  /** labelId */
  labelId = undefined;

  /** lastTimePartition */
  lastTimePartition = '';

  /** name */
  name = '';
}

class DomainDO {
  /** description */
  description = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = '';

  /** name */
  name = '';
}

class EmpBO {
  /** buCode */
  buCode = '';

  /** depName */
  depName = '';

  /** email */
  email = '';

  /** empId */
  empId = '';

  /** empType */
  empType = '';

  /** gender */
  gender = '';

  /** id */
  id = undefined;

  /** jobName */
  jobName = '';

  /** jobType */
  jobType = '';

  /** name */
  name = '';

  /** nickName */
  nickName = '';

  /** oneId */
  oneId = '';

  /** picUrl */
  picUrl = '';
}

class Employee {
  /** empId */
  empId = '';

  /** name */
  name = '';

  /** nickName */
  nickName = '';
}

class EntityType {
  /** cateType */
  cateType = '';

  /** entityName */
  entityName = '';

  /** entityValue */
  entityValue = '';

  /** idType */
  idType = '';
}

class FbiBO {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

class FilterParam {
  /** filterFileId */
  filterFileId = '';

  /** filterFileURL */
  filterFileURL = '';

  /** filterId */
  filterId = undefined;

  /** filterName */
  filterName = '';

  /** filterType */
  filterType = '';

  /** op */
  op = '';

  /** values */
  values = [];
}

class FilterParamV2 {
  /** 文件唯一标识 */
  filterFileId = '';

  /** 文件下载链接 */
  filterFileURL = '';

  /** 字段id */
  filterId = undefined;

  /** 过滤条件手动输入(input)或上传文件(upload) */
  filterType = '';

  /** 关系 */
  op = '';

  /** 计算方式，可选 */
  statisticType = '';

  /** 值 */
  values = [];
}

class FormConfigDO {
  /** content */
  content = '';

  /** id */
  id = undefined;
}

class FuwuItemAuthBO {
  /** applyTime */
  applyTime = '';

  /** applyUser */
  applyUser = new EmpBO();

  /** authStatus */
  authStatus = '';

  /** canTest */
  canTest = false;

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** ownerId */
  ownerId = '';
}

class FuwuItemBO {
  /** callCnt */
  callCnt = undefined;

  /** description */
  description = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** interfaceCnt */
  interfaceCnt = undefined;

  /** isDataReal */
  isDataReal = false;

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** ownerIds */
  ownerIds = '';

  /** owners */
  owners = [];

  /** projectCallCnt */
  projectCallCnt = undefined;

  /** serviceType */
  serviceType = '';

  /** supportGroup */
  supportGroup = '';

  /** templateConfig */
  templateConfig = '';
}

class FuwuItemSimpleBO {
  /** description */
  description = '';

  /** id */
  id = undefined;

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** serviceType */
  serviceType = '';
}

class FuwuOverviewBO {
  /** recentList */
  recentList = [];

  /** recommendList */
  recommendList = [];

  /** totalCount */
  totalCount = undefined;
}

class GprofileAssetBO {
  /** applyDate */
  applyDate = '';

  /** bpmsId */
  bpmsId = '';

  /** endDate */
  endDate = '';

  /** id */
  id = undefined;

  /** labelDescription */
  labelDescription = '';

  /** labelNameCn */
  labelNameCn = '';

  /** labelNameEn */
  labelNameEn = '';

  /** labelValue */
  labelValue = '';

  /** status */
  status = '';
}

class GuardBpmsBO {
  /** guardBpmsLink */
  guardBpmsLink = '';

  /** tableName */
  tableName = '';

  /** taskId */
  taskId = undefined;
}

class HsfType {
  /** children */
  children = [];

  /** defaultValue */
  defaultValue = undefined;

  /** desc */
  desc = '';

  /** hidden */
  hidden = false;

  /** name */
  name = '';

  /** required */
  required = false;

  /** sample */
  sample = '';

  /** type */
  type = '';
}

class IdMappingAssetBO {
  /** applyDate */
  applyDate = '';

  /** bpmsId */
  bpmsId = '';

  /** endDate */
  endDate = '';

  /** requestId */
  requestId = undefined;

  /** requestNameCn */
  requestNameCn = '';

  /** requestNameEn */
  requestNameEn = '';

  /** responseId */
  responseId = undefined;

  /** responseNameCn */
  responseNameCn = '';

  /** responseNameEn */
  responseNameEn = '';

  /** status */
  status = '';
}

class IdType {
  /** description */
  description = '';

  /** id */
  id = undefined;

  /** name */
  name = '';
}

class IdTypeDO {
  /** cateId */
  cateId = undefined;

  /** cateName */
  cateName = '';

  /** children */
  children = [];

  /** childs */
  childs = [];

  /** dataSchema */
  dataSchema = '';

  /** description */
  description = '';

  /** encType */
  encType = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** idTypeDataSchema */
  idTypeDataSchema = new IdTypeDataSchema();

  /** introduce */
  introduce = '';

  /** name */
  name = '';

  /** securityLevel */
  securityLevel = '';

  /** source */
  source = '';

  /** type */
  type = '';

  /** unifyDataId */
  unifyDataId = undefined;
}

class IdTypeDataSchema {
  /** dataFormat */
  dataFormat = '';

  /** dataType */
  dataType = '';

  /** rangeType */
  rangeType = '';

  /** rangeValue */
  rangeValue = undefined;

  /** type */
  type = '';
}

class IndustryInfo {
  /** ind1Id */
  ind1Id = undefined;

  /** ind1Name */
  ind1Name = '';

  /** xcat1Id */
  xcat1Id = undefined;

  /** xcat1Name */
  xcat1Name = '';
}

class JSONObject {}

class LabelApplyStatBO {
  /** applyCnt */
  applyCnt = undefined;

  /** applyMode */
  applyMode = '';
}

class LabelBO {
  /** id */
  id = undefined;

  /** labelBaseInfo */
  labelBaseInfo = new LabelBaseInfo();

  /** labelLogicInfo */
  labelLogicInfo = new LabelLogicInfo();

  /** labelPhysicInfo */
  labelPhysicInfo = new LabelPhysicInfo();
}

class LabelBaseInfo {
  /** accuracy */
  accuracy = undefined;

  /** authStatus */
  authStatus = '';

  /** belongProjectId */
  belongProjectId = undefined;

  /** bizDomainId */
  bizDomainId = '';

  /** bizSource */
  bizSource = '';

  /** bpmsId */
  bpmsId = '';

  /** cateId */
  cateId = undefined;

  /** cateName */
  cateName = '';

  /** category */
  category = new CategoryBO();

  /** coverCnt */
  coverCnt = undefined;

  /** coverCntRange */
  coverCntRange = '';

  /** creatorId */
  creatorId = '';

  /** creatorInfo */
  creatorInfo = new EmpBO();

  /** description */
  description = '';

  /** env */
  env = '';

  /** example */
  example = '';

  /** extendDescription */
  extendDescription = '';

  /** extendInfo */
  extendInfo = '';

  /** firstAddedTime */
  firstAddedTime = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** infoLevel */
  infoLevel = '';

  /** isCooperate */
  isCooperate = false;

  /** isOfficial */
  isOfficial = false;

  /** isPublic */
  isPublic = false;

  /** labelCn */
  labelCn = '';

  /** labelEn */
  labelEn = '';

  /** labelExtendInfo */
  labelExtendInfo = new LabelExtendInfo();

  /** labelGroupId */
  labelGroupId = undefined;

  /** labelGroupNameCn */
  labelGroupNameCn = '';

  /** labelGroupNameEn */
  labelGroupNameEn = '';

  /** lastAddedTime */
  lastAddedTime = '';

  /** operators */
  operators = [];

  /** ownerIds */
  ownerIds = '';

  /** owners */
  owners = [];

  /** platform */
  platform = '';

  /** produceTime */
  produceTime = '';

  /** produceType */
  produceType = undefined;

  /** securityLevel */
  securityLevel = '';

  /** seedCrowSource */
  seedCrowSource = '';

  /** status */
  status = '';

  /** statusInfo */
  statusInfo = new StatusInfo();

  /** testSampleDesc */
  testSampleDesc = '';

  /** valDesc */
  valDesc = '';
}

class LabelBaseParam {
  /** cateId */
  cateId = undefined;

  /** configString */
  configString = '';

  /** copyFromLabelId */
  copyFromLabelId = undefined;

  /** description */
  description = '';

  /** entityType */
  entityType = '';

  /** isPublic */
  isPublic = false;

  /** labelCn */
  labelCn = '';

  /** labelEn */
  labelEn = '';

  /** labelGroupId */
  labelGroupId = undefined;

  /** labelId */
  labelId = undefined;

  /** produceType */
  produceType = undefined;

  /** projectId */
  projectId = undefined;
}

class LabelCallStatBO {
  /** callCnt */
  callCnt = undefined;

  /** callOffIdCnt */
  callOffIdCnt = undefined;

  /** callOlCnt */
  callOlCnt = undefined;

  /** labelUnityId */
  labelUnityId = undefined;

  /** projectCallCnt */
  projectCallCnt = undefined;

  /** projectOffCallCnt */
  projectOffCallCnt = undefined;

  /** projectOlCallCnt */
  projectOlCallCnt = undefined;

  /** projectStatList */
  projectStatList = [];

  /** statDate */
  statDate = '';
}

class LabelCheckApplyResultBO {
  /** authStatus */
  authStatus = '';

  /** checkResult */
  checkResult = new CheckResult();

  /** idType */
  idType = '';

  /** labelId */
  labelId = undefined;

  /** nameCn */
  nameCn = '';

  /** useMode */
  useMode = '';
}

class LabelCheckResultBO {
  /** baselineMsg */
  baselineMsg = '';

  /** labelCnMsg */
  labelCnMsg = '';

  /** labelEn */
  labelEn = '';

  /** labelEnMsg */
  labelEnMsg = '';

  /** res */
  res = false;
}

class LabelConfidenceParam {
  /** description */
  description = '';

  /** hasConfidence */
  hasConfidence = false;

  /** physColEn */
  physColEn = '';

  /** template */
  template = '';

  /** valDataType */
  valDataType = '';

  /** valDistriType */
  valDistriType = '';
}

class LabelDO {
  /** accuracy */
  accuracy = undefined;

  /** accuracyStr */
  accuracyStr = '';

  /** applyTime */
  applyTime = '';

  /** authStatus */
  authStatus = '';

  /** belongProjectId */
  belongProjectId = undefined;

  /** bizDomainId */
  bizDomainId = '';

  /** bizSource */
  bizSource = '';

  /** bpmsId */
  bpmsId = '';

  /** callCnt */
  callCnt = undefined;

  /** callOffIdCnt */
  callOffIdCnt = undefined;

  /** callOlCnt */
  callOlCnt = undefined;

  /** cateId */
  cateId = undefined;

  /** cateName */
  cateName = '';

  /** category */
  category = new CategoryBO();

  /** coverCnt */
  coverCnt = undefined;

  /** coverCntRange */
  coverCntRange = '';

  /** creatorId */
  creatorId = '';

  /** creatorInfo */
  creatorInfo = new EmpBO();

  /** dataSchema */
  dataSchema = new LabelKVDataSchema();

  /** description */
  description = '';

  /** entityType */
  entityType = '';

  /** env */
  env = '';

  /** example */
  example = '';

  /** extInfo */
  extInfo = '';

  /** extendDescription */
  extendDescription = '';

  /** extendInfo */
  extendInfo = '';

  /** filterKey */
  filterKey = '';

  /** firstAddedTime */
  firstAddedTime = '';

  /** fullTableName */
  fullTableName = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** hasConfidence */
  hasConfidence = false;

  /** id */
  id = undefined;

  /** infoLevel */
  infoLevel = '';

  /** isCooperate */
  isCooperate = false;

  /** isMultiKey */
  isMultiKey = false;

  /** isOfficial */
  isOfficial = false;

  /** isPublic */
  isPublic = false;

  /** keyName */
  keyName = '';

  /** keyType */
  keyType = '';

  /** keysInfo */
  keysInfo = '';

  /** keysList */
  keysList = [];

  /** kind */
  kind = '';

  /** labelCn */
  labelCn = '';

  /** labelDetailInfo */
  labelDetailInfo = '';

  /** labelEn */
  labelEn = '';

  /** labelExtendInfo */
  labelExtendInfo = new LabelExtendInfo();

  /** labelGroupId */
  labelGroupId = undefined;

  /** labelGroupNameCn */
  labelGroupNameCn = '';

  /** labelGroupNameEn */
  labelGroupNameEn = '';

  /** labelId */
  labelId = undefined;

  /** labelLogicTableId */
  labelLogicTableId = undefined;

  /** lastAddedTime */
  lastAddedTime = '';

  /** lifecycle */
  lifecycle = undefined;

  /** logicType */
  logicType = '';

  /** msg */
  msg = '';

  /** nodeId */
  nodeId = '';

  /** operators */
  operators = [];

  /** ownerIds */
  ownerIds = '';

  /** owners */
  owners = [];

  /** period */
  period = undefined;

  /** physColCn */
  physColCn = '';

  /** physColEn */
  physColEn = '';

  /** physTableEn */
  physTableEn = '';

  /** platform */
  platform = '';

  /** primaryKey */
  primaryKey = '';

  /** produceTime */
  produceTime = '';

  /** produceType */
  produceType = undefined;

  /** projectCallCnt */
  projectCallCnt = undefined;

  /** projectName */
  projectName = '';

  /** ptKey */
  ptKey = '';

  /** securityLevel */
  securityLevel = '';

  /** seedCrowSource */
  seedCrowSource = '';

  /** separator */
  separator = '';

  /** status */
  status = '';

  /** statusInfo */
  statusInfo = new StatusInfo();

  /** storeType */
  storeType = '';

  /** tableName */
  tableName = '';

  /** taskId */
  taskId = undefined;

  /** testSampleDesc */
  testSampleDesc = '';

  /** valDataType */
  valDataType = '';

  /** valDesc */
  valDesc = '';

  /** valDistriType */
  valDistriType = '';

  /** valDistriTypeName */
  valDistriTypeName = '';

  /** valOrgType */
  valOrgType = '';

  /** valOrgTypeName */
  valOrgTypeName = '';
}

class LabelDataSchema {
  /** dataFormat */
  dataFormat = '';

  /** dataType */
  dataType = '';

  /** rangeType */
  rangeType = '';

  /** rangeValue */
  rangeValue = undefined;

  /** type */
  type = '';
}

class LabelDetailParam {
  /** accuracy */
  accuracy = undefined;

  /** applyReason */
  applyReason = '';

  /** bizSourceIds */
  bizSourceIds = [];

  /** blurCoverCnt */
  blurCoverCnt = false;

  /** cateId */
  cateId = undefined;

  /** description */
  description = '';

  /** extendDescription */
  extendDescription = '';

  /** isPublic */
  isPublic = false;

  /** labelCn */
  labelCn = '';

  /** labelConfidenceParam */
  labelConfidenceParam = new LabelConfidenceParam();

  /** labelId */
  labelId = undefined;

  /** monitorRules */
  monitorRules = [];

  /** needApproval */
  needApproval = false;

  /** ownerIds */
  ownerIds = '';

  /** period */
  period = undefined;

  /** primaryKeyList */
  primaryKeyList = [];

  /** processType */
  processType = undefined;

  /** seedCrowSource */
  seedCrowSource = '';

  /** sensitiveData */
  sensitiveData = [];

  /** separatorGroup */
  separatorGroup = '';

  /** separatorKK */
  separatorKK = '';

  /** separatorKV */
  separatorKV = '';

  /** status */
  status = '';

  /** testSampleDesc */
  testSampleDesc = '';

  /** valOrgType */
  valOrgType = '';

  /** valueParams */
  valueParams = [];
}

class LabelDistributeBO {
  /** labelValue */
  labelValue = '';

  /** labelValueComment */
  labelValueComment = '';

  /** labelValueRate */
  labelValueRate = undefined;
}

class LabelDistributeDO {
  /** dataBizDate */
  dataBizDate = '';

  /** labelUnityId */
  labelUnityId = undefined;

  /** labelValue */
  labelValue = '';

  /** labelValueCnt */
  labelValueCnt = undefined;

  /** labelValueComment */
  labelValueComment = '';

  /** labelValueRate */
  labelValueRate = undefined;

  /** statDate */
  statDate = '';

  /** valDistriType */
  valDistriType = '';

  /** valOrgType */
  valOrgType = '';
}

class LabelExtendInfo {
  /** belongBU */
  belongBU = '';

  /** blurCoverCnt */
  blurCoverCnt = false;

  /** cate3Name */
  cate3Name = '';

  /** columnClassification */
  columnClassification = '';

  /** isContainMajorAndPrivateInfo */
  isContainMajorAndPrivateInfo = false;

  /** isFaceData */
  isFaceData = false;

  /** isMainVersion */
  isMainVersion = false;

  /** isPersonalData */
  isPersonalData = false;

  /** isPublic */
  isPublic = false;

  /** isSensitve */
  isSensitve = false;

  /** level */
  level = '';

  /** monitorRules */
  monitorRules = [];

  /** needAccuracy */
  needAccuracy = false;

  /** needApproval */
  needApproval = false;

  /** operatorIds */
  operatorIds = '';

  /** processType */
  processType = undefined;

  /** sensitiveData */
  sensitiveData = [];

  /** source */
  source = '';

  /** statisticsDataLevel */
  statisticsDataLevel = '';

  /** topIndex */
  topIndex = undefined;
}

class LabelGroupBO {
  /** callCntSum */
  callCntSum = undefined;

  /** callProjCntSum */
  callProjCntSum = undefined;

  /** canOffline */
  canOffline = false;

  /** canTest */
  canTest = false;

  /** cateId */
  cateId = undefined;

  /** category */
  category = new CategoryBO();

  /** children */
  children = [];

  /** coverCntRange */
  coverCntRange = '';

  /** creatorId */
  creatorId = '';

  /** creatorInfo */
  creatorInfo = new EmpBO();

  /** description */
  description = '';

  /** entityType */
  entityType = '';

  /** errorUrl */
  errorUrl = '';

  /** firstAddedTime */
  firstAddedTime = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** hasChildren */
  hasChildren = false;

  /** hasError */
  hasError = false;

  /** id */
  id = undefined;

  /** isMultiKey */
  isMultiKey = false;

  /** isOfficial */
  isOfficial = false;

  /** isPublic */
  isPublic = false;

  /** isUpdated */
  isUpdated = false;

  /** keysList */
  keysList = [];

  /** labelId */
  labelId = undefined;

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** ownerIds */
  ownerIds = '';

  /** owners */
  owners = [];

  /** recent90HasCall */
  recent90HasCall = false;

  /** status */
  status = '';

  /** syncLabStatus */
  syncLabStatus = new SyncLabStatus();
}

class LabelGroupServiceConfigBO {
  /** code */
  code = '';

  /** creator */
  creator = '';

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** keyType */
  keyType = '';

  /** labelIds */
  labelIds = [];

  /** labelList */
  labelList = [];

  /** projectId */
  projectId = undefined;

  /** serviceId */
  serviceId = undefined;
}

class LabelGroupServiceTaskBO {
  /** admin */
  admin = [];

  /** code */
  code = '';

  /** configStatus */
  configStatus = '';

  /** creatorInfo */
  creatorInfo = [];

  /** description */
  description = '';

  /** gmtCreate */
  gmtCreate = '';

  /** id */
  id = undefined;

  /** keyType */
  keyType = '';

  /** syncStatus */
  syncStatus = '';

  /** syncedLabelCount */
  syncedLabelCount = undefined;

  /** totalLabelCount */
  totalLabelCount = undefined;
}

class LabelInfoParam {
  /** extraInfo */
  extraInfo = '';

  /** labelId */
  labelId = undefined;

  /** labelValue */
  labelValue = [];

  /** objectId */
  objectId = '';
}

class LabelInfoParamV2 {
  /** 扩展信息，前端用 */
  extraInfo = '';

  /** 标签id */
  labelId = undefined;

  /** 标签取值 */
  labelValue = [];

  /** 唯一id，前端生成 */
  objectId = '';
}

class LabelInsertProduceInfo {
  /** accuracy */
  accuracy = undefined;

  /** applyReason */
  applyReason = '';

  /** bizSourceIds */
  bizSourceIds = [];

  /** blurCoverCnt */
  blurCoverCnt = false;

  /** cateId */
  cateId = undefined;

  /** description */
  description = '';

  /** extendDescription */
  extendDescription = '';

  /** isPublic */
  isPublic = false;

  /** labelCn */
  labelCn = '';

  /** labelConfidenceParam */
  labelConfidenceParam = new LabelConfidenceParam();

  /** labelId */
  labelId = undefined;

  /** monitorRules */
  monitorRules = [];

  /** needAccuracy */
  needAccuracy = false;

  /** needApproval */
  needApproval = false;

  /** ownerIds */
  ownerIds = '';

  /** owners */
  owners = [];

  /** period */
  period = undefined;

  /** primaryKeyList */
  primaryKeyList = [];

  /** processType */
  processType = undefined;

  /** seedCrowSource */
  seedCrowSource = '';

  /** sensitiveData */
  sensitiveData = [];

  /** separatorGroup */
  separatorGroup = '';

  /** separatorKK */
  separatorKK = '';

  /** separatorKV */
  separatorKV = '';

  /** source */
  source = '';

  /** status */
  status = '';

  /** testSampleDesc */
  testSampleDesc = '';

  /** valOrgType */
  valOrgType = '';

  /** valueParams */
  valueParams = [];
}

class LabelItemBO {
  /** applyUser */
  applyUser = new EmpBO();

  /** authStatus */
  authStatus = '';

  /** bpmsId */
  bpmsId = '';

  /** callCntSum */
  callCntSum = undefined;

  /** callProjCntSum */
  callProjCntSum = undefined;

  /** canDelete */
  canDelete = false;

  /** canOffline */
  canOffline = false;

  /** canTest */
  canTest = false;

  /** cateId */
  cateId = undefined;

  /** category */
  category = new CategoryBO();

  /** children */
  children = [];

  /** coverCntRange */
  coverCntRange = '';

  /** creatorId */
  creatorId = '';

  /** creatorInfo */
  creatorInfo = new EmpBO();

  /** description */
  description = '';

  /** entityType */
  entityType = '';

  /** errorUrl */
  errorUrl = '';

  /** firstAddedTime */
  firstAddedTime = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** groupId */
  groupId = undefined;

  /** hasChildren */
  hasChildren = false;

  /** hasError */
  hasError = false;

  /** isMultiKey */
  isMultiKey = false;

  /** isOfficial */
  isOfficial = false;

  /** isPublic */
  isPublic = false;

  /** isUpdated */
  isUpdated = false;

  /** keysList */
  keysList = [];

  /** labelId */
  labelId = undefined;

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** ownerIds */
  ownerIds = '';

  /** owners */
  owners = new EmpBO();

  /** produceType */
  produceType = undefined;

  /** recent90HasCall */
  recent90HasCall = false;

  /** score */
  score = undefined;

  /** status */
  status = '';

  /** statusInfo */
  statusInfo = new StatusInfo();

  /** syncLabStatus */
  syncLabStatus = new SyncLabStatus();
}

class LabelKVDataSchema {
  /** dataFormat */
  dataFormat = '';

  /** dataType */
  dataType = '';

  /** k */
  k = [];

  /** rangeType */
  rangeType = '';

  /** rangeValue */
  rangeValue = undefined;

  /** type */
  type = '';

  /** v */
  v = [];
}

class LabelKeyDataSchema {
  /** dataFormat */
  dataFormat = '';

  /** dataType */
  dataType = '';

  /** entityId */
  entityId = undefined;

  /** entityType */
  entityType = '';

  /** idType */
  idType = '';

  /** keyColumn */
  keyColumn = '';

  /** rangeType */
  rangeType = '';

  /** rangeValue */
  rangeValue = undefined;

  /** type */
  type = '';
}

class LabelListBO {
  /** accountAssetsRelExtBO */
  accountAssetsRelExtBO = new AccountAssetsRelExtBO();

  /** applyTime */
  applyTime = '';

  /** authStatus */
  authStatus = '';

  /** authStatusName */
  authStatusName = '';

  /** belongProjectId */
  belongProjectId = undefined;

  /** bpmsId */
  bpmsId = '';

  /** cateId */
  cateId = undefined;

  /** cateName */
  cateName = '';

  /** category */
  category = new CategoryBO();

  /** coverCnt */
  coverCnt = undefined;

  /** creatorId */
  creatorId = '';

  /** creatorInfo */
  creatorInfo = new EmpBO();

  /** dataSchema */
  dataSchema = new LabelKVDataSchema();

  /** description */
  description = '';

  /** entityFlag */
  entityFlag = '';

  /** entityType */
  entityType = '';

  /** entityTypeName */
  entityTypeName = '';

  /** env */
  env = '';

  /** example */
  example = '';

  /** firstAddedTime */
  firstAddedTime = '';

  /** fullTableName */
  fullTableName = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** infoLevel */
  infoLevel = '';

  /** isCooperate */
  isCooperate = false;

  /** isOfficial */
  isOfficial = false;

  /** isPublic */
  isPublic = false;

  /** keysList */
  keysList = [];

  /** kind */
  kind = '';

  /** labelCn */
  labelCn = '';

  /** labelEn */
  labelEn = '';

  /** labelGroupId */
  labelGroupId = undefined;

  /** labelGroupNameCn */
  labelGroupNameCn = '';

  /** labelGroupNameEn */
  labelGroupNameEn = '';

  /** lastAddedTime */
  lastAddedTime = '';

  /** nodeId */
  nodeId = '';

  /** ownerIds */
  ownerIds = '';

  /** owners */
  owners = [];

  /** platform */
  platform = '';

  /** produceType */
  produceType = undefined;

  /** score */
  score = undefined;

  /** securityLevel */
  securityLevel = '';

  /** selectStatus */
  selectStatus = new SelectStatus();

  /** status */
  status = '';

  /** statusInfo */
  statusInfo = new StatusInfo();

  /** syncStatus */
  syncStatus = [];

  /** taskId */
  taskId = undefined;

  /** valDataType */
  valDataType = '';

  /** valDistriType */
  valDistriType = '';

  /** valOrgType */
  valOrgType = '';
}

class LabelLogicInfo {
  /** dataSchema */
  dataSchema = new LabelKVDataSchema();

  /** entityType */
  entityType = '';

  /** isMultiKey */
  isMultiKey = false;

  /** keysInfo */
  keysInfo = '';

  /** keysList */
  keysList = [];

  /** kind */
  kind = '';

  /** labelDetailInfo */
  labelDetailInfo = '';

  /** period */
  period = undefined;

  /** primaryKey */
  primaryKey = '';

  /** tableName */
  tableName = '';

  /** valDataType */
  valDataType = '';

  /** valDistriType */
  valDistriType = '';

  /** valDistriTypeName */
  valDistriTypeName = '';

  /** valOrgType */
  valOrgType = '';

  /** valOrgTypeName */
  valOrgTypeName = '';
}

class LabelMetaBO {
  /** cnName */
  cnName = '';

  /** columnName */
  columnName = '';

  /** dataType */
  dataType = '';

  /** enName */
  enName = '';

  /** entityType */
  entityType = '';

  /** keyColumn */
  keyColumn = '';

  /** keysInfo */
  keysInfo = '';

  /** null */
  null = false;

  /** period */
  period = undefined;

  /** platform */
  platform = '';

  /** srcColumnName */
  srcColumnName = '';

  /** srcKeyColumn */
  srcKeyColumn = '';

  /** srcKeyType */
  srcKeyType = '';

  /** srcTableName */
  srcTableName = '';

  /** tableName */
  tableName = '';

  /** tagId */
  tagId = undefined;

  /** tagType */
  tagType = '';
}

class LabelNoSampleProduceConfig {
  /** cateIds */
  cateIds = '';

  /** values */
  values = [];
}

class LabelNoSampleProduceParams {
  /** cateIds */
  cateIds = '';

  /** configs */
  configs = new LabelNoSampleProduceConfig();

  /** crowdSize */
  crowdSize = '';

  /** crowdType */
  crowdType = '';

  /** domain */
  domain = undefined;

  /** extParams */
  extParams = undefined;

  /** preference */
  preference = '';

  /** timeRangeConfig */
  timeRangeConfig = '';

  /** token */
  token = '';

  /** values */
  values = '';

  /** version */
  version = undefined;
}

class LabelOverviewBO {
  /** 标签总数 */
  labelCount = undefined;

  /** 本周新上标签 */
  newLabels = [];

  /** 官方认证标签 */
  officialLabels = [];

  /** 最受集团欢迎标签 */
  topPopularLabelsAli = [];

  /** 最受蚂蚁欢迎标签 */
  topPopularLabelsAnt = [];
}

class LabelParam {
  /** accuracy */
  accuracy = undefined;

  /** accuracyStr */
  accuracyStr = '';

  /** applyTime */
  applyTime = '';

  /** authStatus */
  authStatus = '';

  /** belongProjectId */
  belongProjectId = undefined;

  /** bizDomainId */
  bizDomainId = '';

  /** bizSource */
  bizSource = '';

  /** bpmsId */
  bpmsId = '';

  /** callCnt */
  callCnt = undefined;

  /** callOffIdCnt */
  callOffIdCnt = undefined;

  /** callOlCnt */
  callOlCnt = undefined;

  /** cateId */
  cateId = undefined;

  /** cateName */
  cateName = '';

  /** category */
  category = new CategoryBO();

  /** coverCnt */
  coverCnt = undefined;

  /** coverCntRange */
  coverCntRange = '';

  /** creatorId */
  creatorId = '';

  /** creatorInfo */
  creatorInfo = new EmpBO();

  /** dataSchema */
  dataSchema = new LabelKVDataSchema();

  /** description */
  description = '';

  /** entityType */
  entityType = '';

  /** env */
  env = '';

  /** example */
  example = '';

  /** extInfo */
  extInfo = '';

  /** extendDescription */
  extendDescription = '';

  /** extendInfo */
  extendInfo = '';

  /** filterKey */
  filterKey = '';

  /** filterName */
  filterName = '';

  /** filterType */
  filterType = '';

  /** firstAddedTime */
  firstAddedTime = '';

  /** fullTableName */
  fullTableName = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** hasConfidence */
  hasConfidence = false;

  /** id */
  id = undefined;

  /** infoLevel */
  infoLevel = '';

  /** isCooperate */
  isCooperate = false;

  /** isMultiKey */
  isMultiKey = false;

  /** isOfficial */
  isOfficial = false;

  /** isPublic */
  isPublic = false;

  /** keyName */
  keyName = '';

  /** keyType */
  keyType = '';

  /** keysInfo */
  keysInfo = '';

  /** keysList */
  keysList = [];

  /** kind */
  kind = '';

  /** labelCn */
  labelCn = '';

  /** labelDetailInfo */
  labelDetailInfo = '';

  /** labelEn */
  labelEn = '';

  /** labelExtendInfo */
  labelExtendInfo = new LabelExtendInfo();

  /** labelGroupId */
  labelGroupId = undefined;

  /** labelGroupNameCn */
  labelGroupNameCn = '';

  /** labelGroupNameEn */
  labelGroupNameEn = '';

  /** labelId */
  labelId = undefined;

  /** labelLogicTableId */
  labelLogicTableId = undefined;

  /** lastAddedTime */
  lastAddedTime = '';

  /** lifecycle */
  lifecycle = undefined;

  /** logicType */
  logicType = '';

  /** msg */
  msg = '';

  /** nodeId */
  nodeId = '';

  /** operators */
  operators = [];

  /** ownerIds */
  ownerIds = '';

  /** owners */
  owners = [];

  /** period */
  period = undefined;

  /** physColCn */
  physColCn = '';

  /** physColEn */
  physColEn = '';

  /** physTableEn */
  physTableEn = '';

  /** platform */
  platform = '';

  /** primaryKey */
  primaryKey = '';

  /** produceTime */
  produceTime = '';

  /** produceType */
  produceType = undefined;

  /** projectCallCnt */
  projectCallCnt = undefined;

  /** projectName */
  projectName = '';

  /** ptKey */
  ptKey = '';

  /** securityLevel */
  securityLevel = '';

  /** seedCrowSource */
  seedCrowSource = '';

  /** separator */
  separator = '';

  /** sortType */
  sortType = '';

  /** sqlCode */
  sqlCode = '';

  /** status */
  status = '';

  /** statusInfo */
  statusInfo = new StatusInfo();

  /** storeType */
  storeType = '';

  /** tableName */
  tableName = '';

  /** taskId */
  taskId = undefined;

  /** testSampleDesc */
  testSampleDesc = '';

  /** topN */
  topN = undefined;

  /** valDataType */
  valDataType = '';

  /** valDesc */
  valDesc = '';

  /** valDistriType */
  valDistriType = '';

  /** valDistriTypeName */
  valDistriTypeName = '';

  /** valOrgType */
  valOrgType = '';

  /** valOrgTypeName */
  valOrgTypeName = '';
}

class LabelPermissionCheckBO {
  /** 需要申请的标签列表 */
  applyList = [];

  /** 自动授权标签列表 */
  autoAuthList = [];

  /** 已经有权限的标签列表 */
  havePermissionList = [];
}

class LabelPhysicInfo {
  /** fullTableName */
  fullTableName = '';

  /** keyName */
  keyName = '';

  /** keyType */
  keyType = '';

  /** nodeId */
  nodeId = '';

  /** physColEn */
  physColEn = '';

  /** physTableEn */
  physTableEn = '';

  /** projectName */
  projectName = '';

  /** ptKey */
  ptKey = '';

  /** separator */
  separator = '';

  /** storeType */
  storeType = '';
}

class LabelPreviewDataBO {
  /** allNum */
  allNum = '';

  /** columnNames */
  columnNames = [];

  /** dataResultSet */
  dataResultSet = [];

  /** labelId */
  labelId = undefined;
}

class LabelPreviewDataNewBO {
  /** canPublish */
  canPublish = false;

  /** columns */
  columns = [];

  /** coverage */
  coverage = '';

  /** dataCreate */
  dataCreate = '';

  /** dataSource */
  dataSource = [];

  /** extendInfo */
  extendInfo = undefined;

  /** labelId */
  labelId = undefined;
}

class LabelProcessInfoBO {
  /** checkResult */
  checkResult = false;

  /** dataType */
  dataType = '';

  /** errorMessage */
  errorMessage = '';

  /** id */
  id = undefined;

  /** labelNameCn */
  labelNameCn = '';

  /** valueType */
  valueType = '';
}

class LabelProduceBO {
  /** applyingResourceBOList */
  applyingResourceBOList = [];

  /** canPublish */
  canPublish = false;

  /** dataCreate */
  dataCreate = '';

  /** isReedit */
  isReedit = false;

  /** labelPreviewDataBO */
  labelPreviewDataBO = new LabelPreviewDataBO();

  /** labelProduceParams */
  labelProduceParams = new LabelProduceParams();

  /** status */
  status = '';
}

class LabelProduceInfoBO {
  /** configString */
  configString = '';

  /** description */
  description = '';

  /** labelInsertProduceInfo */
  labelInsertProduceInfo = new LabelInsertProduceInfo();

  /** labelNoSampleProduceParams */
  labelNoSampleProduceParams = new LabelNoSampleProduceParams();

  /** publicProduceInfo */
  publicProduceInfo = new PublicProduceInfo();

  /** regularLabelProduceParam */
  regularLabelProduceParam = new RegularLabelProduceParam();
}

class LabelProduceParams {
  /** configString */
  configString = '';

  /** description */
  description = '';

  /** labelId */
  labelId = undefined;

  /** labelNoSampleProduceParams */
  labelNoSampleProduceParams = new LabelNoSampleProduceParams();

  /** publishType */
  publishType = '';

  /** regularLabelProduceParam */
  regularLabelProduceParam = new RegularLabelProduceParam();

  /** updateInfo */
  updateInfo = new UpdateParam();
}

class LabelProductionListBO {
  /** creatorId */
  creatorId = '';

  /** creatorInfo */
  creatorInfo = new EmpBO();

  /** entityType */
  entityType = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** labelGroupId */
  labelGroupId = undefined;

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** ownerIds */
  ownerIds = '';

  /** owners */
  owners = [];

  /** produceType */
  produceType = undefined;

  /** status */
  status = '';

  /** statusInfo */
  statusInfo = new StatusInfo();
}

class LabelSampleDistriDO {
  /** rate */
  rate = undefined;

  /** value */
  value = '';
}

class LabelSampleResultBO {
  /** data */
  data = new LabelTaskResultDO();

  /** message */
  message = '';

  /** res */
  res = false;
}

class LabelSimpleParam {
  /** cateId */
  cateId = undefined;

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** isPublic */
  isPublic = false;

  /** labelCn */
  labelCn = '';

  /** labelEn */
  labelEn = '';

  /** labelGroupId */
  labelGroupId = undefined;

  /** physColEn */
  physColEn = '';

  /** valDataType */
  valDataType = '';
}

class LabelStabilityDO {
  /** coverCnt */
  coverCnt = undefined;

  /** ds */
  ds = '';

  /** produceTime */
  produceTime = '';
}

class LabelTaskResultDO {
  /** 覆盖量 */
  coverCnt = undefined;

  /** 覆盖率 */
  coverRate = undefined;

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** 标签ID */
  labelId = undefined;

  /** 标签中文名 */
  labelNameCn = '';

  /** 标签英文名 */
  labelNameEn = '';

  /** 去重id数 */
  rdIdCnt = undefined;

  /** 可识别id数 */
  recIdCnt = undefined;

  /** 任务id */
  taskId = undefined;

  /** 测试结果（值分布） */
  valDistribute = '';

  /** valDistributeList */
  valDistributeList = [];

  /** 数据组织类型，single/multivalue/kv/kkv/doc */
  valOrgType = '';

  /** 值类型 */
  valType = '';
}

class LabelValueParam {
  /** 关系 */
  op = '';

  /** 值 */
  values = [];
}

class Map {}

class MarketCateTreeBO {
  /** children */
  children = [];

  /** ext */
  ext = undefined;

  /** label */
  label = '';

  /** showRunTime */
  showRunTime = false;

  /** supportType */
  supportType = '';

  /** value */
  value = '';
}

class MarketServiceBO {
  /** authStatus */
  authStatus = '';

  /** belongProjectId */
  belongProjectId = undefined;

  /** bpmsId */
  bpmsId = '';

  /** callCnt */
  callCnt = undefined;

  /** canTest */
  canTest = false;

  /** canUse */
  canUse = false;

  /** cateId */
  cateId = undefined;

  /** category */
  category = '';

  /** creatorId */
  creatorId = '';

  /** creatorInfo */
  creatorInfo = new EmpBO();

  /** custom */
  custom = false;

  /** customCnt */
  customCnt = undefined;

  /** definition */
  definition = undefined;

  /** description */
  description = '';

  /** detailDesc */
  detailDesc = '';

  /** env */
  env = '';

  /** executeMode */
  executeMode = '';

  /** extendInfo */
  extendInfo = '';

  /** extendInfoObjects */
  extendInfoObjects = new ServiceExtendBO();

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** helpUrl */
  helpUrl = [];

  /** id */
  id = undefined;

  /** idType */
  idType = '';

  /** implementType */
  implementType = '';

  /** isDataReal */
  isDataReal = false;

  /** isPublic */
  isPublic = false;

  /** labelType */
  labelType = '';

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** notifyCase */
  notifyCase = '';

  /** ownerIds */
  ownerIds = '';

  /** owners */
  owners = [];

  /** parent */
  parent = {};

  /** parentId */
  parentId = undefined;

  /** projectCallCnt */
  projectCallCnt = undefined;

  /** sampleCase */
  sampleCase = [];

  /** sampleCode */
  sampleCode = '';

  /** secureLevel */
  secureLevel = '';

  /** serviceDetail */
  serviceDetail = new ServiceDetailBO();

  /** serviceExtendBO */
  serviceExtendBO = new ServiceExtendBO();

  /** serviceFunction */
  serviceFunction = new ServiceFunctionBO();

  /** serviceIds */
  serviceIds = '';

  /** serviceRef */
  serviceRef = [];

  /** serviceType */
  serviceType = '';

  /** source */
  source = {};

  /** sourceId */
  sourceId = undefined;

  /** status */
  status = '';

  /** statusQueryFunction */
  statusQueryFunction = new ServiceFunctionBO();

  /** supportGroup */
  supportGroup = '';

  /** templateConfig */
  templateConfig = '';

  /** version */
  version = '';

  /** versionCount */
  versionCount = undefined;
}

class MarketServiceStatDO {
  /** callCnt */
  callCnt = undefined;

  /** projectCallCnt */
  projectCallCnt = undefined;

  /** projectStatList */
  projectStatList = [];

  /** serviceId */
  serviceId = undefined;

  /** serviceName */
  serviceName = '';

  /** statDate */
  statDate = '';
}

class MarketUserConfigDO {
  /** config */
  config = undefined;

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** type */
  type = '';

  /** userNumber */
  userNumber = '';
}

class MarkingParam {
  /** cycleDescription */
  cycleDescription = '';

  /** description */
  description = '';

  /** enumValue */
  enumValue = '';

  /** enumValueType */
  enumValueType = '';

  /** name */
  name = '';

  /** statisticValue */
  statisticValue = new StatisticValueParam();

  /** type */
  type = '';
}

class MarkingParamV2 {
  /** 枚举类，单值/多值输出 */
  enumValueType = '';

  /** 统计类取值 */
  statisticValue = new StatisticValueParamV2();

  /** 枚举类/非枚举类 */
  type = '';
}

class MetaApp {
  /** accessAllowFlag */
  accessAllowFlag = undefined;

  /** appCharset */
  appCharset = '';

  /** authTypes */
  authTypes = '';

  /** bizLine */
  bizLine = '';

  /** bizModule */
  bizModule = '';

  /** bizOwnerId */
  bizOwnerId = '';

  /** blacklistRule */
  blacklistRule = '';

  /** businessOwnerId */
  businessOwnerId = '';

  /** caption */
  caption = '';

  /** comment */
  comment = '';

  /** createTime */
  createTime = '';

  /** datasourceGuid */
  datasourceGuid = '';

  /** dbType */
  dbType = '';

  /** dbaId */
  dbaId = '';

  /** deputy */
  deputy = '';

  /** encoding */
  encoding = '';

  /** envType */
  envType = '';

  /** envTypeId */
  envTypeId = undefined;

  /** extraAttributes */
  extraAttributes = '';

  /** gmtCreated */
  gmtCreated = '';

  /** gmtModified */
  gmtModified = '';

  /** guid */
  guid = '';

  /** id */
  id = undefined;

  /** importLevel */
  importLevel = undefined;

  /** isExternalFlag */
  isExternalFlag = undefined;

  /** labels */
  labels = '';

  /** lifeCycleFlag */
  lifeCycleFlag = undefined;

  /** lifeCycleTime */
  lifeCycleTime = '';

  /** modifyTime */
  modifyTime = '';

  /** name */
  name = '';

  /** noSearchFlag */
  noSearchFlag = undefined;

  /** ownerId */
  ownerId = '';

  /** ownerName */
  ownerName = '';

  /** password */
  password = '';

  /** projectId */
  projectId = undefined;

  /** residentArea */
  residentArea = '';

  /** srcType */
  srcType = undefined;

  /** syncTime */
  syncTime = '';

  /** sysType */
  sysType = '';

  /** tenantId */
  tenantId = undefined;

  /** url */
  url = '';

  /** username */
  username = '';
}

class MobileClientDomainDO {
  /** appId */
  appId = '';

  /** id */
  id = undefined;

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** status */
  status = '';
}

class MonitorRuleInfo {
  /** ruleId */
  ruleId = undefined;

  /** ruleValue */
  ruleValue = '';
}

class Node {
  /** type */
  type = '';

  /** value */
  value = '';
}

class OdpsProjectBO {
  /** accessId */
  accessId = '';

  /** accessKey */
  accessKey = '';

  /** aliyunAccount */
  aliyunAccount = '';

  /** d2ProjectName */
  d2ProjectName = '';

  /** d2bizId */
  d2bizId = '';
}

class OdpsTableMeta {
  /** columns */
  columns = [];

  /** nodeIds */
  nodeIds = [];

  /** outputNodes */
  outputNodes = [];

  /** partitionColumns */
  partitionColumns = [];
}

class OfflineTaskConfigBO {
  /** creatorId */
  creatorId = '';

  /** creatorInfo */
  creatorInfo = new EmpBO();

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** lastFinishTime */
  lastFinishTime = '';

  /** lastRunStatus */
  lastRunStatus = '';

  /** lastStatus */
  lastStatus = '';

  /** lastStatusDetails */
  lastStatusDetails = [];

  /** metaLink */
  metaLink = '';

  /** odpsLink */
  odpsLink = '';

  /** odpsTaskId */
  odpsTaskId = undefined;

  /** offlineOrgConfig */
  offlineOrgConfig = new OfflineTaskParam();

  /** orgConfig */
  orgConfig = new SampleTaskParam();

  /** scheduleType */
  scheduleType = '';

  /** status */
  status = '';
}

class OfflineTaskConfigDO {
  /** authorityId */
  authorityId = undefined;

  /** classId */
  classId = '';

  /** config */
  config = '';

  /** creatorId */
  creatorId = '';

  /** env */
  env = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** inputApplyId */
  inputApplyId = '';

  /** labelId */
  labelId = undefined;

  /** lastRunStatus */
  lastRunStatus = '';

  /** odpsTaskId */
  odpsTaskId = undefined;

  /** orgConfig */
  orgConfig = '';

  /** outputApplyId */
  outputApplyId = '';

  /** outputNodeName */
  outputNodeName = '';

  /** scheduleTime */
  scheduleTime = '';

  /** scheduleType */
  scheduleType = '';

  /** serviceId */
  serviceId = undefined;

  /** status */
  status = '';

  /** taskName */
  taskName = '';
}

class OfflineTaskParam {
  /** addPrimaryKey */
  addPrimaryKey = false;

  /** appName */
  appName = '';

  /** appNameCn */
  appNameCn = '';

  /** 服务市场业务空间Id */
  businessScopeId = undefined;

  /** cloudServiceEnum */
  cloudServiceEnum = 'GPROFILE_OFFLINE';

  /** cronExpress */
  cronExpress = '';

  /** customerConfig */
  customerConfig = new WorkflowCustomerParam();

  /** 强依赖的标签ID列表 */
  dependentLabelIds = [];

  /** 实体类型，onecompany,gprofile */
  entityType = '';

  /** extInfo */
  extInfo = '';

  /** 匹配输出结果条数，默认只有一条，0表示全部 */
  filterTopn = undefined;

  /** id 类型 */
  idType = '';

  /** inEncParamId */
  inEncParamId = '';

  /** 入参id类型 */
  inParamId = '';

  /** inputTable */
  inputTable = new WorkflowInputParam();

  /** 标签ID列表 */
  labelIds = [];

  /** labelInfo */
  labelInfo = [];

  /** nodeId */
  nodeId = undefined;

  /** outEncParamId */
  outEncParamId = '';

  /** 输出id类型,用于idMapping */
  outParamId = '';

  /** outputTable */
  outputTable = new WorkflowOutputParam();

  /** day，week，month */
  period = '';

  /** 周，第几天；月，第几天 */
  periodIndex = undefined;

  /** platform */
  platform = '';

  /** processConfig */
  processConfig = new WorkflowProcessParam();

  /** 服务市场项目帐号Id */
  projectId = undefined;

  /** 运行任务，一次性:once，周期性:cycle */
  runType = '';

  /** 服务接口id */
  serviceId = undefined;

  /** 任务ID */
  taskId = undefined;

  /** 任务名称 */
  taskName = '';

  /** 时间：03:02 */
  times = '';

  /** uuicOptions */
  uuicOptions = [];
}

class OfflineTaskSyncStatusBO {
  /** children */
  children = [];

  /** key */
  key = undefined;

  /** link */
  link = '';

  /** status */
  status = '';

  /** value */
  value = '';
}

class OneIdBO {
  /** acookieId */
  acookieId = [];

  /** alipayId */
  alipayId = [];

  /** alipayKeys */
  alipayKeys = [];

  /** alitripKeys */
  alitripKeys = [];

  /** autonaviKeys */
  autonaviKeys = [];

  /** cainiaoKeys */
  cainiaoKeys = [];

  /** dianyingKeys */
  dianyingKeys = [];

  /** dingtalkKeys */
  dingtalkKeys = [];

  /** email */
  email = [];

  /** idCard */
  idCard = [];

  /** idfa */
  idfa = [];

  /** imei */
  imei = [];

  /** mac */
  mac = [];

  /** mobile */
  mobile = [];

  /** taobaoId */
  taobaoId = [];

  /** taobaoKeys */
  taobaoKeys = [];

  /** taobaoNick */
  taobaoNick = [];

  /** ucKeys */
  ucKeys = [];

  /** umengKeys */
  umengKeys = [];

  /** umid */
  umid = [];

  /** utdid */
  utdid = [];

  /** weiboId */
  weiboId = [];

  /** xiamiKeys */
  xiamiKeys = [];

  /** xianyuKeys */
  xianyuKeys = [];

  /** youkuKeys */
  youkuKeys = [];

  /** youkuNick */
  youkuNick = [];

  /** yunosUuid */
  yunosUuid = [];
}

class PaginatedResult {
  /** data */
  data = [];

  /** recordCount */
  recordCount = undefined;
}

class PaiExperiment {
  /** dependencies */
  dependencies = [];

  /** experimentId */
  experimentId = undefined;

  /** name */
  name = '';

  /** params */
  params = [];

  /** projectName */
  projectName = '';

  /** userNumber */
  userNumber = '';
}

class PaiExperimentDependency {
  /** featureNameCn */
  featureNameCn = '';

  /** featureNameEn */
  featureNameEn = '';

  /** id */
  id = undefined;
}

class PaiExperimentParam {
  /** description */
  description = '';

  /** name */
  name = '';

  /** placeholder */
  placeholder = '';

  /** value */
  value = '';
}

class PlatformAuthBO {
  /** applyUrl */
  applyUrl = '';

  /** authCn */
  authCn = '';

  /** authCode */
  authCode = '';

  /** authMsg */
  authMsg = '';

  /** enable */
  enable = false;

  /** id */
  id = undefined;

  /** manageUrl */
  manageUrl = '';

  /** securityLevel */
  securityLevel = '';

  /** validEndTime */
  validEndTime = '';

  /** validStartTime */
  validStartTime = '';
}

class PortalCaidanBO {
  /** crowdValues */
  crowdValues = [];

  /** empBO */
  empBO = new EmpBO();

  /** labelValues */
  labelValues = [];

  /** medal */
  medal = '';
}

class PortalModuleBO {
  /** itemList */
  itemList = [];

  /** type */
  type = '';

  /** url */
  url = new UrlItem();
}

class PortalSearchBO {
  /** count */
  count = '';

  /** itemList */
  itemList = [];

  /** type */
  type = '';
}

class PreApplyResourceDO {
  /** applyUserId */
  applyUserId = '';

  /** authStatus */
  authStatus = '';

  /** bpmsId */
  bpmsId = '';

  /** labelType */
  labelType = '';

  /** ownerId */
  ownerId = '';

  /** parentResourceId */
  parentResourceId = undefined;

  /** parentResourceName */
  parentResourceName = '';

  /** resourceDesc */
  resourceDesc = '';

  /** resourceId */
  resourceId = undefined;

  /** resourceName */
  resourceName = '';

  /** resourceType */
  resourceType = '';
}

class ProjectBO {
  /** admins */
  admins = [];

  /** aoneConfig */
  aoneConfig = [];

  /** authorityType */
  authorityType = '';

  /** d2Config */
  d2Config = [];

  /** description */
  description = '';

  /** fbiConfig */
  fbiConfig = [];

  /** isCrowdProject */
  isCrowdProject = false;

  /** isFusionProject */
  isFusionProject = false;

  /** isFuwuProject */
  isFuwuProject = false;

  /** isIsolationProject */
  isIsolationProject = false;

  /** linkId */
  linkId = undefined;

  /** members */
  members = [];

  /** password */
  password = '';

  /** projectId */
  projectId = undefined;

  /** projectName */
  projectName = '';

  /** projectNameCn */
  projectNameCn = '';

  /** projectType */
  projectType = [];

  /** status */
  status = undefined;
}

class ProjectConfig {
  /** config */
  config = undefined;

  /** configType */
  configType = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** projectId */
  projectId = undefined;
}

class ProjectStatBO {
  /** callCnt */
  callCnt = undefined;

  /** department */
  department = '';

  /** description */
  description = '';

  /** ownerId */
  ownerId = '';

  /** projectId */
  projectId = undefined;

  /** projectName */
  projectName = '';

  /** projectNameCn */
  projectNameCn = '';

  /** rate */
  rate = undefined;

  /** serviceId */
  serviceId = undefined;
}

class ProjectStatDO {
  /** callCnt */
  callCnt = undefined;

  /** department */
  department = '';

  /** description */
  description = '';

  /** ownerId */
  ownerId = '';

  /** projectId */
  projectId = undefined;

  /** projectName */
  projectName = '';

  /** rate */
  rate = undefined;

  /** serviceId */
  serviceId = undefined;
}

class ProjectUpdateParam {
  /** aoneConfigStr */
  aoneConfigStr = '';

  /** bizScene */
  bizScene = '';

  /** creator */
  creator = '';

  /** d2ConfigStr */
  d2ConfigStr = '';

  /** empIdList */
  empIdList = '';

  /** fbiConfigStr */
  fbiConfigStr = '';

  /** isFusionProject */
  isFusionProject = false;

  /** isIsolationProject */
  isIsolationProject = false;

  /** password */
  password = '';

  /** projectId */
  projectId = undefined;

  /** projectName */
  projectName = '';

  /** projectNameCn */
  projectNameCn = '';

  /** usingProjectConfig */
  usingProjectConfig = false;
}

class PromotionStatus {
  /** canUse */
  canUse = false;

  /** message */
  message = '';

  /** type */
  type = undefined;
}

class PublicProduceInfo {
  /** category */
  category = new CategoryBO();

  /** isPublic */
  isPublic = false;

  /** isReedit */
  isReedit = false;

  /** labelId */
  labelId = undefined;

  /** ownerIds */
  ownerIds = [];

  /** owners */
  owners = [];

  /** period */
  period = undefined;

  /** status */
  status = '';
}

class PublishParam {
  /** labelId */
  labelId = undefined;

  /** updateInfo */
  updateInfo = new UpdateParam();
}

class ReadmeLabelDistributeBO {
  /** labelCnt */
  labelCnt = undefined;

  /** labelCntRate */
  labelCntRate = undefined;

  /** oneid */
  oneid = '';

  /** sceneName */
  sceneName = '';

  /** statDate */
  statDate = '';
}

class ReadmeLabelUserProfileBO {
  /** labelCn */
  labelCn = '';

  /** labelCnShow */
  labelCnShow = '';

  /** labelId */
  labelId = undefined;

  /** labelProduceLogic */
  labelProduceLogic = '';

  /** labelType */
  labelType = '';

  /** labelValue */
  labelValue = '';

  /** oneid */
  oneid = '';

  /** statDate */
  statDate = '';
}

class ReadmeRelationshipBO {
  /** avatar */
  avatar = '';

  /** name */
  name = '';

  /** oneId */
  oneId = '';

  /** relationship */
  relationship = '';

  /** score */
  score = '';
}

class ReadmeSurveyBO {
  /** busiList */
  busiList = [];

  /** labelCnt */
  labelCnt = undefined;

  /** labelScene */
  labelScene = [];

  /** life */
  life = '';
}

class ReadmeUserLifeBO {
  /** amuseInfos */
  amuseInfos = [];

  /** assetInfos */
  assetInfos = [];

  /** baseInfos */
  baseInfos = [];

  /** localInfos */
  localInfos = [];

  /** natureInfos */
  natureInfos = [];

  /** retailInfos */
  retailInfos = [];

  /** sportInfos */
  sportInfos = [];

  /** travelInfos */
  travelInfos = [];
}

class ReapplyResourceParam {
  /** projectId */
  projectId = undefined;

  /** resourceGroupBO */
  resourceGroupBO = new ResourceGroupBO();

  /** serviceId */
  serviceId = undefined;
}

class RegularConfig {
  /** bhvsInfo */
  bhvsInfo = [];

  /** conditionHashCode */
  conditionHashCode = undefined;

  /** cycleInfo */
  cycleInfo = new CycleInfoParam();

  /** cycleInfoHashCode */
  cycleInfoHashCode = undefined;

  /** labelsInfo */
  labelsInfo = [];

  /** relationsInfo */
  relationsInfo = new RelationInfoParam();
}

class RegularConfigV2 {
  /** 行为圈人配置 */
  bhvsInfo = [];

  /** 枚举类打标配置 */
  cycleInfo = new CycleInfoParam();

  /** 标签圈人配置 */
  labelsInfo = [];

  /** 交并差配置 */
  relationsInfo = new RelationInfoParamV2();
}

class RegularLabelProduceParam {
  /** labelId */
  labelId = undefined;

  /** markingInfo */
  markingInfo = new MarkingParam();

  /** regularConfigs */
  regularConfigs = [];
}

class RegularProduceParamV2 {
  /** 主键类型 */
  idTypes = [];

  /** 取值配置 */
  markingInfo = new MarkingParamV2();

  /** 交并差配置 */
  regularConfigs = [];
}

class RelationInfoParam {
  /** children */
  children = [];

  /** childs */
  childs = [];

  /** id */
  id = undefined;

  /** key */
  key = '';

  /** objectId */
  objectId = '';

  /** type */
  type = '';

  /** value */
  value = [];
}

class RelationInfoParamV2 {
  /** children */
  childs = [];

  /** 标签/行为id */
  id = undefined;

  /** 唯一id */
  objectId = '';

  /** 交并差 */
  type = '';

  /** 前端用 */
  value = [];
}

class ResourceAuthBO {
  /** applyUser */
  applyUser = new EmpBO();

  /** applyUserId */
  applyUserId = '';

  /** bpmsId */
  bpmsId = '';

  /** cn */
  cn = '';

  /** description */
  description = '';

  /** en */
  en = '';

  /** gmtCreate */
  gmtCreate = '';

  /** ownerIds */
  ownerIds = '';

  /** owners */
  owners = [];

  /** projectId */
  projectId = undefined;

  /** resourceId */
  resourceId = undefined;

  /** resourceType */
  resourceType = '';

  /** status */
  status = '';
}

class ResourceGroupBO {
  /** applyUrl */
  applyUrl = '';

  /** detailUrl */
  detailUrl = '';

  /** projectName */
  projectName = '';

  /** resources */
  resources = [];

  /** status */
  status = '';

  /** type */
  type = '';
}

class ResultObject {
  /** code */
  code = undefined;

  /** data */
  data = new AssetGroupBO();

  /** message */
  message = '';
}

class SampleCaseBO {
  /** content */
  content = '';

  /** title */
  title = '';

  /** url */
  url = '';
}

class SampleTaskParam {
  /** encryption */
  encryption = '';

  /** idType */
  idType = '';

  /** idTypeCate */
  idTypeCate = '';

  /** inputIdType */
  inputIdType = '';

  /** labelId */
  labelId = undefined;

  /** labelName */
  labelName = '';

  /** tableName */
  tableName = '';
}

class SaveBhvFieldParam {
  /** description */
  description = '';

  /** id */
  id = undefined;

  /** logicFieldId */
  logicFieldId = undefined;

  /** metaId */
  metaId = undefined;

  /** name */
  name = '';

  /** nameEn */
  nameEn = '';

  /** phyFieldWithUdf */
  phyFieldWithUdf = '';
}

class SaveBhvMetaParam {
  /** dwType */
  dwType = '';

  /** fieldList */
  fieldList = [];

  /** filterConditions */
  filterConditions = '';

  /** id */
  id = undefined;

  /** idColumn */
  idColumn = '';

  /** idType */
  idType = '';

  /** outputNode */
  outputNode = '';

  /** phyStoreType */
  phyStoreType = '';

  /** phyTable */
  phyTable = '';

  /** phyTableType */
  phyTableType = '';

  /** phyTimeField */
  phyTimeField = '';

  /** phyTimeFieldFormatter */
  phyTimeFieldFormatter = '';

  /** phyType */
  phyType = '';

  /** testDate */
  testDate = '';
}

class SaveBhvParam {
  /** bhvMetaList */
  bhvMetaList = [];

  /** cateId */
  cateId = undefined;

  /** dwType */
  dwType = '';

  /** entityType */
  entityType = '';

  /** id */
  id = undefined;

  /** isPublic */
  isPublic = false;

  /** nameCn */
  nameCn = '';

  /** nameEn */
  nameEn = '';

  /** ownerId */
  ownerId = '';

  /** platform */
  platform = [];

  /** projectId */
  projectId = undefined;

  /** targetCn */
  targetCn = '';

  /** targetEn */
  targetEn = '';
}

class ScenePermission {
  /** canSync */
  canSync = false;

  /** message */
  message = '';

  /** scene */
  scene = '';

  /** text */
  text = '';
}

class ScheduleInfo {
  /** period */
  period = undefined;

  /** scheduleType */
  scheduleType = 'Day';
}

class SearchItem {
  /** id */
  id = undefined;

  /** isOfficial */
  isOfficial = false;

  /** name */
  name = '';
}

class SelectStatus {
  /** canSelect */
  canSelect = false;

  /** message */
  message = '';
}

class Sequence {
  /** id */
  id = undefined;

  /** name */
  name = '';

  /** value */
  value = undefined;
}

class ServiceBaseBO {
  /** advantage */
  advantage = '';

  /** description */
  description = '';

  /** helpUrl */
  helpUrl = '';

  /** introduce */
  introduce = '';

  /** supportGroup */
  supportGroup = '';

  /** title */
  title = '';
}

class ServiceCaseBO {
  /** describe */
  describe = '';

  /** link */
  link = '';

  /** title */
  title = '';
}

class ServiceDetailBO {
  /** infoTable */
  infoTable = [];

  /** serviceBase */
  serviceBase = new ServiceBaseBO();

  /** serviceCase */
  serviceCase = [];

  /** serviceId */
  serviceId = undefined;

  /** serviceProcessFlow */
  serviceProcessFlow = new ServiceProcessFlowBO();

  /** serviceScene */
  serviceScene = [];

  /** serviceType */
  serviceType = '';
}

class ServiceExtendBO {
  /** entityType */
  entityType = '';

  /** qps */
  qps = undefined;

  /** rt */
  rt = undefined;

  /** useMode */
  useMode = '';
}

class ServiceFunctionBO {
  /** desc */
  desc = '';

  /** fullServiceName */
  fullServiceName = '';

  /** functionType */
  functionType = '';

  /** group */
  group = '';

  /** methodName */
  methodName = '';

  /** request */
  request = [];

  /** response */
  response = new HsfType();

  /** serviceName */
  serviceName = '';

  /** version */
  version = '';
}

class ServiceInfoTableBO {
  /** cate */
  cate = '';

  /** introduce */
  introduce = '';

  /** name */
  name = '';
}

class ServiceParameterTypeBO {
  /** children */
  children = [];

  /** description */
  description = '';

  /** integrateDse */
  integrateDse = false;

  /** items */
  items = {};

  /** label */
  label = '';

  /** name */
  name = '';

  /** type */
  type = '';
}

class ServiceProcessFlowBO {
  /** attention */
  attention = '';

  /** describe */
  describe = '';

  /** picture */
  picture = '';

  /** title */
  title = '';
}

class ServiceRefB0 {
  /** name */
  name = '';

  /** type */
  type = '';
}

class ServiceSceneBO {
  /** describe */
  describe = '';

  /** link */
  link = '';

  /** picture */
  picture = '';

  /** serviceCase */
  serviceCase = new ServiceCaseBO();

  /** serviceIds */
  serviceIds = [];

  /** title */
  title = '';
}

class ServiceSchemaBO {
  /** group */
  group = '';

  /** methods */
  methods = [];

  /** name */
  name = '';

  /** version */
  version = '';
}

class ServiceTestConfigInfo {
  /** appInfo */
  appInfo = undefined;

  /** userConfigs */
  userConfigs = [];
}

class StatisticValueParam {
  /** attributeId */
  attributeId = undefined;

  /** attributeName */
  attributeName = '';

  /** bhvId */
  bhvId = undefined;

  /** bhvMetaId */
  bhvMetaId = undefined;

  /** endDay */
  endDay = '';

  /** extraInfo */
  extraInfo = '';

  /** filters */
  filters = [];

  /** kvKeyDim */
  kvKeyDim = '';

  /** kvKeyDimId */
  kvKeyDimId = undefined;

  /** startDay */
  startDay = '';

  /** statisticType */
  statisticType = '';

  /** timeType */
  timeType = '';

  /** timespan */
  timespan = undefined;
}

class StatisticValueParamV2 {
  /** 打标的字段Id */
  attributeId = undefined;

  /** 行为id */
  bhvId = undefined;

  /** scope结束日期 */
  endDay = '';

  /** 扩展信息，前端用 */
  extraInfo = '';

  /** 过滤条件 */
  filters = [];

  /** 唯一id，前端生成 */
  objectId = '';

  /** scope开始日期 */
  startDay = '';

  /** 打标的聚合方式 */
  statisticType = '';

  /** 时间类型，动态/静态 */
  timeType = '';

  /** recent时间配置 */
  timespan = undefined;
}

class StatusInfo {
  /** ext */
  ext = undefined;

  /** message */
  message = '';

  /** status */
  status = '';

  /** url */
  url = '';
}

class SyncLabStatus {
  /** canSyncLab */
  canSyncLab = false;

  /** message */
  message = '';
}

class TabBO {
  /** count */
  count = undefined;

  /** type */
  type = '';
}

class Table {
  /** desc */
  desc = '';

  /** guid */
  guid = '';

  /** nodeId */
  nodeId = '';

  /** ownerId */
  ownerId = '';

  /** privilegeSystemEnum */
  privilegeSystemEnum = 'ANTMETA';

  /** projectName */
  projectName = '';

  /** tableName */
  tableName = '';
}

class TableKeyInfoBO {
  /** idType */
  idType = '';

  /** physColEn */
  physColEn = '';
}

class TestTask {
  /** args */
  args = [];

  /** context */
  context = undefined;

  /** creatorId */
  creatorId = '';

  /** executeMode */
  executeMode = '';

  /** finishTime */
  finishTime = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** history */
  history = undefined;

  /** id */
  id = undefined;

  /** implementType */
  implementType = '';

  /** odpsAccountName */
  odpsAccountName = '';

  /** projectBizId */
  projectBizId = undefined;

  /** projectName */
  projectName = '';

  /** projectUser */
  projectUser = '';

  /** result */
  result = undefined;

  /** serviceId */
  serviceId = undefined;

  /** serviceName */
  serviceName = '';

  /** serviceNameCn */
  serviceNameCn = '';

  /** serviceType */
  serviceType = '';

  /** startTime */
  startTime = '';

  /** status */
  status = '';

  /** stopable */
  stopable = false;
}

class Tuple2 {
  /** _1 */
  _1 = undefined;

  /** _2 */
  _2 = '';
}

class TypeInfo {
  /** odpsType */
  odpsType = 'BIGINT';

  /** typeName */
  typeName = '';
}

class UpdateParam {
  /** description */
  description = '';

  /** labelId */
  labelId = undefined;

  /** lifecycle */
  lifecycle = undefined;

  /** period */
  period = '';

  /** periodIndex */
  periodIndex = undefined;

  /** times */
  times = '';
}

class UrlItem {
  /** name */
  name = '';

  /** url */
  url = '';
}

class ValueParam {
  /** condition */
  condition = '';

  /** dataFormatter */
  dataFormatter = '';

  /** dataType */
  dataType = '';

  /** scope */
  scope = undefined;

  /** tableName */
  tableName = '';

  /** timePtColumn */
  timePtColumn = '';

  /** valDistriType */
  valDistriType = '';

  /** valueColumn */
  valueColumn = '';

  /** valueDesc */
  valueDesc = '';

  /** valueDescColumn */
  valueDescColumn = '';

  /** valueType */
  valueType = '';
}

class WorkflowCustomerParam {
  /** 业务域 */
  app = '';

  /** 新客类型 */
  customerType = '';

  /** 客户粒度：自然人(oneId)、设备(deviceId) */
  idType = '';

  /** ID 类型 */
  keyType = '';

  /** 时间周期：30，90，365 */
  newDays = undefined;
}

class WorkflowExperiment {
  /** flowName */
  flowName = '';

  /** userNumber */
  userNumber = '';
}

class WorkflowInputParam {
  /**  输入字段 */
  cols = [];

  /**  0: 明文  1: 密文 */
  encodeMethod = undefined;

  /** 标签多主键的情况,使用数组对象方式来传参，一一关系映射 */
  labelPrimaryKeys = [];

  /**  输入表名 */
  name = '';

  /** 分区字段 */
  partition = '';

  /**  输入主键字段 */
  primaryKeys = [];
}

class WorkflowOutputParam {
  /** 是否自动创建表 */
  autoCreateTable = false;

  /** crontab */
  crontab = '';

  /** 表的生命周期 */
  lifecycle = undefined;

  /** 表名 */
  name = '';

  /** 输出字段 */
  outKeyCol = '';

  /** 分区字段名 */
  partitionCol = '';
}

class WorkflowProcessParam {
  /** appId */
  appId = undefined;

  /** keyType */
  keyType = '';

  /** labelParams */
  labelParams = [];

  /** objectId */
  objectId = undefined;
}

export const daas = {
  AccountAssetsRelExtBO,
  AddLabelParam,
  AddOneidParam,
  AoneBO,
  ApplyingResourceBO,
  AssetApply4BpmsParam,
  AssetApplyParam,
  AssetGroupBO,
  AssetGroupExtendInfoBO,
  AssetPermissionBO,
  AssetScope,
  AuthLabelItemVO,
  AuthLabelListParm,
  AuthType,
  BehaviorItemBO,
  BhvBehaviorDO,
  BhvFieldDO,
  BhvMetaDO,
  BhvNameBO,
  BhvParam,
  BhvParamV2,
  BhvPlatform,
  BhvPreRunResultBO,
  BhvPreRunSubmitResultBO,
  BhvSchemaDO,
  BrandVO,
  BusinessScopeBO,
  CateInfo,
  CateProp,
  CatePropValue,
  CategoryBO,
  CategoryDO,
  CategoryResponse,
  CheckResult,
  ClassificationDTO,
  Column,
  CommonDataResult,
  CommonItem,
  CommonKVResult,
  CreateBusinessScopeParam,
  CrowdBO,
  CycleCondition,
  CycleInfoParam,
  DependentLabelParam,
  DomainDO,
  EmpBO,
  Employee,
  EntityType,
  FbiBO,
  FilterParam,
  FilterParamV2,
  FormConfigDO,
  FuwuItemAuthBO,
  FuwuItemBO,
  FuwuItemSimpleBO,
  FuwuOverviewBO,
  GprofileAssetBO,
  GuardBpmsBO,
  HsfType,
  IdMappingAssetBO,
  IdType,
  IdTypeDO,
  IdTypeDataSchema,
  IndustryInfo,
  JSONObject,
  LabelApplyStatBO,
  LabelBO,
  LabelBaseInfo,
  LabelBaseParam,
  LabelCallStatBO,
  LabelCheckApplyResultBO,
  LabelCheckResultBO,
  LabelConfidenceParam,
  LabelDO,
  LabelDataSchema,
  LabelDetailParam,
  LabelDistributeBO,
  LabelDistributeDO,
  LabelExtendInfo,
  LabelGroupBO,
  LabelGroupServiceConfigBO,
  LabelGroupServiceTaskBO,
  LabelInfoParam,
  LabelInfoParamV2,
  LabelInsertProduceInfo,
  LabelItemBO,
  LabelKVDataSchema,
  LabelKeyDataSchema,
  LabelListBO,
  LabelLogicInfo,
  LabelMetaBO,
  LabelNoSampleProduceConfig,
  LabelNoSampleProduceParams,
  LabelOverviewBO,
  LabelParam,
  LabelPermissionCheckBO,
  LabelPhysicInfo,
  LabelPreviewDataBO,
  LabelPreviewDataNewBO,
  LabelProcessInfoBO,
  LabelProduceBO,
  LabelProduceInfoBO,
  LabelProduceParams,
  LabelProductionListBO,
  LabelSampleDistriDO,
  LabelSampleResultBO,
  LabelSimpleParam,
  LabelStabilityDO,
  LabelTaskResultDO,
  LabelValueParam,
  Map,
  MarketCateTreeBO,
  MarketServiceBO,
  MarketServiceStatDO,
  MarketUserConfigDO,
  MarkingParam,
  MarkingParamV2,
  MetaApp,
  MobileClientDomainDO,
  MonitorRuleInfo,
  Node,
  OdpsProjectBO,
  OdpsTableMeta,
  OfflineTaskConfigBO,
  OfflineTaskConfigDO,
  OfflineTaskParam,
  OfflineTaskSyncStatusBO,
  OneIdBO,
  PaginatedResult,
  PaiExperiment,
  PaiExperimentDependency,
  PaiExperimentParam,
  PlatformAuthBO,
  PortalCaidanBO,
  PortalModuleBO,
  PortalSearchBO,
  PreApplyResourceDO,
  ProjectBO,
  ProjectConfig,
  ProjectStatBO,
  ProjectStatDO,
  ProjectUpdateParam,
  PromotionStatus,
  PublicProduceInfo,
  PublishParam,
  ReadmeLabelDistributeBO,
  ReadmeLabelUserProfileBO,
  ReadmeRelationshipBO,
  ReadmeSurveyBO,
  ReadmeUserLifeBO,
  ReapplyResourceParam,
  RegularConfig,
  RegularConfigV2,
  RegularLabelProduceParam,
  RegularProduceParamV2,
  RelationInfoParam,
  RelationInfoParamV2,
  ResourceAuthBO,
  ResourceGroupBO,
  ResultObject,
  SampleCaseBO,
  SampleTaskParam,
  SaveBhvFieldParam,
  SaveBhvMetaParam,
  SaveBhvParam,
  ScenePermission,
  ScheduleInfo,
  SearchItem,
  SelectStatus,
  Sequence,
  ServiceBaseBO,
  ServiceCaseBO,
  ServiceDetailBO,
  ServiceExtendBO,
  ServiceFunctionBO,
  ServiceInfoTableBO,
  ServiceParameterTypeBO,
  ServiceProcessFlowBO,
  ServiceRefB0,
  ServiceSceneBO,
  ServiceSchemaBO,
  ServiceTestConfigInfo,
  StatisticValueParam,
  StatisticValueParamV2,
  StatusInfo,
  SyncLabStatus,
  TabBO,
  Table,
  TableKeyInfoBO,
  TestTask,
  Tuple2,
  TypeInfo,
  UpdateParam,
  UrlItem,
  ValueParam,
  WorkflowCustomerParam,
  WorkflowExperiment,
  WorkflowInputParam,
  WorkflowOutputParam,
  WorkflowProcessParam,
};
