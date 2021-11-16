const {Router} = require('express');
const { get, getId, post, put, borrar } = require('../controllers/tests'); // Controllers
const {validateSchemaAndFail} = require('../middlewares/params_validator'); // middlewares
const {createTask,updateTask} = require('../schemas/tasks')  // schemas
const passport = require('passport')
require('../passport')

testRoute = Router()

//Get request
testRoute.get('/get', passport.authenticate('jwt',{session:false}), get);
testRoute.get('/get/:id', passport.authenticate('jwt',{session:false}), getId);
//Post request
testRoute.post('/post', validateSchemaAndFail(createTask),passport.authenticate('jwt',{session:false}),post);
//Put request
testRoute.put('/put/:id', validateSchemaAndFail(updateTask), passport.authenticate('jwt',{session:false}), put);
//Delete request
testRoute.delete('/delete/:id', passport.authenticate('jwt',{session:false}), borrar);

module.exports = testRoute
