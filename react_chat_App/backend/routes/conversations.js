const router = require('express').Router();
const Conversation = require('../models/Conversation');

// create a  new conversation;
router.post('/',async(req,res)=>{
    const newConversation = new Conversation(
        {
            members:[req.body.senderId,req.body.receiverId]
        }
    );
    try{
        const saveConversation = await newConversation.save();
        res.status(200).send(saveConversation);
    }catch(err){
        res.status(500).send(err);
    }
})

//Get a conversation of a users
router.get('/:userId',async(req,res)=>{
    try{
        const conversation = await Conversation.find({
            members:{
                $in:[req.params.userId]
            }
        })
        res.status(200).send(conversation);
    }catch(err){
        res.status(500).send(err);
    }
});

// conversation between two friends
router.get('/find/:firstUserId/:secondUserId',async(req,res)=>{
    try{
            const conversation = await Conversation.findOne({
                members:{
                    $all:[req.params.firstUserId,req.params.secondUserId]
                }
            });
            res.status(200).send(conversation)
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router;
