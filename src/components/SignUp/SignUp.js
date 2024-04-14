import React, { useState } from "react";
import { TextField, Button} from "@mui/material";
import Header from "../Header/Header";
import "../Login/LoginForm.css";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [matchPasswordError, setMatchPasswordError] = useState("");
  const navigate= useNavigate();

  const handleSignup = () => {
    // Validate email format
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must have at least 8 characters, including uppercase, lowercase, numbers, and special characters."
      );
      return;
    } else {
      setPasswordError("");
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      setMatchPasswordError("Passwords do not match.");
      return;
    } else {
      setMatchPasswordError("");
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    navigate('/login');
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
          <h1>Signup</h1>
          <h3>Sign up and get exclusive offers from us</h3>
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <TextField
              label="Confirm your password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!matchPasswordError}
              helperText={matchPasswordError}
            />
            <div className="login-extend">
              <Button
                className="login"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSignup}
              >
                Sign up
              </Button>
              <br />
              <hr />
              <span style={{ color: "#707070" }}>Have an account?</span>
              <Link
                className="login-from-sign"
                to="/login"
                style={{ marginLeft: "10px" }}
              >
                login
              </Link>
              <br />
            </div>
          </form>
        </div>
        <img
          className="login-image"
          src="https://linkmate.com.au/wp-content/uploads/2022/05/Ethnic-friendship-cuate-1024x1024.png"
          alt="login"
          style={{ width: "70%" }}
        />
      </div>
    </>
  );
}

export default Signup;
