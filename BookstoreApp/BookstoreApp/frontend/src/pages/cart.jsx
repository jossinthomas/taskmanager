import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

const initialCart = [
  {
    id: '1',
    title: 'Great Big Beautiful Life',
    author: 'Emily Henry',
    price: 34.99,
    quantity: 2,
    image: '/abstract-book-cover.png',
  },
  {
    id: '5',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 19.99,
    quantity: 1,
    image: '/atomichabits.jpg',
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);
  const navigate = useNavigate();

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-5 bg-light rounded">
          <p className="lead mb-3">Your cart is empty</p>
          <button className="btn btn-dark" onClick={() => navigate('/books')}>
            Browse Books
          </button>
        </div>
      ) : (
        <div className="row">
          {/* Cart Items Column */}
          <div className="col-md-8">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
              />
            ))}
            <button
              className="btn btn-outline-secondary mt-3"
              onClick={() => navigate('/books')}
            >
              Continue Shopping
            </button>
          </div>

          {/* Order Summary Column */}
          <div className="col-md-4">
            <div className="card bg-light p-4">
              <h2 className="h5 mb-3">Order Summary</h2>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold mb-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                className="btn btn-dark w-100"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </button>
              <p className="text-muted text-center mt-3 small">
                Free shipping on orders over $50
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
