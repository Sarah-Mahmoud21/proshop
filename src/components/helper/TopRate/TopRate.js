import React, { useState, useEffect } from "react";
import "../TopRate/TopRate.css";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'; 
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function TopRate() {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/product")
      .then(response => response.json())
      .then(data => {
        // Sort products based on rating in descending order
        const sortedProducts = data.products.sort((a, b) => b.rating - a.rating);
        // Slice the array to get the top 3 products
        const topThreeProducts = sortedProducts.slice(0, 3);
        setTopProducts(topThreeProducts);
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const generateStars = (rate) => {
    const stars = [];
    const filledStars = parseInt(rate); // Get the integer part of the rate
    for (let i = 0; i < filledStars; i++) {
      stars.push(<StarIcon key={i} style={{ color: 'gold' }} />);
    }
    const remainingStars = 5 - filledStars;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<StarBorderIcon key={filledStars + i} style={{ color: 'gold' }} />);
    }
    return stars;
  };
  const discountPercentage =(originalPrice,discountRate)=>{
    let newPrice=0;
    let percentage=0;
    if(discountRate!=0){
     newPrice = originalPrice - (originalPrice * discountRate / 100).toFixed(2); 
     percentage = discountRate;
     return(
     <>
     <h2 className="original-price">${originalPrice}</h2>
     <h2 className="new-price">${newPrice}</h2>
     <div className="percentage">-{percentage}%</div>
     </>
    );       
  }
  else{
   return(
    <h2 className="original-price" style={{textDecoration:'none'}}>${originalPrice}</h2>
   )
  } 
}

  return (
    <>
      <div className="top">
        <h1>Top Rated Products</h1>
        <div className="hr">
          <div className="animate-hr"></div>
        </div>
        <div className="visible-products">     
          {topProducts.map((product, index) => (
            <div key={index} className="category">
              <img src={product.thumbnail} alt={`Product ${index + 1}`} />
              <p>{product.title}</p>
              <span>{discountPercentage(product.price ,product.discountPercentage)}</span>
              <div className="rating">
                {generateStars(product.rating)}
              </div>
              <div className="add-cart">
                <button><BookmarkBorderIcon/></button> 
                <button className="add">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopRate;
