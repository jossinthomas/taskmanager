// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await axios.post('http://localhost:5000/api/users/login', {
//         email,
//         password,
//       });

//       const user = res.data;
//       localStorage.setItem('userInfo', JSON.stringify(user));

//       if (user.role === 'admin') {
//         navigate('/admin/dashboard');
//       } else {
//         navigate('/');
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="container d-flex align-items-center justify-content-center vh-100 bg-light">
//       <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
//         <h2 className="text-center mb-4">Login</h2>

//         {error && <div className="alert alert-danger">{error}</div>}

//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-dark w-100">Sign In</button>
//         </form>

//         <div className="text-center mt-3">
//           Don’t have an account?{' '}
//           <a href="/register" className="text-decoration-none">Register</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isAdmin) {
        // Check against hardcoded admin
        if (formData.email === "admin@bookstore.com" && formData.password === "admin123") {
          localStorage.setItem("admin", "true");
          navigate("/admin/dashboard");
        } else {
          setError("Invalid Admin Credentials");
        }
      } else {
        // Call real user login API
        const res = await axios.post("http://localhost:5000/api/users/login", {
          email: formData.email,
          password: formData.password,
        });

        const user = res.data;
        localStorage.setItem("userInfo", JSON.stringify(user));

        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-3">
          <h2 className="fw-bold">Bookstore</h2>
          <p className="text-muted mb-1">Welcome back</p>
          <small>Enter your credentials to continue</small>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="adminCheck"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="adminCheck">
              Login as Admin
            </label>
          </div>

          <button type="submit" className="btn btn-dark w-100">Sign In</button>
        </form>

        <div className="text-center mt-3">
          Don’t have an account?{" "}
          <span className="text-primary" role="button" onClick={() => navigate("/register")}>
            Register
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

