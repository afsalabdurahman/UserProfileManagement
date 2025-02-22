const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const OTP = require("../models/otpModel")
const User_schema = require("../models/userModel")
const jwt = require("jsonwebtoken")

exports.hashPassword = (myPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(myPassword, saltRounds, function (err, hash) {
            if (err) {
                console.log(err, "err from bcytp")
            } else {
                resolve(hash)
            }
        });
    })
}

exports.checkHash = (email, mypassword) => {

    try {
        return new Promise(async (resolve, reject) => {
            const user = await User_schema.findOne({ email: email })
            
            if(!user){
                reject("Please Register")
            }else{

            
            bcrypt.compare(mypassword, user.password, async function(error,result) {
                if (result) {
                    let admin = await User_schema.findOne({
                        $and: [
                          { email: email },
                          { isAdmin: 1 }
                        ]
                      });
                      
if(admin){
    let data = { id: admin._id, name: admin.FristName , role:"admin", }
    let token = jwt.sign(data, "secret", { expiresIn: 3600 })
    resolve({ token: token, admin: admin })
}

                    let data = { id: user._id, name: user.FristName , role:"user", }
                    let token = jwt.sign(data, "secret", { expiresIn: 3600 })
                    
                    resolve({ token: token, user: user })
                }else{
reject("Wrong Password")
                }
            });
    
        }
        })
    } catch (error) {
       console.log(error,"erro r from catch") 
    }
    
}
