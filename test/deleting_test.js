const assert = require('assert');
const Article = require('../models/article');

// Describe tests
describe('Delete records', function(){
    var art;

    beforeEach(function(done){
        art = new Article({
            title : 'test title',
            author: 'test author',
            body: 'test body'
        });

        art.save().then(function(){
            done();
        });
    });

    it('Deletes one record from the database', function(done){
        Article.findOneAndRemove({title:'test title'}).then(function(){
            Article.findOne({title:'test title'}).then(function(result){
                assert(result === null);
                done();
            });
        });
    });
});
