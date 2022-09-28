import express from "express";
import { addVideo, addView, deleteVideo, getByTags, getVideo, random, search, subscribedVideos, trend, updateVideo } from "../controllers/video.js";
import {verifyToken} from '../verificationToken.js';
const router = express.Router();


// to a addvideos of users
router.post('/',verifyToken,addVideo);

// to update videos of users
router.put('/:id',verifyToken,updateVideo);
 
// to delete a videos
router.delete('/:id',verifyToken,deleteVideo);

// to get a videos
router.get('/find/:id',getVideo);

// to add views to videos
router.post('/:id',addView);

// to get trending videos 
router.get('/trend',trend);

// to get random videos
router.get('/random',random);

// to get subscribedchennel
router.get('/sub',verifyToken,subscribedVideos);

// to get video by tags  //http://localhost:8800/videos/tags?tags=java
router.get('/tags',getByTags)

// to get video by search   // http://localhost:8800/videos/search?q=vi
router.get('/search',search)

export default router; 