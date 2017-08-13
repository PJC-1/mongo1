const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000, function(){
    console.log('You are listening to the smooth sounds of port 3000...');
});
