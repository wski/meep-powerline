/* This file is subject to the terms and conditions defined in
   file 'LICENSE.md', which is part of this source code package. */
'use strict';

const mongoose = require('mongoose');

let Nest = mongoose.model('Nest');

/** @function
 * @name myNests
 * @param {object} options - Server information
 * @return {promise} promise - Returns new promise.
 */
const myNests = function(options) {
  return new Promise((resolve, reject) => {
    let query = Nest.findOne({
      'roles.owner': options.owner
    });

    query.find(function(err, nests) {
      if (err) {
        reject(new Error(
          'Unknown Mongoose issue.',
          'nest/myNests.js',
          '16'
        ));
      }

      if (nests.length) {
        nests.map((nest, i) => {
          nests[i].password = 'REDACTED';
        });
        resolve({
          status: 200,
          data: nests
        });
      } else {
        resolve({
          status: 404,
          data: {
            error: `No nests found!`
          }
        });
      }
    });
  });
};

module.exports = myNests;
