const mongoose = require('mongoose')
 
const Schema = mongoose.Schema
const taskSchema = new Schema({
    title : {
            type : String,
       minlength : [3,'title should be more than 3 characters'],
        required : true
    },
    description : {
        type : String
    },
    completed : {
        type : Boolean,         
        default : false
    },
    dueDate   : {
            type : Date ,
         default : new Date() 
          
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    user  : {
        type : Schema.Types.ObjectId,
        ref  : 'User',
        required : true
    }
})
 
taskSchema.pre('validate', function(next){
     next()
})

taskSchema.pre('save', function(next){
    console.log('pre save function called')
    next()
})
 
const Task = mongoose.model('Task', taskSchema)
module.exports = Task

 