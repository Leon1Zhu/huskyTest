class AalgorithmFeatureResponseV2 {
  /** data */
  data = [];

  /** recordCount */
  recordCount = undefined;
}

class AddEnhanceFeatureResult {
  /** featureName */
  featureName = '';

  /** result */
  result = false;
}

class AppContext {
  /** appId */
  appId = undefined;

  /** aucInfo */
  aucInfo = new AucInfo();

  /** bizId */
  bizId = undefined;

  /** extraInfo */
  extraInfo = undefined;

  /** projectId */
  projectId = undefined;
}

class AucInfo {
  /** activeTime */
  activeTime = undefined;

  /** ak */
  ak = '';

  /** sn */
  sn = '';

  /** timesteamp */
  timesteamp = undefined;
}

class BaseFeature {
  /** authStatus */
  authStatus = '';

  /** bpmsId */
  bpmsId = '';

  /** cateId */
  cateId = undefined;

  /** creator */
  creator = '';

  /** creatorId */
  creatorId = '';

  /** dataType */
  dataType = '';

  /** defaultOutputNodeName */
  defaultOutputNodeName = '';

  /** entityType */
  entityType = undefined;

  /** env */
  env = '';

  /** extInfo */
  extInfo = '';

  /** featureDescribe */
  featureDescribe = '';

  /** featureKeyEnumItems */
  featureKeyEnumItems = '';

  /** featureKeyType */
  featureKeyType = '';

  /** featureKvKeyPhysicalType */
  featureKvKeyPhysicalType = '';

  /** featureKvKeyType */
  featureKvKeyType = '';

  /** featureKvValuePhysicalFormat */
  featureKvValuePhysicalFormat = '';

  /** featureKvValuePhysicalType */
  featureKvValuePhysicalType = '';

  /** featureKvValueType */
  featureKvValueType = '';

  /** featureNameCn */
  featureNameCn = '';

  /** featureNameEn */
  featureNameEn = '';

  /** featureOrganizationType */
  featureOrganizationType = '';

  /** featurePhysicalFormat */
  featurePhysicalFormat = '';

  /** featurePhysicalType */
  featurePhysicalType = '';

  /** featureSource */
  featureSource = '';

  /** featureValueEnumItems */
  featureValueEnumItems = '';

  /** featureValueSeparator */
  featureValueSeparator = '';

  /** featureValueType */
  featureValueType = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** isPublic */
  isPublic = undefined;

  /** kvSeparatorKey */
  kvSeparatorKey = '';

  /** lifeCycle */
  lifeCycle = undefined;

  /** owner */
  owner = '';

  /** period */
  period = undefined;

  /** primaryKeyInfoList */
  primaryKeyInfoList = [];

  /** projectId */
  projectId = undefined;

  /** qualityScore */
  qualityScore = undefined;

  /** refLabelCount */
  refLabelCount = undefined;

  /** refSmartServiceCount */
  refSmartServiceCount = undefined;

  /** separatorKey */
  separatorKey = '';

  /** sourceFeatureId */
  sourceFeatureId = undefined;

  /** sourcePhysicsTable */
  sourcePhysicsTable = '';

  /** sourceType */
  sourceType = undefined;

  /** statisticStatus */
  statisticStatus = undefined;

  /** status */
  status = undefined;

  /** storeType */
  storeType = undefined;
}

class BatchFeatureProduceRequest {
  /** bhvId */
  bhvId = undefined;

  /** categoryId */
  categoryId = undefined;

  /** creator */
  creator = '';

  /** featureProduceRequests */
  featureProduceRequests = [];

  /** isPublic */
  isPublic = false;

  /** paramInfo */
  paramInfo = undefined;

  /** projectId */
  projectId = undefined;

  /** templateId */
  templateId = undefined;

  /** updateInfo */
  updateInfo = new FeatureProduceUpdateInfo();
}

class CategoryInfo {
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

class CheckFeaturePartitionRequest {
  /** appContext */
  appContext = new AppContext();

  /** featureConditionList */
  featureConditionList = [];

  /** partitionDate */
  partitionDate = '';
}

class CheckFeaturePartitionRequestV2 {
  /** appContext */
  appContext = new AppContext();

  /** checkCache */
  checkCache = false;

  /** checkFeaturePartitionVOList */
  checkFeaturePartitionVOList = [];

