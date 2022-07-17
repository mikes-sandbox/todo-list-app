const express = require('express');

const { authenticateGoogle, authenticateGoogleCallback } = require('../../utils/auth');
const { CLIENT_PATH } = require('../../utils/config');

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

module.exports = authRouter;