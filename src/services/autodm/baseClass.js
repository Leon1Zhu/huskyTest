class AlgCustomEvalResult {
  /** evalGroup */
  evalGroup = '';

  /** evalKey */
  evalKey = '';

  /** evalResult */
  evalResult = '';

  /** evalType */
  evalType = '';

  /** extraInfo */
  extraInfo = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** statusMsg */
  statusMsg = '';

  /** taskId */
  taskId = undefined;
}

class AlgEvaluationVOV2 {
  /** 分类算法分类数目 */
  classificationNum = undefined;

  /** 数量混淆矩阵 */
  confusionMatrixCount = '';

  /** 比例混淆矩阵 */
  confusionMatrixRatio = '';

  /** 核心模型指标 */
  keyIndicator = '';

  /** 核心模型指标值 */
  keyIndicatorValue = undefined;

  /** 整体指标 */
  metrics = '';

  /**  性能 */
  performance = '';

  /** PR曲线 */
  prCurve = '';

  /** 残差分桶 */
  residualBin = '';

  /** ROC */
  rocCurve = '';

  /** 特征重要性 */
  significance = '';

  /** 多任务子任务ID */
  subId = undefined;

  /** 评估预跑的任务ID */
  taskId = undefined;

  /** 任务类型 */
  taskType = '';
}

class AlgExampleVO {
  /** 算法模型分类数 */
  algorithmCategoryNum = undefined;

  /** 算法模型类型 */
  algorithmType = '';

  /** 候选集 */
  candidateCode = '';

  /** 样本检查状态, running或finished */
  checkStatus = '';

  /** 创建用户 */
  creator = new User();

  /** 数据配置方式 */
  datasetMode = 'baseOnSample';

  /** 数据切分方式 */
  datasetSplitMode = 'random';

  /** 样本检查错误信息 */
  errorMsgs = '';

  /** 实验ID */
  experimentId = undefined;

  /** ID列 */
  keyColumn = '';

  /** ID类型 */
  keyType = '';

  /** 标注列 */
  labelColumn = '';

  /** 标签ID */
  labelId = undefined;

  /** 标注比例 */
  labelRate = '';

  /** 测试验证表 */
  nonTrainingTable = '';

  /** ODPS表名 */
  odpsTableName = '';

  /** 样本偏移分区值,数字或者为空 */
  offset = undefined;

  /** 分区字段 */
  partitionColumn = '';

  /** 分区格式 */
  partitionFormat = 'max_pt';

  /** 分区值,数字或者为空 */
  partitionValue = '';

  /** 分区值类型,$bizdate-n or max_pt */
  partitionValueType = '';

  /** 自定义候选集表 */
  predTable = '';

  /** 多主键信息 */
  primaryKeyList = [];

  /** 智能服务市场项目ID */
  projectId = undefined;

  /** 测试集条件 */
  testCondition = '';

  /** 训练集条件 */
  trainingCondition = '';

  /** 验证集条件 */
  validationCondition = '';

  /** 样本检查警告信息 */
  warningMsgs = '';
}

class AlgExperimentVOV2 {
  /** 创建者 */
  creator = new User();

  /** 实验描述 */
  description = '';

  /** 扩展信息 */
  extraInfo = '';

  /** 创建时间 */
  gmtCreate = '';

  /** 修改时间 */
  gmtModified = '';

  /** 实验ID */
  id = undefined;

  /** 实验名称 */
  name = '';

  /** 项目ID */
  projectId = undefined;

  /** 场景 */
  scene = '';

  /** 实验统计 */
  statistic = new ExperimentStatisticVOV2();
}

class AlgModelVO {
  /** 描述 */
  description = '';

  /** 全局参数 */
  globalParams = '';

  /** 算法超参 */
  hyperParams = '';

  /** 模型ID */
  id = undefined;

  /** 模型name */
  name = '';

  /** 优先级 */
  priority = undefined;

  /** 状态 */
  status = '';

  /** 调参模型 */
  tuningModel = '';

  /** 调参参数 */
  tuningParams = '';

  /** 模型分类 */
  type = '';
}

class AlgSimplifiedTrialVOV2 {
  /** 是否有评估信息 */
  hasEvaluation = false;

  /** 迭代ID */
  iterationId = undefined;

  /** 迭代名称 */
  iterationName = '';

  /** 预跑状态 */
  prerunStatus = '';

