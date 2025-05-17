// const express = require('express');
// const router = express.Router();

// const sampleBooks = [
//   {
//     id: '1',
//     title: 'Great Big Beautiful Life',
//     author: 'Emily Henry',
//     price: 34.99,
//     category: 'Fiction',
//   },
//   {
//     id: '2',
//     title: 'Atomic Habits',
//     author: 'James Clear',
//     price: 19.99,
//     category: 'Self-Help',
//   }
// ];

// router.get('/', (req, res) => {
//   res.json(sampleBooks);
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const { addBook, getBooks, deleteBook } = require('../controllers/bookController');

router.post('/', addBook);           // Add new book
router.get('/', getBooks);           // Get all books
router.delete('/:id', deleteBook);   // Delete book by ID

module.exports = router;