  /** datasetConfig */
  datasetConfig = new DatasetConfig();
}

class CheckFeaturePartitionResponseVO {
  /** data */
  data = [];
}

class CheckFeaturePartitionVO {
  /** featureName */
  featureName = '';

  /** partitionDate */
  partitionDate = '';
}

class CheckPartitionResponse {
  /** message */
  message = '';

  /** status */
  status = 'READY';
}

class DatasetConfig {
  /** datasetSchema */
  datasetSchema = new DatasetSchema();

  /** defaultJoinColumn */
  defaultJoinColumn = '';

  /** featureDsColumn */
  featureDsColumn = '';

  /** filterNullFeatureLine */
  filterNullFeatureLine = false;

  /** label */
  label = '';

  /** partition */
  partition = '';

  /** reservedColumns */
  reservedColumns = '';

  /** tableName */
  tableName = '';
}

class DatasetSchema {
  /** columnDesc */
  columnDesc = [];
}

class DistributeInfo {
  /** enumCount */
  enumCount = undefined;

  /** enumKey */
  enumKey = '';

  /** enumRate */
  enumRate = undefined;

  /** totalNum */
  totalNum = undefined;
}

class EmployeeInfo {
  /** empId */
  empId = '';

  /** empType */
  empType = '';

  /** name */
  name = '';

  /** nickName */
  nickName = '';

  /** picUrl */
  picUrl = '';
}

class FeatureAddGroupRequest {
  /** creator */
  creator = '';

  /** featureNameList */
  featureNameList = [];

  /** groupCnName */
  groupCnName = '';

  /** groupEnName */
  groupEnName = '';

  /** projectId */
  projectId = undefined;
}

class FeatureCacheConfig {
  /** featureName */
  featureName = '';

  /** partitionValue */
  partitionValue = '';
}

class FeatureColumnLogicalMappingRequest {
  /** force */
  force = false;

  /** index */
  index = undefined;

  /** keyColumn */
  keyColumn = '';

  /** keyType */
  keyType = '';

  /** mapping */
  mapping = undefined;

  /** tableName */
  tableName = '';
}

class FeatureConcatCacheTableRequest {
  /** computeTime */
  computeTime = '';

  /** concatTableName */
  concatTableName = '';

  /** concatTablePartition */
  concatTablePartition = '';

  /** dataSetPartition */
  dataSetPartition = '';

  /** dataSetTableName */
  dataSetTableName = '';

  /** featureConfigList */
  featureConfigList = [];
}

class FeatureConditionV2 {
  /** columnTypes */
  columnTypes = undefined;

  /** dataPreprocessFunction */
  dataPreprocessFunction = '';

  /** excludes */
  excludes = '';

  /** featureID */
  featureID = undefined;

  /** featureName */
  featureName = '';

  /** featureNameFunction */
  featureNameFunction = '';

  /** featureValueFunction */
  featureValueFunction = '';

  /** filterCondition */
  filterCondition = '';

  /** groupName */
  groupName = '';

  /** includes */
  includes = '';

  /** joinColumn */
  joinColumn = '';

  /** mapjoin */
  mapjoin = false;

  /** modelFeatureGroupName */
  modelFeatureGroupName = '';

  /** outputColumn */
  outputColumn = '';

  /** partitionCondition */
  partitionCondition = '';

  /** partitionValue */
  partitionValue = '';

  /** table */
  table = '';

  /** tableFilterCondition */
  tableFilterCondition = new TableFilterCondition();

  /** tableJoinColumnDesc */
  tableJoinColumnDesc = '';
}

class FeatureConfig {
  /** concatType */
  concatType = '';

  /** encode */
  encode = false;

  /** featureConditionList */
  featureConditionList = [];

  /** featureDelimiter */
  featureDelimiter = '';

  /** kvDelimiter */
  kvDelimiter = '';

  /** merge */
  merge = false;

  /** predict */
  predict = false;

  /** skipCheckPartition */
  skipCheckPartition = false;
}

class FeatureDataDTO {
  /** data */
  data = [];

  /** recordCount */
  recordCount = undefined;
}

class FeatureEngineeringRequest {
  /** appInfo */
  appInfo = new AppContext();

  /** datasetConfig */
  datasetConfig = new DatasetConfig();

  /** extParam */
  extParam = undefined;

  /** featureConfig */
  featureConfig = new FeatureConfig();

