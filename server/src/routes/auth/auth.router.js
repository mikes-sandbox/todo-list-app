const express = require('express');

const { CLIENT_PATH } = require('../../utils/config');
const { httpGetUser } = require('./auth.controller');
const {
    authenticateGoogle,
    authenticateGoogleCallback,
    isAuthenticated
} = require('../../utils/auth');


const authRouter = express.Router();

authRouter.get('/google', authenticateGoogle);
authRouter.get('/google/callback', authenticateGoogleCallback);
authRouter.get('/getUser', isAuthenticated, httpGetUser);

authRouter.get('/logout', (req, res) => {
    req.logout(); //Removes req.user and clears any logged in session
    return res.redirect(`${CLIENT_PATH}/`);
});

module.exports = authRouter;