import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Link,
  Checkbox,
} from "@mui/material";
import "../Login/LoginForm.css"; // Import your SCSS file
import Header from "../Header/Header";
import axios from "axios"; // Import Axios for making HTTP requests

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Reset errors
    setEmailError("");
    setPasswordError("");
    setError("");

    // Validate email format
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Validate password strength
    if (!validatePassword(password)) {
      setPasswordError("Password must have at least 8 characters, including uppercase, lowercase, numbers, and special characters.");
      return;
    }

    // Set loading state
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/login", { email, password });
      const token = response.data.token;
      // Store the token in local storage or session storage
      localStorage.setItem("token", token);
      console.log("Login successful!");
      
      navigate('/profile');

      
      // Redirect to dashboard or any other authenticated route
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    // Regular expression for password validation
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordPattern.test(password);
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <h3>Login with your data that you entered during registration</h3>
          {error && <div className="error-message">{error}</div>}
          <form>
            <TextField
              label="Enter your email"
              variant="outlined"
              fullWidth
              placeholder="example@email.com"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
            />
            <TextField
              label="Enter your password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
              helperText={passwordError}
            />
            <div className="login-extend">
              <Button
                className="login"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleLogin}
                disabled={loading} // Disable button while loading
              >
                {loading ? "Logging in..." : "Login"}
              </Button>{" "}
              <br />
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label style={{ color: "#707070" }} htmlFor="rememberMeCheckbox">
                {" "}
                Remember me?
              </label>
              <br />
              <Link href="/forgot-password" variant="body2">
                Forgot password?
              </Link>{" "}
              <br />
              <hr /> <br />
              <Button>
                <Link
                  className="signup"
                  href="/signup"
                  style={{ marginLeft: "10px" }}
                >
                  Sign Up Now
                </Link>
              </Button>
              <br />
            </div>
          </form>
        </div>
        <img
          className="login-image"
          src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*_kUeSrDNPKYZjFiZmH8qhg.gif"
          alt="Illustration of a login process"
        />
      </div>
    </>
  );
}

export default LoginForm;