  /** 状态 */
  status = '';
}

class AlgStudyVO {
  /** 算法模型分类数 */
  algorithmCategoryNum = undefined;

  /** 算法模型 */
  algorithmModel = '';

  /** 算法模型类型 */
  algorithmType = '';

  /** 业务traceId */
  bizTraceId = '';

  /** 创建人 */
  creator = new User();

  /** D2任务地址 */
  d2TaskUrl = '';

  /** 算法实验ID */
  experimentId = undefined;

  /** 算法实验Name */
  experimentName = '';

  /** 特征数量 */
  featureCnt = undefined;

  /** 特征信息列表 */
  featureInfo = [];

  /** 主键和特征信息列表的映射关系，多主键之间逗号分隔，规则是:idType:index,idType:index,例如：oneid:1,oneid:2 */
  featureInfoGroup = [];

  /** 全局参数 */
  globalParams = '';

  /** 创建时间 */
  gmtCreated = '';

  /** 已迭代次数 */
  hasIterationCnt = undefined;

  /** 初始超参 */
  initParams = '';

  /** 总迭代次数 */
  iterationCnt = undefined;

  /** 标签ID */
  labelId = undefined;

  /** 特征参数 */
  params = [];

  /** 状态 */
  status = '';

  /** 状态描述 */
  statusMsg = '';

  /** 成功迭代次数 */
  successfulIterationCnt = undefined;

  /** 迭代列表 */
  trials = [];
}

class AlgTrialVO {
  /** D2任务ID */
  d2TaskIds = [];

  /** D2任务地址 */
  d2TaskUrls = [];

  /** 迭代对应的部署状态 */
  deployStatus = '';

  /** 部署TraceId */
  deployTraceId = '';

  /** 运行结束时间 */
  gmtFinished = '';

  /** 是否有评估信息 */
  hasEvaluation = false;

  /** 超参 */
  hyperParams = '';

  /** 模型指标 */
  indicator = new Indicator();

  /** 模型指标 */
  indicators = '';

  /** 迭代ID */
  iterationId = undefined;

  /** 迭代名称 */
  iterationName = '';

  /** 核心模型指标 */
  keyIndicator = '';

  /** 核心模型指标值 */
  keyIndicatorValue = undefined;

  /** 模型名称 */
  modelCode = '';

  /** 模型结果 */
  modelResult = '';

  /** 模型效果 */
  performance = '';

  /** 迭代对应的预跑状态 */
  prerunStatus = '';

  /** 预跑TraceId */
  prerunTraceId = '';

  /** 状态 */
  status = '';

  /** 训练名称 */
  trainingName = '';
}

class AlgTrialVOV2 {
  /** D2任务ID */
  d2TaskIds = [];

  /** D2任务地址 */
  d2TaskUrls = [];

  /** 迭代对应的部署状态 */
  deployStatus = '';

  /** 部署TraceId */
  deployTraceId = '';

  /** 运行结束时间 */
  gmtFinished = '';

  /** 是否有评估信息 */
  hasEvaluation = false;

  /** 超参 */
  hyperParams = '';

  /** 模型指标 */
  indicator = new Indicator();

  /** 模型指标 */
  indicators = '';

  /** 迭代ID */
  iterationId = undefined;

  /** 迭代名称 */
  iterationName = '';

  /** 核心模型指标 */
  keyIndicator = '';

  /** 核心模型指标值 */
  keyIndicatorValue = undefined;

  /** 模型名称 */
  modelCode = '';

  /** 模型结果 */
  modelResult = '';

  /** 模型效果 */
  performance = '';

  /** 迭代对应的预跑状态 */
  prerunStatus = '';

  /** 预跑TraceId */
  prerunTraceId = '';

  /** 状态 */
  status = '';

  /** 训练名称 */
  trainingName = '';
}

class AlgorithmConfigVOV2 {
  /** 算法标识 */
  algoCode = '';

  /** 初始参数 */
  algoConfig = '';

  /** 算法展示名 */
  algoName = '';

  /** 算法类型 */
  algoType = '';

  /** 创建者 */
  creator = new User();

  /** 创建时间 */
  gmtCreate = '';

  /** 修改时间 */
  gmtModified = '';

  /** 算法配置ID */
  id = undefined;

  /** 是否平台自由算法配置 */
  platform = false;

  /** 项目ID */
  projectId = undefined;

