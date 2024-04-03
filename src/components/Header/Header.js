import * as React from "react";
import { TextField, Button, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import "../Header/Header.css"; 
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="header">
      <Button className="menu" onClick={toggleDrawer}><MenuIcon/></Button>
      <h1>
        <span>Pro</span>Shop
      </h1>
      <div className="search-div">
        <TextField
          id="outlined-basic"
          label="search"
          variant="outlined"
        />
        <Button variant="contained">Search</Button>
      </div>
      <div className="icons">
        <ul>
          <li><Link to="/login" ><PersonIcon /></Link></li>
          <li><Link ><BookmarkIcon /></Link></li>
          <li><Link><ShoppingCartIcon /></Link></li>
        </ul>          
      </div>
      <Drawer 
        anchor="left" 
        open={isDrawerOpen} 
        onClose={toggleDrawer} 
       >
        <div className="drawer-content">
          <ul  className="menu-bar" style={{ listStyleType: 'none', padding: 0 ,width: '100%'}}>
            <li>
            <div className="search-div">
        <TextField
          id="outlined-basic"
          label="search"
          variant="standard"
        />
        <Button  style={{color:'#FCDD06',border:'none' ,background:'none',boxShadow:'none'}} variant="contained"><SearchIcon/></Button>
        </div>
            </li>
            <li><Link  to="/login"style={{color:'#FCDD06'}}><PersonIcon /></Link></li>
            <li><Link style={{color:'#FCDD06'}}><BookmarkIcon /></Link></li>
            <li><Link style={{color:'#FCDD06'}}><ShoppingCartIcon /></Link></li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
