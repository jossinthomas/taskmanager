import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';

const booksData = [
  {
    id: '1',
    title: 'Great Big Beautiful Life',
    author: 'Emily Henry',
    price: 34.99,
    image: '/abstract-book-cover.png',
    description: 'A heartwarming novel about finding joy in unexpected places.',
    category: 'Fiction',
  },
  {
    id: '2',
    title: 'The Let Them Theory',
    author: 'Mel Robbins',
    price: 28.98,
    image: '/self-help-book.png',
    description: 'A groundbreaking approach to personal development and growth.',
    category: 'Self-Help',
  },
  {
    id: '3',
    title: 'King of Envy',
    author: 'Ana Huang',
    price: 16.99,
    image: '/placeholder.jpg',
    description: 'A passionate romance that will keep you turning pages.',
    category: 'Romance',
  },
  {
    id: '4',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 24.99,
    image: '/silentpatient.jpg',
    description: 'A psychological thriller that will keep you guessing.',
    category: 'Thriller',
  },
  {
    id: '5',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 19.99,
    image: '/atomichabits.jpg',
    description: 'Tiny changes, remarkable results. A proven framework for growth.',
    category: 'Self-Help',
  },
  {
    id: '6',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 22.99,
    image: '/fantasy-book.png',
    description: 'Between life and death there is a library. Choose a different life.',
    category: 'Fiction',
  },
];

const categories = ['All', 'Fiction', 'Self-Help', 'Romance', 'Thriller'];

function Books() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredBooks =
    selectedCategory === 'All'
      ? booksData
      : booksData.filter((book) => book.category === selectedCategory);

  const handleAddToCart = (id) => {
    const book = booksData.find((b) => b.id === id);
    if (book) {
      alert(`${book.title} added to cart!`);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Browse Books</h1>

      {/* Category Filters */}
      <div className="mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn me-2 ${selectedCategory === category ? 'btn-dark' : 'btn-outline-secondary'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            image={book.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Books;
