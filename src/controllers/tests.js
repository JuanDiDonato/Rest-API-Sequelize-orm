const {Tasks} = require('../models')
const {getTasks,getTask,newTask, updateTask, deleteTask} = require('../services/tasks')
testsControllers = {}

// Obtener notas
testsControllers.get = (req,res,next) => {
    const userId = req.user.id
    getTasks(userId).then(tasks => res.status(200).send(tasks)).catch(next)
}

// Obtener una nota por id
testsControllers.getId =  (req,res,next) => {
    const {id} = req.params
    const userId = req.user.id
    getTask(id, userId).then(task => res.status(200).send(task)).catch(next)
}

// Crear una nota
testsControllers.post = (req,res, next) => {
    const {title, description} = req.body
    const userId = req.user.id
    newTask({title, description, userId}).then(task => res.status(201).send(task)).catch(next)
}

// Editar una nota
testsControllers.put = (req,res) => {
    const {id} = req.params
    const userId = req.user.id
    getTask(id, userId).then(task => {
        if(!task) res.status(404).send({error:true, msj:"La nota no existe."})
        else{
            const {title, description} = req.body
            updateTask({title, description},id, userId).then(task => res.status(200).send()).catch(next)
        }
    })
}

// Borrar una nota
testsControllers.borrar = (req,res) => {
    const {id} = req.params
    const userId = req.user.id
    deleteTask(id, userId).then(task => res.status(204).send())
}

module.exports=testsControllers