  /** hints */
  hints = undefined;

  /** odpsConfig */
  odpsConfig = new OdpsConfig();

  /** outputConfig */
  outputConfig = new OutputConfig();

  /** priority */
  priority = undefined;

  /** recoveryId */
  recoveryId = undefined;

  /** testMode */
  testMode = false;

  /** uniqueKey */
  uniqueKey = '';
}

class FeatureEngineeringResponse {
  /** dimNum */
  dimNum = undefined;

  /** groupNames */
  groupNames = '';

  /** message */
  message = '';

  /** outputTable */
  outputTable = '';

  /** status */
  status = 'READY';

  /** taskUrl */
  taskUrl = '';
}

class FeatureEnhanceRequest {
  /** creator */
  creator = '';

  /** enhanceSql */
  enhanceSql = '';

  /** featureName */
  featureName = '';

  /** featureNameColumn */
  featureNameColumn = '';

  /** featureOrganizationType */
  featureOrganizationType = '';

  /** featurePhysicalType */
  featurePhysicalType = '';

  /** featureValueColumn */
  featureValueColumn = '';

  /** featureValueType */
  featureValueType = '';

  /** opreator */
  opreator = '';

  /** primaryKeyInfoList */
  primaryKeyInfoList = [];

  /** tableName */
  tableName = '';

  /** viewMode */
  viewMode = false;
}

class FeatureEntityType {
  /** name */
  name = '';

  /** type */
  type = undefined;
}

class FeatureExtractRequest {
  /** appInfo */
  appInfo = new AppContext();

  /** featureName */
  featureName = '';

  /** hints */
  hints = undefined;

  /** outputConfig */
  outputConfig = new OutputConfig();

  /** storeType */
  storeType = undefined;
}

class FeatureGroupData {
  /** groupCnName */
  groupCnName = '';

  /** groupEnName */
  groupEnName = '';

  /** id */
  id = undefined;

  /** owner */
  owner = '';
}

class FeatureGroupResponse {
  /** data */
  data = [];

  /** recordCount */
  recordCount = undefined;
}

class FeatureKeyType {
  /** name */
  name = '';

  /** type */
  type = '';
}

class FeaturePartitionVO {
  /** featureIds */
  featureIds = '';

  /** partitionFormat */
  partitionFormat = '';

  /** tn */
  tn = undefined;
}

class FeaturePreprocessRequest {
  /** appInfo */
  appInfo = new AppContext();

  /** featureName */
  featureName = '';

  /** outputTable */
  outputTable = '';

  /** sql */
  sql = '';

  /** storeType */
  storeType = undefined;
}

class FeatureProduceRequest {
  /** featureId */
  featureId = undefined;

  /** featureNameCn */
  featureNameCn = '';

  /** featureNameEn */
  featureNameEn = '';

  /** timespan */
  timespan = undefined;
}

class FeatureProduceUpdateInfo {
  /** description */
  description = '';

  /** fillDays */
  fillDays = undefined;

  /** lifecycle */
  lifecycle = undefined;

  /** period */
  period = '';

  /** periodIndex */
  periodIndex = undefined;

  /** times */
  times = '';
}

class FeatureQualityScore {
  /** computeTime */
  computeTime = '';

  /** featureId */
  featureId = undefined;

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** score */
  score = undefined;
}

class FeatureQualityScoreRequest {
  /** featureQualityScoreList */
  featureQualityScoreList = [];
}

class FeatureResponse {
  /** authStatus */
  authStatus = '';

  /** bpmsId */
  bpmsId = '';

  /** cateId */
  cateId = undefined;

  /** category */
  category = new CategoryInfo();

  /** creator */
  creator = '';

  /** creatorId */
  creatorId = '';

  /** creatorInfo */
  creatorInfo = new EmployeeInfo();

  /** defaultOutputNodeName */
  defaultOutputNodeName = '';

  /** dimension */
  dimension = undefined;

  /** entityType */
  entityType = undefined;

  /** featureColumn */
  featureColumn = '';

  /** featureDescribe */
  featureDescribe = '';

  /** featureId */
  featureId = undefined;

  /** featureKeyEnumItems */
  featureKeyEnumItems = '';

  /** featureKeyType */
  featureKeyType = '';

  /** featureKvKeyPhysicalType */
  featureKvKeyPhysicalType = '';

