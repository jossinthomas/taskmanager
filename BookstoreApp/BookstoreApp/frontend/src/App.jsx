import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// General Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';

// Admin Pages
import Dashboard from './pages/Admin/Dashboard';
import AddBook from './pages/Admin/AddBook';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-5"> {/* Offset for fixed navbar */}
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />

          {/* Admin Panel */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/add-book" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
