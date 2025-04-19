const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const shortid = require('shortid')


const UserSchema = new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    email: { type: String, unique: true, required: true },
    userName: { type: String, unique: true, required: true },
    dob: { 
        type: Date, 
        required: true, 
        validate: value => !isNaN(Date.parse(value)) 
    }
});

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel;