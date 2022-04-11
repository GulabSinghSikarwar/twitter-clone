const express =require('express')
const router=express.Router()

const userAuthController=require('../controller/userAuth')
// router.use(cookieParser())


router.get('/cookie',(req, resp,next)=>{

    resp.cookie('newUser', false)
    console.log(req.cookies);


    resp.send("hello cookie")
    
})
router.post('/login',userAuthController.loginUser)
router.post('/signup',userAuthController.signUpUser)
router.get('/work',(req,resp)=>{
    resp.send('hello')
})

router.get('/getAuthStatus',userAuthController.getAtuthSatus)
module.exports=router