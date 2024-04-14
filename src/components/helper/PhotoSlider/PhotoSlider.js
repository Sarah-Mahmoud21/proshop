import React, {useState} from "react";
import {
    Button
  } from "@mui/material";
  import '../PhotoSlider/PhotoSlider.css'
  const PhotoSlider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };
  
    return (
      <div className="photo-slider"> 
      <div className="sub-slider">  
      <div className="info">
          <p>save up to $39.99</p>
          <h1>{images[currentSlide].title}</h1>
          <p>{images[currentSlide].description}</p>
          <Button>shop now</Button>
     </div>
          <img src={images[currentSlide].url} alt={`Slide ${currentSlide + 1}`} />
        
          </div>
          <div className="slider">
          <button onClick={prevSlide} className="prev-btn">&#10094;</button>
          <div className="buttons">
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            className={`circle ${currentSlide === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
          <button onClick={nextSlide} className="next-btn">&#10095;</button>
          </div> 
          {/* slider */}
        </div>
    );
  };
  export default PhotoSlider;