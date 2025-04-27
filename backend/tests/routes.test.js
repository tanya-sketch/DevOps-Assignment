 // backend/tests/routes.test.js

const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('../routes/router');  // Import your router

// Create an express app to use for testing
const app = express();
app.use(bodyParser.json());
app.use('/', router);

describe('Backend API Routes', () => {

  // Test GET /users route
  it('should return a list of users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
  });

  // Test POST /contact/:a route (successful request)
  it('should send a contact message successfully', async () => {
    const response = await request(app)
      .post('/contact/send')
      .send({
        email: 'test@example.com',
        website: 'https://test.com',
        message: 'Hello, this is a test message!'
      });
    expect(response.status).toBe(200);
    expect(response.text).toBe('Message sent. Thank you.');
  });

  // Test POST /contact/:a route (invalid action)
  it('should return an error for invalid contact action', async () => {
    const response = await request(app)
      .post('/contact/invalidAction')
      .send({
        email: 'test@example.com',
        website: 'https://test.com',
        message: 'Hello, this is a test message!'
      });
    expect(response.status).toBe(200);
    expect(response.text).toBe('Invalid Request');
  });

});

