const Post = require('../DB/SCHEMA/post')
const socket = require('../socket/socket')

exports.savePost = (req, resp, next) => {
    console.log("req.body :: ", req.body);

    const post = {
        title: req.body.title,
        image: req.body.image,
        body: req.body.body
    }
    console.log(post);
    const cretedPost = new Post(post)
    cretedPost.save().then((result) => {

        console.log(result);
        
        const io = socket.getIO()
        // console.log(" IO : ",io);
        
        
        console.log( "added post is ", result);

        
        io.emit('post', { data: post })
    
        resp.status(200).json(post)
    }).catch((err) => {
        console.log(err);
        next() 
    })
    {
        /*
     const result=await cretedPost.save()
    console.log(result);
     */
    }
  

}
exports.homePage = (req, resp, next) => {


    resp.status(200).json("HOME PAGE ");


}
exports.fetchAllPosts = (req, resp, next) => {
    Post.find().then((posts) => {

        resp.status(200).json({ Post: posts })

    }).catch((err) => { console.log(err); })

}