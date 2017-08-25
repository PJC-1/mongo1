const mongoose = require('mongoose');
const config = require('../config/database.js');

var url = config.database;

mongoose.connect(url);

let db = mongoose.connection;

db.once('open', function(){
    console.log('connection to db established...');
});

db.on('error', function(err){
    console.log(err);
});
