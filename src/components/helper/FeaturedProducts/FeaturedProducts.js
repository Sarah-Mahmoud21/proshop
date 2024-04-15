import React, { useState } from "react";
 import "../FeaturedProducts/FeaturedProducts.css";
 import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'; 
 import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";


function FeaturedProducts() {
  const images = [
    {
        url: 'https://vcx-forum.org/vcx/v2019/images/apple_iphone11pro/apple_iphone11pro.png',
        title: "Apple iPhone 11 Pro 256GB Memory",
      rate: '5',
      price:'$455.99'

    },
    {
      url: "https://www.pngall.com/wp-content/uploads/14/Airpod-Transparent.png",
      title: "Apple Airpods Wireless Bluetooth Headset",
      rate: '4',
      price:'$455.99'

    },
    {
        url: 'https://www.g-h.store/wp-content/uploads/2023/03/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20.png.webp',
        title: "Playstation 5",
      rate: '3',
      price:'$455.99'

    },
    {
        url: 'https://www.g-h.store/wp-content/uploads/2023/03/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20.png.webp',
        title: "Playstation 5",
      rate: '3',
      price:'$455.99'

    },
      {
        url: "https://www.pngall.com/wp-content/uploads/14/Airpod-Transparent.png",
        title: "Apple Airpods Wireless Bluetooth Headset",
        rate: '5',
        price:'$455.99'
  
      },
      {
        url: 'https://www.g-h.store/wp-content/uploads/2023/03/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20.png.webp',
        title: "Playstation 5",
      rate: '3',
      price:'$455.99'

    },
      
    // Add more images as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (index) => {
    setCurrentSlide(index);
    const animateHr = document.querySelector('.panimate-hr');
    animateHr.style.left = `${index * 30}%`; // Move animate-hr left based on clicked index
  };
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

  return (
    <>
    <div className="products">
        <h1>Featured Products</h1>
      <div className="phr">
        <div className="panimate-hr"></div>
      </div>

      <div className="visible-products">
        {images
          .slice(currentSlide * 3, currentSlide * 3 + 3)
          .map((image, index) => (
            <div key={index} className="category">
                <img src={image.url} alt={`Slide ${currentSlide + 1}`} />
                <p>{image.title}</p>
                <h2>{image.price}</h2>
                <div className="rating">
                  {generateStars(image.rate)}
                </div>

                <div className="add-cart">
                    <button><BookmarkBorderIcon/></button> 
                    <button className="add">Add to cart</button>
                </div>
            </div>
          ))}
      </div>

      <div className="pcircle-buttons">
  {[...Array(Math.ceil(images.length / 3))].map((_, index) => (
    <button
      key={index}
      onClick={() => handleClick(index)}
      className={`circle ${currentSlide === index ? "active" : ""}`}
    ></button>
  ))}
</div>
</div>
    </>
  );
}

export default FeaturedProducts;
