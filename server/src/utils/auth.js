// File to setup and export passport, helmet config etc.

const helmet = require('helmet');
const passport = require('passport');
const Strategy = require('passport-google-oauth20').Strategy;
const cookieSession = require('cookie-session');

const { storeUser } = require('../routes/auth/auth.controller');
const { AUTH_SERVER, CLIENT_PATH } = require('../utils/config');
const config = {
    CLIENT_ID,
    CLIENT_SECRET,
    COOKIE_KEY_1,
    COOKIE_KEY_2,
} = require('../utils/get-secrets')();

const AUTH_OPTIONS = {
    callbackURL: `${AUTH_SERVER}/api/v1/auth/google/callback`,
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
};

async function verifyCallback(accessToken, refreshToken, profile, done) {
    await storeUser(profile);
    return done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

// Save the session to the cookie
passport.serializeUser((userProfile, done) => {
    return done(null, {
        provider: userProfile.provider,
        id: userProfile.id
    });
});

// Read the session from the cookie
passport.deserializeUser((userProfile, done) => {
    return done(null, userProfile);
});

function authenticateGoogle(req, res, next) {
    passport.authenticate('google', {
        scope: ['email', 'profile'],
        prompt: "select_account"
    })(req, res, next);
}

function authenticateGoogleCallback(req, res, next) {
    passport.authenticate('google', {
        failureRedirect: `${CLIENT_PATH}/auth-failure`,
        successRedirect: `${CLIENT_PATH}`,
        session: true,
        failureFlash: true,
    })(req, res, next);
}

function isAuthenticated(req, res, next) {
    const isLoggedIn = req.isAuthenticated() && req.user;
    if (!isLoggedIn) {
        return res.status(401).json({
            error: 'You must log in!',
        });
    }
    next();
}

module.exports = {
    helmet: helmet({
        contentSecurityPolicy: {
            useDefaults: true,
            directives: {
                "img-src": ["'self'", "https: data:"]
            }
        }
    }),
    cookieSession: cookieSession({
        name: 'session',
        maxAge: 5 * 60 * 1000,
        keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
    }),
    initializePassport: passport.initialize(),
    passportSession: passport.session(),
    authenticateGoogle: authenticateGoogle,
    authenticateGoogleCallback: authenticateGoogleCallback,
    isAuthenticated: isAuthenticated,
};