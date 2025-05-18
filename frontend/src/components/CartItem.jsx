import React from 'react';

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="card mb-3 border-0 shadow-sm">
      <div className="row g-0 p-3">
        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <img
            src={item.image || '/placeholder.jpg'}
            className="img-fluid rounded"
            alt={item.title}
            style={{ maxHeight: '120px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-10">
          <div className="card-body py-2">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h5 className="card-title h6 mb-1 fw-bold">{item.title}</h5>
                <p className="card-text text-muted small mb-1">by {item.author}</p>
                <p className="card-text text-primary fw-semibold mb-0">${item.price.toFixed(2)}</p>
              </div>
              <button
                type="button"
                className="btn btn-link text-danger p-0"
                onClick={() => onRemove(item.id)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="quantity-selector d-flex align-items-center">
                <span className="text-muted me-2">Quantity:</span>
                <div className="btn-group shadow-sm" role="group">
                  <button
                    type="button"
                    className="btn btn-white px-3"
                    onClick={() => onDecrease(item.id)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="btn btn-white px-3 disabled">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    className="btn btn-white px-3"
                    onClick={() => onIncrease(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="item-total">
                <p className="card-text fw-bold mb-0">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
