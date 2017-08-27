const request = require('supertest');
const articles = require('../routes/articles');

describe('GET /articles/add', function(){
    it('is articles get route', function(done){
        request(articles)
          .get('/add')
          .expect(200)
          .expect(/Add Article/);
          done();
    });

    it('article post', function(done){
        request(articles)
          .post('/add')
          .send({title:'mocha test post article', author:'chai', body:'testing post article'})
          // HTTP response status code 302 is a common way of performing URL redirection
          .expect(302)
          .expect('Location', /\//);
          done();
    });
});
