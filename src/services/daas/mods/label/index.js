/**
 * @description 标签服务接口，包含标签查询、测试、接入、编辑等
 */
import * as cancel from './cancel';
import * as checkLabelCanApply4Service from './checkLabelCanApply4Service';
import * as checkLabelKeys from './checkLabelKeys';
import * as checkLabelNames from './checkLabelNames';
import * as checkNeedBpmsAgain from './checkNeedBpmsAgain';
import * as deleteLabel from './deleteLabel';
import * as getCanCopyVersions from './getCanCopyVersions';
import * as getConfidenceDistribute from './getConfidenceDistribute';
import * as getGprofileApplyLabels from './getGprofileApplyLabels';
import * as getIdMappingApplyLabels from './getIdMappingApplyLabels';
import * as getLabelApplyInfo from './getLabelApplyInfo';
import * as getLabelBaseInfo from './getLabelBaseInfo';
import * as getLabelCallInfo from './getLabelCallInfo';
import * as getLabelDistribute from './getLabelDistribute';
import * as getLabelDistributeKV from './getLabelDistributeKV';
import * as getLabelGroupDetail from './getLabelGroupDetail';
import * as getLabelGroupPage from './getLabelGroupPage';
import * as getLabelInMarket from './getLabelInMarket';
import * as getLabelInfos from './getLabelInfos';
import * as postGetLabelInfos from './postGetLabelInfos';
import * as getLabelOverview from './getLabelOverview';
import * as getLabelStabilityInfo from './getLabelStabilityInfo';
import * as getLabels4Apply from './getLabels4Apply';
import * as getLabels4Market from './getLabels4Market';
import * as getLabels4Produce from './getLabels4Produce';
import * as getLabels4Workbench from './getLabels4Workbench';
import * as getOwnLabelGroups from './getOwnLabelGroups';
import * as getProducedLabels from './getProducedLabels';
import * as getRecentSampleTasks from './getRecentSampleTasks';
import * as getSampleTaskResult from './getSampleTaskResult';
import * as getTableKeyInfo from './getTableKeyInfo';
import * as getUploadedLabelGroups from './getUploadedLabelGroups';
import * as getUsingMaxPt from './getUsingMaxPt';
import * as hasApplyPermission from './hasApplyPermission';
import * as insertLabel from './insertLabel';
import * as offlineLabel from './offlineLabel';
import * as personalLabelTest from './personalLabelTest';
import * as publishAccessLabel from './publishAccessLabel';
import * as rePublish from './rePublish';
import * as saveLabelDetails from './saveLabelDetails';
import * as submitSampleTask from './submitSampleTask';

export {
  cancel,
  checkLabelCanApply4Service,
  checkLabelKeys,
  checkLabelNames,
  checkNeedBpmsAgain,
  deleteLabel,
  getCanCopyVersions,
  getConfidenceDistribute,
  getGprofileApplyLabels,
  getIdMappingApplyLabels,
  getLabelApplyInfo,
  getLabelBaseInfo,
  getLabelCallInfo,
  getLabelDistribute,
  getLabelDistributeKV,
  getLabelGroupDetail,
  getLabelGroupPage,
  getLabelInMarket,
  getLabelInfos,
  postGetLabelInfos,
  getLabelOverview,
  getLabelStabilityInfo,
  getLabels4Apply,
  getLabels4Market,
  getLabels4Produce,
  getLabels4Workbench,
  getOwnLabelGroups,
  getProducedLabels,
  getRecentSampleTasks,
  getSampleTaskResult,
  getTableKeyInfo,
  getUploadedLabelGroups,
  getUsingMaxPt,
  hasApplyPermission,
  insertLabel,
  offlineLabel,
  personalLabelTest,
  publishAccessLabel,
  rePublish,
  saveLabelDetails,
  submitSampleTask,
};
