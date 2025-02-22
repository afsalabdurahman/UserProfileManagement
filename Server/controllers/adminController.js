const userSchema = require("../models/userModel")
const multer = require('multer');

//
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file to avoid duplicates
  },
});
const upload = multer({ storage });
//


let Home = async (req, res) => {
  try {

    userSchema.find().then((ress) => {
      res.send({ datas: ress })
    })



  } catch (error) {
    console.log(error, "errrrrrrrr")
  }

}

const Edituser = async (req, res) => {
  console.log(req.body, "data")
  let imagef = req.file
  let { firstName, lastName, mobile, email, userId } = req.body
  let id = req.body.userid

  console.log(firstName, lastName, mobile, email, userId, imagef, "data from requws")

  if (firstName) {
    await insertData(userId, { FirstName: firstName })
  }
  if (lastName) {
    await insertData(userId, { LastName: lastName })
  }
  if (mobile) {
    await insertData(userId, { mobile: mobile })
  }
  if (email) {
    await insertData(userId, { email: email })
  }
  if (imagef) {

    let image = `http://localhost:3000/uploads/${imagef.filename}`
    await insertData(userId, { image: image })
  }




  async function insertData(id, data) {
    console.log(id, data, "id+data")
    const user = await userSchema.updateOne(
      { _id: id },  // Find the user by _id
      { $set: data, }  // Set the new FirstName
    );


  }
  res.status(200).send("updated")
}

let Adduser = async (req, res) => {
  console.log(req.body, "adddd userrrrr")
  console.log(req.file)
  let { firstName, lastName, email, mobile } = req.body
  insert_user_register = new userSchema({
    FirstName: firstName,
    LastName: lastName,
    mobile: mobile,
    email: email,

    image: `http://localhost:3000/uploads/${req.file.filename}`
  })

  const insertedData = await insert_user_register.save()
  res.status(200).send("Add new user")
}

let DeleteUser = async (req, res) => {
  const deletes = await userSchema.findByIdAndDelete(req.body.id)
  console.log(req.body, "delete")
}

module.exports = {
  Adduser,
  Home,
  Edituser,
  DeleteUser
}