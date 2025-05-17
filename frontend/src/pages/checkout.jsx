import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();

  const [billing, setBilling] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const [paymentOption, setPaymentOption] = useState('paypal');

  const cartItems = [
    { id: '1', title: 'Great Big Beautiful Life', price: 34.99, quantity: 1 },
    { id: '2', title: 'The Let Them Theory', price: 28.98, quantity: 2 },
    { id: '3', title: 'King of Envy', price: 16.99, quantity: 1 },
  ];

  const handleBillingChange = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Confirmed!');
    navigate('/confirmation');
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Checkout</h1>
      <div className="row g-4">
        {/* Billing Form */}
        <div className="col-lg-8">
          <form onSubmit={handleSubmit}>
            {/* Billing Address */}
            <div className="card p-4 mb-4">
              <h2 className="h5 mb-4">Billing Address</h2>
              <div className="mb-3">
                <label className="form-label">Street Address</label>
                <input type="text" name="address" value={billing.address} onChange={handleBillingChange} className="form-control" required />
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input type="text" name="city" value={billing.city} onChange={handleBillingChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">State</label>
                  <input type="text" name="state" value={billing.state} onChange={handleBillingChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">ZIP Code</label>
                  <input type="text" name="zipCode" value={billing.zipCode} onChange={handleBillingChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Country</label>
                  <input type="text" name="country" value={billing.country} onChange={handleBillingChange} className="form-control" required />
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="card p-4 mb-4">
              <h2 className="h5 mb-3">Payment Information</h2>
              <div className="form-check">
                <input className="form-check-input" type="radio" id="paypal" value="paypal" checked={paymentOption === 'paypal'} onChange={() => setPaymentOption('paypal')} />
                <label className="form-check-label" htmlFor="paypal">Paypal</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" id="gpay" value="gpay" checked={paymentOption === 'gpay'} onChange={() => setPaymentOption('gpay')} />
                <label className="form-check-label" htmlFor="gpay">GPay</label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="radio" id="card" value="card" checked={paymentOption === 'card'} onChange={() => setPaymentOption('card')} />
                <label className="form-check-label" htmlFor="card">Card</label>
              </div>
              <div className="text-muted small">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-shield-check me-2" viewBox="0 0 16 16">
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.552 4.125 1.779 7.464 2.839 8.481.566.523 1.145 1.025 1.749 1.526v2.745c0 .22.139.42.357.471a.48.48 0 0 0 .345-.01c1.484-.608 2.8-.92 3.958-1.115l.425-.072a.9.9 0 0 0 .9-.939v-2.745c.603-.501 1.182-1.003 1.749-1.526 1.06-1.017 3.391-4.356 2.839-8.481a.481.481 0 0 0-.328-.39c-.651-.213-1.307-.366-1.981-.498a61.46 61.46 0 0 0-2.837-.856a1.1 1.1 0 0 0-1.086.063Zm1.735 10.632a.5.5 0 0 1-.707 0l-3.5-3.5a.5.5 0 1 1 .707-.707L7 9.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6Z" />
                </svg>
                Your payment info is secure.
              </div>
              <button type="submit" className="btn btn-dark mt-4 w-100">Confirm Payment</button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card p-4 bg-light sticky-top">
            <h2 className="h5 mb-4">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="d-flex justify-content-between small mb-2">
                <span>{item.quantity} × {item.title}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
