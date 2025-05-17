import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Handle query param ?search=
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [location.search]);

  // Filter by category and search
  const filteredBooks = booksData.filter((book) => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Browse Books</h1>

      {/* Category Filters */}
      <div className="mb-3">
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

      {/* Search Bar */}
      <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search by title..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      {/* Books Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredBooks.map((book) => (
          <div className="col" key={book.id}>
            <div className="card h-100">
              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="text-muted">{book.author}</p>
                <p className="fw-bold">${book.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary w-100 mb-2"
                  onClick={() => navigate(`/books/${book.id}`)}
                >
                  View Details
                </button>
                <button
                  className="btn btn-outline-primary w-100 mt-auto"
                  onClick={() => alert(`${book.title} added to cart!`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredBooks.length === 0 && (
          <p className="text-muted mt-4">No books match your search.</p>
        )}
      </div>
    </div>
  );
}

export default Books;
