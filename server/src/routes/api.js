const express = require('express');

const authRouter = require('./auth/auth.router');
const todoRouter = require('./todo/todo.router');

const api = express.Router();

api.use('/auth', authRouter);
api.use('/todo', todoRouter);

module.exports = api;