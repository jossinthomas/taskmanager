import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light rounded-3 overflow-hidden p-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-4 fw-bold mb-3">Discover Your Next Favorite Book</h1>
              <p className="lead mb-4">
                Explore our curated collection of bestsellers, new releases, and timeless classics.
              </p>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <img src="/cozy-bookshelf.png" alt="Bookshelf" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h3 mb-0">Featured Books</h2>
          <Link to="/books" className="text-decoration-none text-muted">
            View All →
          </Link>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[
            {
              title: 'Great Big Beautiful Life',
              author: 'Emily Henry',
              price: 34.99,
              image: '/abstract-book-cover.png',
            },
            {
              title: 'Atomic Habits',
              author: 'James Clear',
              price: 19.99,
              image: '/atomichabits.jpg',
            },
            {
              title: 'The Silent Patient',
              author: 'Alex Michaelides',
              price: 24.99,
              image: '/silentpatient.jpg',
            },
          ].map((book, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img src={book.image} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="text-muted">{book.author}</p>
                  <p className="fw-bold">${book.price.toFixed(2)}</p>
                  <Link to="/books" className="btn btn-dark w-100">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container my-5">
        <h2 className="h3 mb-4">Browse by Category</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {['Fiction', 'Non-Fiction', 'Self-Help', 'Romance'].map((cat, i) => (
            <div className="col" key={i}>
              <Link to={`/books?category=${cat}`} className="text-decoration-none">
                <div className="bg-light p-4 text-center rounded h-100 d-flex align-items-center justify-content-center">
                  <h3 className="h5 mb-0">{cat}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Info Features */}
      <section className="container my-5">
        <div className="row text-center">
          {[
            {
              title: 'Extensive Collection',
              text: 'Thousands of titles across all genres to choose from.',
            },
            {
              title: 'New Releases',
              text: 'Stay up to date with the latest bestsellers and trending titles.',
            },
            {
              title: 'Personalized Recommendations',
              text: 'Discover books tailored to your reading preferences.',
            },
          ].map((feature, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="bg-light p-4 rounded-circle mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                {/* Optional icon placeholder */}
              </div>
              <h3 className="fw-bold h5 mb-2">{feature.title}</h3>
              <p className="text-muted">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
