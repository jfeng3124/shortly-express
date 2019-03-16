const parseCookies = (req, res, next) => {
  if (req.headers.cookie) {
    var bakery = req.headers.cookie.split('; ');
    var display = [];
    for (var k = 0; k < bakery.length; k++) {
      var hold = [];
      hold = bakery[k].split('=');
      display.push(hold[0], hold[1]);
      //display.push(hold[1]);
    }
    for (var i = 0; i < display.length; i += 2) {
      req.cookies[display[i]] = display[i + 1];
    }
    next();
  } else {
    req.cookies = {}; 
    next();
  }
};

module.exports = parseCookies;