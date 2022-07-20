const express = require('express');
const { isAuthenticated } = require('../utils/auth');

const authRouter = require('./auth/auth.router');
const todoRouter = require('./todo/todo.router');

const api = express.Router();

api.use('/auth', authRouter);
api.use('/todo', isAuthenticated, todoRouter);

module.exports = api;