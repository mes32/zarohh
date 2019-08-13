const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: false },
    isAdmin: { type: Boolean, required: true, default: false }
});

const User = mongoose.model('users', schema);

module.exports = User;