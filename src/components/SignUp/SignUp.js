import React, { useState } from "react";
import {
  TextField,
  Button,
  Link,
} from "@mui/material";
import  Header from"../Header/Header";
import "../Login/LoginForm.css"

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [name, setName] = useState("");


  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

  };

  return (
    <>
    <Header/>
    <div className="login-container">
      <div className="login-form" >
        <h1>Signup.</h1>
        <h3> Sign up and get exclusive offers from us</h3>
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
          <TextField
            label="confirm your password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-extend">
          <Button className="login" fullWidth variant="contained" color="primary"  onClick={handleLogin}>
            Sign up
          </Button><br/>
          <hr/>
         <span style={{color:'#707070'}}>Have an account?</span> 
          <Link className="login-from-sign" href="/login" style={{ marginLeft: "10px" }}>
          login
          </Link><br/>
          </div>
        </form>
      </div>
      <img
        className="login-image"
        src="https://linkmate.com.au/wp-content/uploads/2022/05/Ethnic-friendship-cuate-1024x1024.png"
        alt="login"
        style={{width:'70%'}}
       
      />
    </div>
    </>
  );
}

export default Signup;
//