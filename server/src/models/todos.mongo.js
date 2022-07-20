const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    dateModified: {
        type: Number,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        required: false,
    },
});

// Connects todosSchema with the "todos" collection
module.exports = mongoose.model('Todo', todosSchema);