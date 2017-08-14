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
    let articles = [
        {
            id:1,
            title:'Article One',
            author:'PJC1',
            body:'This is article one'
        },
        {
            id:2,
            title:'Article Two',
            author:'McDowell',
            body:'This is article two'
        },
        {
            id:3,
            title:'Article Three',
            author:'Duckett',
            body:'This is article three'
        }
    ];
    res.render('index', {
        title:'Articles',
        articles: articles
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
