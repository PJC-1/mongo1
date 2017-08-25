const mongoose = require('mongoose');
const config = require('../config/database.js');
let url = config.database;

// ES6 promise
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before(function(done){
    mongoose.connect(url);

    let db = mongoose.connection;

    db.once('open', function(){
      console.log('connection to db established...');
      done();
    });
    db.on('error', function(err){
      console.log(err);
    });
});
