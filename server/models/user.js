const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email is required."]
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: "USER_ROLE"
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', UserSchema);