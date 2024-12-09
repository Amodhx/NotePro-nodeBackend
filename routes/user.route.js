const Router = require("express");
const userController = require('../controller/user.controller.js');
const user = require("../models/user.model.js");


class UserRouter{
    router;

    constructor(){
        this.router = new Router();
        this.router.post("/saveUser",this.saveUser);
        this.router.get("/getAllUsers",this.getAllUsers);
        this.router.get('/getUserByEmail',this.getUserByEmail)
        this.router.delete('/deleteUser',this.deleteUser)
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
        let user = req.body;
        
        try{
            await userController.saveUser(user);
            resp.status(201).send(user);
        }catch(err){
            console.log(err);
            resp.status(500).send("Cant save Studdent!");
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