  /** featureKvKeyType */
  featureKvKeyType = '';

  /** featureKvValuePhysicalFormat */
  featureKvValuePhysicalFormat = '';

  /** featureKvValuePhysicalType */
  featureKvValuePhysicalType = '';

  /** featureKvValueType */
  featureKvValueType = '';

  /** featureNameCn */
  featureNameCn = '';

  /** featureNameColumn */
  featureNameColumn = '';

  /** featureNameEn */
  featureNameEn = '';

  /** featureOrganizationType */
  featureOrganizationType = '';

  /** featurePhysicalFormat */
  featurePhysicalFormat = '';

  /** featurePhysicalType */
  featurePhysicalType = '';

  /** featureValueEnumItems */
  featureValueEnumItems = '';

  /** featureValueSeparator */
  featureValueSeparator = '';

  /** featureValueType */
  featureValueType = '';

  /** filterColumn */
  filterColumn = '';

  /** filterCondition */
  filterCondition = '';

  /** isNew */
  isNew = '';

  /** isPublic */
  isPublic = undefined;

  /** keyColumn */
  keyColumn = '';

  /** kvSeparatorKey */
  kvSeparatorKey = '';

  /** lifecycle */
  lifecycle = undefined;

  /** nodeId */
  nodeId = undefined;

  /** odpsTableName */
  odpsTableName = '';

  /** owner */
  owner = '';

  /** ownerIds */
  ownerIds = '';

  /** owners */
  owners = [];

  /** partitionColumn */
  partitionColumn = '';

  /** partitionFormat */
  partitionFormat = '';

  /** primaryKeyInfoList */
  primaryKeyInfoList = [];

  /** produceType */
  produceType = undefined;

  /** projectId */
  projectId = undefined;

  /** qualityScore */
  qualityScore = undefined;

  /** refLabelCount */
  refLabelCount = undefined;

  /** refSmartServiceCount */
  refSmartServiceCount = undefined;

  /** resourceType */
  resourceType = '';

  /** separatorKey */
  separatorKey = '';

  /** statisticInfos */
  statisticInfos = [];

  /** statisticStatus */
  statisticStatus = undefined;

  /** status */
  status = undefined;

  /** statusInfo */
  statusInfo = new StatusInfo();

  /** storeType */
  storeType = undefined;

  /** totalNum */
  totalNum = '';
}

class FeatureSerializeRequest {
  /** appInfo */
  appInfo = new AppContext();

  /** excludeColumnName */
  excludeColumnName = '';

  /** execProject */
  execProject = '';

  /** featureColumnName */
  featureColumnName = '';

  /** featureDelimiter */
  featureDelimiter = '';

  /** kvDelimiter */
  kvDelimiter = '';

  /** predict */
  predict = false;

  /** tableName */
  tableName = '';

  /** uniqueKey */
  uniqueKey = '';
}

class FeatureSerializeResponse {
  /** dimNum */
  dimNum = undefined;

  /** message */
  message = '';

  /** status */
  status = 'READY';

  /** tableName */
  tableName = '';

  /** taskUrl */
  taskUrl = '';
}

class FeatureStatisticDetailRequest {
  /** detailName */
  detailName = '';

  /** detailValue */
  detailValue = '';

  /** featureId */
  featureId = undefined;

  /** statisticTime */
  statisticTime = '';
}

class FeatureStatisticInfoResponse {
  /** featureId */
  featureId = undefined;

  /** featureOrganizationType */
  featureOrganizationType = '';

  /** featurePartitionUrl */
  featurePartitionUrl = '';

  /** featureValueType */
  featureValueType = '';

  /** kv */
  kv = new KvStatisticInfoDTO();

  /** kvEnum */
  kvEnum = new KvEnumStatisticInfoDTO();

  /** kvNumeric */
  kvNumeric = new KvNumericStatisticInfoDTO();

  /** kvsplitEnum */
  kvsplitEnum = new KvsplitEnumStatisticInfoDTO();

  /** kvsplitNumeric */
  kvsplitNumeric = new KvsplitNumericStatisticInfoDTO();

  /** refLabelCount */
  refLabelCount = undefined;

  /** samples */
  samples = [];

  /** singleEnum */
  singleEnum = new SingleEnumStatisticInfoDTO();

  /** singleNumeric */
  singleNumeric = new SingleNumericStatisticInfoDTO();

