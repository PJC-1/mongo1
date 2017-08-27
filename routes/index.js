const express = require('express');
const router = express.Router();

let Article = require('../models/article');

// Home Route
router.get('/', function(req, res){
    Article.find({}, function(err, articles){
        if(err){
            console.log(err);
        } else {
            res.render('index', {
              title:'Articles',
              articles: articles
            });
        }
    });
});


module.exports = router;
