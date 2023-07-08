const { Client } = require('pg');
const { getDatabaseUri } = require('./config');

const databaseUri = getDatabaseUri();
const client = new Client({ connectionString: databaseUri });

client
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Failed to connect to PostgreSQL database', err);
  });

module.exports = client;
