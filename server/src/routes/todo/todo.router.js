const express = require('express');

const {
    isAuthenticated
} = require('../../utils/auth');


const todoRouter = express.Router();

todoRouter.get('/',
    isAuthenticated,
    (req, res) => {
        return res.status(200).json({ success: true });
    });

module.exports = todoRouter;