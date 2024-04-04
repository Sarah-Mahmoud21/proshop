import React from 'react';
import ReactDOM from 'react-dom/client';
import{createBrowserRouter,RouterProvider} from "react-router-dom";
import Header from './components/Header/Header'
import LoginForm from './components/Login/LoginForm';
import SignUp from './components/SignUp/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>
  },
  {
    path: '/login',
    element: <LoginForm/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);




