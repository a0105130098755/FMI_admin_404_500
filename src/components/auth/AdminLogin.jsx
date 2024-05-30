import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../services/api"; // 수정된 api 설정 사용
import "./AdminLogin.css"; // 여기에 필요한 CSS 추가

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Attempting to log in with email:", email);
      const response = await axios.post(
        "/api/auth/login", // 수정된 api 설정 사용
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        localStorage.setItem("adminToken", response.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error logging in:", error);
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
            <label>User Email</label>
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
