import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books");
      setBooks(res.data);
    } catch (err) {
      console.error("Failed to fetch books", err);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      setBooks((prev) => prev.filter((book) => book._id !== id));
    } catch (err) {
      console.error("Failed to delete book", err);
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>📚 Admin Dashboard</h2>
        <button className="btn btn-dark" onClick={() => navigate("/admin/add-book")}>
          + Add New Book
        </button>
      </div>

      {/* Stats */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="text-muted">Total Books</h5>
            <h3 className="fw-bold">{books.length}</h3>
            <p className="text-muted small">Includes all available books</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="text-muted">Active Users</h5>
            <h3 className="fw-bold">{users.length}</h3>
            <p className="text-muted small">Registered users & admin</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="text-muted">Notifications</h5>
            <h3 className="fw-bold">📣 {Math.floor(Math.random() * 3) + 1}</h3>
            <p className="text-danger small">New activity detected</p>
          </div>
        </div>
      </div>

      {/* Manage Books */}
      <div className="mb-5">
        <h4 className="mb-3">Manage Books</h4>
        <div className="card">
          <div className="card-body table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book._id}>
                    <td>
                      <img src={book.image} alt={book.title} style={{ width: "50px" }} />
                    </td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>${book.price.toFixed(2)}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => navigate(`/admin/edit-book/${book._id}`)}>Edit</button>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => deleteBook(book._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Manage Users */}
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
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name} {user.surname || ''}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`badge ${user.role === 'admin' ? 'bg-primary' : 'bg-secondary'}`}>
                        {user.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {users.length === 0 && <p className="text-center text-muted">No users registered.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
