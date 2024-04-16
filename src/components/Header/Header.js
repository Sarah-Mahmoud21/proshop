import * as React from "react";
import { TextField, Button, Drawer ,Badge} from "@mui/material";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {useUser} from '../userContext';


function Header() {
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token; 
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const { user } = useUser(); // Access user data from context
  console.log(user);
  


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="header">
      <Button className="menu" onClick={toggleDrawer}>
        <MenuIcon />
      </Button>
      <Link to = "/" >
      <h1>
        <span>Pro</span>Shop
      </h1>
      </Link>
      <div className="search-div">
        <TextField id="outlined-basic" label="search" variant="outlined" />
        <Button variant="contained"><SearchIcon/> search</Button>
      </div>
      <div className="icons">
        <ul>
          <li>
          {isLoggedIn && user ? (
              <>
                <Link to="/profile">
                  <PersonIcon />
                </Link>
                <br />
                {user.firstName} {user.lastName}
                
              
              </>
            ) : (
              // Render login/signup link if user is not logged in
              <>
            <Link to="/login">
              <PersonIcon />
            </Link> <br/>
            Login/Sign up
            </>
                  )}     
          </li>

          <li>
            <Link>
            <Badge classes={{ badge: 'custom-badge' }} badgeContent={0} showZero>
                <BookmarkIcon style={{color:'white'}}/>
              </Badge>
             
            </Link> <br/>
            Wishlist
          </li>
          <li>
            <Link>
            <Badge classes={{ badge: 'custom-badge' }} badgeContent={0} showZero>
              <ShoppingCartIcon  style={{color:'white'}}/>
              </Badge>
            </Link><br/>
            Cart
          </li>
        </ul>
      </div>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <div className="drawer-content" style={{padding:'10px'}} >
          <ul
            className="menu-bar"
            style={{ listStyleType: "none", padding: 0, width: "100%" }}>
            <li>
              <div className="search-div">
                <TextField
                  id="outlined-basic"
                  label="search"
                  variant="standard"
                  style={{ color: "black" }}
                />
                <Button
                  style={{
                    color: "black",
                    border: "none",
                    background: "none",
                    boxShadow: "none",
                    position:'absolute',
                    top:'7%',
                    right:'0%'
                  }}
                  variant="contained">
                  <SearchIcon />
                </Button>
              </div>
            </li>
            <li>
              <Link to="/login" style={{ color: "black" }}>
                <PersonIcon /> 
              </Link>
              <br/>
              
                 login/signup
            </li>
            <li>
              <Link style={{ color: "black" }}>
                <BookmarkIcon />
              </Link>
              <br/>
              Wishlist
            </li>
            <li>
              <Link style={{ color: "black" }}>
                <ShoppingCartIcon />
                <br/>
              </Link>
              Cart
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
