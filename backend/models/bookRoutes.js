const express = require('express');
const router = express.Router();

// ✅ Correct import path
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  undoDeleteBook,
} = require('../controllers/bookController'); // Make sure this file exists and exports the functions properly

// ✅ Correct usage of functions — no () after function names
router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.post('/:id/undo', undoDeleteBook);

module.exports = router;
