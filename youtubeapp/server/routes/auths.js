import express from "express";
import { signup,signin } from "../controllers/auth.js";

const router = express.Router();

// create a users 
router.post('/signup',signup);

// SING IN USERS
router.post('/signin',signin);

// GOOGLE 
router.post('/google',)

export default router;