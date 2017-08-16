const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

var url = 'mongodb://localhost:27017/jade';

mongoose.connect(process.env.MONGODB_URI || url);
// mongoose.connect(url);

let db = mongoose.connection;

// Check connection
db.once('open', function(){
    console.log('Connected');
});

// Check for DB errors
db.on('error', function(err){
    console.log(err);
});

// Init App
const app = express();

// Bring in Models
let Article = require('./models/article');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Set Public Directory
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', function(req, res){
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

// Get Single Article
app.get('/article/:id', function(req, res){
    Article.findById(req.params.id, function(err, article){
        res.render('article', {
            article:article
        });
    });
});

// Add Route
app.get('/articles/add', function(req, res){
    res.render('add_article', {
        title: 'Add Article'
    });
});

// Load Edit Form
app.get('/article/edit/:id', function(req, res){
    Article.findById(req.params.id, function(err, article){
        res.render('edit_article', {
            title:'Edit Article',
            article:article
        });
    });
});

// Add Submit POST Route
app.post('/articles/add', function(req, res){
    let article = new Article();
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;

    article.save(function(err){
        if(err){
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    });

});

// Update Submit POST Route
app.post('/articles/edit/:id', function(req, res){
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
            res.redirect('/');
        }
    });
});

// Delete Route
app.delete('/article/:id', function(req, res){
    let query = {_id:req.params.id};

    Article.remove(query, function(err){
        if(err){
            console.log(err);
        } else {
            res.send('Success');
        }
    });
});

// Start Server
app.listen(process.env.PORT || 3000, function(){
    console.log('You are listening to the smooth sounds of port 3000...');
});
