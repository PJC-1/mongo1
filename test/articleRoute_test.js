const request = require('supertest');
const articles = require('../routes/articles');

describe('article routes', function(){
    it('is articles get route', function(done){
        request(articles).get('/add').expect(200);
        done();
    });
});
