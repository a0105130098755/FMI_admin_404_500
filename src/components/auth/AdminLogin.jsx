import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/admin/auth/login", {
        email,
        password,
      });
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Let's you sign in</h2>
        <p>Welcome to our Page</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input type="checkbox" /> Keep me logged in
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="login-image">
        <img src="/2.svg" alt="Login Illustration" />
      </div>
    </div>
  );
}

export default AdminLogin;
