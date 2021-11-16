//Packages
const jwt = require('jsonwebtoken')

//Model user
const {Users} = require('../models')

// Servicios que interactuan con la base de datos

exports.newUser = data => 
    Users.create(data)
    .then(user => user) // Retorno el usuario
    .catch(error => {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw 'User´s username already exists';  // throw es como un return, pero especifico para errores
        }
        throw new Error(error)
    })

// Create token
exports.createToken = id_user => {
    const token = jwt.sign({
        iss: 'm1ch1',
        sub: id_user
    },'m1ch1', {expiresIn: '10h'})
    return token
}



