const mongoose   = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const session    = require('express-session');
const SESSION_MAX_AGE = Number(process.env.SESSION_MAX_AGE);

module.exports = session({
  secret: process.env.SESSION_SECRET || 'nabe espasial',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: SESSION_MAX_AGE * 1000
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: SESSION_MAX_AGE
  })
})