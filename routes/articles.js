const express = require('express');
const router = express.Router();

// Bring in Article Model
let Article = require('../models/article');
// Bring in User Model
let User = require('../models/user');

// Add Route
router.get('/add', ensureAthenticated, function(req, res){
    res.render('add_article', {
        title: 'Add Article'
    });
});

// Load Edit Form
router.get('/edit/:id', ensureAthenticated, function(req, res){
    Article.findById(req.params.id, function(err, article){
        res.render('edit_article', {
            title:'Edit Article',
            article:article
        });
    });
});

// Add Submit POST Route
router.post('/add', function(req, res){
    req.checkBody('title', 'Title is required').notEmpty();
    // req.checkBody('author', 'Author is required').notEmpty();
    req.checkBody('body', 'Body is required').notEmpty();

    // Get errors
    let errors = req.validationErrors();

    if(errors){
        res.render('add_article', {
            title:'Add Article',
            errors:errors
        });
    } else {
        let article = new Article();
        article.title = req.body.title;
        article.author = req.user._id;
        article.body = req.body.body;

        article.save(function(err){
          if(err){
            console.log(err);
            return;
          } else {
            req.flash('success', 'Article Added');
            res.redirect('/');
          }
        });
    }
});

// Update Submit POST Route
router.post('/edit/:id', function(req, res){
    let article = {};
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;

    let query = {_id:req.params.id};

    Article.update(query, article, function(err){
        if(err){
            console.log(err);
            return;
        } else {
            req.flash('success', 'Article Updated');
            res.redirect('/');
        }
    });
});

// Delete Route
router.delete('/:id', function(req, res){
    let query = {_id:req.params.id};

    Article.remove(query, function(err){
        if(err){
            console.log(err);
        } else {
            req.flash('danger', 'Article Deleted');
            res.send('Success');
        }
    });
});

// Get Single Article
router.get('/:id', function(req, res){
    Article.findById(req.params.id, function(err, article){
        User.findById(article.author, function(err, user){
          res.render('article', {
            article:article,
            author: user.name
          });
        });
    });
});

// Access Control
function ensureAthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        req.flash('danger', 'Please login');
        res.redirect('/users/login');
    }
}

module.exports = router;
