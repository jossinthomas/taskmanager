const express = require('express');
const router = express.Router();
const {
  addBook,
  getAllBooks,
  getBookById,
  deleteBook,
  updateBook
} = require('../controllers/bookController');

// Public Routes
router.get('/', getAllBooks);
router.get('/:id', getBookById);

// Admin Routes
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
