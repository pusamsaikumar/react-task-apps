const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require("bcrypt");

// router.get('/',(req,res) => res.send("Hey its a users routers page.."))
// update user
router.put('/:id',async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
         if(req.body.password){
             try{
                   const salt = await bcrypt.genSalt(10);
                   req.body.password = await bcrypt.hash(req.body.password,salt)
             }catch(err){
                return res.status(500).json(err);
             }
             try{
                   await User.findByIdAndUpdate(req.params.id,{
                    $set:req.body
                  });
                  res.status(200).json("Your account has been updated..")
          }catch(err){
             return res.status(500).json(err);
          }
         }
    } else{
        return res.status(403).json("You can update only your account?...");
    }
})
// router.put("/:id",(req,res)=>{
//     User.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).then(user=>{
                       
//        if(!user){
      
//         return res.status.send()
//        }
//        res.send(user)
//     }).catch(err=>{
//         res.status(500).send(err)
//     })
// })
router.delete('/:id',async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
      
           
             try{
                    await User.findByIdAndDelete(req.params.id),
                   // await User.deleteOne(req.params.id),
                       
                  // await User.findOneAndDelete(req.params.id);
                  res.status(200).send("Your account has been deleted..")
          }catch(err){
             return res.status(500).send(err);
          }
         
    } else{
        return res.status(403).send("You can delete only your account?...");
    }
})
// router.delete('/:id',(req,res)=>{
//     User.findByIdAndDelete(req.params.id).then((user)=>{
//         if(user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     })
//     .catch(err=>{
//         res.status(500).send(err)
//     })
// })

// get users

// router.get('/:id',async(req,res)=>{
//     try{
//         const user = await User.findById(req.params.id);
//         const {password,username,email,updatedAt,...other} = user._doc;
//         //res.status(200).json(user)
//         //res.status(200).json(user._doc)
//        // res.status(200).json(other)
//        res.status(200).json({password:password,email:email,username:username})
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

// http://localhost:5000/users/userId=2&username="jhon"
 
router.get("/", async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
      const user = userId
        ? await User.findById(userId)
        : await User.findOne({ username: username });
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  });
 
  // GET A FRIEND USERS
    router.get('/friends/:userId',async(req,res)=>{
        try{
                const user = await User.findById(req.params.userId);
                const friends = await Promise.all(

                    user.followings.map((friendId)=>{
                            return User.findById(friendId);
                    })
                );
                let friendList = [];
                friends.map((friend)=>{
                    const {_id,username,profilePicture} = friend;
                    friendList.push({_id,username,profilePicture});
                })
                res.status(200).send(friendList);
        }catch(err){
            res.status(500).send(err);
        }
    })
// Follow a users
router.put('/:id/follow',async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
                const user = await User.findById(req.params.id);
                 const CurrentUser = await User.findById(req.body.userId);
             if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}});
                await CurrentUser.updateOne({$push:{followings:req.params.id}})
                res.status(200).json("user has been followed?")
             } else{
                res.status(403).json("your already follow this user?")
             }   
        }catch(err){
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("you cant follow this user?")
    }
})
// UN FOLLOW USERS:
router.put('/:id/unfollow',async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const CurrentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                 await user.updateOne({$pull:{followers:req.body.userId}});
                 await CurrentUser.updateOne({$pull:{followings:req.params.id}})
                 res.status(200).json("Your has been Unfollowed?")
            } else{
                res.status(403).json("your already unfollowed this user?")
            }
        }catch(err){
            res.status(500).json(err)
        }
    } else{
        res.status(403).json('you can not unfollow yourself?')
    }
})
module.exports = router;