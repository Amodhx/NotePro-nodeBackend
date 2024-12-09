const {Router} = require('express');
const userRouter = require("./user.route")

class MainRouter{
    router;

    constructor(){
        this.router = new Router();
        this.router.use("/user", userRouter.router);
    }

}

const mainRouter = new MainRouter();
module.exports = mainRouter;