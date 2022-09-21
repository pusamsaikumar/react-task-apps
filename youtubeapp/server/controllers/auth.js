
import Userdata from "../models/Userdata.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


// create a users 
export const signup = async(req,res,next) =>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new Userdata({...req.body,password:hash});
       // const saveUser = await newUser.save();
       await newUser.save();
        res.status(200).send("user has been created successfully...")
    }catch(err){
    // next(createError(404, " not found data? "));
       //next(err)
       res.status(500).send(err);
    }
    
}
// sign in users into account  

export const signin = async(req,res,next)=>{
    try{
        // to find users name
        const user = await Userdata.findOne({name:req.body.name});
        if(!user){
            return next(createError(404, "User not found?.."))
        }

        // to checked the password valid or not
        const isCorrect = await bcrypt.compare(req.body.password,user.password);
        if(!isCorrect){
            return next(createError(400,"invalid password Or wrong credential..."))
        }

        // to verify the user information with jwt and  send to cookie
        // to create token 
        const token = jwt.sign({id:user._id},process.env.JWT);

        // we dont send password..
        const {password, ...others} =user._doc;

        // Send to cookie storage..
        // res.cookie("access_token",token,{
        //     httpOnly:true
        // }).status(200).send(user)
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(others);
 
    }catch(err){
        next(err);
    }
} 