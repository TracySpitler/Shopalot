const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Create Schema
const UserSchema = new Schema({

    firstName: {
        type: String,
        default: '',
        required: true
    },
    lastName: {
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
    isDeleted: {
        type: Boolean,
        default: false
    }


});

UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

module.exports = User = mongoose.model('User', UserSchema);