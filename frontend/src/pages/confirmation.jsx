import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-5 text-center">
              {/* Success Icon */}
              <div className="mb-4">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10" style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-check-lg text-success" style={{ fontSize: '40px' }}></i>
                </div>
              </div>

              {/* Confirmation Message */}
              <h1 className="h3 fw-bold mb-2">Order Confirmed!</h1>
              <p className="text-muted mb-4">Thank you for your purchase.</p>

              {/* Order Number */}
              <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
                <span className="text-muted">Order Number:</span>
                <span className="fw-medium">ORD-648312</span>
              </div>

              {/* What's Next Section */}
              <div className="bg-light rounded p-4 mb-4">
                <h2 className="h5 fw-bold mb-3">What's Next?</h2>
                <p className="text-muted mb-2">You'll receive an email confirmation soon.</p>
                <p className="text-muted mb-0">
                  Estimated delivery: <span className="fw-medium">25 May 2025</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="d-grid gap-2">
                <button 
                  className="btn btn-dark py-2"
                  onClick={() => navigate('/books')}
                >
                  Continue Shopping
                </button>
                <button 
                  className="btn btn-outline-dark py-2"
                  onClick={() => navigate('/orders')}
                >
                  View Order History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
