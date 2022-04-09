const res = require('express/lib/response');
const User = require('../DB/SCHEMA/Users')
const createToken = require('./createToken');
const errorHandeler = (err) => {
    // console.log(err.message);

    return err.message
}
exports.loginUser = async (req, resp) => {
    console.log("login Req body : ", req.body);

    //  user login
  try {
      const email=req.body.email;
      const password=req.body.password;
      const user= await User.login(email,password);
      resp.status('200').json({id:user._id})



  } catch (error) {
     if(error)
     {
         console.log(error.message);
        resp.status('400').json({message:error.message})
     }
  }

}
exports.signUpUser = async (req, resp) => {


    

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
}