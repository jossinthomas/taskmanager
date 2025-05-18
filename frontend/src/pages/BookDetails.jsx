import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const booksData = [
  {
    id: '1',
    title: 'Great Big Beautiful Life',
    author: 'Emily Henry',
    price: 34.99,
    image: '/great-big-beautiful-life.jpg',
    description:
      'A dazzling and sweeping new novel from #1 Sunday Times bestselling author Emily Henry!When Margaret Ives, the famously reclusive heiress, invites eternal optimist Alice Scott to the balmy Little Crescent Island, Alice knows this is it-',
    category: 'Romance',
    releaseDate: '23 Apr 2025',
    format: 'Paperback',
    tag: 'Romance'
  },
  {
    id: '2',
    title: 'The Let Them Theory',
    author: 'Mel Robbins',
    price: 28.98,
    image: '/self-help-book.png',
    description:
      'A groundbreaking approach to personal development and growth. Practical strategies for overcoming self-doubt and building confidence.',
    category: 'Self-Help',
    pages: 272,
    publisher: 'Hay House Inc.',
    publicationDate: 'May 2, 2023',
    isbn: '978-1401971090',
  },
  // Add more books as needed...
];

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = booksData.find((b) => b.id === id) || booksData[0]; // Default to first book if not found
  const [quantity, setQuantity] = useState(1);

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
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span style={{ 
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginRight: '0.5rem',
              padding: '0.25rem 0.5rem',
              backgroundColor: '#000',
              color: '#fff'
            }}>BOOK</span>
            <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>STORE</span>
          </Link>
        </div>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f3f4f6',
            borderRadius: '9999px',
            padding: '0.5rem 1rem',
            width: '300px'
          }}>
            <span style={{ marginRight: '0.5rem' }}>☰</span>
            <input
              type="text"
              placeholder="Search by keywords"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                outline: 'none',
                width: '100%'
              }}
            />
            <button style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer'
            }}>
              🔍
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit', position: 'relative' }}>
              <span style={{ 
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '0.75rem'
              }}>0</span>
              🛒
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

      {/* Book Details Content */}
      <div style={{ 
        padding: '2rem',
        display: 'flex',
        gap: '2rem'
      }}>
        {/* Left Side - Book Image */}
        <div style={{ flex: '0 0 40%' }}>
          <div style={{ position: 'relative' }}>
            <button
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: '#333',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              ★
            </button>
            <img
              src={book.image}
              alt={book.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px'
              }}
            />
          </div>
        </div>

        {/* Right Side - Book Details */}
        <div style={{ flex: '1' }}>
          <h1 style={{ 
            fontSize: '2rem',
            marginBottom: '1rem'
          }}>{book.title}</h1>

          <div style={{ 
            display: 'inline-block',
            backgroundColor: '#e5e7eb',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            marginBottom: '1rem'
          }}>
            {book.tag}
          </div>

          <div style={{ 
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            ${book.price.toFixed(2)}
          </div>

          <ul style={{ 
            listStyle: 'none',
            padding: 0,
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>• {book.author}</li>
            <li style={{ marginBottom: '0.5rem' }}>• {book.releaseDate}</li>
            <li style={{ marginBottom: '0.5rem' }}>• {book.format}</li>
          </ul>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Quantity</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                marginBottom: '1rem'
              }}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <button
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#333',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Add to car
            </button>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              borderRadius: '4px',
              border: '1px solid #ddd',
              marginBottom: '1rem'
            }}>
              <span>Overview</span>
              <span>▼</span>
            </div>
            <p style={{ 
              color: '#666',
              lineHeight: '1.6'
            }}>
              {book.description}
              <button
                style={{
                  border: 'none',
                  background: 'none',
                  color: '#666',
                  padding: 0,
                  cursor: 'pointer'
                }}
              >
                ... Read more
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
