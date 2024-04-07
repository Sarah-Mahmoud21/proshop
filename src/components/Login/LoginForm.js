import React, { useState } from "react";
import {
  TextField,
  Button,
  Link,
  Checkbox,
} from "@mui/material";
import "../Login/LoginForm.css"; // Import your SCSS file
import Header from "../Header/Header";
import jwt from "jsonwebtoken";
import 'crypto-browserify';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");



  const handleLogin = () => {
    // Validate email format
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    // Validate password strength
    if (!validatePassword(password)) {
      setPasswordError("Password must have at least 8 characters, including uppercase, lowercase, numbers, and special characters.");
      return;
    } else {
      setPasswordError("");
    }

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    const secretKey = 'your_secret_key_here';

// Data to be encoded in the token
const data = {
  email: 'example@example.com',
  password: 'sara1234S@', 
};

// Generate the token
const token = jwt.sign(data, secretKey);
console.log('Generated Token:', token);
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
              >
                Login
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
