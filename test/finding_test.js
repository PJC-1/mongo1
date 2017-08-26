const assert = require('assert');
const Article = require('../models/article');

var art;

// describe tests
describe('finding records', function(){
    beforeEach(function(done){
        art = new Article({
            title : "test finding a record",
            author : "tester",
            body : "testing with mocha is fun."
        });

        art.save().then(function(){
            done();
        });
    });
    // Create tests
    it('Finds one record from the database', function(done){
        Article.findOne({title: 'test finding a record'}).then(function(record){
            assert(record.title === 'test finding a record');
            done();
        });
    });

    it('Finds one record by ID from the database', function(done){
        Article.findOne({_id: art._id}).then(function(record){
            assert(record._id.toString() === art._id.toString());
            done();
        });
    });
});
