const mongoose = require("mongoose")

const User_schema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true

    },
    LastName: {
        type: String,
        required: true

    },
    mobile: {
        type: String,


    },
    password: {
        type: String,
     

    },
    isAdmin: {
        type: Number,
        default: 0,

    },
    email: {
        type: String

    },


    is_blocked: {
        type: Number,
        default: 1,
    },
    address: {
        type: String
    },
    location: {
        type: String
    },
    gender: {
        type: String
    },
    dob: {
        type: String
    },
    address2: {
        type: Object,

    },
    image:{
type:String
    }
})
module.exports = mongoose.model("User", User_schema)