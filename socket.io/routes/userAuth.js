const express =require('express')
const router=express.Router()
const userAuthController=require('../controller/userAuth')
router.get('/cookie',(req, resp,next)=>{

    resp.cookie('newUser', false)
    
})
router.post('/login',userAuthController.loginUser)
router.post('/signup',userAuthController.signUpUser)
module.exports=router