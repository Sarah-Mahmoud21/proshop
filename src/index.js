import React from 'react';
import ReactDOM from 'react-dom/client';
import{createBrowserRouter,RouterProvider} from "react-router-dom";
import Header from './components/Header/Header'
import LoginForm from './components/Login/LoginForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>
  },
  {
    path: '/login',
    element: <LoginForm/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);




