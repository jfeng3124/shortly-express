const models = require('../models');
const Promise = require('bluebird');
const cookieParser = require('./cookieParser');

module.exports.createSession = (req, res, next) => {
  console.log(req);
  console.log(req.headers, '@@@@@@@@@@@@@@');
  // if(!req.session) {
  console.log(cookieParser(req, res, next), '$$$$$$$$$$$$$$%%$$$$$$$$$');
  // }
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

