const Task = require('../models/task')
const moment= require('moment')
const tasksController = {}
 
// get all categories
tasksController.list = (req, res) => {
    Task.find({user : req.user._id})                            
        .then((task) =>{
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })  
}

tasksController.create = (req,res)=>{
    const body = req.body
    const task= new Task(body)
    task.user = req.user._id
    task.save( )
    .then((tasks)=>{
        res.json(tasks)
    })
    .catch((err)=>{
        res.json(err)
    })
 }

 tasksController.show= (req,res)=>{
     const id = req.params.id
     Task.find ({_id:id, user : req.user._id})
     .then((task)=>{
         if(task){
           res.json(task)
         }else {
           res.json({})
         }
     })
     .catch((err)=>{
          res.json(err)
     })
 }

 tasksController.update = (req,res)=>{
     const id = req.params.id
     const body = req.body
     Task.findOneAndUpdate({_id:id, user : req.user._id},body, {new : true, runValidators : true})
     .then((task)=>{
          if(task){
            res.json(task)
         } else {
             res.json({})
         }
     })
     .catch((err)=>{
        res.json(err)
     })
 }

 tasksController.destroy = (req,res)=>{
     const id = req.params.id
     Task.findOneAndDelete({_id:id, user : req.user._id})
     .then((task)=>{
         if(task){
             res.json(task)
         } else {
             res.json({})
         }
     })
     .catch((err)=>{
         res.json(err)
     })
 }

 tasksController.completed = (req,res)=>{
    const id = req.params.id
    const body = req.body
     Task.findOneAndUpdate({_id:id, user : req.user._id},body, {new : true, runValidators : true})
     .then((tasks)=>{
         res.json(tasks)
     })
     .catch(err=>{
         res.json(err)
     })
 }

 module.exports = tasksController
