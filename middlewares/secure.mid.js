const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
  console.log('============', req.user);
  if (req.isAuthenticated()) {
    next();
  } else {
    throw createError(403)
  }
}
