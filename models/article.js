const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Article Schema
let articleSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
});

// the model Article is for the articles collection in the database
let Article = module.exports = mongoose.model('Article', articleSchema);