  /** totalNum */
  totalNum = undefined;
}

class FeatureStatistics {
  /** featureId */
  featureId = undefined;

  /** featureTime */
  featureTime = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** physicalType */
  physicalType = '';

  /** statisticName */
  statisticName = '';

  /** statisticValue */
  statisticValue = '';
}

class FeatureStatisticsRequest {
  /** featureId */
  featureId = undefined;

  /** featureTime */
  featureTime = '';

  /** physicalType */
  physicalType = '';

  /** statisticName */
  statisticName = '';

  /** statisticValue */
  statisticValue = '';
}

class FeatureTemplate {
  /** code */
  code = '';

  /** creatorId */
  creatorId = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** isCommon */
  isCommon = false;

  /** name */
  name = '';

  /** params */
  params = [];

  /** projectId */
  projectId = undefined;

  /** templateDesc */
  templateDesc = '';

  /** type */
  type = undefined;
}

class HorizontalImportTableMutiPartRequest {
  /** behaviorPartitionColumn */
  behaviorPartitionColumn = '';

  /** creator */
  creator = '';

  /** defaultCateId */
  defaultCateId = undefined;

  /** entityType */
  entityType = undefined;

  /** featureKeyType */
  featureKeyType = '';

  /** featureTemplateCnName */
  featureTemplateCnName = '';

  /** featureTemplateEnName */
  featureTemplateEnName = '';

  /** forceUseGroup */
  forceUseGroup = false;

  /** groupEnName */
  groupEnName = '';

  /** groupName */
  groupName = '';

  /** idTypeMapping */
  idTypeMapping = undefined;

  /** ignoreColumnList */
  ignoreColumnList = [];

  /** isPublic */
  isPublic = undefined;

  /** partitionConfig */
  partitionConfig = undefined;

  /** primaryKey */
  primaryKey = '';

  /** projectId */
  projectId = undefined;

  /** spanPartitionColumn */
  spanPartitionColumn = '';

  /** statistic */
  statistic = false;

  /** tableName */
  tableName = '';
}

class HorizontalImportTableRequest {
  /** cateIdMap */
  cateIdMap = undefined;

  /** cnNamePrefix */
  cnNamePrefix = '';

  /** creator */
  creator = '';

  /** defaultCateId */
  defaultCateId = undefined;

  /** enNamePrefix */
  enNamePrefix = '';

  /** entityType */
  entityType = undefined;

  /** featureKeyType */
  featureKeyType = '';

  /** forceUseGroup */
  forceUseGroup = false;

  /** groupEnName */
  groupEnName = '';

  /** groupName */
  groupName = '';

  /** idTypeMapping */
  idTypeMapping = undefined;

  /** ignoreColumnList */
  ignoreColumnList = [];

  /** includeColumnList */
  includeColumnList = [];

  /** isPublic */
  isPublic = undefined;

  /** kvMap */
  kvMap = undefined;

  /** primaryKey */
  primaryKey = '';

  /** projectId */
  projectId = undefined;

  /** statistic */
  statistic = false;

  /** tableName */
  tableName = '';
}

class HorizontallOdpsTableRequest {
  /** cateId */
  cateId = undefined;

  /** creator */
  creator = '';

  /** defaultOutputNodeName */
  defaultOutputNodeName = '';

  /** entityType */
  entityType = undefined;

  /** featureDescribe */
  featureDescribe = '';

  /** featureKeyType */
  featureKeyType = '';

  /** featureKvKeyPhysicalType */
  featureKvKeyPhysicalType = '';

  /** featureKvKeyType */
  featureKvKeyType = '';

  /** featureKvValuePhysicalType */
  featureKvValuePhysicalType = '';

  /** featureKvValueType */
  featureKvValueType = '';

  /** featureNameCn */
  featureNameCn = '';

  /** featureNameEn */
  featureNameEn = '';

  /** featureOrganizationType */
  featureOrganizationType = '';

  /** featurePhysicalType */
  featurePhysicalType = '';

  /** featureValueColumn */
  featureValueColumn = '';

  /** featureValueType */
  featureValueType = '';

  /** filterCondition */
  filterCondition = '';

  /** isPublic */
  isPublic = undefined;

  /** keyColumn */
  keyColumn = '';

  /** kvSeparatorKey */
  kvSeparatorKey = '';

  /** odpsTableName */
  odpsTableName = '';

