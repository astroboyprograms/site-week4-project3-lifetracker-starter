const express = require('express');
const { NotFoundError } = require('./utils/errors');

const app = express();

app.get('/', (req, res) => {
  res.json({ ping: 'pong' });
});

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
