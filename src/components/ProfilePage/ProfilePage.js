import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import {
  Button,
  Link,
} from "@mui/material";
import '../ProfilePage/ProfilePage.css';
import { useNavigate } from 'react-router-dom';


function ProfilePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  function handleLogout(){
    localStorage.removeItem('token');
    navigate('/');
  
  }
  

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found');
          // Handle the absence of token, e.g., redirect to login page
          return;
        }
        const response = await axios.get('http://localhost:3001/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError(error.response ? error.response.data.message : 'Server error');
      }
     
    };

    fetchUserProfile();
  }, []);

  return (
    <>
    <Header/>  
      {error ? (
        <p>Error: {error}</p>
      ) : user ? (
        <div className='profile-page'>
          <div className='profile-links'>
            <div className='pic'>
            <img src={user.img}/>
              <h3>{user.firstName } {user.lastName}</h3>
              </div>
              <Link>My orders</Link><br/>
              <Link>wishlist</Link><br/>
              <Link>Notifications</Link><br/>
              <Link>Settings</Link><br/>
              <hr/><br/>
              <button onClick={handleLogout}>Logout</button>       
          </div>
          <div className='profile-info'>
          <div className='info'>
            <h3>My profile</h3>   
          <p><label>First Name</label> {user.firstName}</p>
          <p><label>last Name</label> {user.lastName}</p>
          <p><label>Email</label> {user.email}</p>
          <p><label>birthday</label>  {user.birthday}</p>
          <Button>Change password</Button>
          </div> 
         <div className='pic'>
         <img src={user.img}/>
         <br/>
         <Button>Upload new photo</Button>
         </div>
        </div>
        </div>//page
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProfilePage;
