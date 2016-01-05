'use strict';

const {
  addCredits, delCredits
} = require('../modules/');

const {
  debug
} = require('../../config/global.js');

const chalk = require('chalk');

const payAdd = function(req, res) {
  if(debug) console.log(
    chalk.white(
      `[${Date.now()}] Connection from ${req.connection.remoteAddress} at /pay/credit/add`
    )
  );

  let options = req.body;
  options.email = req.user.local.email;

  addCredits(options, (response) => {
    res.status(response.status).jsonp(response.data);
  });
};

const payDel = function(req, res) {
  if(debug) console.log(
    chalk.white(
      `[${Date.now()}] Connection from ${req.connection.remoteAddress} at /pay/credit/del`
    )
  );

  let options = req.body;
  options.email = req.user.local.email;

  delCredits(options, (response) => {
    res.status(response.status).jsonp(response.data);
  });
};

module.exports = {
  payAdd,
  payDel
};