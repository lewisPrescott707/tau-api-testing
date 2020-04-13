const request = require('supertest');
const express = require('express');
const chai = require('chai');
const expect = chai.expect;
const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

describe('API Tests', () => {
  it('should return ok response', () => {
    request(app)
      .get('/user')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
      });
  });
});
