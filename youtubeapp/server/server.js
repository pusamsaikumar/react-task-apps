import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/users.js";
import videoRouter from "./routes/videos.js";
import commentRouter from './routes/comments.js';
import authRouter from "./routes/auths.js"

import dotenv from "dotenv";

const app = express();
dotenv.config();
const connection =()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("DB is connected successfully...")
    }).catch(err =>{throw err}) 
}
app.use(cookieParser()); 
app.use(express.json());

app.use(cors({origin:"*"}));
app.use('/users',userRouter);
app.use('/videos',videoRouter);
app.use('/comments',commentRouter);
app.use('/auth',authRouter);

// errors handling express server 
app.use((err,req,res,next)=>{
    const status = err.status || 500 ;
    const message = err.message || "something went wrong....";
    return res.status(status).json({
        success:false,
        status,
        message
    })
})


app.listen(8800,()=>{
    connection();
    console.log("Server is runnig on PORT 8800");
});
app.get('/',(req,res)=>{
    res.send("server app is running...")
})