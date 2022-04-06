const jwt =require('jsonwebtoken');

const maxAge=3*24*60*60*1000;

const createToken=(user_id)=>{
    
    return jwt.sign({user_id},'Twitter_clone_two_point_O',{expiresIn:maxAge})
}
module.exports=createToken  
