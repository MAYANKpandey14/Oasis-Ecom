import mongoose, { Schema, models } from "mongoose";
import { HiSortAscending } from "react-icons/hi";

const userSchema= new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    resetToken:{
    type:String,
    required:false,
    },
    resetTokenExpiry:{
        type:Date,
        required:false,
    },
},    
    {timestamps:true}
);


const User = models.User|| mongoose.model("User",userSchema);

export default User;