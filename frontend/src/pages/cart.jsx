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
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="display-6 fw-bold mb-4">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-5 bg-light rounded shadow-sm">
              <p className="lead mb-3">Your cart is empty</p>
              <button 
                className="btn btn-dark px-4 py-2"
                onClick={() => navigate('/books')}
              >
                Browse Books
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {/* Cart Items Column */}
              <div className="col-lg-8">
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onIncrease={handleIncrease}
                      onDecrease={handleDecrease}
                      onRemove={handleRemove}
                    />
                  ))}
                </div>
                
                <button
                  className="btn btn-outline-dark mt-4"
                  onClick={() => navigate('/books')}
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Continue Shopping
                </button>
              </div>

              {/* Order Summary Column */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h2 className="h5 fw-bold mb-4">Order Summary</h2>
                    
                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">Subtotal</span>
                      <span className="fw-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">Shipping</span>
                      <span className="fw-medium">
                        {shipping === 0 ? (
                          <span className="text-success">Free</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    
                    <div className="d-flex justify-content-between mb-4">
                      <span className="text-muted">Estimated Tax</span>
                      <span className="fw-medium">${tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="border-top pt-3 mb-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="h5 fw-bold mb-0">Total</span>
                        <span className="h5 fw-bold mb-0">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      className="btn btn-dark w-100 py-3 mb-3"
                      onClick={() => navigate('/checkout')}
                    >
                      Proceed to Checkout
                    </button>

                    {subtotal < 50 && (
                      <div className="alert alert-info text-center mb-0 py-2">
                        <small>
                          Add ${(50 - subtotal).toFixed(2)} more to get free shipping!
                        </small>
                      </div>
                    )}
                    
                    {subtotal >= 50 && (
                      <div className="alert alert-success text-center mb-0 py-2">
                        <small>
                          <i className="bi bi-check-circle me-1"></i>
                          You've qualified for free shipping!
                        </small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
