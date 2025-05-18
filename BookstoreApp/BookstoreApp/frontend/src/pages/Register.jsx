import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosConfig';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post('/users/register', {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        password: formData.password
      });

      alert("Registration successful! You can now login.");
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Register</h1>
      <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
        <form onSubmit={handleSubmit}>
          <input id="name" placeholder="First Name" className="form-control mb-3" onChange={handleChange} required />
          <input id="surname" placeholder="Surname" className="form-control mb-3" onChange={handleChange} />
          <input id="email" type="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} required />
          <input id="password" type="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} required />
          <input id="confirmPassword" type="password" placeholder="Confirm Password" className="form-control mb-3" onChange={handleChange} required />
          
          {error && <p className="text-danger">{error}</p>}
          
          <button type="submit" className="btn btn-dark w-100">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
