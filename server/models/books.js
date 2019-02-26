
// Name: Sanket Vagadiya,
// Author's name: Sanketkumar Vagadiya,
// StudentID: 300991500, 
// Web App name: My-favourite-books


let mongoose = require('mongoose');

// create a model class
let bookSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', bookSchema);
