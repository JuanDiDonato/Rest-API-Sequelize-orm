const Modelos = require('../models')
testsControllers = {}

testsControllers.get = async (req,res) => {
    console.log(Modelos.Tasks);
    const notas = await Modelos.Tasks.findAll()
    res.status(200).send(notas)
}

testsControllers.getId = async (req,res) => {
    const {id} = req.params
    const nota = await Modelos.Tasks.findOne({where : {id:id}})
    res.status(200).send(nota)
}

testsControllers.post = async (req,res) => {
    const {title, description} = req.body
    const newTask = {title, description}
    const created = await Modelos.Tasks.create(newTask)
    if(created) return res.status(201).send()
    else res.status(400).send({error : true})
}

testsControllers.put = async (req,res) => {
    const {id} = req.params
    const task = await Modelos.Tasks.findOne({ where: {id}})
    if(!task) res.status(404).send({error:true, msj:"La nota no existe."})
    else{
        const {title, description} = req.body
        await Modelos.Tasks.update({title, description}, {where: {id}})
        res.status(200).send({msj:"Done"})
    }
    
}

testsControllers.borrar = async (req,res) => {
    const {id} = req.params
    await Modelos.Tasks.destroy({where: {id}})
    res.status(204).send()
}

module.exports=testsControllers