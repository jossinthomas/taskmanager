import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  
  // Sample data - in a real app, this would come from an API
  const [books] = useState([
    {
      id: 1,
      title: 'The Mademo/selle Alliance',
      author: 'Natasha Lester',
      price: 34.99
    },
    {
      id: 2,
      title: 'Great Big Beautiful Life',
      author: 'Emily Henry',
      price: 34.99
    },
    {
      id: 3,
      title: 'Silverthorn: The Mystery of Margan Crow',
      author: 'Suzanne Collins',
      price: 34.99
    }
  ]);

  const [users] = useState([
    {
      id: 1,
      name: 'Alice Johnsson',
      email: 'alice@gmail.com',
      role: 'Admin'
    },
    {
      id: 2,
      name: 'JR Smith',
      email: 'JR@gmail.com',
      role: 'Staff'
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie@gmail.com',
      role: 'Staff'
    }
  ]);

  const handleEditBook = (bookId) => {
    // Implement edit functionality
    console.log('Edit book:', bookId);
  };

  const handleDeleteBook = (bookId) => {
    // Implement delete functionality
    console.log('Delete book:', bookId);
  };

  const handleDeleteUser = (userId) => {
    // Implement delete functionality
    console.log('Delete user:', userId);
  };

  return (
    <div className="container py-4">
      {/* Header with Add New Books button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Admin Dashboard</h1>
        <button 
          className="btn btn-dark d-flex align-items-center gap-2"
          onClick={() => navigate('/admin/add-book')}
        >
          <i className="bi bi-plus-lg"></i>
          Add New Books
        </button>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h4 mb-2">Total books</h3>
              <div className="d-flex justify-content-between align-items-end">
                <span className="display-5 fw-bold">1,234</span>
                <span className="text-success small">+1 this week</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h4 mb-2">Active Users</h3>
              <div className="d-flex justify-content-between align-items-end">
                <span className="display-5 fw-bold">4</span>
                <span className="text-success small">+0 this week</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h4 mb-2">Notifications</h3>
              <div className="d-flex justify-content-between align-items-end">
                <span className="display-5 fw-bold">8</span>
                <span className="text-danger small">+2 new</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manage Books Section */}
      <section className="mb-5">
        <h2 className="h4 mb-4">Manage books</h2>
        <div className="card border-0 shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="py-3">Title</th>
                  <th className="py-3">Author</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td className="py-3">{book.title}</td>
                    <td className="py-3">{book.author}</td>
                    <td className="py-3">${book.price.toFixed(2)}</td>
                    <td className="py-3">
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-dark"
                          onClick={() => handleEditBook(book.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDeleteBook(book.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Manage Users Section */}
      <section>
        <h2 className="h4 mb-4">Manage Users</h2>
        <div className="card border-0 shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="py-3">Name</th>
                  <th className="py-3">Email</th>
                  <th className="py-3">Role</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="py-3">{user.name}</td>
                    <td className="py-3">{user.email}</td>
                    <td className="py-3">{user.role}</td>
                    <td className="py-3">
                      <button
                        className="btn btn-sm btn-dark"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
