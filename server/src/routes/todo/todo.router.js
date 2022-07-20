const express = require('express');
const {
    httpCreateTodo,
    httpDeleteTodo,
    httpDeleteManyTodos
} = require('./todo.controller');

const todoRouter = express.Router();

todoRouter.post('/', httpCreateTodo);
todoRouter.delete('/:id', httpDeleteTodo);
todoRouter.post('/clear-completed', httpDeleteManyTodos);


module.exports = todoRouter;