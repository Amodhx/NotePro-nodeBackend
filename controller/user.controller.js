const userService = require('../service/userService.js');
const jwtService = require('../service/jwtService.js')

class UserController{
    
    async saveUser(req,resp){
        const user = req.body;
        try{
            resp.status(201).send(await userService.saveUser(user));
        }catch(err){
            
        }
        
    }
    async signIn(req,resp){
        try{
            const user = req.body;
            resp.status(201).send(await jwtService.signIn(user));
        }catch(err){
            throw err;
        }
        
    }

    async getAllUsers(req,resp){
        resp.status(201).send(await userService.getAllUsers())
    }
    async getUserByEmail(req,resp){
        const email = req.query.email;
        let user =await userService.getUserByEmail(email);
        resp.status(201).send(user);
    }

    async deleteUser(req,resp){
        let email =req.query.email
        await userService.deleteUser(email)
        resp.status(201).send("USER DELETED")
    }
}

const userController = new UserController();
module.exports = userController;