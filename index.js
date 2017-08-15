const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

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

// Add Route
app.get('/articles/add', function(req, res){
    res.render('add_article', {
        title: 'Add Article'
    });
});


// Start Server
app.listen(process.env.PORT || 3000, function(){
    console.log('You are listening to the smooth sounds of port 3000...');
});
