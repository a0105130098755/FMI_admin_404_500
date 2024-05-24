import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css"; // 여기에 필요한 CSS 추가

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Attempting to log in with email:", email); // 이메일 출력
      const response = await axios.post(
        "http://localhost:8181/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true } // withCredentials 추가
      );
      if (response.status === 200) {
        localStorage.setItem("adminToken", response.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error logging in:", error); // 에러 로그 추가
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
