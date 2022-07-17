const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const auth = require('./utils/auth')
const authRouter = require('./routes/auth/auth.router');

const app = express();

app.use(auth.helmet);
app.use(auth.cookieSession);
app.use(auth.initializePassport);
app.use(auth.passportSession);

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/auth', authRouter);

app.get('/secret', auth.isAuthenticated, (req, res) => {
  return res.send('Your personal secret value is 42!');
});

app.get('/failure', (req, res) => {
  return res.send('Failed to log in!');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;