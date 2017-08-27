const request = require('supertest');
const articles = require('../routes/articles');

describe('GET /articles/add', function(){
    it('is articles get route', function(done){
        request(articles).get('/add')
        .expect(200)
        .expect(/Add Article/);
        done();
    });

    it('article post', function(done){
        request(articles).post('/add')
        .send({title:'mocha test post article', author:'chai', body:'testing post article'})
        .expect(302)
        .expect('Location', /\//);
        done();
    });
});
