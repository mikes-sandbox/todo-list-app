const express = require('express');
const {
    httpUpsertTodo,
    httpDeleteTodo,
    httpDeleteManyTodos,
    httpGetAllActiveTodos
} = require('./todo.controller');

const todoRouter = express.Router();

todoRouter.get('/', httpGetAllActiveTodos);
todoRouter.post('/', httpUpsertTodo);
todoRouter.delete('/:id', httpDeleteTodo);
todoRouter.post('/clear-completed', httpDeleteManyTodos);

module.exports = todoRouter;