import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const booksData = [
  {
    id: '1',
    title: 'Great Big Beautiful Life',
    author: 'Emily Henry',
    price: 34.99,
    image: '/open-book-library.png',
    description:
      'A heartwarming novel about finding joy in unexpected places. Follow the journey of protagonist Sarah as she navigates life’s challenges and discovers that beauty can be found in the most unexpected moments.',
    category: 'Fiction',
    pages: 384,
    publisher: 'Berkley',
    publicationDate: 'April 23, 2024',
    isbn: '978-0593441275',
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
  const book = booksData.find((b) => b.id === id);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} of "${book.title}" to cart!`);
    navigate('/cart');
  };

  if (!book) {
    return (
      <div className="container mt-5">
        <h2 className="text-danger">Book not found.</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {/* Book Image */}
        <div className="col-md-6">
          <div className="bg-light p-4 rounded d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
            <img src={book.image} alt={book.title} className="img-fluid" style={{ maxHeight: '400px' }} />
          </div>
        </div>

        {/* Book Details */}
        <div className="col-md-6">
          <h1 className="h3 mb-2">{book.title}</h1>
          <p className="lead text-muted mb-3">by {book.author}</p>
          <p className="h4 fw-bold mb-4">${book.price.toFixed(2)}</p>
          <p>{book.description}</p>

          <h5 className="mt-4 mb-2">Specifications</h5>
          <ul className="list-unstyled">
            <li><strong>Category:</strong> {book.category}</li>
            <li><strong>Pages:</strong> {book.pages}</li>
            <li><strong>Publisher:</strong> {book.publisher}</li>
            <li><strong>Publication Date:</strong> {book.publicationDate}</li>
            <li><strong>ISBN:</strong> {book.isbn}</li>
          </ul>

          {/* Quantity Selector */}
          <div className="mb-4 d-flex align-items-center">
            <label className="form-label me-2">Quantity:</label>
            <div className="input-group" style={{ width: '120px' }}>
              <button className="btn btn-outline-secondary" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
              <span className="form-control text-center">{quantity}</span>
              <button className="btn btn-outline-secondary" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Buttons */}
          <div className="d-grid gap-2 mb-3">
            <button className="btn btn-dark" onClick={handleAddToCart}>Add to Cart</button>
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-primary" onClick={() => navigate('/cart')}>Go to Cart</button>
              <button className="btn btn-outline-secondary" onClick={() => navigate('/books')}>Browse More Books</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
