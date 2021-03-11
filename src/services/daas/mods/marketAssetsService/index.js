/**
 * @description 核心资产服务模块
 */
import * as authCode from './authCode';
import * as checkAuthAndCreateTable from './checkAuthAndCreateTable';
import * as createApplyTableOnGuardBpms from './createApplyTableOnGuardBpms';
import * as createTaskAndCreateTable from './createTaskAndCreateTable';
import * as deleteOfflineTask from './deleteOfflineTask';
import * as getDependentLabelInfo from './getDependentLabelInfo';
import * as getDefaultPtKey from './getDefaultPtKey';
import * as getLabelPublishTaskList from './getLabelPublishTaskList';
import * as getLabelPublishTaskMeta from './getLabelPublishTaskMeta';
import * as getOfflineTask from './getOfflineTask';
import * as offlineTaskList from './offlineTaskList';
import * as reRunTask from './reRunTask';
import * as startOfflineTask from './startOfflineTask';
import * as stopOfflineTask from './stopOfflineTask';
import * as submitOfflineTask from './submitOfflineTask';
import * as updateOfflineConfig from './updateOfflineConfig';

export {
  authCode,
  checkAuthAndCreateTable,
  createApplyTableOnGuardBpms,
  createTaskAndCreateTable,
  deleteOfflineTask,
  getDependentLabelInfo,
  getDefaultPtKey,
  getLabelPublishTaskList,
  getLabelPublishTaskMeta,
  getOfflineTask,
  offlineTaskList,
  reRunTask,
  startOfflineTask,
  stopOfflineTask,
  submitOfflineTask,
  updateOfflineConfig,
};
