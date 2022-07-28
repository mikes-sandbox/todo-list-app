const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true 
    },
    providerId: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    photoURL: {
        type: String,
        required: false,
    },
});

// Connects usersSchema with the "users" collection
module.exports = mongoose.model('User', usersSchema);
