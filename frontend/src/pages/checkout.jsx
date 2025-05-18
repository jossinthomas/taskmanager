import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [billingAddress, setBillingAddress] = useState({
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  // Sample cart items
  const cartItems = [
    {
      id: 1,
      title: 'Great Big Beautiful Life',
      quantity: 1,
      price: 34.99
    },
    {
      id: 2,
      title: 'The let them theory',
      quantity: 2,
      price: 28.98
    },
    {
      id: 3,
      title: 'King of Envy',
      quantity: 1,
      price: 16.99
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/confirmation');
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Failed to process checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate order summary
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 4.99;
  const TAX_RATE = 0.08;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shipping + tax;

  return (
    <div className="container py-5" style={{ maxWidth: '1200px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '40px' }}>Check Out</h1>
      
      <div className="row g-5">
        {/* Billing Address Form */}
        <div className="col-lg-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '20px' }}>Billing Address</h2>
              
              <div className="mb-3">
                <label className="form-label" style={{ fontSize: '14px' }}>Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="streetAddress"
                  value={billingAddress.streetAddress}
                  onChange={handleInputChange}
                  style={{ height: '45px', fontSize: '14px' }}
                  required
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '14px' }}>City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={billingAddress.city}
                    onChange={handleInputChange}
                    style={{ height: '45px', fontSize: '14px' }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '14px' }}>State</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={billingAddress.state}
                    onChange={handleInputChange}
                    style={{ height: '45px', fontSize: '14px' }}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '14px' }}>Zip code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="zipCode"
                    value={billingAddress.zipCode}
                    onChange={handleInputChange}
                    style={{ height: '45px', fontSize: '14px' }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '14px' }}>Country</label>
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    value={billingAddress.country}
                    onChange={handleInputChange}
                    style={{ height: '45px', fontSize: '14px' }}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="mb-4">
              <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '20px' }}>Payment Information</h2>
              
              <div className="mb-3">
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                    style={{ marginTop: '4px' }}
                  />
                  <label className="form-check-label" htmlFor="paypal" style={{ fontSize: '14px' }}>
                    Paypal
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="gpay"
                    checked={paymentMethod === 'gpay'}
                    onChange={() => setPaymentMethod('gpay')}
                    style={{ marginTop: '4px' }}
                  />
                  <label className="form-check-label" htmlFor="gpay" style={{ fontSize: '14px' }}>
                    Gpay
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    style={{ marginTop: '4px' }}
                  />
                  <label className="form-check-label" htmlFor="card" style={{ fontSize: '14px' }}>
                    Card
                  </label>
                </div>
              </div>

              <p className="text-muted" style={{ fontSize: '12px', marginBottom: '20px' }}>
                Your Payment info is secure
              </p>

              <button 
                type="submit" 
                className="btn btn-dark w-100"
                disabled={isLoading}
                style={{ 
                  height: '45px', 
                  fontSize: '14px',
                  borderRadius: '4px'
                }}
              >
                {isLoading ? 'Processing...' : 'Confirm Payment'}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card border-0 rounded-3 shadow-sm">
            <div className="card-body p-4">
              <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '20px' }}>Order Summary</h2>

              {cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between mb-2" style={{ fontSize: '14px' }}>
                  <span>{item.quantity} × {item.title}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <hr className="my-4" />

              <div className="d-flex justify-content-between mb-2" style={{ fontSize: '14px' }}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between mb-2" style={{ fontSize: '14px' }}>
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>

              <div className="d-flex justify-content-between mb-2" style={{ fontSize: '14px' }}>
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <hr className="my-4" />

              <div className="d-flex justify-content-between" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
