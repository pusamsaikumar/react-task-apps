import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true
            },
        email:{
            type:String,
            required:true,
            
            },
        password:{
            type:String,
            required:true
                },
        img:{
            type:String
            },
        subcribers:{
            type:Number,
            default:0
                },
        subscribedUsers:{
            type:[String]
             }
    },

    {
        timestamps:true
    }
);

export default mongoose.model('Userdata',UserSchema);