  /** partitionColumn */
  partitionColumn = '';

  /** projectId */
  projectId = undefined;

  /** separatorKey */
  separatorKey = '';
}

class ImportTableResponse {
  /** columnName */
  columnName = '';

  /** message */
  message = '';
}

class KvEnumStatisticInfoDTO {
  /** distinctKeyNum */
  distinctKeyNum = '';

  /** maxKeyValue */
  maxKeyValue = '';

  /** maxValueValue */
  maxValueValue = '';

  /** minKeyValue */
  minKeyValue = '';

  /** minValueValue */
  minValueValue = '';

  /** samples */
  samples = [];

  /** totalNum */
  totalNum = undefined;
}

class KvNumericStatisticInfoDTO {
  /** distinctKeyNum */
  distinctKeyNum = '';

  /** maxKeyValue */
  maxKeyValue = '';

  /** maxValueValue */
  maxValueValue = '';

  /** minKeyValue */
  minKeyValue = '';

  /** minValueValue */
  minValueValue = '';

  /** samples */
  samples = [];

  /** totalNum */
  totalNum = undefined;
}

class KvStatisticInfoDTO {
  /** distinctKeyNum */
  distinctKeyNum = '';

  /** maxKeyValue */
  maxKeyValue = '';

  /** maxValueValue */
  maxValueValue = '';

  /** minKeyValue */
  minKeyValue = '';

  /** minValueValue */
  minValueValue = '';

  /** samples */
  samples = [];

  /** totalNum */
  totalNum = undefined;
}

class KvsplitEnumStatisticInfoDTO {
  /** distinctKeyNum */
  distinctKeyNum = '';

  /** maxKeyValue */
  maxKeyValue = '';

  /** maxValueValue */
  maxValueValue = '';

  /** minKeyValue */
  minKeyValue = '';

  /** minValueValue */
  minValueValue = '';

  /** samples */
  samples = [];

  /** totalNum */
  totalNum = undefined;
}

class KvsplitNumericStatisticInfoDTO {
  /** distinctKeyNum */
  distinctKeyNum = '';

  /** maxKeyValue */
  maxKeyValue = '';

  /** maxValueValue */
  maxValueValue = '';

  /** minKeyValue */
  minKeyValue = '';

  /** minValueValue */
  minValueValue = '';

  /** samples */
  samples = [];

  /** totalNum */
  totalNum = undefined;
}

class ListData {
  /** 列表 */
  data = [];

  /** 总数 */
  recordCount = undefined;
}

class LongitudinalImportTableRequest {
  /** behaviorPartitionColumn */
  behaviorPartitionColumn = '';

  /** creator */
  creator = '';

  /** defaultCateId */
  defaultCateId = undefined;

  /** entityType */
  entityType = undefined;

  /** featureKeyType */
  featureKeyType = '';

  /** featureNameColumn */
  featureNameColumn = '';

  /** featureTemplateCnName */
  featureTemplateCnName = '';

  /** featureTemplateEnName */
  featureTemplateEnName = '';

  /** featureValueColumn */
  featureValueColumn = '';

  /** forceUseGroup */
  forceUseGroup = false;

  /** groupEnName */
  groupEnName = '';

  /** groupName */
  groupName = '';

  /** idTypeMapping */
  idTypeMapping = undefined;

  /** ignoreColumnList */
  ignoreColumnList = [];

  /** isPublic */
  isPublic = undefined;

  /** partitionConfig */
  partitionConfig = undefined;

  /** primaryKey */
  primaryKey = '';

  /** projectId */
  projectId = undefined;

  /** spanPartitionColumn */
  spanPartitionColumn = '';

  /** statistic */
  statistic = false;

  /** tableName */
  tableName = '';
}

class LongitudinallOdpsTableRequest {
  /** cateId */
  cateId = undefined;

  /** creator */
  creator = '';

  /** defaultOutputNodeName */
  defaultOutputNodeName = '';

  /** entityType */
  entityType = undefined;

  /** featureDescribe */
  featureDescribe = '';

  /** featureKeyType */
  featureKeyType = '';

  /** featureKvKeyPhysicalType */
  featureKvKeyPhysicalType = '';

  /** featureKvKeyType */
  featureKvKeyType = '';

  /** featureKvValuePhysicalType */
  featureKvValuePhysicalType = '';

