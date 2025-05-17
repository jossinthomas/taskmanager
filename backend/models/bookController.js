const Book = require('../models/book');

// @desc    Add a new book
// @route   POST /api/books
const addBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const saved = await newBook.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Get all books
// @route   GET /api/books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get book by ID
// @route   GET /api/books/:id
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Delete book
// @route   DELETE /api/books/:id
const deleteBook = async (req, res) => {
  try {
    const removed = await Book.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Update book
// @route   PUT /api/books/:id
const updateBook = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Book not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  deleteBook,
  updateBook
};
