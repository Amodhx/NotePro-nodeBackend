const mongoose = require('mongoose');
const user = require('../models/user.model.js');
const userService = require('../service/userService.js');

class UserController{
    
    async saveUser(user){
        return userService.saveUser(user);
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