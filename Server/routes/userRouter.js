let express = require("express");
var UserRouter = express.Router();
let userController=require("../controllers/userController")
const multer = require('multer');
const path=require('path')
const jwtVerification=require("../midleware/jwtVerification")
// ...........

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file to avoid duplicates
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage });
//

//////
UserRouter.get('/',(req,res)=>{

  res.json({"name":"afsal"})
})

UserRouter.post("/register", userController.register);
UserRouter.post('/checkotp',userController.checkOtp)
UserRouter.post("/login",userController.login)
UserRouter.post('/uploadimage',jwtVerification.tokenVerification,upload.single('image'),userController.uploadImg)
module.exports = UserRouter;