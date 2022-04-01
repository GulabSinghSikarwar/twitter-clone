const express=require('express');
const app =express();


// mongoose import  
const mongoose=require('mongoose');



//  imports routes 
const PostRoute=require('./routes/post')
const AuthRoute =require('./routes/userAuth')
// modules imports 

const bodyParser=require('body-parser')



// imports Over ..................................................................


app.use(bodyParser.json())



app.use((req,resp,next)=>{
    console.log("connected");
    next();

})

app.use((req,res,next)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
next()
})
app.use(PostRoute)
app.use(AuthRoute)

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
