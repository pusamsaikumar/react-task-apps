
import { createError } from "../error.js";
import Userdata from "../models/Userdata.js";



export const test =(req,res)=>{
    console.log("hey this is test working...");
    res.send("it's working successfully")
}; 

// update a user
export const update = async(req,res,next)=>{
    // req.user.id  its comming from jwt 
    if(req.params.id === req.user.id){
        try{
                // find the params id in Userdata models
                const updateUser = await Userdata.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set:req.body
                    },
                    {
                        new:true
                    }
                );
            res.status(200).json(updateUser);
        }catch(err){
            next(err);
        }
    } else{
        return next(createError(403,"You can update your account only?....."))
    }
};

// delete users

export const deleteuser = async(req,res,next)=>{
    if(req.params.id === req.user.id){
        try{
            const deleteUser = await Userdata.findByIdAndDelete(req.params.id);
            res.status(200).send("your account has been deleted?....")
        }catch(err){
            next(err)
        }
    }else{
        return next(createError(403,"You can delete your account only?.."))
    }
}

// get a users

export const getUser = async(req,res,next)=>{
    try{
         const user = await Userdata.findById(req.params.id);
         res.status(200).send(user)
    }catch(err){
        next(err);
    }
};

// subscribe users 

export const subscribe = async(req,res,next)=>{
    try{
            await Userdata.findById(req.user.id,{
                $push:{subscribedUsers:req.params.id}
            });
            await Userdata.findByIdAndUpdate(req.params,id,{
                $inc:{subscribers: 1}
            });
            res.status(200).send("subscription has been successfull")
           }catch(err){
        next(err);
    }
}

// unsubscriber a users

export const unsubscribe = async(req,res,next)=>{
    try{
            await Userdata.findById(req.user.id,{
                $pull:{subscribedUsers:req.params.id}
            });
            await Userdata.findByIdAndUpdate(req.params.id,{
                $inc:{subcribers: -1}
            });
            res.status(200).send("unsubscription has been successfull")
    }catch(err){
        next(err);
    }
}