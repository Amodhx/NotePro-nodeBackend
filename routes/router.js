const {Router} = require('express');
const userRouter = require("./user.route")
const noteRouter = require('./notes.route')

class MainRouter{
    router;

    constructor(){
        this.router = new Router();
        this.router.use("/user", userRouter.router);
        this.router.use("/note", noteRouter.router)
    }

}

const mainRouter = new MainRouter();
module.exports = mainRouter;