  /** 算法包资源 */
  resource = '';

  /** 状态 */
  status = '';

  /** 优化参数 */
  tunerConfig = '';

  /** 引擎 */
  tunerEngine = '';
}

class ApplyResourceVO {
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

class AuthType {
  /** 类型 */
  type = 'tableNotExist';

  /** 结果 */
  value = '';
}

class AuthTypeVOV2 {
  /** 类型 */
  type = 'tableNotExist';

  /** 结果 */
  value = '';
}

class AutoOptimization {
  /** 是否开启 */
  checked = false;

  /** 标签ID */
  labelId = undefined;
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

class CommonExperimentVOV2 {
  /** 创建者 */
  creator = new User();

  /** 实验描述 */
  description = '';

  /** 扩展信息 */
  extraInfo = '';

  /** 创建时间 */
  gmtCreate = '';

  /** 修改时间 */
  gmtModified = '';

  /** 实验ID */
  id = undefined;

  /** 实验名称 */
  name = '';

  /** 通用生产ID */
  produceId = undefined;

  /** 项目ID */
  projectId = undefined;

  /** 场景 */
  scene = '';

  /** 实验统计 */
  statistic = new ExperimentStatisticVOV2();
}

class CommonProduceConfig {
  /** config */
  config = '';

  /** creator */
  creator = '';

  /** env */
  env = '';

  /** experimentId */
  experimentId = undefined;

  /** extraInfo */
  extraInfo = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** status */
  status = '';

  /** statusMsg */
  statusMsg = '';

  /** taskId */
  taskId = undefined;
}

class CommonProduceConfigVO {
  /** 生产配置 */
  config = '';

  /** 任务描述 */
  experimentDesc = '';

  /** 实验ID。若为空需要创建任务，否则更新任务 */
  experimentId = undefined;

  /** 任务名 */
  experimentName = '';

  /** 生产ID */
  produceId = undefined;

  /** 项目ID */
  projectId = undefined;

  /** 场景 */
  scene = '';
}

class CrowdConfigVOV2 {
  /** 条件 */
  condition = '';

  /** 人群名称 */
  crowdName = '';

  /** 人群类型，策略人群 or 自定义人群 */
  crowdType = undefined;

  /** 部署ID */
  deployId = undefined;

  /** 描述 */
  description = '';

  /** 人群是否动态更新 */
  dynamic = false;

  /** 过期时间 */
  expireDate = '';

  /** 策略组ID */
  industryId = undefined;

  /** 是否公开 */
  open = false;

  /** 取数方式 */
  processMode = '';

  /** 分享用户，工号 */
  shareUsers = [];

  /** 分析对象ID */
  versionId = undefined;
}

class DataApplicationVOV2 {
  /** 业务空间 id */
  businessScopeId = undefined;

  /** 数据名称 */
  dataName = '';

  /** 部署ID */
  deployId = undefined;

  /** 实验ID */
  experimentId = undefined;

  /** 应用场景ID */
  externalId = undefined;

  /** 应用场景名称 */
  externalName = '';

  /** 应用场景的负责人 */
  externalUser = new User();

  /** 应用创建时间 */
  gmtCreate = '';

  /** 应用修改时间 */
  gmtModified = '';

  /** 应用ID */
  id = undefined;

  /** 应用连接 */
  link = '';

  /** 数据ID */
  produceId = undefined;

  /** 项目ID */
  projectId = undefined;

  /** 应用状态 */
  status = '';

  /** 应用场景 */
  type = '';
}

class DataSetStatisticVOV2 {}

class DataSetVOV2 {
  /** 算法模型分类数 */
  algorithmCategoryNum = undefined;

  /** 算法模型类型 */
  algorithmType = '';

  /** bizdate值 */
  bizDate = '';

  /** 样本检查状态, running或finished */
  checkStatus = '';

  /** 数据配置方式 */
  datasetMode = 'baseOnSample';

  /** 数据切分方式 */
  datasetSplitMode = 'random';

  /** 样本检查错误信息 */
  errorMsgs = '';

  /** 实验ID */
  experimentId = undefined;

  /** 样本扩展参数信息 */
  extraParamInfo = '';

  /** 样本ID */
  id = undefined;

  /** 标注比例 */
  labelRate = '';

  /** 测试验证表 */
  nonTrainingTable = '';

  /** 样本偏移分区值,数字或者为空 */
  offset = undefined;

