import React, { useState } from "react";
import "../FeaturedCategories/FeaturedCategories.css";

function FeaturedCategories() {
  const images = [
    {
      url: "https://www.pngitem.com/pimgs/m/297-2978265_dell-laptop-png-images-dell-xps-15-9570.png",
      title: "LAPTOP",
    },
    {
      url: "https://image.similarpng.com/very-thumbnail/2020/06/PC-hardware-components-on-transparent-background-PNG.png",
      title: "COMPUTER COMPONENTS",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8SPX2_-8j6RDSc-hYkwGbuGk_TM5JBS442K6AtmQFQ&s",
      title: "DEVICES",
    },
    {
      url: "https://www.pngall.com/wp-content/uploads/14/Airpod-Transparent.png",
      title: "ACCESSORIES",
    },
    {
      url: "https://www.pngall.com/wp-content/uploads/14/Airpod-Transparent.png",
      title: "DEVICES",
    },
    {
      url: "https://www.pngall.com/wp-content/uploads/14/Airpod-Transparent.png",
      title: "DEVICES",
    },
    {
      url: "https://www.pngall.com/wp-content/uploads/14/Airpod-Transparent.png",
      title: "DEVICES",
    },
    {
      url: "https://www.pngall.com/wp-content/uploads/14/Airpod-Transparent.png",
      title: "DEVICES",
    },
    // Add more images as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (index) => {
    setCurrentSlide(index);
    const animateHr = document.querySelector('.animate-hr');
    animateHr.style.left = `${index * 25}%`; // Move animate-hr left based on clicked index
  };

  return (
    <>
      <div className="head-cat">
        <h1>Featured Categories</h1>
        <div className="circle-buttons">
          {[...Array(Math.ceil(images.length / 4))].map((_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`circle ${
                currentSlide === index ? "active" : ""
              }`}></button>
          ))}
        </div>
      </div>

      <div className="hr">
        <div className="animate-hr"></div>
      </div>

      <div className="visible-categories">
        {images
          .slice(currentSlide * 4, currentSlide * 4 + 4)
          .map((image, index) => (
            <div key={index} className="category">
              <div className="images">
                <img src={image.url} alt={`Slide ${currentSlide + 1}`} />
              </div>
              <h3>{image.title}</h3>
            </div>
          ))}
      </div>
      {/* <button onClick={prevSlide} className="prev-btn">&#10094;</button>
      <button onClick={nextSlide} className="next-btn">&#10095;</button> */}
    </>
  );
}

export default FeaturedCategories;
