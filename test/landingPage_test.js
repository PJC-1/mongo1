const request = require('supertest');
const indexRoute = require('../routes/index');

describe('GET /', function(){
    it('', function(done){
        request(indexRoute)
          .get('/')
          .expect(/Articles/)
          .expect(200);
          done();
    });
});