  /** 分区值,数字或者为空 */
  partitionValue = '';

  /** 分区值类型,$bizdate-n or max_pt */
  partitionValueType = '';

  /** 业务场景 */
  scene = undefined;

  /** Error级别质检链接 */
  taskUrl = '';

  /** 测试集条件 */
  testCondition = '';

  /** 训练集条件 */
  trainingCondition = '';

  /** 训练目标 */
  trainingGoal = new TrainingGoalVOV2();

  /** 验证集条件 */
  validationCondition = '';

  /** 样本检查警告信息 */
  warningMsgs = '';
}

class DeployConfig {
  /** 补充说明 */
  description = '';

  /** 迭代ID */
  iterationId = undefined;

  /** 标签ID */
  labelId = undefined;

  /** 生命周期 */
  lifeCycle = undefined;

  /** 是否周期性训练 */
  periodicTrain = false;

  /** 发布类型 */
  publishType = 'platform';

  /** 更新周期 */
  updatePeriod = 'day';

  /** 更新时间 */
  updateTime = '';
}

class DeployConfigVOV2 {
  /** 日志trace id */
  bizTraceId = '';

  /** 自定义条件 */
  condition = '';

  /** 创建者 */
  creator = new User();

  /** d2产出实例列表链接 */
  cycleInstanceUrl = '';

  /** d2节点名称 */
  d2Node = '';

  /** 数据名称 */
  dataName = '';

  /** 部署ID */
  deployId = undefined;

  /** 部署d2节点ID */
  deployNodeId = undefined;

  /** 补充说明 */
  description = '';

  /** 实验ID */
  experimentId = undefined;

  /** 实验名称 */
  experimentName = '';

  /** 创建时间 */
  gmtCreate = '';

  /** 迭代ID */
  iterationId = undefined;

  /** 迭代名称 */
  iterationName = '';

  /** 生命周期 */
  lifeCycle = undefined;

  /** limit值 */
  limit = undefined;

  /** 输出表 */
  outputTable = '';

  /** 是否周期性训练 */
  periodicTrain = false;

  /** 预览数据 */
  previewData = [];

  /** 预览数据的列 */
  previewDataHeaders = [];

  /** 数据处理方式 */
  processMode = 'whole';

  /** 通用生产ID */
  produceId = undefined;

  /** 调度状态 */
  produceStatus = '';

  /** 发布类型 */
  publishType = 'platform';

  /** 记录数 */
  recordCount = undefined;

  /** 部署状态 */
  status = '';

  /** 更新周期 */
  updatePeriod = 'day';

  /** 更新时间 */
  updateTime = '';

  /** 是否保留score列 */
  withScoreColumn = false;
}

class DeployInstanceVOV2 {
  /** 日志trace id */
  bizTraceId = '';

  /** 结束时间 */
  finishTime = '';

  /** 手动业务流程实例URL */
  manualInstanceUrl = '';

  /** 开始时间 */
  startTime = '';

  /** 运行状态 */
  status = '';

  /** 任务ID */
  taskId = undefined;
}

class DeployStatsVOV2 {
  /** 平台已有行为 */
  platformBhvNum = undefined;

  /** 平台已有特征 */
  platformFeatureNum = undefined;

  /** 数据已同步人群 */
  producedCrowdNum = undefined;

  /** 数据已上架标签 */
  producedLabelNum = undefined;

  /** 已生产数据 */
  producedTotalNum = undefined;
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

class EvaluationDataVOV2 {
  /** 算法模型分类数 */
  algorithmCategoryNum = undefined;

  /** 算法模型 */
  algorithmModel = '';

  /** 算法模型类型 */
  algorithmType = '';

  /** 业务traceId */
  bizTraceId = '';

  /** 覆盖量 */
  coverage = '';

  /** D2任务地址 */
  d2TaskUrl = '';

  /** 结果数据 */
  data = [];

  /** 结果列名 */
  fields = [];

  /** 迭代ID */
  iterationId = undefined;

  /** 迭代名称 */
  iterationName = '';

  /** 模型结果 */
  modelResult = '';

  /** 预跑日志 */
  prerunLog = '';

  /** 状态 */
  status = '';

  /** 状态描述 */
  statusMsg = '';

  /** 训练ID */
  trainingId = undefined;

  /** 训练名称 */
  trainingName = '';
}

class ExperimentStatisticVOV2 {
  /** 数据应用数 */
  appliedCnt = undefined;

