import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ id, title, author, price, image, onAddToCart }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={image || '/placeholder.jpg'}
          alt={title}
          className="card-img-top"
          style={{ objectFit: 'cover', height: '200px' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="text-muted">{author}</p>
          <p className="fw-bold">${price.toFixed(2)}</p>

          <div className="mt-auto">
            <Link to={`/books/${id}`} className="btn btn-primary w-100 mb-2">
              View Details
            </Link>
            <button
              className="btn btn-outline-primary w-100"
              onClick={() => onAddToCart && onAddToCart(id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
