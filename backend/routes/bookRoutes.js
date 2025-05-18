const express = require('express');
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  undoDeleteBook,
} = require('../controllers/bookController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', getAllBooks);
router.get('/:id', getBookById);

// Protected admin routes
router.post('/', protect, admin, addBook);
router.put('/:id', protect, admin, updateBook);
router.delete('/:id', protect, admin, deleteBook);
router.post('/:id/undo', protect, admin, undoDeleteBook);

module.exports = router;
