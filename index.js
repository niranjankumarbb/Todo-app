const express= require('express')
const path = require('path') 
const app = express()
const port =  process.env.PORT || 3045
  
const configuredb = require('./config/database')
configuredb() 

app.use(express.json()) 
app.use(function(req,res,next){
    console.log(`${req.ip} - ${req.method} - ${req.url} - ${new Date()} - ${JSON.stringify(req.body)}`)
    next()
})
const routes = require('./config/routes')
app.use('/',routes)


if(process.env.NODE_ENV== 'production'){
    app.use(express.static( "client/build")) 
}
// app.use(express.static(path.join(__dirname,"client/build"))) 
// app.get("*",(req,res) => { 
//     res.sendFile(path.join(__dirname + "/client/build/index.html")) 
// }) 

app.listen(port,()=>{
    console.log('Listening on port', port)
})     
