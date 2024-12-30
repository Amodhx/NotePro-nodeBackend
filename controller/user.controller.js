const userService = require('../service/userService.js');
const jwtService = require('../service/jwtService.js')

class UserController{
    
    async saveUser(user){
        return userService.saveUser(user);
    }
    async signIn(user){
        try{
            return jwtService.signIn(user)
        }catch(err){
            throw err;
        }
        
    }

    async getAllUsers(){
        return userService.getAllUsers();
    }
    async getUserByEmail(email){
        let user = userService.getUserByEmail(email);
        console.log(user);
        return user;
        
    }

    async deleteUser(email){
        userService.deleteUser(email)
    }
}

const userController = new UserController();
module.exports = userController;