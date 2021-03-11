/**
 * @description AutoDM2.0 数据上架
 */
import * as deleteApplication from './deleteApplication';
import * as retryApplication from './retryApplication';
import * as listApplication from './listApplication';
import * as listApplicationByDeployId from './listApplicationByDeployId';
import * as getDeploy from './getDeploy';
import * as listDeployInstances from './listDeployInstances';
import * as getDeployLog from './getDeployLog';
import * as bindToCrowd from './bindToCrowd';
import * as deleteDeploy from './deleteDeploy';
import * as preStopDeploy from './preStopDeploy';
import * as renameDeploy from './renameDeploy';
import * as stopDeploy from './stopDeploy';
import * as bindToLabel from './bindToLabel';
import * as publish from './publish';
import * as rerunDeploy from './rerunDeploy';
import * as testExecuteTask from './testExecuteTask';
import * as updatePeriods from './updatePeriods';
import * as updateTaskStatus from './updateTaskStatus';

export {
  deleteApplication,
  retryApplication,
  listApplication,
  listApplicationByDeployId,
  getDeploy,
  listDeployInstances,
  getDeployLog,
  bindToCrowd,
  deleteDeploy,
  preStopDeploy,
  renameDeploy,
  stopDeploy,
  bindToLabel,
  publish,
  rerunDeploy,
  testExecuteTask,
  updatePeriods,
  updateTaskStatus,
};
