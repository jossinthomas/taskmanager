
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  category: String,
  image: String,
  description: String,
  isbn: String,
  pages: Number,
  publisher: String,
  publicationDate: Date
});

module.exports = mongoose.model('Book', bookSchema);
