const {Router} = require('express');
const { get, getId, post, put, borrar } = require('../controllers/tests'); // Controllers

testRoute = Router()

//Get request
testRoute.get('/get', get);
testRoute.get('/get/:id', getId);
//Post request
testRoute.post('/post', post);
//Put request
testRoute.put('/put/:id', put);
//Delete request
testRoute.delete('/delete/:id', borrar);

module.exports = testRoute
