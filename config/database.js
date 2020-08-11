const mongoose = require('mongoose')

const configuredb = () => {
        mongoose.connect('mongodb://localhost:27017/express-server-jan', {   
            useNewUrlParser: true, 
            useUnifiedTopology: true ,
            useCreateIndex : true
        })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
        })
}   

module.exports = configuredb  
 