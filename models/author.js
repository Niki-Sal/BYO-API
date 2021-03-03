const mongoose = require('mongoose')



const bookSchema = new mongoose.Schema({
    title: String,
    language: String,
    year: Number
});


const authorSchema = new mongoose.Schema({
    name: String,
    country: String,
    books:[bookSchema]
});

const Author = mongoose.model('Author', authorSchema);


module.exports = Author

