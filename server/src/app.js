const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config({ path: path.join(__dirname, '..', 'secrets', `secrets-development.env`) });
console.log(path.join(__dirname, '..', 'secrets', `secrets-development.env`));
console.log(process.env);

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;