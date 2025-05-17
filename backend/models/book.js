const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  category: String,
  description: String,
  isbn: String,
  pages: Number,
  publisher: String,
  publicationDate: String,
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
