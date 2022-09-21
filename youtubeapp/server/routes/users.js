import express from 'express'
import { deleteuser, getUser, subscribe, test, unsubscribe, update } from '../controllers/user.js';
import { verifyToken } from '../verificationToken.js';

const router = express.Router();
// test the user
router.get('/test',test);

// to update a user
router.put('/:id',verifyToken,update);

// to delete a user
router.delete('/:id',verifyToken,deleteuser);

// to get a user

router.get('/:id',getUser);

// to subscribe users
router.put('/sub/:id',verifyToken,subscribe);

// to unsubscribe users
router.put('/unsub/:id',verifyToken,unsubscribe);

export default router;