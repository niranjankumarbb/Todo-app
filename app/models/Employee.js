const mongoose = require('mongoose')
const axios  = require('axios')
const Schema = mongoose.Schema
const employeeSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    email  : {
        type : String,
        required : true
    },
    gender  : {
        type : String
    }
})

employeeSchema.pre('save', function(next){
    const user = this
    return axios.get(`https://api.genderize.io?name=${user.name}`)
    .then(response=>{
        const result =response.data
        user.gender  = result.gender
        next() 
    })
    .catch(err=>{
        return Promise.reject(err)
    })
})

const Employee = mongoose.model('Employee', employeeSchema) 
module.exports = Employee 