  /** 智能推荐的特征选择状态 */
  autoTrainingStatus = '';

  /** 失败的迭代数 */
  failedIterationCnt = undefined;

  /** 失败完成任务数 */
  failedTrainingCnt = undefined;

  /** 完成的迭代数 */
  finishedIterationCnt = undefined;

  /** 训练完成任务数 */
  finishedTrainingCnt = undefined;

  /** 运行的迭代数 */
  runningIterationCnt = undefined;

  /** 运行中训练任务数 */
  runningTrainingCnt = undefined;

  /** 成功的迭代数 */
  successfulIterationCnt = undefined;

  /** 成功完成任务数 */
  successfulTrainingCnt = undefined;

  /** 迭代总数 */
  totalIterationCnt = undefined;

  /** 训练任务总数 */
  totalTrainingCnt = undefined;

  /** 训练状态 */
  trainingStatus = '';
}

class FeatureCategoryVOV2 {
  /** children */
  children = [];

  /** creatorId */
  creatorId = '';

  /** description */
  description = '';

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

  /** status */
  status = '';

  /** type */
  type = '';
}

class FeatureInfo {
  /** 特征类目ID */
  cateId = undefined;

  /** 特征的维度 */
  dimension = undefined;

  /** 特征ID */
  featureId = undefined;

  /** 特征名称 */
  featureNameCn = '';

  /** 特征英文名称 */
  featureNameEn = '';

  /** 特征的joinKey */
  joinKey = '';

  /** 特征类目ID */
  selectionType = 'required';
}

class FeatureInfoGroup {
  /** featureInfoList */
  featureInfoList = [];

  /** joinKey */
  joinKey = '';
}

class FeatureParam {
  /** 特征ID列表 */
  featureIds = '';

  /** 特征分区格式 */
  partitionFormat = '';

  /** 日期偏差数 */
  tn = '';
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

class FeatureResponseVOV2 {
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

class GlobalStatisticVOV2 {
  /** 已应用数量 */
  appliedCnt = undefined;

  /** 未开始 */
  readyCnt = undefined;

  /** 开发中 */
  runningCnt = undefined;
}

class Indicator {
  /** 准确度 */
  accuracy = undefined;

  /** AUC */
  auc = undefined;

  /** F1 score */
  f1 = undefined;

  /** 回归指标mae */
  mae = undefined;

  /** 精确度 */
  precision = undefined;

  /** recall */
  recall = undefined;

  /** 回归指标rmse */
  rmse = undefined;
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

class IterationDetailVOV2 {
  /** 迭代详情 */
  algEvaluationVO = new AlgEvaluationVOV2();

  /** 迭代的基本信息 */
  algTrial = new AlgTrialVOV2();

  /** 算法模型类型 */
  algorithmType = '';

  /** 算法模型分类数 */
  classificationNum = undefined;
}

class JSONObject {}

class LabelInfo {
  /** 是否已配置基础信息 */
  hasBaseInfo = false;

  /** 是否已经部署 */
  hasDeployed = false;

  /** 是否已经配置实验 */
  hasExperiment = false;

  /** 是否有结果 */
  hasResult = false;

  /** 标签ID */
  labelId = undefined;
}

class LabelValueVO {
  /** label */
  label = '';

  /** value */
  value = undefined;
}

class ListData {
  /** 列表 */
  data = [];

  /** 总数 */
  recordCount = undefined;
}

class Map {}

class ModelInfoVO {
  /** 默认全局参数 */
  globalParams = '';

  /** 算法ID */
  id = undefined;

  /** 初始超参 */
  initParams = '';

  /** 算法配置Name */
  label = '';

  /** 算法配置Code */
  value = '';
}

class ModelTypeVO {
  /** 模型类型名 */
  label = '';

  /** 模型列表 */
  models = [];

  /** 模型类型值 */
  value = '';
}

class ModelTypeVOV2 {
  /** 模型类型名 */
  label = '';

  /** 模型列表 */
  models = [];

  /** 模型类型值 */
  value = '';
}

class OdpsTaskQuery {
  /** algTaskId */
  algTaskId = undefined;

  /** params */
  params = undefined;
}

class Option {
  /** 选项名 */
  label = '';

  /** 选项值 */
  value = '';
}

class OptionVOV2 {
  /** 选项名 */
  label = '';

