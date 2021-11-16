const {Router} = require('express');
const {validateSchemaAndFail} = require('../middlewares/params_validator'); // middlewares
const {userSchema} = require('../schemas/users')  // schemas
const {register,login} = require('../controllers/users')  // controllers
const passport = require('passport')
require('../passport')


userRoute = Router()

userRoute.post('/register', validateSchemaAndFail(userSchema), register);
userRoute.post('/login',validateSchemaAndFail(userSchema),passport.authenticate('local',{session:false}), login)

module.exports = userRoute