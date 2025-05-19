import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../assets/css/Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    // Dummy login credentials
    const dummyEmail = "test@example.com";
    const dummyPassword = "123456";

    if (email === dummyEmail && password === dummyPassword) {
      alert("Login successful!");
      navigate("/home"); 
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div>
      <div className="login-box">
        <p>Login</p>
        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input
             data-testid="email-input"
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input
              data-testid="password-input"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="login-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="#" className="a2">
            Sign up!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
