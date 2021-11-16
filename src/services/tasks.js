//Model user
const {Tasks} = require('../models')

// Servicios, que interactuan con la base de datos.

exports.getTasks = id =>
    Tasks.findAll({where : {userId : id}})
    .then(tasks => tasks)
    .catch(error => {
        throw new Error(error)
    })

exports.getTask = (id,userId) =>
    Tasks.findOne({where : {id, userId}})
    .then(task => task)
    .catch(error => {
        throw new Error(error)
    })

exports.newTask = data => 
    Tasks.create(data)
    .then(task => task) // Retorno el usuario
    .catch(error => {
        throw new Error(error)
    })

exports.updateTask = (data,id, userId) => 
    Tasks.update(data, {where: {id,userId}})
    .then(task => task) // Retorno el usuario
    .catch(error => {
        throw new Error(error)
    })

exports.deleteTask = (id, userId) => 
    Tasks.destroy({where: {id,userId}})
    .then(task => task) // Retorno el usuario
    .catch(error => {
        throw new Error(error)
    })



