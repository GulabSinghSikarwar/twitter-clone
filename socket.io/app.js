const express=require('express');
const app =express();


// mongoose import  
const mongoose=require('mongoose');



//  imports routes 
const PostRoute=require('./routes/post')

// modules imports 

const bodyParser=require('body-parser')



// imports Over ..................................................................


app.use(bodyParser.json())



app.use((req,resp,next)=>{
    console.log("connected");
    next();

})

app.use((req,resp,next)=>{
resp.setHeader('Access-Control-Allow-Origin','*')
resp.setHeader('Access-Control-Allow-Methods','GET,POST')
// resp.setHeader('Access-Control-Allow-Headers','*')
resp.setHeader('Access-Control-Allow-Headers','Content-type','Authorization')
    
next()
})
app.use(PostRoute)

mongoose.connect('mongodb://localhost:27017/twitter').then(()=>{
    console.log("database Connected ");
   const server =  app.listen("5000");
   const io =require('./socket/socket').init(server);
   io.on('connection',(socket)=>{
       console.log("Client connected ");
   })



    
}).catch((err)=>{
    console.log(err);
})
