const Router = require("express");
const userController = require('../controller/user.controller.js');


class UserRouter{
    router;

    constructor(){
        this.router = new Router();
        this.router.get("/getAllUsers",userController.getAllUsers);
        this.router.get('/getUserByEmail',userController.getUserByEmail)
        this.router.delete('/deleteUser',userController.deleteUser)
        this.router.post("/saveUser", userController.saveUser);
        this.router.post("/signIn",userController.signIn)
    }
}

const userRouter = new UserRouter();
module.exports = userRouter;