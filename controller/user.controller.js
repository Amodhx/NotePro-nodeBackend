const userService = require('../service/userService.js');
const jwtService = require('../service/jwtService.js');
const DataNotFoundException = require('../exceptions/DataNotFoundException.js');
const DataPersistException = require('../exceptions/DataPersistException.js');

class UserController{
    
    async saveUser(req,resp){
        const user = req.body;
        try{
            resp.status(201).send(await userService.saveUser(user));
        }catch(err){
            if(err instanceof DataNotFoundException){
                resp.status(400).send("User not found to save")
            }else if(err instanceof DataPersistException){
                resp.status(400).send("cant save user")
            }else{
                resp.status(500).send('Internal Server Error')
            }
        }
        
    }
    async signIn(req,resp){
        try{
            const user = req.body;
            resp.status(201).send(await jwtService.signIn(user));
        }catch(err){
            if(err instanceof DataNotFoundException){
                resp.status(400).send("It seems user email is invalid")
            }else{
                resp.status(500).send("Internal Server Error" + err)
            }
        }
        
    }

    async getAllUsers(req,resp){
        try{
            resp.status(201).send(await userService.getAllUsers())
        }catch(err){
            if(err instanceof DataNotFoundException){
                resp.status(400).send("User not found to get")
            }else{
                resp.status(500).send("Internal Server Error")
            }
        }
    }
    async getUserByEmail(req,resp){
        try{
            const email = req.query.email;
            let user =await userService.getUserByEmail(email);
            resp.status(201).send(user);
        }catch(err){
            if(err instanceof DataNotFoundException){
                resp.status(400).send("Invalid Email")
            }else{
                resp.status(500).send("Internal Server Error" )
            }
        }
        
    }

    async deleteUser(req,resp){
        try{
            let email =req.query.email
            await userService.deleteUser(email)
            resp.status(201).send("USER DELETED")
        }catch(err){
            if(err instanceof DataNotFoundException){
                resp.status(400).send("Invalid Email")
            }else{
                resp.status(500).send("Internal Server Error")
            }
        }
        
    }
}

const userController = new UserController();
module.exports = userController;