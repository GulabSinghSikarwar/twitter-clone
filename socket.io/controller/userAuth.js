const User = require('../DB/SCHEMA/Users')
const createToken = require('./createToken');
const errorHandeler = (err) => {
    // console.log(err.message);

    return err.message
}
exports.loginUser = (req, resp, next) => {



}
exports.signUpUser = (req, resp, next) => {

    const email = req.body.email;
    const password = req.body.password;
    const user = {
        email: email,
        password: password
    }
    console.log(user);
    const signUp_User = new User(user)
    signUp_User.save().then((result) => {
        const token = createToken(result._id);


        resp.cookie('jwt',token,{httpOnly:true,maxAge:3
        *24*60*60*1000})
        resp.status('200').json({ body: result })

    }).catch((err) => {
        // console.log(err);
        const message = errorHandeler(err)
        resp.status('400').json({
            message: message
        })

    })
    // const loginUser=
}