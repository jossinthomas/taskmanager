const express = require('express');
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  undoDeleteBook,
} = require('../controllers/bookController');

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.post('/:id/undo', undoDeleteBook);

module.exports = router;
