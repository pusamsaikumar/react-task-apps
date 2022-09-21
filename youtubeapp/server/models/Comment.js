import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            requried:true
        },
        videoId:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
);

export default mongoose.model('Comment',CommentSchema);