  /** 选项值 */
  value = '';
}

class PreRunData {
  /** 算法模型分类数 */
  algorithmCategoryNum = undefined;

  /** 算法模型 */
  algorithmModel = '';

  /** 算法模型类型 */
  algorithmType = '';

  /** 业务traceId */
  bizTraceId = '';

  /** 覆盖量 */
  coverage = '';

  /** D2任务地址 */
  d2TaskUrl = '';

  /** 结果数据 */
  data = [];

  /** 实验名称 */
  experimentName = '';

  /** 结果列名 */
  fields = [];

  /** 迭代ID */
  iterationId = undefined;

  /** 迭代名称 */
  iterationName = '';

  /** 标签ID */
  labelId = undefined;

  /** 模型结果 */
  modelResult = '';

  /** 预跑日志 */
  prerunLog = '';

  /** 状态 */
  status = '';

  /** 状态描述 */
  statusMsg = '';
}

class PrimaryKeyInfo {
  /** enableIdMapping */
  enableIdMapping = false;

  /** idType */
  idType = '';

  /** index */
  index = undefined;

  /** keyColumn */
  keyColumn = '';
}

class PrimaryKeyInfoVO {
  /** 该主键是否需要idmapping */
  enableIdMapping = false;

  /** 用于做特征筛选时传入 */
  idType = '';

  /** 用于保存特征和join主键如何关联时传入 */
  joinKey = '';

  /** 用于在页面展示主键名称 */
  showKeyName = '';
}

class PrimaryKeyInfoVOV2 {
  /** 该主键是否需要idmapping */
  enableIdMapping = false;

  /** 用于做特征筛选时传入 */
  idType = '';

  /** 用于保存特征和join主键如何关联时传入 */
  joinKey = '';

  /** 用于在页面展示主键名称 */
  showKeyName = '';
}

class ResultObject {
  /** code */
  code = undefined;

  /** data */
  data = new AlgCustomEvalResult();

  /** message */
  message = '';

  /** success */
  success = false;
}

class SampleVOV2 {
  /** 创建用户 */
  creator = new User();

  /** 实验ID */
  experimentId = undefined;

  /** 样本ID */
  id = undefined;

  /** ID列 */
  keyColumn = '';

  /** ID类型 */
  keyType = '';

  /** 标注列 */
  labelColumn = '';

  /** 分区字段 */
  partitionColumn = '';

  /** 分区格式 */
  partitionFormat = '';

  /** 多主键信息 */
  primaryKeyList = [];

  /** ODPS表名 */
  tableName = '';
}

class StatusInfo {
  /** errorMsg */
  errorMsg = '';

  /** message */
  message = '';

  /** status */
  status = '';
}

class StudyCopyVO {
  /** algStudyId */
  algStudyId = undefined;

  /** message */
  message = '';
}

class TableColumnMeta {
  /** 项目唯一标识 */
  appGuid = '';

  /** 列唯一标识 */
  columnGuid = '';

  /** 列名 */
  columnName = '';

  /** 列数据类型 */
  columnType = '';

  /** 列说明 */
  comment = '';

  /** 是否允许为空 */
  isNullable = undefined;

  /** 是否分区类 */
  isPartitionCol = undefined;

  /** 是否主键 */
  isPrimaryKey = undefined;

  /** 字段安全级别 */
  safeLevel = '';

  /** 字段序号 */
  seqNumber = undefined;

  /** 表唯一标识 */
  tableGuid = '';

  /** 表名 */
  tableName = '';
}

class TableColumnMetaVOV2 {
  /** 项目唯一标识 */
  appGuid = '';

  /** 列唯一标识 */
  columnGuid = '';

  /** 列名 */
  columnName = '';

  /** 列数据类型 */
  columnType = '';

  /** 列说明 */
  comment = '';

  /** 是否允许为空 */
  isNullable = undefined;

  /** 是否分区类 */
  isPartitionCol = undefined;

  /** 是否主键 */
  isPrimaryKey = undefined;

  /** 字段安全级别 */
  safeLevel = '';

  /** 字段序号 */
  seqNumber = undefined;

  /** 表唯一标识 */
  tableGuid = '';

  /** 表名 */
  tableName = '';
}

class TaskParam {
  /** 业务时间 */
  bizdate = '';

  /** 标签ID */
  labelId = undefined;

  /** 标签生产ID */
  produceId = undefined;

