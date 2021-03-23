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
  export namespace autodm {
    export class AlgCustomEvalResult {
      /** evalGroup */
      evalGroup?: string;

      /** evalKey */
      evalKey?: string;

      /** evalResult */
      evalResult?: string;

      /** evalType */
      evalType?: string;

      /** extraInfo */
      extraInfo?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** statusMsg */
      statusMsg?: string;

      /** taskId */
      taskId?: number;
    }

    export class AlgEvaluationVOV2 {
      /** 分类算法分类数目 */
      classificationNum?: number;

      /** 数量混淆矩阵 */
      confusionMatrixCount?: string;

      /** 比例混淆矩阵 */
      confusionMatrixRatio?: string;

      /** 核心模型指标 */
      keyIndicator?: string;

      /** 核心模型指标值 */
      keyIndicatorValue?: number;

      /** 整体指标 */
      metrics?: string;

      /**  性能 */
      performance?: string;

      /** PR曲线 */
      prCurve?: string;

      /** 残差分桶 */
      residualBin?: string;

      /** ROC */
      rocCurve?: string;

      /** 特征重要性 */
      significance?: string;

      /** 多任务子任务ID */
      subId?: number;

      /** 评估预跑的任务ID */
      taskId?: number;

      /** 任务类型 */
      taskType?: string;
    }

    export class AlgExampleVO {
      /** 算法模型分类数 */
      algorithmCategoryNum?: number;

      /** 算法模型类型 */
      algorithmType?: string;

      /** 候选集 */
      candidateCode?: string;

      /** 样本检查状态, running或finished */
      checkStatus?: string;

      /** 创建用户 */
      creator?: defs.autodm.User;

      /** 数据配置方式 */
      datasetMode?: 'baseOnSample' | 'specified';

      /** 数据切分方式 */
      datasetSplitMode?: 'random' | 'user-defined';

      /** 样本检查错误信息 */
      errorMsgs?: string;

      /** 实验ID */
      experimentId?: number;

      /** ID列 */
      keyColumn?: string;

      /** ID类型 */
      keyType?: string;

      /** 标注列 */
      labelColumn?: string;

      /** 标签ID */
      labelId?: number;

      /** 标注比例 */
      labelRate?: string;

      /** 测试验证表 */
      nonTrainingTable?: string;

      /** ODPS表名 */
      odpsTableName?: string;

      /** 样本偏移分区值,数字或者为空 */
      offset?: number;

      /** 分区字段 */
      partitionColumn?: string;

      /** 分区格式 */
      partitionFormat?: 'max_pt' | '$bizdate-n';

      /** 分区值,数字或者为空 */
      partitionValue?: string;

      /** 分区值类型,$bizdate-n or max_pt */
      partitionValueType?: string;

      /** 自定义候选集表 */
      predTable?: string;

      /** 多主键信息 */
      primaryKeyList?: Array<defs.autodm.PrimaryKeyInfo>;

      /** 智能服务市场项目ID */
      projectId?: number;

      /** 测试集条件 */
      testCondition?: string;

      /** 训练集条件 */
      trainingCondition?: string;

      /** 验证集条件 */
      validationCondition?: string;

      /** 样本检查警告信息 */
      warningMsgs?: string;
    }

    export class AlgExperimentVOV2 {
      /** 创建者 */
      creator?: defs.autodm.User;

      /** 实验描述 */
      description?: string;

      /** 扩展信息 */
      extraInfo?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 实验ID */
      id?: number;

      /** 实验名称 */
      name?: string;

      /** 项目ID */
      projectId?: number;

      /** 场景 */
      scene?: string;

      /** 实验统计 */
      statistic?: defs.autodm.ExperimentStatisticVOV2;
    }

    export class AlgModelVO {
      /** 描述 */
      description?: string;

      /** 全局参数 */
      globalParams?: string;

      /** 算法超参 */
      hyperParams?: string;

      /** 模型ID */
      id?: number;

      /** 模型name */
      name?: string;

      /** 优先级 */
      priority?: number;

      /** 状态 */
      status?: string;

      /** 调参模型 */
      tuningModel?: string;

      /** 调参参数 */
      tuningParams?: string;

      /** 模型分类 */
      type?: string;
    }

    export class AlgSimplifiedTrialVOV2 {
      /** 是否有评估信息 */
      hasEvaluation?: boolean;

      /** 迭代ID */
      iterationId?: number;

      /** 迭代名称 */
      iterationName?: string;

      /** 预跑状态 */
      prerunStatus?: string;

      /** 状态 */
      status?: string;
    }

    export class AlgStudyVO {
      /** 算法模型分类数 */
      algorithmCategoryNum?: number;

      /** 算法模型 */
      algorithmModel?: string;

      /** 算法模型类型 */
      algorithmType?: string;

      /** 业务traceId */
      bizTraceId?: string;

      /** 创建人 */
      creator?: defs.autodm.User;

      /** D2任务地址 */
      d2TaskUrl?: string;

      /** 算法实验ID */
      experimentId?: number;

      /** 算法实验Name */
      experimentName?: string;

      /** 特征数量 */
      featureCnt?: number;

      /** 特征信息列表 */
      featureInfo?: Array<defs.autodm.FeatureInfo>;

      /** 主键和特征信息列表的映射关系，多主键之间逗号分隔，规则是:idType:index,idType:index,例如：oneid:1,oneid:2 */
      featureInfoGroup?: Array<defs.autodm.FeatureInfoGroup>;

      /** 全局参数 */
      globalParams?: string;

      /** 创建时间 */
      gmtCreated?: string;

      /** 已迭代次数 */
      hasIterationCnt?: number;

      /** 初始超参 */
      initParams?: string;

      /** 总迭代次数 */
      iterationCnt?: number;

      /** 标签ID */
      labelId?: number;

      /** 特征参数 */
      params?: Array<defs.autodm.FeatureParam>;

      /** 状态 */
      status?: string;

      /** 状态描述 */
      statusMsg?: string;

      /** 成功迭代次数 */
      successfulIterationCnt?: number;

      /** 迭代列表 */
      trials?: Array<defs.autodm.AlgTrialVO>;
    }

    export class AlgTrial {
      /** code */
      code?: string;

      /** createdTime */
      createdTime?: string;

      /** d2Info */
      d2Info?: string;

      /** env */
      env?: string;

      /** extraInfo */
      extraInfo?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** hyperParams */
      hyperParams?: string;

      /** id */
      id?: number;

      /** modelResult */
      modelResult?: string;

      /** performance */
      performance?: string;

      /** status */
      status?: string;

      /** statusMsg */
      statusMsg?: string;

      /** studyId */
      studyId?: number;

      /** studyIdList */
      studyIdList?: Array<number>;

      /** taskId */
      taskId?: number;

      /** updatedTime */
      updatedTime?: string;
    }

    export class AlgTrialVO {
      /** D2任务ID */
      d2TaskIds?: Array<number>;

      /** D2任务地址 */
      d2TaskUrls?: Array<string>;

      /** 迭代对应的部署状态 */
      deployStatus?: string;

      /** 部署TraceId */
      deployTraceId?: string;

      /** 运行结束时间 */
      gmtFinished?: string;

      /** 是否有评估信息 */
      hasEvaluation?: boolean;

      /** 超参 */
      hyperParams?: string;

      /** 模型指标 */
      indicator?: defs.autodm.Indicator;

      /** 模型指标 */
      indicators?: string;

      /** 迭代ID */
      iterationId?: number;

      /** 迭代名称 */
      iterationName?: string;

      /** 核心模型指标 */
      keyIndicator?: string;

      /** 核心模型指标值 */
      keyIndicatorValue?: number;

      /** 模型名称 */
      modelCode?: string;

      /** 模型结果 */
      modelResult?: string;

      /** 模型效果 */
      performance?: string;

      /** 迭代对应的预跑状态 */
      prerunStatus?: string;

      /** 预跑TraceId */
      prerunTraceId?: string;

      /** 状态 */
      status?: string;

      /** 训练名称 */
      trainingName?: string;
    }

    export class AlgTrialVOV2 {
      /** D2任务ID */
      d2TaskIds?: Array<number>;

      /** D2任务地址 */
      d2TaskUrls?: Array<string>;

      /** 迭代对应的部署状态 */
      deployStatus?: string;

      /** 部署TraceId */
      deployTraceId?: string;

      /** 运行结束时间 */
      gmtFinished?: string;

      /** 是否有评估信息 */
      hasEvaluation?: boolean;

      /** 超参 */
      hyperParams?: string;

      /** 模型指标 */
      indicator?: defs.autodm.Indicator;

      /** 模型指标 */
      indicators?: string;

      /** 迭代ID */
      iterationId?: number;

      /** 迭代名称 */
      iterationName?: string;

      /** 核心模型指标 */
      keyIndicator?: string;

      /** 核心模型指标值 */
      keyIndicatorValue?: number;

      /** 模型名称 */
      modelCode?: string;

      /** 模型结果 */
      modelResult?: string;

      /** 模型效果 */
      performance?: string;

      /** 迭代对应的预跑状态 */
      prerunStatus?: string;

      /** 预跑TraceId */
      prerunTraceId?: string;

      /** 状态 */
      status?: string;

      /** 训练名称 */
      trainingName?: string;
    }

    export class AlgorithmConfigVOV2 {
      /** 算法标识 */
      algoCode?: string;

      /** 初始参数 */
      algoConfig?: string;

      /** 算法展示名 */
      algoName?: string;

      /** 算法类型 */
      algoType?: string;

      /** 创建者 */
      creator?: defs.autodm.User;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 算法配置ID */
      id?: number;

      /** 是否平台自由算法配置 */
      platform?: boolean;

      /** 项目ID */
      projectId?: number;

      /** 算法包资源 */
      resource?: string;

      /** 状态 */
      status?: string;

      /** 优化参数 */
      tunerConfig?: string;

      /** 引擎 */
      tunerEngine?: string;
    }

    export class ApplyResourceVO {
      /** bpmsId */
      bpmsId?: string;

      /** name */
      name?: string;

      /** owner */
      owner?: defs.autodm.EmpBO;

      /** resourceType */
      resourceType?: string;

      /** status */
      status?: string;
    }

    export class AuthType {
      /** 类型 */
      type?: 'tableNotExist' | 'tableNotAuth' | 'authorized';

      /** 结果 */
      value?: string;
    }

    export class AuthTypeVOV2 {
      /** 类型 */
      type?: 'tableNotExist' | 'tableNotAuth' | 'authorized';

      /** 结果 */
      value?: string;
    }

    export class AutoOptimization {
      /** 是否开启 */
      checked?: boolean;

      /** 标签ID */
      labelId?: number;
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

    export class CommonExperimentVOV2 {
      /** 创建者 */
      creator?: defs.autodm.User;

      /** 实验描述 */
      description?: string;

      /** 扩展信息 */
      extraInfo?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 实验ID */
      id?: number;

      /** 实验名称 */
      name?: string;

      /** 通用生产ID */
      produceId?: number;

      /** 项目ID */
      projectId?: number;

      /** 场景 */
      scene?: string;

      /** 实验统计 */
      statistic?: defs.autodm.ExperimentStatisticVOV2;
    }

    export class CommonProduceConfig {
      /** config */
      config?: string;

      /** creator */
      creator?: string;

      /** env */
      env?: string;

      /** experimentId */
      experimentId?: number;

      /** extraInfo */
      extraInfo?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** status */
      status?: string;

      /** statusMsg */
      statusMsg?: string;

      /** taskId */
      taskId?: number;
    }

    export class CommonProduceConfigVO {
      /** 生产配置 */
      config?: string;

      /** 任务描述 */
      experimentDesc?: string;

      /** 实验ID。若为空需要创建任务，否则更新任务 */
      experimentId?: number;

      /** 任务名 */
      experimentName?: string;

      /** 生产ID */
      produceId?: number;

      /** 项目ID */
      projectId?: number;

      /** 场景 */
      scene?: string;
    }

    export class CommonTrainingVOV2 {
      /** 算法模型 */
      algorithmModel?: string;

      /** 业务traceId */
      bizTraceId?: string;

      /** 创建人 */
      creator?: defs.autodm.User;

      /** D2任务地址 */
      d2TaskUrl?: string;

      /** 实验ID */
      experimentId?: number;

      /** 模型的扩展信息json格式 */
      extInfo?: string;

      /** 特征数量 */
      featureCnt?: number;

      /** 特征信息列表 */
      featureInfo?: Array<defs.autodm.FeatureInfo>;

      /** 主键和特征信息列表的映射关系，多主键之间逗号分隔，规则是:idType:index,idType:index,例如：oneid:1,oneid:2 */
      featureInfoGroup?: Array<defs.autodm.FeatureInfoGroup>;

      /** 全局参数 */
      globalParams?: string;

      /** 创建时间 */
      gmtCreated?: string;

      /** 已迭代次数 */
      hasIterationCnt?: number;

      /** 初始超参 */
      initParams?: string;

      /** 总迭代次数 */
      iterationCnt?: number;

      /** 迭代ID */
      iterationId?: number;

      /** 特征参数 */
      params?: Array<defs.autodm.FeatureParam>;

      /** 通用生产ID */
      produceId?: number;

      /** 状态 */
      status?: string;

      /** 状态描述 */
      statusMsg?: string;

      /** 成功迭代次数 */
      successfulIterationCnt?: number;

      /** 模型的迭代效果数据json格式，对于效果数据不做任何结果化处理，直接透传到上面 */
      trainResultInfos?: Array<string>;

      /** 算法训练ID */
      trainingId?: number;

      /** 算法训练Name */
      trainingName?: string;

      /** 迭代列表 */
      trials?: Array<defs.autodm.AlgTrialVO>;
    }

    export class CrowdConfigVOV2 {
      /** 条件 */
      condition?: string;

      /** 人群名称 */
      crowdName?: string;

      /** 人群类型，策略人群 or 自定义人群 */
      crowdType?: number;

      /** 部署ID */
      deployId?: number;

      /** 描述 */
      description?: string;

      /** 人群是否动态更新 */
      dynamic?: boolean;

      /** 过期时间 */
      expireDate?: string;

      /** 策略组ID */
      industryId?: number;

      /** 是否公开 */
      open?: boolean;

      /** 取数方式 */
      processMode?: string;

      /** 分享用户，工号 */
      shareUsers?: Array<string>;

      /** 分析对象ID */
      versionId?: number;
    }

    export class DataApplicationVOV2 {
      /** 业务空间 id */
      businessScopeId?: number;

      /** 数据名称 */
      dataName?: string;

      /** 部署ID */
      deployId?: number;

      /** 实验ID */
      experimentId?: number;

      /** 应用场景ID */
      externalId?: number;

      /** 应用场景名称 */
      externalName?: string;

      /** 应用场景的负责人 */
      externalUser?: defs.autodm.User;

      /** 应用创建时间 */
      gmtCreate?: string;

      /** 应用修改时间 */
      gmtModified?: string;

      /** 应用ID */
      id?: number;

      /** 应用连接 */
      link?: string;

      /** 数据ID */
      produceId?: number;

      /** 项目ID */
      projectId?: number;

      /** 应用状态 */
      status?: string;

      /** 应用场景 */
      type?: string;
    }

    export class DataSetStatisticVOV2 {}

    export class DataSetVOV2 {
      /** 算法模型分类数 */
      algorithmCategoryNum?: number;

      /** 算法模型类型 */
      algorithmType?: string;

      /** bizdate值 */
      bizDate?: string;

      /** 样本检查状态, running或finished */
      checkStatus?: string;

      /** 数据配置方式 */
      datasetMode?: 'baseOnSample' | 'specified';

      /** 数据切分方式 */
      datasetSplitMode?: 'random' | 'user-defined';

      /** 样本检查错误信息 */
      errorMsgs?: string;

      /** 实验ID */
      experimentId?: number;

      /** 样本扩展参数信息 */
      extraParamInfo?: string;

      /** 样本ID */
      id?: number;

      /** 标注比例 */
      labelRate?: string;

      /** 测试验证表 */
      nonTrainingTable?: string;

      /** 样本偏移分区值,数字或者为空 */
      offset?: number;

      /** 分区值,数字或者为空 */
      partitionValue?: string;

      /** 分区值类型,$bizdate-n or max_pt */
      partitionValueType?: string;

      /** 业务场景 */
      scene?: number;

      /** Error级别质检链接 */
      taskUrl?: string;

      /** 测试集条件 */
      testCondition?: string;

      /** 训练集条件 */
      trainingCondition?: string;

      /** 训练目标 */
      trainingGoal?: defs.autodm.TrainingGoalVOV2;

      /** 验证集条件 */
      validationCondition?: string;

      /** 样本检查警告信息 */
      warningMsgs?: string;
    }

    export class DeployConfig {
      /** 补充说明 */
      description?: string;

      /** 迭代ID */
      iterationId?: number;

      /** 标签ID */
      labelId?: number;

      /** 生命周期 */
      lifeCycle?: number;

      /** 是否周期性训练 */
      periodicTrain?: boolean;

      /** 发布类型 */
      publishType?: 'platform' | 'custom';

      /** 更新周期 */
      updatePeriod?: 'day' | 'week' | 'month';

      /** 更新时间 */
      updateTime?: string;
    }

    export class DeployConfigVOV2 {
      /** 日志trace id */
      bizTraceId?: string;

      /** 自定义条件 */
      condition?: string;

      /** 创建者 */
      creator?: defs.autodm.User;

      /** d2产出实例列表链接 */
      cycleInstanceUrl?: string;

      /** d2节点名称 */
      d2Node?: string;

      /** 数据名称 */
      dataName?: string;

      /** 部署ID */
      deployId?: number;

      /** 部署d2节点ID */
      deployNodeId?: number;

      /** 补充说明 */
      description?: string;

      /** 实验ID */
      experimentId?: number;

      /** 实验名称 */
      experimentName?: string;

      /** 模型部署的扩展信息json格式 */
      extInfo?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 迭代ID */
      iterationId?: number;

      /** 迭代名称 */
      iterationName?: string;

      /** 生命周期 */
      lifeCycle?: number;

      /** limit值 */
      limit?: number;

      /** 输出表 */
      outputTable?: string;

      /** 是否周期性训练 */
      periodicTrain?: boolean;

      /** 预览数据 */
      previewData?: Array<defs.autodm.ObjectMap<string, ObjectMap>>;

      /** 预览数据的列 */
      previewDataHeaders?: Array<string>;

      /** 数据处理方式 */
      processMode?: 'whole' | 'limit' | 'user-defined';

      /** 通用生产ID */
      produceId?: number;

      /** 调度状态 */
      produceStatus?: string;

      /** 发布类型 */
      publishType?: 'platform' | 'custom';

      /** 记录数 */
      recordCount?: number;

      /** 部署状态 */
      status?: string;

      /** 训练ID */
      trainingId?: number;

      /** 更新周期 */
      updatePeriod?: 'day' | 'week' | 'month';

      /** 更新时间 */
      updateTime?: string;

      /** 是否保留score列 */
      withScoreColumn?: boolean;
    }

    export class DeployInstanceVOV2 {
      /** 日志trace id */
      bizTraceId?: string;

      /** 结束时间 */
      finishTime?: string;

      /** 手动业务流程实例URL */
      manualInstanceUrl?: string;

      /** 开始时间 */
      startTime?: string;

      /** 运行状态 */
      status?: string;

      /** 任务ID */
      taskId?: number;
    }

    export class DeployStatsVOV2 {
      /** 平台已有行为 */
      platformBhvNum?: number;

      /** 平台已有特征 */
      platformFeatureNum?: number;

      /** 数据已同步人群 */
      producedCrowdNum?: number;

      /** 数据已上架标签 */
      producedLabelNum?: number;

      /** 已生产数据 */
      producedTotalNum?: number;
    }

    export class DimConfig {
      /** name */
      name?: string;

      /** value */
      value?: string;
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

    export class EvaluationDataVOV2 {
      /** 算法模型分类数 */
      algorithmCategoryNum?: number;

      /** 算法模型 */
      algorithmModel?: string;

      /** 算法模型类型 */
      algorithmType?: string;

      /** 业务traceId */
      bizTraceId?: string;

      /** 覆盖量 */
      coverage?: string;

      /** D2任务地址 */
      d2TaskUrl?: string;

      /** 结果数据 */
      data?: Array<Array<any>>;

      /** 结果列名 */
      fields?: Array<string>;

      /** 迭代ID */
      iterationId?: number;

      /** 迭代名称 */
      iterationName?: string;

      /** 模型结果 */
      modelResult?: string;

      /** 预跑日志 */
      prerunLog?: string;

      /** 状态 */
      status?: string;

      /** 状态描述 */
      statusMsg?: string;

      /** 训练ID */
      trainingId?: number;

      /** 训练名称 */
      trainingName?: string;
    }

    export class ExperimentStatisticVOV2 {
      /** 数据应用数 */
      appliedCnt?: number;

      /** 智能推荐的特征选择状态 */
      autoTrainingStatus?: string;

      /** 失败的迭代数 */
      failedIterationCnt?: number;

      /** 失败完成任务数 */
      failedTrainingCnt?: number;

      /** 完成的迭代数 */
      finishedIterationCnt?: number;

      /** 训练完成任务数 */
      finishedTrainingCnt?: number;

      /** 运行的迭代数 */
      runningIterationCnt?: number;

      /** 运行中训练任务数 */
      runningTrainingCnt?: number;

      /** 成功的迭代数 */
      successfulIterationCnt?: number;

      /** 成功完成任务数 */
      successfulTrainingCnt?: number;

      /** 迭代总数 */
      totalIterationCnt?: number;

      /** 训练任务总数 */
      totalTrainingCnt?: number;

      /** 训练状态 */
      trainingStatus?: string;
    }

    export class FeatureCategoryVOV2 {
      /** children */
      children?: Array<defs.autodm.FeatureCategoryVOV2>;

      /** creatorId */
      creatorId?: string;

      /** description */
      description?: string;

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

      /** status */
      status?: string;

      /** type */
      type?: string;
    }

    export class FeatureInfo {
      /** 特征类目ID */
      cateId?: number;

      /** 特征的维度 */
      dimension?: number;

      /** 特征ID */
      featureId?: number;

      /** 特征名称 */
      featureNameCn?: string;

      /** 特征英文名称 */
      featureNameEn?: string;

      /** 特征的joinKey */
      joinKey?: string;

      /** 特征类目ID */
      selectionType?: 'required' | 'optional' | 'excluded';
    }

    export class FeatureInfoGroup {
      /** featureInfoList */
      featureInfoList?: Array<defs.autodm.FeatureInfo>;

      /** joinKey */
      joinKey?: string;
    }

    export class FeatureParam {
      /** 特征ID列表 */
      featureIds?: string;

      /** 特征分区格式 */
      partitionFormat?: string;

      /** 日期偏差数 */
      tn?: string;
    }

    export class FeatureResponse {
      /** authStatus */
      authStatus?: string;

      /** bpmsId */
      bpmsId?: string;

      /** cateId */
      cateId?: number;

      /** category */
      category?: defs.autodm.CategoryInfo;

      /** creator */
      creator?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorInfo */
      creatorInfo?: defs.autodm.EmployeeInfo;

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
      owners?: Array<defs.autodm.EmployeeInfo>;

      /** partitionColumn */
      partitionColumn?: string;

      /** partitionFormat */
      partitionFormat?: string;

      /** primaryKeyInfoList */
      primaryKeyInfoList?: Array<defs.autodm.PrimaryKeyInfo>;

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
      statisticInfos?: Array<defs.autodm.FeatureStatistics>;

      /** statisticStatus */
      statisticStatus?: number;

      /** status */
      status?: number;

      /** statusInfo */
      statusInfo?: defs.autodm.StatusInfo;

      /** storeType */
      storeType?: number;

      /** totalNum */
      totalNum?: string;
    }

    export class FeatureResponseVOV2 {
      /** authStatus */
      authStatus?: string;

      /** bpmsId */
      bpmsId?: string;

      /** cateId */
      cateId?: number;

      /** category */
      category?: defs.autodm.CategoryInfo;

      /** creator */
      creator?: string;

      /** creatorId */
      creatorId?: string;

      /** creatorInfo */
      creatorInfo?: defs.autodm.EmployeeInfo;

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
      owners?: Array<defs.autodm.EmployeeInfo>;

      /** partitionColumn */
      partitionColumn?: string;

      /** partitionFormat */
      partitionFormat?: string;

      /** primaryKeyInfoList */
      primaryKeyInfoList?: Array<defs.autodm.PrimaryKeyInfo>;

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
      statisticInfos?: Array<defs.autodm.FeatureStatistics>;

      /** statisticStatus */
      statisticStatus?: number;

      /** status */
      status?: number;

      /** statusInfo */
      statusInfo?: defs.autodm.StatusInfo;

      /** storeType */
      storeType?: number;

      /** totalNum */
      totalNum?: string;
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

    export class GlobalStatisticVOV2 {
      /** 已应用数量 */
      appliedCnt?: number;

      /** 未开始 */
      readyCnt?: number;

      /** 开发中 */
      runningCnt?: number;
    }

    export class Indicator {
      /** 准确度 */
      accuracy?: number;

      /** AUC */
      auc?: number;

      /** F1 score */
      f1?: number;

      /** 回归指标mae */
      mae?: number;

      /** 精确度 */
      precision?: number;

      /** recall */
      recall?: number;

      /** 回归指标rmse */
      rmse?: number;
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

    export class IterationDetailVOV2 {
      /** 迭代详情 */
      algEvaluationVO?: defs.autodm.AlgEvaluationVOV2;

      /** 迭代的基本信息 */
      algTrial?: defs.autodm.AlgTrialVOV2;

      /** 算法模型类型 */
      algorithmType?: string;

      /** 算法模型分类数 */
      classificationNum?: number;
    }

    export class JSONObject {}

    export class LabelInfo {
      /** 是否已配置基础信息 */
      hasBaseInfo?: boolean;

      /** 是否已经部署 */
      hasDeployed?: boolean;

      /** 是否已经配置实验 */
      hasExperiment?: boolean;

      /** 是否有结果 */
      hasResult?: boolean;

      /** 标签ID */
      labelId?: number;
    }

    export class LabelValueVO {
      /** label */
      label?: string;

      /** value */
      value?: object;
    }

    export class ListData<T0 = any> {
      /** 列表 */
      data?: Array<T0>;

      /** 总数 */
      recordCount?: number;
    }

    export class Map<T0 = any, T1 = any> {}

    export class ModelInfoVO {
      /** 默认全局参数 */
      globalParams?: string;

      /** 算法ID */
      id?: number;

      /** 初始超参 */
      initParams?: string;

      /** 算法配置Name */
      label?: string;

      /** 算法配置Code */
      value?: string;
    }

    export class ModelTypeVO {
      /** 模型类型名 */
      label?: string;

      /** 模型列表 */
      models?: Array<defs.autodm.ModelInfoVO>;

      /** 模型类型值 */
      value?: string;
    }

    export class ModelTypeVOV2 {
      /** 模型类型名 */
      label?: string;

      /** 模型列表 */
      models?: Array<defs.autodm.ModelInfoVO>;

      /** 模型类型值 */
      value?: string;
    }

    export class OdpsTaskQuery {
      /** algTaskId */
      algTaskId?: number;

      /** params */
      params?: ObjectMap<any, string>;
    }

    export class Option {
      /** 选项名 */
      label?: string;

      /** 选项值 */
      value?: string;
    }

    export class OptionVOV2 {
      /** 选项名 */
      label?: string;

      /** 选项值 */
      value?: string;
    }

    export class PotentialCrowdAlgoConfigVO {
      /** crowdSize */
      crowdSize?: number;

      /** fullFeatureConfig */
      fullFeatureConfig?: string;

      /** globalParams */
      globalParams?: string;

      /** initParams */
      initParams?: string;

      /** modelType */
      modelType?: string;

      /** wideFeatureConfig */
      wideFeatureConfig?: string;
    }

    export class PotentialCrowdConfig {
      /** crowdTargetList */
      crowdTargetList?: Array<defs.autodm.DimConfig>;

      /** dimList */
      dimList?: Array<defs.autodm.DimConfig>;
    }

    export class PreRunData {
      /** 算法模型分类数 */
      algorithmCategoryNum?: number;

      /** 算法模型 */
      algorithmModel?: string;

      /** 算法模型类型 */
      algorithmType?: string;

      /** 业务traceId */
      bizTraceId?: string;

      /** 覆盖量 */
      coverage?: string;

      /** D2任务地址 */
      d2TaskUrl?: string;

      /** 结果数据 */
      data?: Array<Array<any>>;

      /** 实验名称 */
      experimentName?: string;

      /** 结果列名 */
      fields?: Array<string>;

      /** 迭代ID */
      iterationId?: number;

      /** 迭代名称 */
      iterationName?: string;

      /** 标签ID */
      labelId?: number;

      /** 模型结果 */
      modelResult?: string;

      /** 预跑日志 */
      prerunLog?: string;

      /** 状态 */
      status?: string;

      /** 状态描述 */
      statusMsg?: string;
    }

    export class PrimaryKeyInfo {
      /** enableIdMapping */
      enableIdMapping?: boolean;

      /** idType */
      idType?: string;

      /** index */
      index?: number;

      /** keyColumn */
      keyColumn?: string;
    }

    export class PrimaryKeyInfoVO {
      /** 该主键是否需要idmapping */
      enableIdMapping?: boolean;

      /** 用于做特征筛选时传入 */
      idType?: string;

      /** 用于保存特征和join主键如何关联时传入 */
      joinKey?: string;

      /** 用于在页面展示主键名称 */
      showKeyName?: string;
    }

    export class PrimaryKeyInfoVOV2 {
      /** 该主键是否需要idmapping */
      enableIdMapping?: boolean;

      /** 用于做特征筛选时传入 */
      idType?: string;

      /** 用于保存特征和join主键如何关联时传入 */
      joinKey?: string;

      /** 用于在页面展示主键名称 */
      showKeyName?: string;
    }

    export class ProduceSqlInfoResponse {
      /** exeSql */
      exeSql?: string;

      /** odpsParams */
      odpsParams?: object;

      /** tableSql */
      tableSql?: string;
    }

    export class ResultObject<T0 = any> {
      /** code */
      code?: number;

      /** data */
      data?: T0;

      /** message */
      message?: string;

      /** success */
      success?: boolean;
    }

    export class SampleVOV2 {
      /** 创建用户 */
      creator?: defs.autodm.User;

      /** 实验ID */
      experimentId?: number;

      /** 样本ID */
      id?: number;

      /** ID列 */
      keyColumn?: string;

      /** ID类型 */
      keyType?: string;

      /** 标注列 */
      labelColumn?: string;

      /** 分区字段 */
      partitionColumn?: string;

      /** 分区格式 */
      partitionFormat?: string;

      /** 多主键信息 */
      primaryKeyList?: Array<defs.autodm.PrimaryKeyInfo>;

      /** ODPS表名 */
      tableName?: string;
    }

    export class StatusInfo {
      /** errorMsg */
      errorMsg?: string;

      /** message */
      message?: string;

      /** status */
      status?: string;
    }

    export class StudyCopyVO {
      /** algStudyId */
      algStudyId?: number;

      /** message */
      message?: string;
    }

    export class TableColumnMeta {
      /** 项目唯一标识 */
      appGuid?: string;

      /** 列唯一标识 */
      columnGuid?: string;

      /** 列名 */
      columnName?: string;

      /** 列数据类型 */
      columnType?: string;

      /** 列说明 */
      comment?: string;

      /** 是否允许为空 */
      isNullable?: number;

      /** 是否分区类 */
      isPartitionCol?: number;

      /** 是否主键 */
      isPrimaryKey?: number;

      /** 字段安全级别 */
      safeLevel?: string;

      /** 字段序号 */
      seqNumber?: number;

      /** 表唯一标识 */
      tableGuid?: string;

      /** 表名 */
      tableName?: string;
    }

    export class TableColumnMetaVOV2 {
      /** 项目唯一标识 */
      appGuid?: string;

      /** 列唯一标识 */
      columnGuid?: string;

      /** 列名 */
      columnName?: string;

      /** 列数据类型 */
      columnType?: string;

      /** 列说明 */
      comment?: string;

      /** 是否允许为空 */
      isNullable?: number;

      /** 是否分区类 */
      isPartitionCol?: number;

      /** 是否主键 */
      isPrimaryKey?: number;

      /** 字段安全级别 */
      safeLevel?: string;

      /** 字段序号 */
      seqNumber?: number;

      /** 表唯一标识 */
      tableGuid?: string;

      /** 表名 */
      tableName?: string;
    }

    export class TaskParam {
      /** 业务时间 */
      bizdate?: string;

      /** 标签ID */
      labelId?: number;

      /** 标签生产ID */
      produceId?: number;

      /** 任务ID */
      taskId?: number;
    }

    export class TensorBoardVOV2 {
      /** 提示信息 */
      msg?: string;

      /** tensor board状态 */
      status?: string;

      /** tensor board任务的logview链接 */
      url?: string;
    }

    export class TrainResultInfo {
      /** performance */
      performance?: string;

      /** studyId */
      studyId?: number;
    }

    export class TrainingGoalVOV2 {
      /** 训练最长周期（hour） */
      duration?: number;

      /** 优化指标 */
      indicator?: string;

      /** 优化指标目标值 */
      indicatorValue?: number;
    }

    export class TrainingVOV2 {
      /** 算法配置ID */
      algorithmId?: number;

      /** 算法模型 */
      algorithmModel?: string;

      /** 最佳模型效果 */
      bestIndicatorValue?: number;

      /** 业务traceId */
      bizTraceId?: string;

      /** 创建人 */
      creator?: defs.autodm.User;

      /** D2任务地址 */
      d2TaskUrl?: string;

      /** 实验ID */
      experimentId?: number;

      /** 特征数量 */
      featureCnt?: number;

      /** 特征信息列表 */
      featureInfo?: Array<defs.autodm.FeatureInfo>;

      /** 主键和特征信息列表的映射关系，多主键之间逗号分隔，规则是:idType:index,idType:index,例如：oneid:1,oneid:2 */
      featureInfoGroup?: Array<defs.autodm.FeatureInfoGroup>;

      /** 全局参数 */
      globalParams?: string;

      /** 创建时间 */
      gmtCreated?: string;

      /** 已迭代次数 */
      hasIterationCnt?: number;

      /** 初始超参 */
      initParams?: string;

      /** 总迭代次数 */
      iterationCnt?: number;

      /** 特征参数 */
      params?: Array<defs.autodm.FeatureParam>;

      /** AutoDM自动推荐 */
      recommended?: boolean;

      /** 状态 */
      status?: string;

      /** 状态描述 */
      statusMsg?: string;

      /** 成功迭代次数 */
      successfulIterationCnt?: number;

      /** 算法训练ID */
      trainingId?: number;

      /** 算法训练Name */
      trainingName?: string;

      /** 迭代列表 */
      trials?: Array<defs.autodm.AlgTrialVO>;
    }

    export class TrialStatisticVOV2 {
      /** 最佳迭代 */
      bestTrial?: defs.autodm.AlgTrialVOV2;

      /** 实验统计 */
      statistic?: defs.autodm.ExperimentStatisticVOV2;
    }

    export class User {
      /** 工号 */
      empId?: string;

      /** 姓名 */
      name?: string;

      /** 昵称 */
      nickName?: string;
    }
  }
}

declare namespace API {
  export namespace autodm {
    /**
     * AutoDM2.0 自定义模型效果评估
     */
    export namespace algCustomEvalResultV2 {
      /**
        * 获取自定义评估结果
返回自定义评估结果
        * /autodm/api/v2/experiment/custom_eval_result
        */
      export namespace getCustomEvalResult {
        export class Params {
          /** evalKey */
          evalKey: string;
          /** evalType */
          evalType: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.AlgCustomEvalResult;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 创建自定义评估结果
返回结果ID
        * /autodm/api/v2/experiment/custom_eval_result
        */
      export namespace createCustomEvalResult {
        export class Params {
          /** evalGroup */
          evalGroup?: string;
          /** evalKey */
          evalKey?: string;
          /** evalResult */
          evalResult?: string;
          /** evalType */
          evalType?: string;
          /** extraInfo */
          extraInfo?: string;
          /** gmtCreate */
          gmtCreate?: string;
          /** gmtModified */
          gmtModified?: string;
          /** id */
          id?: number;
          /** statusMsg */
          statusMsg?: string;
          /** taskId */
          taskId?: number;
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
        * 获取自定义评估结果列表
返回自定义评估结果列表
        * /autodm/api/v2/experiment/custom_eval_results
        */
      export namespace getCustomEvalResults {
        export class Params {
          /** evalGroup */
          evalGroup: string;
          /** evalType */
          evalType: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.AlgCustomEvalResult>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * AutoDM2.0 数据集
     */
    export namespace algDataSetV2 {
      /**
        * 获取数据集信息
返回数据集信息
        * /autodm/v2/experiment/dataset
        */
      export namespace getDataSet {
        export class Params {
          /** 实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.DataSetVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 配置数据集信息
       * /autodm/v2/experiment/dataset
       */
      export namespace createOrUpdateDataset {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.DataSetVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.DataSetVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取数据集分区条件
返回分区条件
        * /autodm/v2/experiment/dataset/condition
        */
      export namespace getDataSetPtCondition {
        export class Params {
          /** bizdateM */
          bizdateM?: number;
          /** bizdateN */
          bizdateN?: number;
          /** id */
          id: number;
          /** partitionType */
          partitionType: string;
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
        * 查询算法样本主键配置
返回主键信息列表
        * /autodm/v2/experiment/dataset/primaryKeyInfo
        */
      export namespace listPrimaryKeyInfo {
        export class Params {
          /** 实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<object>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取数据集统计
返回数据集统计
        * /autodm/v2/experiment/dataset/statistic
        */
      export namespace datasetStatistic {
        export class Params {
          /** 实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.DataSetStatisticVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取样本信息
返回样本信息
        * /autodm/v2/experiment/sample
        */
      export namespace getSample {
        export class Params {
          /** 实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.SampleVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 配置样本信息
样本ID
        * /autodm/v2/experiment/sample
        */
      export namespace createOrUpdateSample {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.SampleVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.SampleVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * 部署信息
     */
    export namespace algDeploy {
      /**
        * 查询标签上架配置
返回标签上架配置
        * /autodm/deploy/deploy/get
        */
      export namespace get {
        export class Params {
          /** 标签ID */
          labelId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.DeployConfig;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 标签部署上架
是否成功
        * /autodm/deploy/deploy/save
        */
      export namespace publish {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.DeployConfig,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.DeployConfig,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 查询标签上架日志
返回标签上架日志
        * /autodm/deploy/deployLog
        */
      export namespace getDeployLog {
        export class Params {
          /** 标签ID */
          labelId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ObjectMap<string, ObjectMap>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * 枚举数据
     */
    export namespace algDim {
      /**
        * 查询ID类型
返回ID类型列表
        * /autodm/key/type
        */
      export namespace getKeyType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.Option>;

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
        * 查询模型类型
返回模型类型列表
        * /autodm/model/type
        */
      export namespace getModelType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<defs.autodm.Option>;

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
        * 查询分区格式
返回分区格式列表
        * /autodm/partition/format
        */
      export namespace getPartitionFormat {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<defs.autodm.Option>;

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
        * 查询预测数据列表
返回预测数据列表
        * /autodm/predict/list
        */
      export namespace getPredictList {
        export class Params {
          /** ID类型 */
          idType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.Option>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * AutoDM2.0 评估详情
     */
    export namespace algEvaluation {
      /**
        * 创建训练
返回训练ID
        * /autodm/api/v2/evaluation
        */
      export namespace addAlgEvaluation {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.AlgEvaluationVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.AlgEvaluationVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * refreshAlgEvaluation
       * /autodm/api/v2/evaluation/refresh
       */
      export namespace refreshAlgEvaluation {
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
        * 获取迭代详情
返回迭代详情
        * /autodm/v2/evaluation
        */
      export namespace getIterationDetail {
        export class Params {
          /** 迭代ID */
          iterationId?: number;
          /** subId */
          subId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.IterationDetailVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取迭代详情
返回迭代详情
        * /autodm/v2/evaluations
        */
      export namespace listIterationDetail {
        export class Params {
          /** 迭代ID */
          iterationIds?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.IterationDetailVOV2>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * 算法样本
     */
    export namespace algExample {
      /**
        * 查询算法样本配置
返回算法样本配置
        * /autodm/example/get
        */
      export namespace get {
        export class Params {
          /** 标签ID */
          labelId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.AlgExampleVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 查询算法样本主键配置
查询算法样本主键配置,用于特征做筛选
        * /autodm/example/getExamplePrimaryKeyInfo
        */
      export namespace getExamplePrimaryKeyInfo {
        export class Params {
          /** 标签ID */
          labelId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.PrimaryKeyInfoVO>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取老本标签关联实验ID
返回关联的实验ID
        * /autodm/example/getExperimentId
        */
      export namespace getExperimentId {
        export class Params {
          /** 标签ID */
          labelId?: number;
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
        * 创建算法样本配置
返回是否成功
        * /autodm/example/save
        */
      export namespace saveAlgExampleVO {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.AlgExampleVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.AlgExampleVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * AutoDM2.0 实验
     */
    export namespace algExperimentV2 {
      /**
        * 查询是否开启自动寻优
返回是否开启自动寻优
        * /autodm/v2/auto-optimization
        */
      export namespace getAutoOptimization {
        export class Params {
          /** 实验ID */
          experimentId?: number;
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
        * 设置自动寻优
是否设置成功
        * /autodm/v2/auto-optimization
        */
      export namespace setAutoOptimization {
        export class Params {
          /** 实验ID */
          experimentId?: number;
          /** 开关 */
          open?: boolean;
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
        * 获取实验
返回实验信息
        * /autodm/v2/experiment
        */
      export namespace getExperiment {
        export class Params {
          /** 实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.AlgExperimentVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 创建实验
返回实验ID
        * /autodm/v2/experiment
        */
      export namespace createExperiment {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.AlgExperimentVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.AlgExperimentVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 复制实验
返回实验ID
        * /autodm/v2/experiment/copy
        */
      export namespace copyExperiment {
        export class Params {
          /** 实验ID */
          experimentId?: number;
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
       * 删除实验
       * /autodm/v2/experiment/delete
       */
      export namespace deleteExperiment {
        export class Params {
          /** 实验ID */
          experimentId?: number;
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
       * 更新实验
       * /autodm/v2/experiment/update
       */
      export namespace updateExperiment {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.AlgExperimentVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.AlgExperimentVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取实验列表
返回实验列表
        * /autodm/v2/experiments
        */
      export namespace listExperiment {
        export class Params {
          /** keyword */
          keyword?: string;
          /** mine */
          mine?: boolean;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId: number;
          /** status */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取项目下实验的统计
返回统计
        * /autodm/v2/globalStatistic
        */
      export namespace globalStatistic {
        export class Params {
          /** mine */
          mine?: boolean;
          /** 项目组ID */
          projectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.GlobalStatisticVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取实验统计
返回统计
        * /autodm/v2/statistic
        */
      export namespace experimentStatistic {
        export class Params {
          /** 实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ExperimentStatisticVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * 特征服务
     */
    export namespace algFeature {
      /**
        * 查询推荐特征列表
返回推荐特征列表
        * /autodm/feature/list
        */
      export namespace listFeatures {
        export class Params {
          /** experimentId */
          experimentId?: number;
          /** filterQualityScore */
          filterQualityScore?: string;
          /** idType */
          idType?: string;
          /** labelId */
          labelId?: number;
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

        export type Response = defs.autodm.ListData<
          defs.autodm.FeatureResponse
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
        * 查询推荐特征列表V2
返回推荐特征列表V2
        * /autodm/feature/list/V2
        */
      export namespace listFeaturesV2 {
        export class Params {
          /** experimentId */
          experimentId?: number;
          /** filterQualityScore */
          filterQualityScore?: string;
          /** idType */
          idType?: string;
          /** labelId */
          labelId?: number;
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

        export type Response = defs.autodm.ListData<
          defs.autodm.FeatureResponse
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
     * 标签信息
     */
    export namespace algLabel {
      /**
        * 查询标签信息
返回标签信息
        * /autodm/label/get
        */
      export namespace getLabelInfo {
        export class Params {
          /** 标签ID */
          labelId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.LabelInfo;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * AutoDM2.0 其他
     */
    export namespace algMixedV2 {
      /**
        * 查询特征分类
返回二级特征分类列表
        * /autodm/v2/admin
        */
      export namespace isAutoDmAdmin {
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
       * compLog
       * /autodm/v2/api/exec_log
       */
      export namespace compLog {
        export class Params {
          /** pos */
          pos?: number;
          /** topic */
          topic?: string;
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
       * syncTrials
       * /autodm/v2/api/study/syncTrials
       */
      export namespace syncTrials {
        export class Params {
          /** studyName */
          studyName: string;
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
       * syncTrialsByModelName
       * /autodm/v2/api/study/syncTrialsByModelName
       */
      export namespace syncTrialsByModelName {
        export class Params {
          /** modelName */
          modelName: string;
          /** studyName */
          studyName: string;
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
        * 查询特征分类
返回二级特征分类列表
        * /autodm/v2/category/feature
        */
      export namespace listFeatureCategory {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.FeatureCategoryVOV2>;

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
        * odps表鉴权
返回鉴权结果
        * /autodm/v2/checkAuth
        */
      export namespace checkTableAndAuth {
        export class Params {
          /** select */
          authType?: 'Select' | 'Update' | 'Delete';
          /** 当前智能服务市场项目空间 */
          projectId?: number;
          /** odps表名,{project}.{table} */
          tableName?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.AuthTypeVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
返回表的列信息列表
        * /autodm/v2/column
        */
      export namespace getTableColumn {
        export class Params {
          /** odps表名,{project}.{table} */
          tableName?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<
          defs.autodm.TableColumnMetaVOV2
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
        * 查询表的列信息
返回表的列信息列表
        * /autodm/v2/columnV2
        */
      export namespace getTableColumnV2 {
        export class Params {
          /** odps表名,{project}.{table} */
          tableName?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.TableColumnMeta>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取执行日志
执行日志
        * /autodm/v2/exec_log
        */
      export namespace execLog {
        export class Params {
          /** bizTraceId */
          topic?: string;
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
        * 查询推荐特征列表
返回推荐特征列表
        * /autodm/v2/featureList
        */
      export namespace listFeatures {
        export class Params {
          /** experimentId */
          experimentId?: number;
          /** filterQualityScore */
          filterQualityScore?: string;
          /** idType */
          idType?: string;
          /** labelId */
          labelId?: number;
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

        export type Response = defs.autodm.ListData<
          defs.autodm.FeatureResponseVOV2
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
        * 查询指标列表
返回指标列表
        * /autodm/v2/indicatorList
        */
      export namespace getIndicatorList {
        export class Params {
          /** algoType */
          algoType?: string;
          /** numOfClasses */
          numOfClasses?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.OptionVOV2>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 查询ID类型
返回ID类型列表
        * /autodm/v2/keyType
        */
      export namespace getKeyType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.OptionVOV2>;

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
        * 查询模型类型
返回模型类型列表
        * /autodm/v2/modelType
        */
      export namespace getModelType {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<defs.autodm.OptionVOV2>;

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
        * 查询分区格式
返回分区格式列表
        * /autodm/v2/partitionFormat
        */
      export namespace getPartitionFormat {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<defs.autodm.OptionVOV2>;

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
        * 新增候选集
返回预测数据列表
        * /autodm/v2/predict
        */
      export namespace addPredictList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(bodyParams: Long): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: Long,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 查询预测数据列表
返回预测数据列表
        * /autodm/v2/predictList
        */
      export namespace getPredictList {
        export class Params {
          /** ID类型 */
          idType?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.OptionVOV2>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 停止手动业务流程
       * /autodm/v2/stopManualDag
       */
      export namespace stopManualDag {
        export class Params {
          /** 任务ID */
          taskId?: number;
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
     * 算法模型
     */
    export namespace algModel {
      /**
        * 查询算法模型
返回算法模型列表
        * /autodm/model/list
        */
      export namespace list {
        export class Params {
          /** numOfClasses */
          numOfClasses?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.ModelTypeVO>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 创建算法模型
返回算法模型
        * /autodm/model/save
        */
      export namespace save {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.AlgModelVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.AlgModelVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * odps数据
     */
    export namespace algOdps {
      /**
        * odps表鉴权
返回鉴权结果
        * /autodm/odps/checkAuth
        */
      export namespace checkTableAndAuth {
        export class Params {
          /** select */
          authType?: 'Select' | 'Update' | 'Delete';
          /** 当前智能服务市场项目空间 */
          projectId?: number;
          /** odps表名,{project}.{table} */
          tableName?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.AuthType;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
返回表的列信息列表
        * /autodm/odps/column
        */
      export namespace getTableColumn {
        export class Params {
          /** odps表名,{project}.{table} */
          tableName?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<
          defs.autodm.TableColumnMeta
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
        * 查询表的列信息
返回表的列信息列表
        * /autodm/odps/columnV2
        */
      export namespace getTableColumnV2 {
        export class Params {
          /** odps表名,{project}.{table} */
          tableName?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.TableColumnMeta>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * AutoDM2.0 数据上架
     */
    export namespace algPublishV2 {
      /**
       * 删除失败的应用
       * /autodm/v2/application/delete
       */
      export namespace deleteApplication {
        export class Params {
          /** 应用ID */
          applicationId?: number;
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
       * 重试失败的应用
       * /autodm/v2/application/retry
       */
      export namespace retryApplication {
        export class Params {
          /** 应用ID */
          applicationId?: number;
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
        * 获取项目下应用列表
返回应用列表
        * /autodm/v2/applications
        */
      export namespace listApplication {
        export class Params {
          /** keyword */
          keyword?: string;
          /** mine */
          mine?: boolean;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 项目ID */
          projectId?: number;
          /** status */
          status?: string;
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<
          defs.autodm.DataApplicationVOV2
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
        * 获取数据下应用列表
返回应用列表
        * /autodm/v2/applicationsByDeployId
        */
      export namespace listApplicationByDeployId {
        export class Params {
          /** 数据ID */
          deployId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<
          defs.autodm.DataApplicationVOV2
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
        * 发起资源申请
返回资源列表
        * /autodm/v2/apply
        */
      export namespace apply {
        export class Params {
          /** 部署ID */
          deployId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.ApplyResourceVO>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 检查当前数据是否可以进行人群实验室的人群同步
返回数据部署信息
        * /autodm/v2/crowdBindCheck
        */
      export namespace checkDeployForCrowd {
        export class Params {
          /** 数据ID */
          deployId?: number;
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
        * 获取实验数据部署信息
返回数据部署信息
        * /autodm/v2/deploy
        */
      export namespace getDeploy {
        export class Params {
          /** 数据ID */
          deployId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.DeployConfigVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取数据的运行实例列表
返回运行任务列表
        * /autodm/v2/deployInstances
        */
      export namespace listDeployInstances {
        export class Params {
          /** 数据ID */
          deployId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.DeployInstanceVOV2>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 查询部署日志
返回部署日志
        * /autodm/v2/deployLog
        */
      export namespace getDeployLog {
        export class Params {
          /** 部署ID */
          deployId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ObjectMap<string, ObjectMap>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取数据列表统计信息
返回数据列表统计信息
        * /autodm/v2/deployStats
        */
      export namespace getDeployStats {
        export class Params {
          /** 项目ID */
          projectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.DeployStatsVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取实验数据部署信息列表
返回数据部署信息列表
        * /autodm/v2/deploys
        */
      export namespace listDeploy {
        export class Params {
          /** keyword */
          keyword?: string;
          /** mine */
          mine?: boolean;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 项目ID */
          projectId?: number;
          /** status */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<
          defs.autodm.DeployConfigVOV2
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
       * 已发布数据同步到人群
       * /autodm/v2/experiment/crowd
       */
      export namespace bindToCrowd {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.CrowdConfigVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.CrowdConfigVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 删除部署
删除部署
        * /autodm/v2/experiment/deploy/delete
        */
      export namespace deleteDeploy {
        export class Params {
          /** 部署ID */
          deployId?: number;
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
        * 数据停止调度，预检查
数据停止调度，预检查，检查是否有应用
        * /autodm/v2/experiment/deploy/preStop
        */
      export namespace preStopDeploy {
        export class Params {
          /** 部署ID */
          deployId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ObjectMap<string, string>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 数据重命名
数据重命名
        * /autodm/v2/experiment/deploy/rename
        */
      export namespace renameDeploy {
        export class Params {
          /** 部署ID */
          deployId?: number;
          /** description */
          description?: string;
          /** 新数据名称 */
          newName?: string;
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
        * 数据停止调度，停止
数据停止调度，停止操作
        * /autodm/v2/experiment/deploy/stop
        */
      export namespace stopDeploy {
        export class Params {
          /** 部署ID */
          deployId?: number;
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
       * 已发布数据绑定标签
       * /autodm/v2/experiment/label
       */
      export namespace bindToLabel {
        export class Params {
          /** 数据发布ID */
          deployId?: number;
          /** 标签ID */
          labelId?: number;
          /** 是否覆盖 */
          override?: boolean;
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
        * 数据上架部署
返回部署ID
        * /autodm/v2/experiment/publish
        */
      export namespace publish {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.DeployConfigVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.DeployConfigVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 校验是否可以上架
返回true或false
        * /autodm/v2/prePublish
        */
      export namespace prePublish {
        export class Params {
          /** 部署ID */
          deployId?: number;
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
        * 以失败的任务为模板，重跑生产任务
返回任务ID
        * /autodm/v2/rerunDeploy
        */
      export namespace rerunDeploy {
        export class Params {
          /** 失败任务ID */
          taskId?: number;
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
        * 获取部署周期列表
返回部署周期列表
        * /autodm/v2/updatePeriods
        */
      export namespace updatePeriods {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<object>;

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
     * 算法实验
     */
    export namespace algStudy {
      /**
       * compLog
       * /autodm/api/exec_log
       */
      export namespace compLog {
        export class Params {
          /** pos */
          pos?: number;
          /** topic */
          topic?: string;
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
        * 根据名称查询算法实验列表
返回算法实验列表
        * /autodm/api/study/listByName
        */
      export namespace listByName {
        export class Params {
          /** name */
          name: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<defs.autodm.AlgStudyVO>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * syncTrials
       * /autodm/api/study/syncTrials
       */
      export namespace syncTrials {
        export class Params {
          /** studyName */
          studyName: string;
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
       * syncTrialsByModelName
       * /autodm/api/study/syncTrialsByModelName
       */
      export namespace syncTrialsByModelName {
        export class Params {
          /** modelName */
          modelName: string;
          /** studyName */
          studyName: string;
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
        * 获取模型最优迭代
返回最优迭代结果
        * /autodm/api/trial/bestTrial
        */
      export namespace getBestTrial {
        export class Params {
          /** 模型名称/studyName */
          model?: string;
          /** 策略 */
          strategy?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.AlgTrialVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 查询算法实验迭代列表
返回算法实验迭代列表
        * /autodm/api/trial/list
        */
      export namespace listTrials {
        export class Params {
          /** 算法实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<defs.autodm.AlgTrialVO>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取执行日志
执行日志
        * /autodm/exec_log
        */
      export namespace execLog {
        export class Params {
          /** bizTraceId */
          topic?: string;
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
        * 查询是否开启自动寻优
返回是否开启自动寻优
        * /autodm/optimization/auto
        */
      export namespace getAutoOptimization {
        export class Params {
          /** 标签ID */
          labelId?: number;
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
        * 设置自动寻优
是否设置成功
        * /autodm/optimization/auto
        */
      export namespace setAutoOptimization {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.AutoOptimization,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.AutoOptimization,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 查询标签预跑数据
返回标签预跑数据
        * /autodm/prerun/get
        */
      export namespace getPrerun {
        export class Params {
          /** 标签ID */
          labelId?: number;
          /** 标签类型 */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.PreRunData;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 拷贝算法实验V2
返回新实验ID
        * /autodm/study/copyV2
        */
      export namespace copyV2 {
        export class Params {
          /** 算法实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.StudyCopyVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 执行算法实验
返回执行结果
        * /autodm/study/exec
        */
      export namespace exec {
        export class Params {
          /** 执行动作 */
          action?: 'run' | 'stop' | 'rerun' | 'del';
          /** 算法实验ID */
          experimentId?: number;
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
        * 查询算法实验
返回算法实验
        * /autodm/study/get
        */
      export namespace get {
        export class Params {
          /** 算法实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.AlgStudyVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 查询算法实验列表
返回算法实验列表
        * /autodm/study/list
        */
      export namespace list {
        export class Params {
          /** labelId */
          labelId?: number;
          /** pageNum */
          pageNum?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<defs.autodm.AlgStudyVO>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 保存算法实验
返回实验ID
        * /autodm/study/save
        */
      export namespace save {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.AlgStudyVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.AlgStudyVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 迭代操作
返回执行结果
        * /autodm/trial/exec
        */
      export namespace execIter {
        export class Params {
          /** 执行动作 */
          action?: 'run';
          /** 迭代ID */
          iterationId?: number;
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
        * 查询算法实验迭代列表
返回算法实验迭代列表
        * /autodm/trial/list
        */
      export namespace getTrialList {
        export class Params {
          /** 算法实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<defs.autodm.AlgTrialVO>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * AutoDM2.0 训练
     */
    export namespace algTrainingV2 {
      /**
        * 获取实验最优迭代
返回最优迭代结果
        * /autodm/v2/experiment/bestTrial
        */
      export namespace getBestTrial {
        export class Params {
          /** 实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.TrialStatisticVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 查询迭代评估结果
返回评估结果
        * /autodm/v2/experiment/evaluation
        */
      export namespace getEvaluation {
        export class Params {
          /** 评估ID */
          evaluationId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.EvaluationDataVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 迭代评估
返回评估ID
        * /autodm/v2/experiment/evaluation
        */
      export namespace evaluation {
        export class Params {
          /** 迭代ID */
          iterationId?: number;
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
        * 查询实验下评估结果
返回评估结果
        * /autodm/v2/experiment/evaluations
        */
      export namespace listEvaluation {
        export class Params {
          /** 实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.EvaluationDataVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取迭代信息
返回训练迭代信息
        * /autodm/v2/experiment/iteration
        */
      export namespace getIteration {
        export class Params {
          /** 迭代ID */
          iterationId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.AlgTrialVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取训练迭代列表
返回训练迭代列表
        * /autodm/v2/experiment/iterations
        */
      export namespace listIteration {
        export class Params {
          /** experimentId */
          experimentId: number;
          /** filteredModelId */
          filteredModelId?: number;
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

        export type Response = defs.autodm.ListData;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 不分页获取训练迭代列表
返回训练迭代列表
        * /autodm/v2/experiment/iterationsNonPaged
        */
      export namespace listIterationNonPaged {
        export class Params {
          /** experimentId */
          experimentId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<object>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 重置失败训练状态为运行中
返回重置结果
        * /autodm/v2/experiment/resetTrainingStatus
        */
      export namespace resetTrainingStatus {
        export class Params {
          /** 训练ID */
          trainingId?: number;
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
        * 开启tensor board
返回tensor board链接
        * /autodm/v2/experiment/tensor_board
        */
      export namespace startTensorBoard {
        export class Params {
          /** 迭代ID */
          iterationId?: number;
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
        * 获取训练配置
返回训练配置
        * /autodm/v2/experiment/training
        */
      export namespace getTraining {
        export class Params {
          /** 训练ID */
          trainingId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.TrainingVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 创建训练
返回训练ID
        * /autodm/v2/experiment/training
        */
      export namespace createTraining {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.TrainingVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.TrainingVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 拷贝训练
返回新训练ID
        * /autodm/v2/experiment/training/copy
        */
      export namespace copy {
        export class Params {
          /** 基准训练ID */
          trainingId?: number;
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
        * 获取训练迭代列表
返回训练迭代列表
        * /autodm/v2/experiment/training/iterations
        */
      export namespace getTrainingIterations {
        export class Params {
          /** 训练ID */
          trainingId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 执行训练操作
返回执行ID
        * /autodm/v2/experiment/training/operation
        */
      export namespace execTraining {
        export class Params {
          /** 执行动作 */
          action?: 'run' | 'stop' | 'rerun' | 'del';
          /** 训练ID */
          trainingId?: number;
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
        * 获取训练配置列表
返回训练配置列表
        * /autodm/v2/experiment/trainings
        */
      export namespace listTraining {
        export class Params {
          /** experimentId */
          experimentId: number;
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

        export type Response = defs.autodm.ListData;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取带迭代的训练列表
返回带迭代的训练列表
        * /autodm/v2/experiment/trainingsWithIteration
        */
      export namespace listTrainingWithIteration {
        export class Params {
          /** experimentId */
          experimentId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<object>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * AutoDM2.0 上传自定义算法包
     */
    export namespace algorithmV2 {
      /**
        * 获取算法配置列表
返回算法配置
        * /autodm/v2/algorithm
        */
      export namespace getAlgorithm {
        export class Params {
          /** algorithmId */
          algorithmId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.AlgorithmConfigVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 删除算法配置
       * /autodm/v2/algorithm/delete
       */
      export namespace remove {
        export class Params {
          /** 算法配置ID */
          algorithmId?: number;
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
        * 上传算法包
返回算法配置
        * /autodm/v2/algorithm/resource
        */
      export namespace upload {
        export class Params {
          /** algoCode */
          algoCode: string;
          /** algoType */
          algoType: string;
          /** algorithmId */
          algorithmId?: number;
          /** projectId */
          projectId: number;
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
        * 保存算法配置
返回算法配置
        * /autodm/v2/algorithm/save
        */
      export namespace createOrUpdate {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.AlgorithmConfigVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.AlgorithmConfigVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 查询算法模型
返回算法模型列表
        * /autodm/v2/algorithmList
        */
      export namespace getAvailableAlgorithmList {
        export class Params {
          /** numOfClasses */
          numOfClasses?: number;
          /** projectId */
          projectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.ModelTypeVOV2>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取算法配置列表
返回算法配置列表
        * /autodm/v2/algorithms
        */
      export namespace listAlgorithms {
        export class Params {
          /** algoType */
          algoType?: string;
          /** belong */
          belong?: string;
          /** keyword */
          keyword?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取调参引擎列表
返回调参引擎列表
        * /autodm/v2/tunerEngines
        */
      export namespace getTunerEngineList {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<object>;

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
     * 通用生产操作controller
     */
    export namespace autoPlp {
      /**
        * 获取潜客生产预测目标
返回潜客生产预测目标
        * /autodm/common_produce/plp/predTarget
        */
      export namespace getProduceConfig {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<object>;

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
     * Cate Prop Controller
     */
    export namespace cateProp {
      /**
       * 根据类目ID获取属性列表
       * /autodm/common_produce/plp/listCateProperties
       */
      export namespace listCateProperties {
        export class Params {
          /** cateId */
          cateId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.CateProp>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /autodm/common_produce/plp/listCatePropertyValues
       */
      export namespace listCatePropertyValues {
        export class Params {
          /** cateId */
          cateId: number;
          /** propertyId */
          propertyId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.CatePropValue>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /autodm/common_produce/plp/listIndustries
       */
      export namespace listIndustries {
        export class Params {
          /** ind1Id */
          ind1Id?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.IndustryInfo>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /autodm/common_produce/plp/listSubCates
       */
      export namespace listSubCates {
        export class Params {
          /** cateId */
          cateId?: number;
          /** cateLevel */
          cateLevel: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.CateInfo>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
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
       * /autodm/common_produce/plp/queryCates
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

        export type Response = Array<defs.autodm.CateInfo>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * 通用实验生产
     */
    export namespace commonExperimentV2 {
      /**
        * 获取实验
返回实验信息
        * /autodm/common_produce/experiment
        */
      export namespace getExperiment {
        export class Params {
          /** 实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.CommonExperimentVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 创建实验
返回实验ID
        * /autodm/common_produce/experiment
        */
      export namespace createExperiment {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.CommonExperimentVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.CommonExperimentVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 复制实验
返回实验ID
        * /autodm/common_produce/experiment/copy
        */
      export namespace copyExperiment {
        export class Params {
          /** 实验ID */
          experimentId?: number;
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
       * 删除实验
       * /autodm/common_produce/experiment/delete
       */
      export namespace deleteExperiment {
        export class Params {
          /** 实验ID */
          experimentId?: number;
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
       * 更新实验
       * /autodm/common_produce/experiment/update
       */
      export namespace updateExperiment {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = boolean;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.CommonExperimentVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.CommonExperimentVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取实验列表
返回实验列表
        * /autodm/common_produce/experiments
        */
      export namespace listExperiment {
        export class Params {
          /** keyword */
          keyword?: string;
          /** mine */
          mine?: boolean;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** projectId */
          projectId: number;
          /** scene */
          scene: string;
          /** status */
          status?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * 通用生产操作controller
     */
    export namespace commonProduce {
      /**
        * 获取通用生产配置
返回生产配置
        * /autodm/common_produce/config
        */
      export namespace getProduceConfig {
        export class Params {
          /** 生产ID */
          produceId?: number;
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
        * 创建通用生产
返回实验ID
        * /autodm/common_produce/config
        */
      export namespace createProduceConfig {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.CommonProduceConfigVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.CommonProduceConfigVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 规则类生产预览sql
返回sql
        * /autodm/common_produce/previewSql
        */
      export namespace previewSql {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = string;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.CommonProduceConfigVO,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.CommonProduceConfigVO,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 执行生产操作
返回执行ID
        * /autodm/common_produce/produce/operation
        */
      export namespace execTraining {
        export class Params {
          /** 执行动作 */
          action?: 'run' | 'stop' | 'rerun';
          /** 生产ID */
          produceId?: number;
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
    }

    /**
     * 通用生产相关配置的controller
     */
    export namespace commonProduceConfig {
      /**
       * 根据域、维度、取值类型查询数据维度id
       * /autodm/common_produce/getDataSetIdByDomainAndDim
       */
      export namespace getDataSetIdByDomainAndDim {
        export class Params {
          /** dim */
          dim: string;
          /** domain */
          domain: string;
          /** valueType */
          valueType: string;
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
       * 查询维度维表的信息
       * /autodm/common_produce/listDimData
       */
      export namespace listDimData {
        export class Params {
          /** dataId */
          dataId: number;
          /** keyWord */
          keyWord?: string;
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
        * 获取人群优选潜客生产算法相关配置
返回获取人群优选潜客生产算法相关配置
        * /autodm/common_produce/potential_crowds/algoConfig
        */
      export namespace getPotentialCrowdAlgoConfig {
        export class Params {
          /** experimentId */
          experimentId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.PotentialCrowdAlgoConfigVO;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取人群优选潜客生产维度配置
返回获取人群优选潜客生产维度配置
        * /autodm/common_produce/potential_crowds/configByDomain
        */
      export namespace getPotentialCrowdsConfigByDomain {
        export class Params {
          /** domain */
          domain: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.PotentialCrowdConfig;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取人群优选潜客生产目标配置
返回获取人群优选潜客生产目标配置
        * /autodm/common_produce/potential_crowds/configByDomainAndDim
        */
      export namespace getPotentialCrowdsConfigByDomainAndDim {
        export class Params {
          /** dim */
          dim: string;
          /** domain */
          domain: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.PotentialCrowdConfig;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取人群优选潜客生产域配置
返回获取人群优选潜客生产域配置
        * /autodm/common_produce/potential_crowds/domain
        */
      export namespace getPotentialCrowdsConfigDomain {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.DimConfig>;

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
     * 通用数据上架
     */
    export namespace commonPublishV2 {
      /**
       * 删除失败的应用
       * /autodm/common_produce/application/delete
       */
      export namespace deleteApplication {
        export class Params {
          /** 应用ID */
          applicationId?: number;
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
       * 重试失败的应用
       * /autodm/common_produce/application/retry
       */
      export namespace retryApplication {
        export class Params {
          /** 应用ID */
          applicationId?: number;
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
        * 获取项目下应用列表
返回应用列表
        * /autodm/common_produce/applications
        */
      export namespace listApplication {
        export class Params {
          /** keyword */
          keyword?: string;
          /** mine */
          mine?: boolean;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 项目ID */
          projectId?: number;
          /** status */
          status?: string;
          /** type */
          type?: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<
          defs.autodm.DataApplicationVOV2
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
        * 获取数据下应用列表
返回应用列表
        * /autodm/common_produce/applicationsByDeployId
        */
      export namespace listApplicationByDeployId {
        export class Params {
          /** 数据ID */
          deployId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ListData<
          defs.autodm.DataApplicationVOV2
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
        * 获取实验数据部署信息
返回数据部署信息
        * /autodm/common_produce/deploy
        */
      export namespace getDeploy {
        export class Params {
          /** 数据ID */
          deployId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.DeployConfigVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取数据的运行实例列表
返回运行任务列表
        * /autodm/common_produce/deployInstances
        */
      export namespace listDeployInstances {
        export class Params {
          /** 数据ID */
          deployId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<defs.autodm.DeployInstanceVOV2>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 查询部署日志
返回部署日志
        * /autodm/common_produce/deployLog
        */
      export namespace getDeployLog {
        export class Params {
          /** 部署ID */
          deployId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ObjectMap<string, ObjectMap>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * 已发布数据同步到人群
       * /autodm/common_produce/experiment/crowd
       */
      export namespace bindToCrowd {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.CrowdConfigVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.CrowdConfigVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 删除部署
删除部署
        * /autodm/common_produce/experiment/deploy/delete
        */
      export namespace deleteDeploy {
        export class Params {
          /** 部署ID */
          deployId?: number;
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
        * 数据停止调度，预检查
数据停止调度，预检查，检查是否有应用
        * /autodm/common_produce/experiment/deploy/preStop
        */
      export namespace preStopDeploy {
        export class Params {
          /** 部署ID */
          deployId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ObjectMap<string, string>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 数据重命名
数据重命名
        * /autodm/common_produce/experiment/deploy/rename
        */
      export namespace renameDeploy {
        export class Params {
          /** 部署ID */
          deployId?: number;
          /** description */
          description?: string;
          /** 新数据名称 */
          newName?: string;
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
        * 数据停止调度，停止
数据停止调度，停止操作
        * /autodm/common_produce/experiment/deploy/stop
        */
      export namespace stopDeploy {
        export class Params {
          /** 部署ID */
          deployId?: number;
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
       * 已发布数据绑定标签
       * /autodm/common_produce/experiment/label
       */
      export namespace bindToLabel {
        export class Params {
          /** 数据发布ID */
          deployId?: number;
          /** 标签ID */
          labelId?: number;
          /** 是否覆盖 */
          override?: boolean;
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
        * 数据上架部署
返回部署ID
        * /autodm/common_produce/experiment/publish
        */
      export namespace publish {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.DeployConfigVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.DeployConfigVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 以失败的任务为模板，重跑生产任务
返回任务ID
        * /autodm/common_produce/rerunDeploy
        */
      export namespace rerunDeploy {
        export class Params {
          /** 失败任务ID */
          taskId?: number;
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
       * testExecuteTask
       * /autodm/common_produce/testExecuteTask
       */
      export namespace testExecuteTask {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = ObjectMap;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 获取部署周期列表
返回部署周期列表
        * /autodm/common_produce/updatePeriods
        */
      export namespace updatePeriods {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<object>;

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
       * updateTaskStatus
       * /autodm/common_produce/updateTaskStatus
       */
      export namespace updateTaskStatus {
        export class Params {
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = ObjectMap;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * 通用训练服务
     */
    export namespace commonTraining {
      /**
        * 获取通用训练配置
返回通用训练配置
        * /autodm/common_produce/training
        */
      export namespace getTraining {
        export class Params {
          /** 训练ID */
          trainingId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.CommonTrainingVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 创建通用训练配置，通用流程要弱化样本的概念，都是通过配置
返回训练ID
        * /autodm/common_produce/training
        */
      export namespace createTraining {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.CommonTrainingVOV2,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.CommonTrainingVOV2,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 拷贝训练
返回新训练ID
        * /autodm/common_produce/training/copy
        */
      export namespace copy {
        export class Params {
          /** 基准训练ID */
          trainingId?: number;
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
        * 执行训练操作
返回执行ID
        * /autodm/common_produce/training/operation
        */
      export namespace execTraining {
        export class Params {
          /** 执行动作 */
          action?: 'run' | 'stop' | 'rerun' | 'del';
          /** 训练ID */
          trainingId?: number;
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
        * 获取通用训练配置列表，通用流程要弱化样本的概念，都是通过配置
返回通用训练配置列表
        * /autodm/common_produce/trainings
        */
      export namespace listTraining {
        export class Params {
          /** experimentId */
          experimentId: number;
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

        export type Response = defs.autodm.ListData;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * updateAlgStudyTaskSuccess
       * /autodm/common_produce/updateAlgStudyTaskSuccess
       */
      export namespace updateAlgStudyTaskSuccess {
        export class Params {
          /** trainingId */
          trainingId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.AlgTrial;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * 内部模块
     */
    export namespace dataMigration {
      /**
       * updateWholeEnv
       * /autodm/api/migration/env/update
       */
      export namespace updateWholeEnv {
        export class Params {
          /** env */
          env: string;
          /** experimentId */
          experimentId: number;
          /** originEnv */
          originEnv: string;
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
       * dataMigrationSingle
       * /autodm/api/migration/migration
       */
      export namespace dataMigrationSingle {
        export class Params {
          /** env */
          env: string;
          /** exampleId */
          exampleId: number;
          /** force */
          force?: boolean;
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
       * dataMigration
       * /autodm/api/migration/migrations
       */
      export namespace dataMigration {
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
     * 内部模块
     */
    export namespace internal {
      /**
       * updateApplicationEnv
       * /autodm/api/internal/application/update/env
       */
      export namespace updateApplicationEnv {
        export class Params {
          /** env */
          env: string;
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
       * updateApplicationStatus
       * /autodm/api/internal/application/update/status
       */
      export namespace updateApplicationStatus {
        export class Params {
          /** id */
          id: number;
          /** status */
          status: string;
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
       * deleteDeploy
       * /autodm/api/internal/deploy
       */
      export namespace deleteDeploy {
        export class Params {
          /** deployId */
          deployId: number;
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
       * updateDeployPeriod
       * /autodm/api/internal/deploy/period
       */
      export namespace updateDeployPeriod {
        export class Params {
          /** deployId */
          deployId: number;
          /** updatePeriod */
          updatePeriod: string;
          /** updateTime */
          updateTime: string;
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
       * deleteExample
       * /autodm/api/internal/example
       */
      export namespace deleteExample {
        export class Params {
          /** exampleId */
          exampleId: number;
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
       * updatePrimaryKeyList
       * /autodm/api/internal/example/primarykey
       */
      export namespace updatePrimaryKeyList {
        export class Params {
          /** exampleId */
          exampleId: number;
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
       * updateExperiment
       * /autodm/api/internal/experiment/update
       */
      export namespace updateExperiment {
        export class Params {
          /** experimentId */
          experimentId: number;
          /** property */
          property: string;
          /** value */
          value: string;
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
       * updateManualLabelConfig
       * /autodm/api/internal/labelProduceInfo/LabelConfig
       */
      export namespace updateManualLabelConfig {
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
       * updateManualFlowName
       * /autodm/api/internal/labelProduceInfo/ManualFlowName
       */
      export namespace updateManualFlowName {
        export class Params {
          /** flowName */
          flowName: string;
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
       * updateEnv
       * /autodm/api/internal/labelProduceInfo/env
       */
      export namespace updateEnv {
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
       * deleteAlgLabelProduceId
       * /autodm/api/internal/labelProduceInfo/update
       */
      export namespace deleteAlgLabelProduceId {
        export class Params {
          /** field */
          field: string;
          /** id */
          id: number;
          /** value */
          value: string;
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
       * updateProduceInfoOutputTable
       * /autodm/api/internal/produceInfo/outputTable
       */
      export namespace updateProduceInfoOutputTable {
        export class Params {
          /** produceId */
          produceId: number;
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
       * getUserName
       * /autodm/api/internal/user
       */
      export namespace getUserName {
        export class Params {
          /** userId */
          userId: string;
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
     * 标签信息查询
     */
    export namespace labelInfo {
      /**
       * 触发标签部署流程
       * /autodm/api/label/deploy
       */
      export namespace publish {
        export class Params {
          /** 标签ID */
          labelId?: number;
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
       * info
       * /autodm/api/label/info
       */
      export namespace info {
        export class Params {
          /** env */
          env: string;
          /** labelId */
          labelId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.JSONObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * transit
       * /autodm/api/label/transit
       */
      export namespace transit {
        export class Params {
          /** event */
          event: string;
          /** labelId */
          labelId: number;
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
       * update
       * /autodm/api/label/update_status
       */
      export namespace update {
        export class Params {
          /** labelId */
          labelId: number;
          /** status */
          status: string;
          /** token */
          token: string;
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
     * Task模块
     */
    export namespace labelTask {
      /**
       * getSql
       * /autodm/api/task/regular/getSql
       */
      export namespace getSql {
        export class Params {
          /** bizDate */
          bizDate: string;
          /** taskId */
          taskId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.ProduceSqlInfoResponse;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * submitRegularProduceTask
       * /autodm/api/task/regular/submit
       */
      export namespace submitRegularProduceTask {
        export class Params {
          /** bizDate */
          bizDate?: string;
          /** instanceTaskId */
          instanceTaskId?: number;
          /** taskId */
          taskId: number;
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
       * status
       * /autodm/api/task/status
       */
      export namespace status {
        export class Params {
          /** taskId */
          taskId: number;
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
       * submit
       * /autodm/api/task/submit
       */
      export namespace submit {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.TaskParam,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.TaskParam,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
        * 回写实验训练的的结果信息
返回实验训练结果信息
        * /autodm/api/task/trainResultInfos
        */
      export namespace trainResultInfos {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.AlgTrial;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.TrainResultInfo,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.TrainResultInfo,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Odps通用模块
     */
    export namespace ntmOdps {
      /**
       * instanceLogView
       * /autodm/api/ntm/logview
       */
      export namespace instanceLogView {
        export class Params {
          /** instanceId */
          instanceId: string;
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
       * instanceResult
       * /autodm/api/ntm/result
       */
      export namespace instanceResult {
        export class Params {
          /** instanceId */
          instanceId: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<Array<string>>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * ntmOdpsSql
       * /autodm/api/ntm/sql/submit
       */
      export namespace ntmOdpsSql {
        export class Params {
          /** sql */
          sql: string;
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
       * instanceStatus
       * /autodm/api/ntm/status
       */
      export namespace instanceStatus {
        export class Params {
          /** instanceId */
          instanceId: string;
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
       * taskStatus
       * /autodm/api/ntm/task/status
       */
      export namespace taskStatus {
        export class Params {
          /** execId */
          execId: number;
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
       * submitTask
       * /autodm/api/ntm/task/submit
       */
      export namespace submitTask {
        export class Params {}

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

        export const init: Response;

        export function request(
          bodyParams: defs.autodm.OdpsTaskQuery,
        ): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          bodyParams: defs.autodm.OdpsTaskQuery,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * 参数服务
     */
    export namespace parameter {
      /**
       * getParameters
       * /autodm/api/params/{requestId}/{type}
       */
      export namespace getParameters {
        export class Params {
          /** requestId */
          requestId: string;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.JSONObject;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * saveParameters
       * /autodm/api/params/{requestId}/{type}
       */
      export namespace saveParameters {
        export class Params {
          /** requestId */
          requestId: string;
          /** type */
          type: string;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = number;

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
    }

    /**
     * Rookie Controller
     */
    export namespace rookie {
      /**
        * 获取默认样本信息
返回样本信息
        * /autodm/v2/rookie/sample
        */
      export namespace getSample {
        export class Params {
          /** 实验ID */
          experimentId?: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = defs.autodm.SampleVOV2;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
     * Task相关木块
     */
    export namespace task {
      /**
       * taskDetailExecCommands
       * /autodm/api/task/taskDetailExec/commands
       */
      export namespace taskDetailExecCommands {
        export class Params {
          /** execId */
          execId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<string>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
          shouldRevalidate = true,
        );

        export function trigger(params?: HooksParams, shouldRevalidate = true);

        export function useRequest(
          params?: HooksParams,
          options?: ConfigInterface,
        ): { isLoading: boolean; data: Response; error: Error };

        export const method: string;
      }

      /**
       * taskDetailExecLogViews
       * /autodm/api/task/taskDetailExec/logviews
       */
      export namespace taskDetailExecLogViews {
        export class Params {
          /** execId */
          execId: number;
        }

        export type HooksParams = (() => Params) | Params;

        export type Response = Array<string>;

        export const init: Response;

        export function request(params: Params): Promise<Response>;

        export function createFetchAction<Key>(
          types: FetchTypes<Key>,
          stateKey?: string,
        ): (
          params: Params,
          meta?,
        ) => {
          type: Key;
          payload?: Response;
          params?: Params;
          url: string;
          types: string[];
          meta;
        } & Promise<Response>;

        export function mutate(
          params?: HooksParams,
          newValue?: any,
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
