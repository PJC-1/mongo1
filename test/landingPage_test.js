const request = require('supertest');
const indexRoute = require('../routes/index');

describe('landing page', function(){
    it('displays the landing page', function(done){
        request(indexRoute).get('/')
        .expect(200)
        .expect(/Articles/);
        done();
    });
});
