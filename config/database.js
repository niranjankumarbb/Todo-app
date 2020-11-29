const mongoose = require('mongoose')

const configuredb = () => {
        mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Niranjan:cloudmongodb@cluster32.yxthb.mongodb.net/express-server-jan?retryWrites=true&w=majority', {   
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
 