  /** 任务ID */
  taskId = undefined;
}

class TensorBoardVOV2 {
  /** 提示信息 */
  msg = '';

  /** tensor board状态 */
  status = '';

  /** tensor board任务的logview链接 */
  url = '';
}

class TrainingGoalVOV2 {
  /** 训练最长周期（hour） */
  duration = undefined;

  /** 优化指标 */
  indicator = '';

  /** 优化指标目标值 */
  indicatorValue = undefined;
}

class TrainingVOV2 {
  /** 算法配置ID */
  algorithmId = undefined;

  /** 算法模型 */
  algorithmModel = '';

  /** 最佳模型效果 */
  bestIndicatorValue = undefined;

  /** 业务traceId */
  bizTraceId = '';

  /** 创建人 */
  creator = new User();

  /** D2任务地址 */
  d2TaskUrl = '';

  /** 实验ID */
  experimentId = undefined;

  /** 特征数量 */
  featureCnt = undefined;

  /** 特征信息列表 */
  featureInfo = [];

  /** 主键和特征信息列表的映射关系，多主键之间逗号分隔，规则是:idType:index,idType:index,例如：oneid:1,oneid:2 */
  featureInfoGroup = [];

  /** 全局参数 */
  globalParams = '';

  /** 创建时间 */
  gmtCreated = '';

  /** 已迭代次数 */
  hasIterationCnt = undefined;

  /** 初始超参 */
  initParams = '';

  /** 总迭代次数 */
  iterationCnt = undefined;

  /** 特征参数 */
  params = [];

  /** AutoDM自动推荐 */
  recommended = false;

  /** 状态 */
  status = '';

  /** 状态描述 */
  statusMsg = '';

  /** 成功迭代次数 */
  successfulIterationCnt = undefined;

  /** 算法训练ID */
  trainingId = undefined;

  /** 算法训练Name */
  trainingName = '';

  /** 迭代列表 */
  trials = [];
}

class TrialStatisticVOV2 {
  /** 最佳迭代 */
  bestTrial = new AlgTrialVOV2();

  /** 实验统计 */
  statistic = new ExperimentStatisticVOV2();
}

class User {
  /** 工号 */
  empId = '';

  /** 姓名 */
  name = '';

  /** 昵称 */
  nickName = '';
}

export const autodm = {
  AlgCustomEvalResult,
  AlgEvaluationVOV2,
  AlgExampleVO,
  AlgExperimentVOV2,
  AlgModelVO,
  AlgSimplifiedTrialVOV2,
  AlgStudyVO,
  AlgTrialVO,
  AlgTrialVOV2,
  AlgorithmConfigVOV2,
  ApplyResourceVO,
  AuthType,
  AuthTypeVOV2,
  AutoOptimization,
  CateInfo,
  CateProp,
  CatePropValue,
  CategoryInfo,
  CommonExperimentVOV2,
  CommonProduceConfig,
  CommonProduceConfigVO,
  CrowdConfigVOV2,
  DataApplicationVOV2,
  DataSetStatisticVOV2,
  DataSetVOV2,
  DeployConfig,
  DeployConfigVOV2,
  DeployInstanceVOV2,
  DeployStatsVOV2,
  EmpBO,
  EmployeeInfo,
  EvaluationDataVOV2,
  ExperimentStatisticVOV2,
  FeatureCategoryVOV2,
  FeatureInfo,
  FeatureInfoGroup,
  FeatureParam,
  FeatureResponse,
  FeatureResponseVOV2,
  FeatureStatistics,
  GlobalStatisticVOV2,
  Indicator,
  IndustryInfo,
  IterationDetailVOV2,
  JSONObject,
  LabelInfo,
  LabelValueVO,
  ListData,
  Map,
  ModelInfoVO,
  ModelTypeVO,
  ModelTypeVOV2,
  OdpsTaskQuery,
  Option,
  OptionVOV2,
  PreRunData,
  PrimaryKeyInfo,
  PrimaryKeyInfoVO,
  PrimaryKeyInfoVOV2,
  ResultObject,
  SampleVOV2,
  StatusInfo,
  StudyCopyVO,
  TableColumnMeta,
  TableColumnMetaVOV2,
  TaskParam,
  TensorBoardVOV2,
  TrainingGoalVOV2,
  TrainingVOV2,
  TrialStatisticVOV2,
  User,
};
