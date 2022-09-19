const router = require('express').Router();
const Message = require('../models/Message');

// Add to messages
router.post('/',async(req,res)=>{
    const newMessage = new Message(req.body);
    try{
        const message = await newMessage.save();
        res.status(200).send(message);
    }catch(err){
        res.status(500).send(err);
    }
})

// get a all conversatin messages
router.get('/:conversationId',async(req,res)=>{
    try{
        const messages = await Message.find({
            conversationId:req.params.conversationId
        });
        res.status(200).send(messages);
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;