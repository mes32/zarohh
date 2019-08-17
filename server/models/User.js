const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: { type: String, index: true, unique: true, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false }
});

const User = mongoose.model('users', schema);

module.exports = User;