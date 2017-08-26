const assert = require('assert');
const Article = require('../models/article');

// Describe tests
describe('Updating records', function(){
    var art;

    beforeEach(function(done){
        art = new Article({
            title : 'new article',
            author : 'article author',
            body : 'article test body'
        });

        art.save().then(function(){
            done();
        });
    });

    // Create tests
    it('Updates one record from the database', function(done){
        Article.findOneAndUpdate({author:'article author'},{title:'updated title'}).then(function(){
            Article.findOne({_id:art._id}).then(function(result){
                assert(result.title === 'updated title');
                done();
            });
        });
    });

});
