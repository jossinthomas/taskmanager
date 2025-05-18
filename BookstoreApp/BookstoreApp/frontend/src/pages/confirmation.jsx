import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation() {
  const [orderNumber, setOrderNumber] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Random Order Number
    const orderId = `ORD-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
    setOrderNumber(orderId);

    // Delivery Date: +7 days
    const date = new Date();
    date.setDate(date.getDate() + 7);
    const formatted = date.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
    setDeliveryDate(formatted);
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="bg-white p-5 rounded shadow text-center" style={{ maxWidth: '450px' }}>
        <div className="mb-4">
          <div className="bg-success-subtle p-3 rounded-circle d-inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="green" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>
        </div>

        <h2 className="mb-2">Order Confirmed!</h2>
        <p className="text-muted">Thank you for your purchase.</p>
        <p className="text-muted mb-4">Order Number: <strong>{orderNumber}</strong></p>

        <div className="bg-light rounded p-3 mb-4">
          <h5 className="mb-2">What's Next?</h5>
          <p className="mb-1">You’ll receive an email confirmation soon.</p>
          <p className="mb-0">Estimated delivery: <strong>{deliveryDate}</strong></p>
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-dark" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
          <button className="btn btn-outline-secondary" onClick={() => navigate('/account/orders')}>
            View Order History
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
