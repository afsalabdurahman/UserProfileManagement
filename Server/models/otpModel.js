const mongoose = require("mongoose")
const otpSchema = new mongoose.Schema(
    {
        email: { type: String, required: true }, // Email of the user to whom OTP is sent
        otp: { type: String, required: true }, // The OTP code itself
        expiresAt: { type: Date, required: true }, // Expiration time of the OTP
    },
    { timestamps: true }
);

// Create an OTP model
const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;