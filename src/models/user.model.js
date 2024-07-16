const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('user', userModel);
