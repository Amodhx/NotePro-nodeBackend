const dataNotFoundException = require('../exceptions/DataNotFoundException.js');
const dataPersistException = require('../exceptions/DataPersistException.js');
const User = require('../models/user.model.js');
const genarateId = require('../util/GenarateId.js');


class UserService{
    
    async saveUser(user){
        let toSave = new User(user);
        if(toSave){
            toSave.user_id = await genarateId.GenarateUserId();
            let userSve =await toSave.save();
            if(userSve){
                return userSve;
            }else{
                throw new dataPersistException("Cant Save User",400);
            }
        }else{
            throw new dataNotFoundException("Cant Find User",400);
        }
        
    }
    async getAllUsers(){ 
        const users = await User.find({});
        if(users.length === 0){
            throw new dataNotFoundException('Users Not Found', 404);
        }else{
            return users;
        }
        
    }
    async getUserByEmail(email){
        const user = await User.findOne({ email: email });
            if(!user){
                throw new dataNotFoundException("invalid email",400)
            }else{
                return user;
            }
         
            
    }
    async deleteUser(email){
        const deletedCount = await User.deleteOne({email : email})
        if(deletedCount === 0){
            throw new dataNotFoundException('User not found with the given email', 404);
        }
    }
}

const userService = new UserService();
module.exports = userService;