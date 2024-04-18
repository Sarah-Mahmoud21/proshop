import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import "../CartPage/CartPage.css";
import { useUser } from '../helper/userContext';
import CloseIcon from '@mui/icons-material/Close';



function CartPage() {
    const { cart } = useUser(); // Accessing cart array from UserContext
    const { addToCart ,removeFromCart } = useUser(); // Access addToCart function from context

   
    const incrementQuan = (item) => {
      let quantity = 0;
      if (item.quantity < item.stock) {
        quantity = item.quantity +1;
       
      }    
      addToCart(item,quantity)   

    };

  
    const decrementQuan = (item) => {
      let quantity =0;
      if (item.quantity > 1) {
       quantity = item.quantity - 1;
      }
      
      addToCart(item,quantity)   
    };
    
    const discountPercentage =(originalPrice,discountRate)=>{
      let newPrice=0;
      let newPrice1 =0;
      if(discountRate!=0){
       newPrice1 = originalPrice - (originalPrice * discountRate / 100); 
       newPrice = parseFloat(newPrice1.toFixed(2));
       return(
       <>
       <h2 className="original-price" style={{color:"#707070",fontSize:'20px',textDecoration:'line-through'} }>${originalPrice} </h2>
       <h2 className="new-price">${newPrice}</h2>
       </>
      );       
    }
    else{
     return(
      <h2 className="original-price" style={{textDecoration:'none'}}>${originalPrice}</h2>
     )
    } 
  }

  const totalPrice = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      const discountedPrice = (item.price - (item.price * item.discountPercentage/100))*item.quantity;
      total += parseFloat(discountedPrice);
    });
    return total.toFixed(2);
  };
  let  len = 0;
  cart.forEach((item) => {
    const quan = item.quantity;
    len += quan;
  });

  const Price = (cart) => {
    let total = 0;
  cart.forEach((item) => {
    const originalPrice = item.price*item.quantity;
    total += originalPrice;
  });
  return total;
  }
    return ( <>
    <Header/>
    <Breadcrumbs
        aria-label="breadcrumb"
        style={{ paddingTop: "6%", paddingLeft: "5%" }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#707070" }}>
          Back
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }}>
          Shopping Cart
        </Link>
      </Breadcrumbs>

      <div> 
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-items">
                <button className="close" onClick={()=>removeFromCart(item.id)}><CloseIcon/></button>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
                <div className="quantity">
              <button onClick={()=>decrementQuan(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={()=>incrementQuan(item)}>+</button>
            </div>
                <p>{discountPercentage(item.price,item.discountPercentage)}</p>
              </div>
            ))}
            <div className="cart-info">
              <p>Subtotal ({len}) items </p>
              <p style={{color:'#707070',textDecoration:'line-through',fontSize:'15px'}}>${Price(cart)}</p>
              <p>${totalPrice(cart)}</p>
              <hr/>
              <button>Proceed to Checkout</button>
            </div>
          </>
        ) : (
          <div className="empty">
            <h1>Your cart is empty</h1>
            <img src="https://solartrade.in/img/404.svg" alt="empty cart" />
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;