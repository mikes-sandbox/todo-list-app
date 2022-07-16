const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const cookieSession = require('cookie-session');

require('dotenv').config({ path: path.join(__dirname, '..', `env-vars-${process.env.NODE_ENV || 'local'}.env`) });

const getSecrets = require('./utils/get-secrets');
const config = {
  CLIENT_ID,
  CLIENT_SECRET,
  COOKIE_KEY_1,
  COOKIE_KEY_2,
} = getSecrets();

const { CLIENT_PATH } = require('./utils/config');

console.log(process.env);

const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
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

const app = express();

app.use(helmet());
app.use(cookieSession({
  name: 'session',
  maxAge: 1 * 60 * 1000,
  keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  }));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${CLIENT_PATH}/failure`,
    successRedirect: `${CLIENT_PATH}/`,
    session: true,
  }),
  (req, res) => {
    console.log('Google called us back!');
  }
);

app.get('/auth/logout', (req, res) => {
  req.logout(); //Removes req.user and clears any logged in session
  return res.redirect(`${CLIENT_PATH}/`);
});

app.get('/secret', checkLoggedIn, (req, res) => {
  return res.send('Your personal secret value is 42!');
});

app.get('/failure', (req, res) => {
  return res.send('Failed to log in!');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

function checkLoggedIn(req, res, next) {
  console.log('Current user is:', req.user);
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: 'You must log in!',
    });
  }
  next();
}

module.exports = app;