const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User')
router.get('/',(req,res)=>{
    res.send("Hellow this is a Post Router")
})
// create a post 
router.post('/',async(req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
})
// updates a posts
router.put('/:id',async(req,res)=>{
    try{
            const post = await Post.findById(req.params.id);
            if(post.userId === req.body.userId){
                await post.updateOne({$set:req.body});
                res.status(200).json("The post has been updated?");
            } else{
                res.status(403).json("You can update your post only?")
            }
    }catch(err){
        res.status(500).json(err);
    }
})
// delted posts
router.delete('/:id',async(req,res)=>{
    try{
            const post = await Post.findById(req.params.id);
            if(post.userId === req.body.userId){
                await post.deleteOne();
                res.status(200).json('The post has been deleted?');
            } else{
                res.status(403).json("You can delete your post only?");
            }
    }catch(err){
        res.status(500).json(err)
    }
})
// like and dislike a posts
router.put('/:id/like',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("The post has been liked?");
        } else{
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json("The post has been disliked?..")
        }
    }catch(err){
        res.status(500).json(err);
    }
})
// get a user post 
router.get('/:id',async(req,res)=>{
    try{
            const post = await Post.findById(req.params.id);
            res.status(200).send(post)
    }catch(err){
        res.status(500).send(err);
    }
})




// TIME LINE POSTS GET ALL POSTS 
router.get('/timeline/:userId',async(req,res)=>{
    try{
            const currentUser = await User.findById(req.params.userId);
            const userPosts = await Post.find({userId:currentUser._id});
            const friendsPosts = await Promise.all(
                currentUser.followings.map((friendId =>{
                    return Post.find({userId:friendId})
                }))
            )
            res.status(200).send(userPosts.concat(...friendsPosts));
    }catch(err){
        res.status(500).send(err);
    }
})
// get all user posts here
router.get('/profile/:username',async(req,res)=>{
    try{
        const user = await User.findOne({username:req.params.username});
        const post = await Post.find({userId:user._id});
        res.status(200).send(post);
    }catch(err){
        res.status(500).send(err);
    }
})
module.exports = router;