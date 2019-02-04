// User Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({


    first_name: {
        type: String,
        default: '',
        required: true
    },
    last_name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: '',
        required: true
    },
    password: {
        type: String,
        default: '',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }


});


module.exports = User = mongoose.model('User', UserSchema);

