const helmet = require('helmet');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const cookieSession = require('cookie-session');
const express = require('express');

const { CLIENT_PATH, AUTH_SERVER } = require('./config');
const getSecrets = require('./get-secrets');
const config = {
    CLIENT_ID,
    CLIENT_SECRET,
    COOKIE_KEY_1,
    COOKIE_KEY_2,
} = getSecrets();

const router = express.Router();

const AUTH_OPTIONS = {
    callbackURL: `${AUTH_SERVER}/auth/google/callback`,
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(accessToken, refreshToken, profile, done) {
    console.log('Google profile', profile);
    done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

// Save the session to the cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Read the session from the cookie
passport.deserializeUser((id, done) => {
    // User.findById(id).then(user => {
    //   done(null, user);
    // });
    done(null, id);
});

function isAuthenticated(req, res, next) {
    console.log('Current user is:', req.user);
    const isLoggedIn = req.isAuthenticated() && req.user;
    if (!isLoggedIn) {
        return res.status(401).json({
            error: 'You must log in!',
        });
    }
    next();
}

router.get('/google',
    passport.authenticate('google', {
        scope: ['email', 'profile'],
    }));

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: `${CLIENT_PATH}/failure`,
        successRedirect: `${CLIENT_PATH}/`,
        session: true,
    }),
    (req, res) => {
        console.log('Google called us back!');
    }
);

router.get('/logout', (req, res) => {
    req.logout(); //Removes req.user and clears any logged in session
    return res.redirect(`${CLIENT_PATH}/`);
});

module.exports = {
    helmet: helmet(),
    cookieSession: cookieSession({
        name: 'session',
        maxAge: 1 * 60 * 1000,
        keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
    }),
    initializePassport: passport.initialize(),
    passportSession: passport.session(),
    isAuthenticated: isAuthenticated,
    router: router,
};