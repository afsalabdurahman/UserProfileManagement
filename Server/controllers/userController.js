const User_schema = require("../models/userModel")
const hash = require('../midleware/bcrypt')
const generateOtp = require("../midleware/otp")
const jwt = require("jsonwebtoken")
const Otp_Schema = require("../models/otpModel");
const multer = require('multer');
const OTP = require("../models/otpModel");
const session = require('express-session');
const { response } = require("express");
// muter.......
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

register = async (req, res) => {
  let { firstName, lastName, email, password, conform, phoneNumber, Address } = req.body.formData
  console.log(req.body.formData, "formdata")
  try {

    await User_schema.findOne({ email: email }).then((response) => {
      if (response) {
        res.status(500).json({
          error: 'Something went wrong on the server',
          message: 'Already registered'
        })
      }
    })
    let passwordHash;
    hash.hashPassword(password).then((res) => {
      return res
    }).then((res) => {

      insert_user_register = new User_schema({
        FirstName: firstName,
        LastName: lastName,
        mobile: phoneNumber,
        email: email,
        password: res,
        address: Address
      })

      const insertedData = insert_user_register.save()

    })


    res.status(200).send({ url: '/otp' })



  } catch (error) {
    console.log(error, "errorrr")
  }


};

let checkOtp = async (req, res) => {
  try {

    const findOtp = await OTP.find({ otp: req.body.otpValue })
    if (findOtp.length !== 0) {
      res.send({ url: "/login" })
    } else {
      res.send({ error: "Invalid Otp" })
    }


  } catch (error) {
    consnole.log(error)
  }
}
console.log(session.useremail, "workinf dafu")

let login = (req, res) => {

  try {

    hash.checkHash(req.body.email, req.body.password).then((respose) => {
      console.log(response)



      res.send({ respose })
    }).catch((error) => {
      res.status(500).json({ message: error })
    })

  } catch (error) {
    res.status(500).json({ message: "internal server error" })

  }
}

const uploadImg = async (req, res) => {
  const { email } = req.body;
  let authorization = req.headers.authorization
  let token = authorization.split(" ")[1]
  const decoded = jwt.decode(token);

  try {

    if (decoded) {

      await User_schema.updateOne(
        { _id: decoded.id },
        {
          $set: {
            image: `http://localhost:3000/uploads/${req.file.filename}`
          }
        }
      )
    }
    res.send(`http://localhost:3000/uploads/${req.file.filename}`)
  } catch (error) {
    consooe.log(error, "db errorrrrrr")
  }


}



module.exports = {
  register,
  checkOtp,
  login,
  uploadImg
}