const request = require('supertest');
const db = require('./db');
const app = require('./app');

describe('GET /', () => {
  it('responds with json', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ ping: 'pong' });
  });
});

// Add similar tests for middleware

afterAll(() => {
  db.end();
});
