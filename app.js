require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');

require('./configs/db.config');
const session = require('./configs/session.config');
require('./configs/passport.config');
const cors = require('./configs/cors.config');

const authRouter = require('./routes/auth.routes')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors);
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRouter);

// 404, Not Found
app.use( function (req, res, next) { next(createError(404)) } );

// Manage error
app.use( function (req, res, next) {
  console.error(error);
  res.status(error.status || 500);

  const data = {}

  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400);
    for (field of Object.keys(error.errors)) {
      error.errors[field] = error.errors[field].message;
    }
    data.errors = error.errors;
  }
  else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, 'Resource Not Found');
  }

  data.message = error.message;
  res.json(data);
} );

module.exports = app;
