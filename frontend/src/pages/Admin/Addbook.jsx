import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const navigate = useNavigate();
  
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    price: '',
    category: '',
    coverImageUrl: '',
    description: '',
    isbn: '',
    pages: '',
    publisher: '',
    publicationDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the book
    console.log('Book data to save:', bookData);
    // Navigate back to dashboard after saving
    navigate('/admin/dashboard');
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="h3 text-center mb-4">Add New Books</h1>

          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              {/* Title and Author */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={bookData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Author</label>
                  <input
                    type="text"
                    className="form-control"
                    name="author"
                    value={bookData.author}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Price, Category, and Cover Image URL */}
              <div className="col-md-4">
                <div className="form-group">
                  <label className="form-label">Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    name="price"
                    value={bookData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select"
                    name="category"
                    value={bookData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="mystery">Mystery</option>
                    <option value="sci-fi">Science Fiction</option>
                    <option value="romance">Romance</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="form-label">Cover Image URL</label>
                  <input
                    type="url"
                    className="form-control"
                    name="coverImageUrl"
                    value={bookData.coverImageUrl}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={bookData.description}
                    onChange={handleInputChange}
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>

              {/* ISBN and Pages */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">ISBN</label>
                  <input
                    type="text"
                    className="form-control"
                    name="isbn"
                    value={bookData.isbn}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Pages</label>
                  <input
                    type="number"
                    className="form-control"
                    name="pages"
                    value={bookData.pages}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Publisher and Publication Date */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Publisher</label>
                  <input
                    type="text"
                    className="form-control"
                    name="publisher"
                    value={bookData.publisher}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Publication Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="publicationDate"
                    value={bookData.publicationDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="col-12 d-flex justify-content-end gap-2 mt-4">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => navigate('/admin/dashboard')}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-dark">
                  Save Book
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
