const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerUserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        //default: Date.now()
    },
    phonenumber: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    set_mpin: {
        type: String,
        required: true
    },
    set_faceid: {
        type: String,
        required: true
    },
    set_tnc: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('registeruser', registerUserSchema);