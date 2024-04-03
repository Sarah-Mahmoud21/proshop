import React, { useState } from "react";
import {
  TextField,
  Button,
  Link,
  Checkbox,
} from "@mui/material";
import "../Login/LoginForm.css"; // Import your SCSS file
import  Header from"../Header/Header";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <>
    <Header/>
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <h3> Login with your data that you entered during regestration</h3>
        <form>
          <TextField
            label="Enter your email"
            variant="outlined"
            fullWidth
            placeholder="example@email.com"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Enter your password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-extend">
          <Button className="login" fullWidth variant="contained" color="primary"  onClick={handleLogin}>
            Login
          </Button> <br/>
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          /><label style={{color:'#707070'}} htmlFor="rememberMeCheckbox"> Remember me?</label>
          <br/>

          <Link href="/forgot-password" variant="body2">
            Forgot password?
          </Link> <br/>
          <hr/> <br/>

          <Button><Link className="signup" href="/signup" style={{ marginLeft: "10px" }}>
            Sign Up Now
          </Link></Button><br/>
          </div>
        </form>
      </div>
      <img
        className="login-image"
        src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*_kUeSrDNPKYZjFiZmH8qhg.gif"
        alt="login"
      />
    </div>
    </>
  );
}

export default LoginForm;
//https://linkmate.com.au/wp-content/uploads/2022/05/Ethnic-friendship-cuate-1024x1024.png