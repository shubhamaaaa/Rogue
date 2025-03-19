import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
         type:String,
         required:true
    },
    cartData:{type:Object,default:{}},
    password:{
        type:String,
        required:true
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});
export default mongoose.model('User',userSchema)