import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', 'Fiction', 'Self-help', 'Romance', 'Thriller'];

  useEffect(() => {
    // Fetch books from backend
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

  // Filter books based on category and search term
  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navigation Bar */}
      <nav style={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ 
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginRight: '0.5rem',
            padding: '0.25rem 0.5rem',
            backgroundColor: '#000',
            color: '#fff'
          }}>BOOK</span>
          <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>STORE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Home</Link>
            <Link to="/books" style={{ textDecoration: 'none', color: '#000' }}>Books</Link>
            <Link to="/cart" style={{ textDecoration: 'none', color: '#000' }}>Cart</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/cart">
              <img 
                src="/cart-icon.png" 
                alt="Cart" 
                style={{ width: '24px', height: '24px' }}
              />
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img 
                src="/user-avatar.png" 
                alt="User" 
                style={{ 
                  width: '32px', 
                  height: '32px',
                  borderRadius: '50%'
                }}
              />
              <span>welcome back, Lisa</span>
            </div>
            <button 
              onClick={() => navigate('/login')}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#333',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              LogOut
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ padding: '2rem' }}>
        <h1 style={{ 
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '2rem'
        }}>
          Browse Books
        </h1>

        {/* Categories and Search */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: selectedCategory === category ? '#333' : '#f0f0f0',
                color: selectedCategory === category ? 'white' : '#333',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {category}
            </button>
          ))}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            padding: '0.5rem'
          }}>
            <input
              type="text"
              placeholder="Search by title....."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                padding: '0.25rem',
                outline: 'none',
                width: '200px'
              }}
            />
            <button
              onClick={() => setSearchTerm('')}
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                padding: '0 0.5rem'
              }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Books Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {filteredBooks.map((book, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <img
                src={book.image || '/placeholder-book.jpg'}
                alt={book.title}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{book.title}</h3>
              <p style={{ color: '#666', marginBottom: '0.5rem' }}>${book.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #ddd',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            Previous
          </button>
          {[1, 2, 3, '...', 67, 68].map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && setCurrentPage(page)}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #ddd',
                backgroundColor: currentPage === page ? '#333' : 'white',
                color: currentPage === page ? 'white' : '#333',
                cursor: typeof page === 'number' ? 'pointer' : 'default'
              }}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(prev => prev + 1)}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #ddd',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
