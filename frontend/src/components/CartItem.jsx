import React from 'react';

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-2 d-flex align-items-center justify-content-center bg-light rounded-start">
          <img
            src={item.image || '/placeholder.jpg'}
            className="img-fluid rounded-start"
            alt={item.title}
            style={{ maxHeight: '100px' }}
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="card-title mb-0">{item.title}</h5>
                <p className="card-text text-muted">{item.author}</p>
              </div>
              <p className="card-text">${item.price.toFixed(2)}</p>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              {/* Quantity buttons */}
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => onDecrease(item.id)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="btn btn-outline-secondary btn-sm disabled">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => onIncrease(item.id)}
                >
                  +
                </button>
              </div>

              {/* Total price + remove */}
              <div className="d-flex align-items-center">
                <p className="card-text me-3 mb-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onRemove(item.id)}
                >
                  <i className="bi bi-trash"></i> Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
