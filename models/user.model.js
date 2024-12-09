const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        user_id:String,
        firstName:String,
        lastName:String,
        email:{
            type:String,
            require:true,
            unique:true
        },
        password:String,
        profilePic:String,
        role:String
    }
);

const user = mongoose.model('user',userSchema);
module.exports = user;