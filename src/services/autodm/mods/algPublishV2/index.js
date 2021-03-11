/**
 * @description AutoDM2.0 数据上架
 */
import * as deleteApplication from './deleteApplication';
import * as retryApplication from './retryApplication';
import * as listApplication from './listApplication';
import * as listApplicationByDeployId from './listApplicationByDeployId';
import * as apply from './apply';
import * as checkDeployForCrowd from './checkDeployForCrowd';
import * as getDeploy from './getDeploy';
import * as listDeployInstances from './listDeployInstances';
import * as getDeployLog from './getDeployLog';
import * as getDeployStats from './getDeployStats';
import * as listDeploy from './listDeploy';
import * as bindToCrowd from './bindToCrowd';
import * as deleteDeploy from './deleteDeploy';
import * as preStopDeploy from './preStopDeploy';
import * as renameDeploy from './renameDeploy';
import * as stopDeploy from './stopDeploy';
import * as bindToLabel from './bindToLabel';
import * as publish from './publish';
import * as prePublish from './prePublish';
import * as rerunDeploy from './rerunDeploy';
import * as updatePeriods from './updatePeriods';

export {
  deleteApplication,
  retryApplication,
  listApplication,
  listApplicationByDeployId,
  apply,
  checkDeployForCrowd,
  getDeploy,
  listDeployInstances,
  getDeployLog,
  getDeployStats,
  listDeploy,
  bindToCrowd,
  deleteDeploy,
  preStopDeploy,
  renameDeploy,
  stopDeploy,
  bindToLabel,
  publish,
  prePublish,
  rerunDeploy,
  updatePeriods,
};
