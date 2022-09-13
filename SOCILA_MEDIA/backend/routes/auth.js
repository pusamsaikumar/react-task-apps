const router= require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// router.get("/user", async (req, res) => {
//   try {
//       const newUser = new User({
//         username: "kumar",
//         email: "kumar@gmail.com",
//         password: "12345655555",

//       });
  
//       const user = await newUser.save();
//       res.status(200).json(user);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });

// REGISTER  ROUTER
router.post('/user',async(req,res)=>{
  try{
    // for hide the password with bcrypt lib generate new password
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(req.body.password,salt);
  
        const newUser = new User({
          username:req.body.username,
          email:req.body.email,
         password:hashpassword
        });
         
        const user = await newUser.save();
          res.status(200).json(user);
  }catch(err){
         res.status(500).send(err)
  }
})
  
// LOGIN ROUTER
router.post('/login',async(req,res)=>{
  try{
        // for Find Email id from data base 
        const user = await User.findOne({email:req.body.email});
        const validPassword = await bcrypt.compare(req.body.password,user.password);
        if(!user){
           return res.status(404).send("user not found")
        }
        if(!validPassword){
         return res.status(400).send("wrong password")
        }
       
        res.status(200).send("login successfully")
  }catch(err){
    res.status(505).send(err)
  }
})
  module.exports = router;
  