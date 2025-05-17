import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMP: Simulated login
    if (email === "admin@bookstore.com" && password === "admin123") {
      alert("Admin Login Successful");
      navigate("/admin/dashboard");
    } else {
      alert("Login successful!");
      navigate("/home");
    }
  };

  const handleAdminLogin = () => {
    navigate("/admin");
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-5 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-4">
          <h2>
            <span className="bg-dark text-white px-2">BOOK</span>
            <span className="border border-dark px-2">STORE</span>
          </h2>
          <h5 className="mt-3 fw-bold">Welcome back</h5>
          <p className="text-muted small">Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <div className="d-grid mb-2">
            <button type="submit" className="btn btn-dark">Sign In</button>
          </div>
          <div className="d-grid mb-3">
            <button type="button" className="btn btn-secondary" onClick={handleAdminLogin}>Admin Login</button>
          </div>
        </form>
        <p className="text-center text-muted small">
          Don’t have an account? <a href="/register">Sign up</a>
        </p>
        <p className="text-center text-muted small">
          By signing in, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
