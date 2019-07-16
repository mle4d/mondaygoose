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
  
  it('post', ('/api/v1/memer'), () => {
    return request(app)
      .post('')
      .send({ 
        top: 'Cant take the thrown',
        image: 'url string',
        bottom: 'if there is no thrown'
      })
      .then(res => {
        expect(res.body).toEqual({ 
          top: 'Cant take the thrown',
          image: 'url string',
          bottom: 'if there is no thrown'
        });
      });
  });

  //   it('getcha', () => {
  //     return request(app)
  //       .get('/')
  //       .then(res => {
  //         expect(res.body).toEqual([{ 
  //          top:
  //          image:
  //          bottom:
  //         }]);
  //       });
  //   });
  // });
  
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
});
