const OTP = require("../models/otpModel")
const generateOtp = async (email) =>{
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
    const otpDoc = new OTP({
        email,
        otp,
        expiresAt,
      });
      await otpDoc.save();
      return new Promise((resolve, reject) => {
        resolve(otp)
      })

}
module.exports={
    generateOtp
}