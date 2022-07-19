const express = require('express');

const {
    authenticateGoogle,
    authenticateGoogleCallback,
    isAuthenticated
} = require('../../utils/auth');
const { CLIENT_PATH } = require('../../utils/config');
const { httpGetUser } = require('./auth.controller');

const authRouter = express.Router();

authRouter.get('/google',
    authenticateGoogle
);

authRouter.get('/google/callback',
    authenticateGoogleCallback,
);

authRouter.get('/logout', (req, res) => {
    req.logout(); //Removes req.user and clears any logged in session
    return res.redirect(`${CLIENT_PATH}/`);
});

authRouter.get('/getUser',
    isAuthenticated,
    httpGetUser
);

module.exports = authRouter;