  /** featureKvValueType */
  featureKvValueType = '';

  /** featureNameCn */
  featureNameCn = '';

  /** featureNameColumn */
  featureNameColumn = '';

  /** featureNameEn */
  featureNameEn = '';

  /** featureOrganizationType */
  featureOrganizationType = '';

  /** featureValueColumn */
  featureValueColumn = '';

  /** filterColumn */
  filterColumn = '';

  /** filterCondition */
  filterCondition = '';

  /** isPublic */
  isPublic = undefined;

  /** keyColumn */
  keyColumn = '';

  /** odpsTableName */
  odpsTableName = '';

  /** partitionColumn */
  partitionColumn = '';

  /** projectId */
  projectId = undefined;
}

class Number {}

class OdpsConfig {
  /** accessId */
  accessId = '';

  /** accessKey */
  accessKey = '';

  /** aliyunId */
  aliyunId = '';

  /** baseId */
  baseId = '';

  /** bizId */
  bizId = '';

  /** computeProject */
  computeProject = '';

  /** d2EndPoint */
  d2EndPoint = '';

  /** endPoint */
  endPoint = '';

  /** execProject */
  execProject = '';

  /** officeEndPoint */
  officeEndPoint = '';

  /** resourceProject */
  resourceProject = '';

  /** storageProject */
  storageProject = '';
}

class OdpsTableRequest {
  /** cateId */
  cateId = undefined;

  /** creator */
  creator = '';

  /** defaultOutputNodeName */
  defaultOutputNodeName = '';

  /** entityType */
  entityType = undefined;

  /** featureColumn */
  featureColumn = '';

  /** featureDescribe */
  featureDescribe = '';

  /** featureId */
  featureId = undefined;

  /** featureKeyEnumItems */
  featureKeyEnumItems = '';

  /** featureKeyType */
  featureKeyType = '';

  /** featureKvKeyPhysicalType */
  featureKvKeyPhysicalType = '';

  /** featureKvKeyType */
  featureKvKeyType = '';

  /** featureKvValuePhysicalFormat */
  featureKvValuePhysicalFormat = '';

  /** featureKvValuePhysicalType */
  featureKvValuePhysicalType = '';

  /** featureKvValueType */
  featureKvValueType = '';

  /** featureNameCn */
  featureNameCn = '';

  /** featureNameColumn */
  featureNameColumn = '';

  /** featureNameEn */
  featureNameEn = '';

  /** featureOrganizationType */
  featureOrganizationType = '';

  /** featurePhysicalFormat */
  featurePhysicalFormat = '';

  /** featurePhysicalType */
  featurePhysicalType = '';

  /** featureValueEnumItems */
  featureValueEnumItems = '';

  /** featureValueType */
  featureValueType = '';

  /** filterColumn */
  filterColumn = '';

  /** filterCondition */
  filterCondition = '';

  /** isPublic */
  isPublic = undefined;

  /** keyColumn */
  keyColumn = '';

  /** kvSeparatorKey */
  kvSeparatorKey = '';

  /** odpsTableName */
  odpsTableName = '';

  /** partitionColumn */
  partitionColumn = '';

  /** partitionFormat */
  partitionFormat = '';

  /** primaryKeyList */
  primaryKeyList = [];

  /** projectId */
  projectId = undefined;

  /** separatorKey */
  separatorKey = '';

  /** storeType */
  storeType = undefined;
}

class OptionItem {
  /** label */
  label = '';

  /** value */
  value = '';
}

class OutputConfig {
  /** execProject */
  execProject = '';

  /** kvSplit */
  kvSplit = false;

  /** lifecycle */
  lifecycle = undefined;

  /** mergeOutputFeatureColumnName */
  mergeOutputFeatureColumnName = '';

  /** outputTable */
  outputTable = '';

  /** outputTablePartition */
  outputTablePartition = '';

  /** project */
  project = '';
}

class PartitionResponseVO {
  /** featureId */
  featureId = undefined;

  /** message */
  message = '';

  /** result */
  result = false;
}

class PrimaryKeyInfo {
  /** idType */
  idType = '';

  /** index */
  index = undefined;

  /** keyColumn */
  keyColumn = '';
}

class Result {
  /** code */
  code = '';

  /** data */
  data = new AalgorithmFeatureResponseV2();

  /** message */
  message = '';

  /** success */
  success = false;

