const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoose = require('mongoose');

const app = express();

var url = 'mongodb://localhost:27017/jade';

mongoose.connect(process.env.MONGODB_URI || url);
let db = mongoose.connection;

db.once('open', function(){
    console.log('Connected');
});

db.on('error', function(err){
    console.log(err);
});

// MongoClient.connect(process.env.MONGODB_URI || url, function(err, db){
//     if(err){
//         console.log('Unable to connect to the mongoDB server. Error:', err);
//     } else {
//         console.log('Connection established to the DB.');
//         db.close();
//     }
// });

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('You are listening to the smooth sounds of port 3000...');
});
