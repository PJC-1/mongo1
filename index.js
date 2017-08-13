const express = require('express');
const mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/jade';

mongoose.connect(process.env.MONGODB_URI || url);
let db = mongoose.connection;

db.once('open', function(){
    console.log('Connected');
});

db.on('error', function(err){
    console.log(err);
});

const app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('You are listening to the smooth sounds of port 3000...');
});
