// Paquetes
const passport = require('passport');  // Passport
LocalStrategy = require('passport-local').Strategy;
JwtStrategy = require('passport-jwt').Strategy;

const {EncryptPassword, MatchPassword} = require('./services/bcrypt')  // Bcrypt
 

