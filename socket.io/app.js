const express = require('express');
const app = express();


// mongoose import  
const mongoose = require('mongoose');



//  imports routes 
const PostRoute = require('./routes/post')
const AuthRoute = require('./routes/userAuth')
// modules imports 

const bodyParser = require('body-parser')
const cookie_parser = require('cookie-parser');
const res = require('express/lib/response');
const User=require('./DB/SCHEMA/Users')
const createToken=require('./controller/createToken')


// imports Over ..................................................................

app.use(express.json())
app.use(bodyParser.json())
app.use(cookie_parser())


app.use((req,resp,next) => {
    console.log("connected");
    next();

})

app.use((req, resp, next) => {

    resp.setHeader('Access-Control-Allow-Origin','*')
    resp.setHeader('Access-Control-Allow-Methods','GET,POST')
    resp.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')


    next()
})
app.use(PostRoute)
app.post('/signup' ,async (req, resp) => {

    console.log("req bod    ", req.body);
    const email = req.body.email;
    const password = req.body.password;
    const user_data = {
        email: email,
        password: password
    }
    console.log(user_data);

    try {

        //    resp.cookie('newUser', false)
        const user = await User.create(user_data);
        const token = createToken(user._id);
        console.log("success");
        // resp.cookie('jwt', token, {
        //     httpOnly: true, maxAge: 3
        //         * 24 * 60 * 60 * 1000
        // })
        resp.cookie('jwt',token)
        resp.cookie('newUserPart2', false)
        resp.status('200').json({ body: user })
    } catch (err) {
        console.log("error occured ");
        // console.log(err);
        const message = errorHandeler(err)
        resp.status('400').json({
            message: message
        })
    }
    {/*
 const signUp_User = new User(user)
    signUp_User.create().then((result) => {

        console.log("result ",result);
        const token = createToken(result._id);
        console.log("success");


        res.cookie('new user',false)
        // resp.cookie('jwt',token,{httpOnly:true,maxAge:3
        // *24*60*60*1000})
        resp.status('200').json({ body: result })


    }).catch((err) => {
        console.log("error occured ");
        // console.log(err);
        const message = errorHandeler(err)
        resp.status('400').json({
            message: message
        })

    }) */}


    // const loginUser=
})
// app.use(AuthRoute)

mongoose.connect('mongodb://localhost:27017/twitter').then(() => {
    console.log("database Connected ");
    const server = app.listen("5000");
    const io = require('./socket/socket').init(server);
    io.on('connection', (socket) => {
        console.log("Client connected ");
    })




}).catch((err) => {
    console.log(err);
})
