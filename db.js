const mongoose = require ("mongoose");
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        lowercase: true,
        minLength: 4,
        maxLength: 50
    },
    password: {
        type: String,
        reqiure: true,
        unique: true,
        minLength: 8
    },
    firstName: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 20
    },
    middleName: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 20
    },
    lastName: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 20
    }
})

const accountSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        require: true,
    },
    balance : {
        type: Number,
        require: true
    }
})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema)

module.exports = ({
    User, Account
})