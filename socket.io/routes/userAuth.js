const express =require('express')
const router=express.Router()
const userAuthController=require('../controller/userAuth')
router.post('/login',userAuthController.loginUser)
router.post('/signup',userAuthController.signUpUser)
module.exports=router