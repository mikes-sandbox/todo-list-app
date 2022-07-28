const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const auth = require('./utils/auth');
const apiRouter = require('./routes/api');
const makeError = require('./utils/make-error');

const app = express();

app.use(auth.helmet);
app.use(auth.cookieSession);
app.use(auth.initializePassport);
app.use(auth.passportSession);

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api/v1', apiRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// route error handling:
app.use((err, req, res, next) => {

  console.error('SERVER_ERROR', err.message);
  return res.status(500)
    .json(makeError('INTERNAL_ERR', 'Internal server error.'));
});


module.exports = app;