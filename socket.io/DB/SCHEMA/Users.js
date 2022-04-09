const mongoose=require('mongoose')
const  Schema=mongoose.Schema;
const bcrypt=require('bcrypt');


const  {isEmail} =require('validator')
const userSchema=new Schema({
    email:{
        type:String,
        required:[true,"please Enter the email "],
        unique:true,
        lowercase:true, 
        // validate:[isEmail,"Please Enter the Valid email "]
    },

    password:{
        type:String,
        required:[true,"please Enter the email "],
        minlength:['6',"Minimum password length is 6"]
    },
})
userSchema.pre('save', async  function(){
    console.log(`
    User About to be created :
     ${this}
    `);
    const salt_rounds=10;
    const salt=await bcrypt.genSalt(salt_rounds)
    const hash_password= await bcrypt.hash(this.password,salt);
    this.password=hash_password;


    
})
userSchema.statics.login=async function (email,password){
    const user =  await this.findOne({email:email})
    console.log("email : ",email,"  password :",password);
    if(user)
    {

        const valid_password= await bcrypt.compare(password,user.password);
        if(valid_password)
        {
            return user;


        }
        throw Error("Wrong Password ")

    }
    throw Error("Incorrect E-mail")
}

module.exports=mongoose.model('User',userSchema)