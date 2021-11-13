const {Task} = require('../models')
testsControllers = {}

testsControllers.get = async (req,res) => {
    const notas = await Task.findAll()
    res.status(200).send(notas)
}

testsControllers.getId = async (req,res) => {
    const {id} = req.params
    const nota = await Task.findOne({where : {id:id}})
    res.status(200).send(nota)
}

testsControllers.post = async (req,res) => {
    const {title, description} = req.body
    const newTask = {title, description}
    const created = await Task.create(newTask)
    if(created) return res.status(201).send()
    else res.status(400).send({error : true})
}

testsControllers.put = async (req,res) => {
    const {id} = req.params
    const task = await Task.findOne({ where: {id}})
    if(!task) res.status(404).send({error:true, msj:"La nota no existe."})
    else{
        const {title, description} = req.body
        await Task.update({title, description}, {where: {id}})
        res.status(200).send({msj:"Done"})
    }
    
}

testsControllers.borrar = async (req,res) => {
    const {id} = req.params
    await Task.destroy({where: {id}})
    res.status(204).send()
}

module.exports=testsControllers