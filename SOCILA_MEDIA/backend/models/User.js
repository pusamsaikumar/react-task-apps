const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {  type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true},
    profilePicture:{
        type:String,
        default:''
    },
    coverPicture:{
        type:String,
        default:''
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    desc:{
        type:String,
        max:50
    },
    city:{
        type:String,
        max:50
    },
    from:{
        type:String,
        max:50
    },
    relationship:{
        type:String,
        enum:[1,2,3]
    }
},
{timestamps:true}

);

module.exports = mongoose.model('User',UserSchema);
