const helmet = require('helmet');
const passport = require('passport');
const Strategy = require('passport-google-oauth20').Strategy;
const cookieSession = require('cookie-session');

const { AUTH_SERVER, CLIENT_PATH } = require('../utils/config');
const config = {
    CLIENT_ID,
    CLIENT_SECRET,
    COOKIE_KEY_1,
    COOKIE_KEY_2,
} = require('../utils/get-secrets')();
const { httpStoreUser } = require('../routes/auth/auth.controller');

const AUTH_OPTIONS = {
    callbackURL: `${AUTH_SERVER}/auth/google/callback`,
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
};

async function verifyCallback(accessToken, refreshToken, profile, done) {
    const userProfile = await httpStoreUser(profile);
    done(null, userProfile);
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

function authenticateGoogle(req, res, next) {
    passport.authenticate('google', {
        scope: ['email', 'profile'],
    })(req, res, next);
}

function authenticateGoogleCallback(req, res, next) {
    passport.authenticate('google', {
        failureRedirect: `${CLIENT_PATH}/failure`,
        successRedirect: `${CLIENT_PATH}/`,
        session: true,
    })(req, res, next);
}

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

module.exports = {
    helmet: helmet(),
    cookieSession: cookieSession({
        name: 'session',
        maxAge: 1 * 60 * 1000,
        keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
    }),
    initializePassport: passport.initialize(),
    passportSession: passport.session(),
    authenticateGoogle: authenticateGoogle,
    authenticateGoogleCallback: authenticateGoogleCallback,
    isAuthenticated: isAuthenticated,
};