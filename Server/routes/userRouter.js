let express = require("express");
var UserRouter = express.Router();
let userController=require("../controllers/userController")
UserRouter.post("/login", userController.login);


module.exports = UserRouter;