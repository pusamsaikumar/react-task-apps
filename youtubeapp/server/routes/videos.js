import express from "express";
import { addVideo, deleteVideo, getVideo, updateVideo } from "../controllers/video.js";
import {verifyToken} from '../verificationToken.js';
const router = express.Router();


// to a addvideos of users
router.post('/',verifyToken,addVideo);

// to update videos of users
router.put('/:id',verifyToken,updateVideo);

// to delete a videos
router.delete('/:id',verifyToken,deleteVideo);

// to get a videos
router.get('/find/:id',getVideo)

export default router; 