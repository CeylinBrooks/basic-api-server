'use strict';

const { server } = require('../src/server.js'); 
const supertest = require('supertest');
const mockRequest = supertest(server); 
describe('API SERVER:', () => {

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/things').send({ name: 'person' })
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual('person);
  });

  it('should retrieve an item from the db', async () => {
    const response = await mockRequest.get('/things/1');
    expect(response.status).toBe(200);
    // expect(response.body).toBe(true);
    console.log(response.body);
  });

  it('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/things');
    expect(response.status).toBe(200);
  });
});