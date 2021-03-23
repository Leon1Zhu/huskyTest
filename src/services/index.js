import {
  defs as featurePlatformDefs,
  featurePlatform,
} from './featurePlatform';

import { defs as daasDefs, daas } from './daas';

import { defs as autodmDefs, autodm } from './autodm';

import { defs as oneServiceDefs, oneService } from './oneService';

import { defs as goldDefs, gold } from './gold';

window.defs = {
  featurePlatform: featurePlatformDefs,
  daas: daasDefs,
  autodm: autodmDefs,
  oneService: oneServiceDefs,
  gold: goldDefs,
};
window.API = {
  featurePlatform,
  daas,
  autodm,
  oneService,
  gold,
};
