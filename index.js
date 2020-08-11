const express= require('express')
 const app = express()
 const port = 3045
console.log('express() function console',express())
console.log('express console',express)

const configuredb = require('./config/database')
configuredb() 

app.use(express.json()) 
app.use(function(req,res,next){
    console.log(`${req.ip} - ${req.method} - ${req.url} - ${new Date()} - ${JSON.stringify(req.body)}`)
    next()
})
const routes = require('./config/routes')
app.use('/',routes)

app.listen(port,()=>{
    console.log('Listening on port', port)
})     
