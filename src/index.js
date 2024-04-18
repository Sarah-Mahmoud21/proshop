import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import LoginForm from './components/Login/LoginForm';
import SignUp from './components/SignUp/SignUp';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Home from './components/Home/Home';
import { UserProvider } from './components/helper/userContext'; // Make sure to import correct file name and casing
import ProductPage from './components/ProductPage/ProductPage';
import CartPage from './components/CartPage/CartPage';
import TopRate from './components/helper/TopRate/TopRate';

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
  {
    path: "/Cart",
    element: <CartPage/>
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
        <Home/>
        <ProfilePage />
        <CartPage/>
      </RouterProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
