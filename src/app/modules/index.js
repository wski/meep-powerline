/* This file is subject to the terms and conditions defined in
   file 'LICENSE.md', which is part of this source code package. */
'use strict';

const provision = require('./nest/provision.js');
const viewNest = require('./nest/viewNest.js');
const registerNest = require('./nest/registerNest.js');
const unregisterNest = require('./nest/unregisterNest.js');
const addrole = require('./nest/addrole.js');
const myNests = require('./nest/myNests.js');
const revokerole = require('./nest/revokerole.js');
const addCredits = require('./pay/addCredits.js');
const delCredits = require('./pay/delCredits.js');
const getAuthKey = require('./command/getAuthKey.js');
const Notify = require('./notify/notification.js');
const hawk = require('./nest/hawk.js');
const register = require('./registry/register.js');
const all = require('./registry/all.js');
const find = require('./registry/find.js');
const install = require('./nest/install.js');
const uninstall = require('./nest/uninstall.js');
const exec = require('./command/exec.js');

module.exports = {
  provision,
  viewNest,
  registerNest,
  unregisterNest,
  addrole,
  revokerole,
  addCredits,
  myNests,
  delCredits,
  getAuthKey,
  Notify,
  hawk,
  register,
  all,
  find,
  install,
  uninstall,
  exec
};
