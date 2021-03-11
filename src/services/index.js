import { defs as daasDefs, daas } from './daas';

import {
  defs as featurePlatformDefs,
  featurePlatform,
} from './featurePlatform';

import { defs as autodmDefs, autodm } from './autodm';

import { defs as oneServiceDefs, oneService } from './oneService';

import { defs as goldDefs, gold } from './gold';

window.defs = {
  daas: daasDefs,
  featurePlatform: featurePlatformDefs,
  autodm: autodmDefs,
  oneService: oneServiceDefs,
  gold: goldDefs,
};
window.API = {
  daas,
  featurePlatform,
  autodm,
  oneService,
  gold,
};
