const models = require('../models');
const Promise = require('bluebird');
const cookieParser = require('./cookieParser');

module.exports.createSession = (req, res, next) => {
  //console.log(req, '*********')
  //assuming the user is signed in
  //create a new session based on cookie, 
  //and create session id and send it back through the cookie
  //on subsequent requests, only check if the session id matches using sessions.get
  // if (!req.cookies) {
  //   req.cookies = {}
  // }
  if (Object.keys(req.cookies)) {
    models.Sessions.create()
      .then(session => {
        return models.Sessions.get({id: session.insertId});
      })
      .then(user => {
        console.log('user_____________________________________', user);
        req.session = user;
        // req.session.userId = user.id;
        // console.log(req.session.userId, '&&&&&&&&&&&&&&&&&&&')
        res.cookies = {'shortlyid': {value: req.session.hash}};
        next();
      })
      .catch(() => res.redirect('/login'));

  } else {
    console.log('else statement');
    next();
  }
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

