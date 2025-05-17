import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books', formData);
      alert("Book added successfully!");
      navigate('/admin/dashboard');
    } catch (err) {
      console.error(err);
      alert("Error adding book.");
    }
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
            <label className="form-label">Price</label>
            <input className="form-control" type="number" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <label className="form-label">Category</label>
            <input className="form-control" name="category" value={formData.category} onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <label className="form-label">Image URL</label>
            <input className="form-control" name="image" value={formData.image} onChange={handleChange} />
          </div>
          <div className="col-12">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" rows="3" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <div className="col-md-4">
            <label className="form-label">ISBN</label>
            <input className="form-control" name="isbn" value={formData.isbn} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Pages</label>
            <input className="form-control" name="pages" type="number" value={formData.pages} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Publisher</label>
            <input className="form-control" name="publisher" value={formData.publisher} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Publication Date</label>
            <input className="form-control" type="date" name="publicationDate" value={formData.publicationDate} onChange={handleChange} />
          </div>
        </div>

        <div className="mt-4 d-flex justify-content-end">
          <button type="submit" className="btn btn-dark">Save Book</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
