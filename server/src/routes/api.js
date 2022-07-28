const express = require('express');

const { isAuthenticated } = require('../utils/auth');
const makeError = require('../utils/make-error');

const authRouter = require('./auth/auth.router');
const todoRouter = require('./todo/todo.router');

const api = express.Router();

api.use('/auth', authRouter);
api.use('/todo', isAuthenticated, todoRouter);

// for anything that hasn't been handled yet:
api.use((req, res, next) => {

    return res.status(404)
        .json(makeError('ROUTE_NOT_FOUND', 'Got nothing for ya...'));

});

module.exports = api;