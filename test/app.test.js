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
});
  
// it('new memer', () => {
//   return request(app)
//     .put('/')
//     .send({ 
//       character: 'Fry'
//     })
//     .then(res => {
//       expect(res.body).toEqual({ 
//         top:
//         image:
//         bottom:
//       });
//     });
// });
// it('deletesa', () => {
//   return request(app)
//     .delete('/')
//     .then(res => {
//       expect(res.body).toEqual({
//         top:
//         image:
//         bottom:
//       });
//     });

