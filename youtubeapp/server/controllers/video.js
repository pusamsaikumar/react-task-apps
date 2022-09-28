import Video from '../models/Video.js';
import { createError } from '../error.js';
import Userdata from '../models/Userdata.js';

// to add videos user router.post('/:id',verifyToken,addVideo)
export const addVideo = async(req,res,next)=>{
    try{
        const newVideo = new Video({userId:req.user.id,...req.body});
        const saveVideo  =  await newVideo.save();
        res.status(200).send(saveVideo);
    }catch(err){
        next(err)
    }
}

// to update a video router.put('/:id',verifyToken,updateVideo)
export const updateVideo = async(req,res,next)=>{
    try{
        const video = await Video.findById(req.params.id);
        if(!video) return next(createError(404,"video is not found?..."));
        if(req.user.id === video.userId){
            const updatevideos= await Video.findByIdAndUpdate(req.params.id,
                {
                    $set:req.body
                },
                {new:true}
                );
            res.status(200).json(updatevideos);
        } else{
            return next(createError(403,"You can update your video only?...."))
        }
    }catch(err){
        next(err)
    }
};

// to delete a videos router.delete('/:id',verifyToken,deleteVideo)
export const deleteVideo = async(req,res,next)=>{
    try{
        const video = await Video.findById(req.params.id);
        if(!video) return next(createError(404,"the video is not found?.."));
        if(req.user.id === video.userId){
            const deletevideo = await Video.findByIdAndDelete(req.params.id);
            res.status(200).send("The video has been deleted?....")
        } else{
            return next(createError(403,"You can delete your video only?..."))
        }

    }catch(err){
        next(err)
    }
}

// to get a video router.get('/:id',getVideo)
export const getVideo = async(req,res,next)=>{
    try{
        const video = await Video.findById(req.params.id);
        res.status(200).send(video);

    }catch(err){
        next(err)
    }
}
// to add views to the videos router.put('/view,addView)
export const addView = async(req,res,next)=>{
    try{
        const video = await Video.findByIdAndUpdate(
            req.params.id,
            {
                $inc:{
                    views:1
                }
            }
        );
        res.status(200).send("The video has been increased....")
    }catch(err){
        next(err)
    }
};

// get random videos router.get('/random,random)

export const random = async(req,res,next)=>{
    try{
        const videos = await Video.aggregate([
            {
                $sample:{size : 40 }
            }
        ]);
        res.status(200).send(videos)
    }catch(err){
        next(err)
    }
}



// get trending videos router.get('/trend',trend)
export const trend = async(req,res,next)=>{
    try{
        const videos = await Video.find().sort({views: -1});
         res.status(200).send(videos);
    }catch(err){
        next(err)
    }
}

// to get the subscribedusers videos router.get('/sub',verifyToken,subscribedVideos)    
export const subscribedVideos = async(req,res,next)=>{
    try{
          // to find the user is 
          const user = await Userdata.findById(req.user.id);
         // take the subscribe the users
          const subscribechennel = user.subscribedUsers;
        // find from all the chennels
        const list = await Promise.all(
            subscribechennel.map((chennelId)=>{
                return Video.find({userId:chennelId})
            })
        );
        res.status(200).send(list.flat().sort((a,b)=> b.createdAt - a.createdAt));
        }catch(err){
        next(err);
    }
}

// to get videos by tags  router.get('/tags',getByTags) 
export const getByTags = async(req,res,next)=>{
      const tags = req.query.tags.split(" , ");
      console.log(tags);
    try{
         const videos = await Video.find({ tags:{
            $in:tags
         }}).limit(20);
         res.status(200).json(videos)
    }catch(err){
        next(err)
    }
}

// to get a videos by search title name; router.get('/search',search)
export const search  = async(req,res,next)=>{
    const query = req.query.q;
    try{
        const videos = await Video.find(
            {
                title:{
                    $regex:query,
                    $options:"i"
                }
            }
        );
        res.status(200).json(videos);
    }catch(err){
        next(err)
    }
}