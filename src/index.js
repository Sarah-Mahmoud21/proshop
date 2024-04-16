import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import LoginForm from './components/Login/LoginForm';
import SignUp from './components/SignUp/SignUp';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Home from './components/Home/Home';
import { UserProvider } from './components/userContext'; // Make sure to import correct file name and casing
import ProductPage from './components/ProductPage/ProductPage';

// Create BrowserRouter instance
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <LoginForm />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: "/Home/:id",
    element: <ProductPage/>
  },
]);

// Render your application with both RouterProvider and UserProvider
ReactDOM.render(
  <React.StrictMode>
    <UserProvider> {/* Wrap your components with UserProvider */}
      <RouterProvider router={router}>
        {/* Place your routing components inside RouterProvider */}
        <Header />
        <LoginForm />
        <SignUp />
        <ProfilePage />
      </RouterProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
