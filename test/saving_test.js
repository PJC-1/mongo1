const assert = require('assert');
const Article = require('../models/article');

// Describe tests
describe('Saving records', function(){
    // Create tests
    it('Saves a record to the database', function(){
        var article = new Article({
            title : "test",
            author : "mocha",
            body : "test mocha"
        });

        article.save().then(function(done){
          assert(article.isNew === false);
          done();
        });
    });
});
