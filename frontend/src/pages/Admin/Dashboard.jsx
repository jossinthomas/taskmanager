import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const booksData = [
    { id: '1', title: 'Atomic Habits', author: 'James Clear', price: 19.99 },
    { id: '2', title: 'The Silent Patient', author: 'Alex Michaelides', price: 24.99 },
    { id: '3', title: 'King of Envy', author: 'Ana Huang', price: 16.99 },
  ];

  const usersData = [
    { id: '1', name: 'Alice Johnson', email: 'alice@gmail.com', role: 'Admin' },
    { id: '2', name: 'Bob Smith', email: 'bob@gmail.com', role: 'Staff' },
  ];

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <button className="btn btn-dark" onClick={() => navigate('/admin/add-book')}>
          + Add New Book
        </button>
      </div>

      {/* Stats */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="text-muted">Total Books</h5>
            <h3 className="fw-bold">{booksData.length}</h3>
            <p className="text-muted small">+1 this week</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="text-muted">Active Users</h5>
            <h3 className="fw-bold">{usersData.length}</h3>
            <p className="text-muted small">+0 this week</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="text-muted">Notifications</h5>
            <h3 className="fw-bold">3</h3>
            <p className="text-danger small">+2 new</p>
          </div>
        </div>
      </div>

      {/* Manage Books Table */}
      <div className="mb-5">
        <h4 className="mb-3">Manage Books</h4>
        <div className="card">
          <div className="card-body table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {booksData.map((book) => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>${book.price.toFixed(2)}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                      <button className="btn btn-sm btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Manage Users Table */}
      <div>
        <h4 className="mb-3">Manage Users</h4>
        <div className="card">
          <div className="card-body table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`badge ${user.role === 'Admin' ? 'bg-primary' : 'bg-secondary'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-danger">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
