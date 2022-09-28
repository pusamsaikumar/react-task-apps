import express from "express";
import { addcomment, deleteComment, getComments } from "../controllers/comment.js";
import { verifyToken } from '../verificationToken.js';

const router = express.Router();

// to add comment
router.post('/',verifyToken,addcomment);

// to delete comment
router.delete('/:id',verifyToken,deleteComment)

// to get comment
router.get('/:videoId',getComments)
export default router;