const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

var url = 'mongodb://localhost:27017/jade';

mongoose.connect(process.env.MONGODB_URI || url);
let db = mongoose.connection;

db.once('open', function(){
    console.log('Connected');
});

db.on('error', function(err){
    console.log(err);
});

// Init App
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
    res.render('index', {
        title:'Articles'
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