  /** total */
  total = undefined;
}

class ResultDTO {
  /** code */
  code = undefined;

  /** data */
  data = new FeatureResponse();

  /** message */
  message = '';
}

class SamplePartitionVO {
  /** sampleOffset */
  sampleOffset = '';

  /** samplePartitionFormat */
  samplePartitionFormat = '';

  /** sampleTn */
  sampleTn = '';
}

class SingleEnumStatisticInfoDTO {
  /** distributeInfos */
  distributeInfos = [];

  /** samples */
  samples = [];

  /** totalNum */
  totalNum = undefined;
}

class SingleNumericStatisticInfoDTO {
  /** avgValue */
  avgValue = new Number();

  /** maxValue */
  maxValue = new Number();

  /** medianValue */
  medianValue = new Number();

  /** minValue */
  minValue = new Number();

  /** samples */
  samples = [];

  /** stddevValue */
  stddevValue = new Number();

  /** totalNum */
  totalNum = undefined;
}

class StatusInfo {
  /** errorMsg */
  errorMsg = '';

  /** message */
  message = '';

  /** status */
  status = '';
}

class TableColumnMeta {
  /** columnName */
  columnName = '';

  /** columnType */
  columnType = '';

  /** comment */
  comment = '';

  /** isPartitionCol */
  isPartitionCol = undefined;

  /** isPrimaryKey */
  isPrimaryKey = undefined;
}

class TableFilterCondition {
  /** curTableJoinKey */
  curTableJoinKey = '';

  /** featureJoinKey */
  featureJoinKey = '';

  /** filterCondition */
  filterCondition = '';

  /** tableName */
  tableName = '';
}

class TemplateParam {
  /** description */
  description = '';

  /** paramName */
  paramName = '';

  /** required */
  required = false;

  /** tips */
  tips = '';

  /** type */
  type = '';
}

export const featurePlatform = {
  AalgorithmFeatureResponseV2,
  AddEnhanceFeatureResult,
  AppContext,
  AucInfo,
  BaseFeature,
  BatchFeatureProduceRequest,
  CategoryInfo,
  CheckFeaturePartitionRequest,
  CheckFeaturePartitionRequestV2,
  CheckFeaturePartitionResponseVO,
  CheckFeaturePartitionVO,
  CheckPartitionResponse,
  DatasetConfig,
  DatasetSchema,
  DistributeInfo,
  EmployeeInfo,
  FeatureAddGroupRequest,
  FeatureCacheConfig,
  FeatureColumnLogicalMappingRequest,
  FeatureConcatCacheTableRequest,
  FeatureConditionV2,
  FeatureConfig,
  FeatureDataDTO,
  FeatureEngineeringRequest,
  FeatureEngineeringResponse,
  FeatureEnhanceRequest,
  FeatureEntityType,
  FeatureExtractRequest,
  FeatureGroupData,
  FeatureGroupResponse,
  FeatureKeyType,
  FeaturePartitionVO,
  FeaturePreprocessRequest,
  FeatureProduceRequest,
  FeatureProduceUpdateInfo,
  FeatureQualityScore,
  FeatureQualityScoreRequest,
  FeatureResponse,
  FeatureSerializeRequest,
  FeatureSerializeResponse,
  FeatureStatisticDetailRequest,
  FeatureStatisticInfoResponse,
  FeatureStatistics,
  FeatureStatisticsRequest,
  FeatureTemplate,
  HorizontalImportTableMutiPartRequest,
  HorizontalImportTableRequest,
  HorizontallOdpsTableRequest,
  ImportTableResponse,
  KvEnumStatisticInfoDTO,
  KvNumericStatisticInfoDTO,
  KvStatisticInfoDTO,
  KvsplitEnumStatisticInfoDTO,
  KvsplitNumericStatisticInfoDTO,
  ListData,
  LongitudinalImportTableRequest,
  LongitudinallOdpsTableRequest,
  Number,
  OdpsConfig,
  OdpsTableRequest,
  OptionItem,
  OutputConfig,
  PartitionResponseVO,
  PrimaryKeyInfo,
  Result,
  ResultDTO,
  SamplePartitionVO,
  SingleEnumStatisticInfoDTO,
  SingleNumericStatisticInfoDTO,
  StatusInfo,
  TableColumnMeta,
  TableFilterCondition,
  TemplateParam,
};
