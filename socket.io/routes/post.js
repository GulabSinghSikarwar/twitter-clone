const express =require('express')
const router =express.Router();

const PostController=require('../controller/posts')



router.post('/addPost',PostController.savePost)
router.get('/posts',PostController.fetchAllPosts)

router.get("/",PostController.homePage)
module.exports=router