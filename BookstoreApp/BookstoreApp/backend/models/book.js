const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  price: { type: Number, required: true },
  description: String,
  category: String,
  image: String,
  isbn: String,
  pages: Number,
  publisher: String,
  publicationDate: Date
}, {
  timestamps: true
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
