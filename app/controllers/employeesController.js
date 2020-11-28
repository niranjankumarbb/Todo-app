const Employee = require('../models/Employee')

// get all categories
module.exports.list = (req, res) => {
    Employee.find()
        .then((employees) => {
            res.json(employees)
        })
        .catch((err) => {
            res.json(err)
        })  
}

module.exports.create = (req,res)=>{
    const body = req.body
    const employee= new Employee(body)
    employee.save( )
    .then((employee)=>{
        res.json(employee)
    })
    .catch((err)=>{
        res.json(err)  
    })
}


  

  


  