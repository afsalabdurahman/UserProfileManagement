let express = require("express");
var adminRouter = express.Router();
let adminController= require('../controllers/adminController')
const multer = require('multer');
const path=require('path')
const jwtVerification=require("../midleware/jwtVerification")
///
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file to avoid duplicates
  },
});
const upload = multer({ storage });
///


adminRouter.get('/',adminController.Home)
 adminRouter.post('/edituser',upload.single('image'),adminController.Edituser)
 adminRouter.post('/adduser',jwtVerification.tokenVerification,upload.single('image'),adminController.Adduser)
 adminRouter.post('/deleteuser',adminController.DeleteUser)
// adminRouter.post('/edituser', upload.single('image'), (req, res) => {
//   console.log('working....../')
//   console.log(req.body,"boduyyyy")
//   const { firstName, lastName, email, mobile, userId } = req.body;
//   console.log(firstName, lastName, email, mobile, userId )
//   const image = req.file
//   console.log(image)
//   res.send("working..........")
// })


module.exports=adminRouter