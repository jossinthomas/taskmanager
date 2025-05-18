import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top px-4">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold h4 mb-0" to="/">
          <span className="bg-black text-white px-2 py-1">BOOK</span>
          <span className="border border-dark px-2 py-1 ms-1">STORE</span>
        </Link>

        {/* Links */}
        <div className="d-flex align-items-center ms-auto">
          <Link
            to="/"
            className={`btn btn-link text-dark text-decoration-none ${
              location.pathname === '/' ? 'fw-bold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/books"
            className={`btn btn-link text-dark text-decoration-none ${
              location.pathname.startsWith('/books') ? 'fw-bold' : ''
            }`}
          >
            Books
          </Link>
          <Link
            to="/cart"
            className={`btn btn-link text-dark text-decoration-none ${
              location.pathname === '/cart' ? 'fw-bold' : ''
            }`}
          >
            Cart
          </Link>
          <Link
            to="/login"
            className={`btn btn-link text-dark text-decoration-none ${
              location.pathname === '/login' ? 'fw-bold' : ''
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
