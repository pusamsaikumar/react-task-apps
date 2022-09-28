import { createError } from "../error.js";
import Comment from "../models/Comment.js";
import Video from "../models/Video.js";


// to add a comment router.post('/',addcomment);
export const addcomment = async(req,res,next)=>{
    try{
        const addnewcomment = new Comment({...req.body , userId:req.user.id});
        const saveComment = await addnewcomment.save();
        res.status(200).json(saveComment);
    }catch(err){
        next(err);
    }
}

// to delete comments 
export const deleteComment = async(req,res,next)=>{
    try{
        const comment = await Comment.findById(req.params.id);
        const video = await Video.findById(req.params.id);
        if(req.user.id === comment.userId || req.user.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id);
            res.status(200).json("The comment has been deleted successfully..")
        }else{
            return next(createError(403, "You can delete your comments only?... "))
        }
    }catch(err){
        next(err)
    }
}
// to get a comments with videoId
export const getComments = async(req,res,next)=>{
    try{
        const getcomment = await Comment.find({videoId:req.params.videoId});
        res.status(200).json(getcomment)
    }catch(err){
        next(err);
    }
}