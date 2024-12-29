const User = require('../models/user.model.js');
const genarateId = require('../util/GenarateId.js');


class UserService{
    
    async saveUser(user){
        let toSave = new User(user);
        toSave.user_id = await genarateId.GenarateUserId();
        let userSve =await toSave.save();
        return userSve;
    }
    async getAllUsers(){
        const users = await User.find({});
        return users;
    }
    async getUserByEmail(email){
        const user = await User.findOne({ email: email });
        return user;
    }
    async deleteUser(email){
        await User.deleteOne({email : email})
    }
}

const userService = new UserService();
module.exports = userService;