const Router = require("express");
const userController = require('../controller/user.controller.js');
const User = require("../models/user.model.js");


class UserRouter{
    router;

    constructor(){
        this.router = new Router();
        this.router.get("/getAllUsers",this.getAllUsers);
        this.router.get('/getUserByEmail',this.getUserByEmail)
        this.router.delete('/deleteUser',this.deleteUser)
        this.router.post("/saveUser", this.saveUser);
        this.router.post("/signIn",this.signIn)
    }

    async signIn(req,resp){
        try{
            const user = req.body;
            resp.status(201).send(await userController.signIn(user));
        }catch(err){
            if(err.message == "Invalid User Email"){
                resp.status(403).send(err.message);
            }else if(err.message == "Invalid Password"){
                resp.status(403).send(err.message);
            }else{
                resp.status(500).send(err.message);
            }
        }
    }

    async getUserByEmail(req,resp){
        const email = req.query.email;
        try{
            let user =await userController.getUserByEmail(email);
            resp.status(201).send(user);
        }catch(err){
            console.log(err);
            resp.status(500).send("Cant get User By Email");
        }
    }

    async saveUser(req,resp){
        try {
            const user = req.body;
            await userController.saveUser(user);
            resp.status(201).send({ message: 'User saved successfully!', user: user });
        } catch (err) {
            console.error(err);
            resp.status(500).send('Error saving user.');
        }
        
    }
    async getAllUsers(req,resp){
        try{
            resp.status(201).send(await userController.getAllUsers())
        }catch(err){
            console.log(err);
            resp.status(500).send("Cant Get All");
        }
    }
    async deleteUser(req,resp){
        let email =req.query.email
        if (!email || typeof email !== 'string') {
             resp.status(400).json({ error: 'Invalid email format' });
        }
        try{
            await userController.deleteUser(email)
            resp.status(201).send("USER DELETED")
        }catch{
            console.log(err);
            resp.status(500).send(err)
        }
    }
}

const userRouter = new UserRouter();
module.exports = userRouter;