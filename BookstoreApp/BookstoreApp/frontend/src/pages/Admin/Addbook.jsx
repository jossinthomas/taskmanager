import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    category: '',
    description: '',
    isbn: '',
    pages: '',
    publisher: '',
    publicationDate: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Book "${formData.title}" added successfully!`);
    // Ideally, send formData to backend here
    navigate('/admin/dashboard');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Title</label>
            <input className="form-control" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Author</label>
            <input className="form-control" name="author" value={formData.author} onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <label className="form-label">Price ($)</label>
            <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <label className="form-label">Category</label>
            <select className="form-select" name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Self-Help">Self-Help</option>
              <option value="Thriller">Thriller</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Cover Image URL</label>
            <input className="form-control" name="image" value={formData.image} onChange={handleChange} />
          </div>
          <div className="col-12">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" rows="3" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <div className="col-md-6">
            <label className="form-label">ISBN</label>
            <input className="form-control" name="isbn" value={formData.isbn} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Pages</label>
            <input type="number" className="form-control" name="pages" value={formData.pages} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Publisher</label>
            <input className="form-control" name="publisher" value={formData.publisher} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Publication Date</label>
            <input type="date" className="form-control" name="publicationDate" value={formData.publicationDate} onChange={handleChange} />
          </div>
        </div>

        <div className="mt-4 d-flex justify-content-end gap-3">
          <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/admin/dashboard')}>
            Cancel
          </button>
          <button type="submit" className="btn btn-dark">
            Save Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
