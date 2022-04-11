const res = require('express/lib/response');
const User = require('../DB/SCHEMA/Users')
const createToken = require('./createToken');
const jsonwebtoken = require('jsonwebtoken')
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
      const token=createToken(user._id)

      resp.cookie('jwt',token);
      resp.cookie('new user ',true)
      
      
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
   


    // const loginUser=
}
exports.getAtuthSatus=async (req,resp)=>{

    const token=req.cookies.jwt;
    console.log(req.cookies);
    

    if(token){
        jsonwebtoken.verify(token,'Twitter_clone_two_point_O',(err,decoded)=>{

            if(err)
            {
                const message="something wrong with JWT token , False token ! ";
                resp.status('200').json({
                    isAuthenticated:false,
                    tokenStatus:"token_found_but_False",
                    message:message
                })

            }
            else{
                console.log(decoded);
                resp.status('200').json({
                    isAuthenticated:true,
                    tokenStatus:"token_found",
                    token_verified:'true',
                    user_id:decoded,
                    jwt:token
                })
            }

        })
        
       
    }
    else{
        resp.status('200').json({
            isAuthenticated:false,
            tokenStatus:"not_found"
        })
    }
}