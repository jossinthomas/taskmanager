import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);

  const categories = ['All', 'Fiction', 'Self-help', 'Romance', 'Thriller'];

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

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', marginTop: '4rem' }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
        }}>
          Browse Books
        </h1>

        {/* Categories */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}
              style={{
                padding: '0.5rem 1.2rem',
                background: selectedCategory === category ? '#222' : '#f5f5f5',
                color: selectedCategory === category ? '#fff' : '#222',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: selectedCategory === category ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar Centered */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#f5f5f5',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            minWidth: '320px',
            maxWidth: '400px',
            width: '100%',
          }}>
            <input
              type="text"
              placeholder="Search by title....."
              value={searchTerm}
              onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '1rem',
                width: '100%',
              }}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: '1.2rem',
                  color: '#888',
                  cursor: 'pointer',
                  marginLeft: '0.5rem',
                }}
              >×</button>
            )}
          </div>
        </div>

        {/* Books Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          {paginatedBooks.map((book, index) => (
            <Link
              key={book._id || index}
              to={`/books/${book._id}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                  padding: '1rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minHeight: '340px',
                  justifyContent: 'flex-start',
                }}
              >
                <img
                  src={book.image || '/placeholder-book.jpg'}
                  alt={book.title}
                  style={{
                    width: '120px',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    marginBottom: '1rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                />
                <div style={{ fontWeight: '500', fontSize: '1.05rem', marginBottom: '0.5rem' }}>{book.title}</div>
                <div style={{ color: '#222', fontWeight: 'bold', fontSize: '1.1rem' }}>${book.price.toFixed(2)}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              background: 'none',
              border: 'none',
              color: currentPage === 1 ? '#ccc' : '#222',
              fontSize: '1.1rem',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              padding: '0.5rem 1rem',
            }}
          >
            &lt; Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).slice(
            Math.max(0, currentPage - 2),
            Math.min(totalPages, currentPage + 1)
          ).map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              style={{
                background: page === currentPage ? '#222' : '#f5f5f5',
                color: page === currentPage ? '#fff' : '#222',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '1rem',
                padding: '0.5rem 1rem',
                margin: '0 0.1rem',
                cursor: 'pointer',
              }}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              background: 'none',
              border: 'none',
              color: currentPage === totalPages ? '#ccc' : '#222',
              fontSize: '1.1rem',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              padding: '0.5rem 1rem',
            }}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
