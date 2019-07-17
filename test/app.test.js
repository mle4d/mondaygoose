require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Meme = require('../lib/models/Meme');

describe('memey stuff tests', () => {

  beforeAll(() => {
    connect();
  });
 
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
 
  afterAll(() => {
    return mongoose.connection.close();
  });
  
  it('post', () => {
    return request(app)
      .post('/api/v1/memer')
      .send({ 
        top: 'Cant take the thrown',
        image: 'url string',
        bottom: 'if there is no thrown'
      })
      .then(res => {
        expect(res.body).toEqual({ 
          _id: expect.any(String),
          top: 'Cant take the thrown',
          image: 'url string',
          bottom: 'if there is no thrown',
          __v: 0
        });
      });
  });

  it('getcha', async() => {
    const meme = await Meme.create({ 
      top: 'Cant take the thrown',
      image: 'url string',
      bottom: 'if there is no thrown'
    });
    return request(app)
      .get('/api/v1/memer')
      .then(res => {
        const memeJSON = JSON.parse(JSON.stringify(meme));
        expect(res.body).toEqual([memeJSON]);
      });
  });
  it('puts a meme', async() => {
    const meme = await Meme.create({ 
      top: 'honest to fuck',
      image: 'url string',
      bottom: 'you are a jackass'
    });
    return request(app)
      .put(`/api/v1/memer/${meme._id}`)
      .send({ 
        top: 'honest to fuck',
        image: 'url string',
        bottom: 'you are a jackass'
      })
      .then(res => {
        expect(res.body).toEqual({  
          _id: expect.any(String),
          top: 'honest to fuck',
          image: 'url string',
          bottom: 'you are a jackass',
          __v: 0
        });
      });

  });

  it('delete the meme', async() => {
    const meme = await Meme.create({ 
      top: 'Cant take the thrown',
      image: 'url string',
      bottom: 'if there is no thrown'
    });
    return request(app)
      .delete(`/api/v1/memer/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'Cant take the thrown',
          image: 'url string',
          bottom: 'if there is no thrown',
          __v: 0
        });
      });
  });
});

