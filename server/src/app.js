const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const auth = require('./utils/auth');
const apiRouter = require('./routes/api');

const app = express();

app.use(auth.helmet);
app.use(auth.cookieSession);
app.use(auth.initializePassport);
app.use(auth.passportSession);

app.use(cors({
  origin: true,
  credentials: true,
}));
// app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api/v1', apiRouter);

app.get('/secret', auth.isAuthenticated, (req, res) => {
  return res.send({ key: 'Your personal secret value is 42!' });
});

// app.get('/failure', (req, res) => {
//   return res.send('Failed to log in!');
// });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;