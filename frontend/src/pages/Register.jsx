// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../utils/axiosConfig';

// function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     surname: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await axios.post('/users/register', {
//         name: formData.name,
//         surname: formData.surname,
//         email: formData.email,
//         password: formData.password
//       });

//       alert("Registration successful! You can now login.");
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed.');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Register</h1>
//       <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
//         <form onSubmit={handleSubmit}>
//           <input id="name" placeholder="First Name" className="form-control mb-3" onChange={handleChange} required />
//           <input id="surname" placeholder="Surname" className="form-control mb-3" onChange={handleChange} />
//           <input id="email" type="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} required />
//           <input id="password" type="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} required />
//           <input id="confirmPassword" type="password" placeholder="Confirm Password" className="form-control mb-3" onChange={handleChange} required />
          
//           {error && <p className="text-danger">{error}</p>}
          
//           <button type="submit" className="btn btn-dark w-100">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle registration API call
    alert("Registered successfully (mock)");
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
        <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "400px" }}>
          <h2 className="text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label>Name</label>
              <input className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-2">
              <label>Surname</label>
              <input className="form-control" name="surname" value={formData.surname} onChange={handleChange} />
            </div>
            <div className="mb-2">
              <label>Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-2">
              <label>Password</label>
              <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label>Confirm Password</label>
              <input type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-dark w-100">Register</button>
          </form>
          <p className="text-center mt-3">
            <span className="text-primary" role="button" onClick={() => navigate("/login")}>← Back to Login</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
