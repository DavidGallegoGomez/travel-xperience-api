const passport      = require('passport');
const User          = require('../models/user.model');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser( (user, next) => { next(null, user.id) } )

passport.deserializeUser( (id, next)=> {
  User.findById(id)
    .then( user => next(null, user) )
    .catch(next)
} )

passport.use('local-auth', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, (username, password, next) => {
  User.findOne( { username: username } )
    .then( user => {
      if (!user) { next(null, false, { password: 'Invalid username or password' }) }
      else {
        return user.checkPassword(password)
          .then( match => {
            if (!match) { next(null, false, { password: 'Invalid username or password' }) }
            else { next(null, user) }
          } )
      }
    } )
    .catch( error => next(error) )
  }  
))