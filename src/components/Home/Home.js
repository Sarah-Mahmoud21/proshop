import * as React from "react";
import Header from "../Header/Header";
import PhotoSlider from "../helper/PhotoSlider/PhotoSlider";
import FeaturedCategories from "../helper/FeaturedCategories/FeaturedCategories";
import FeaturedProducts from "../helper/FeaturedProducts/FeaturedProducts";
import TopRate from "../helper/TopRate/TopRate";


function Home() {
    const images = [
        {
          url: 'https://www.pngall.com/wp-content/uploads/14/Airpod-Transparent.png',
          title: 'iPhone AirPods',
          description: 'Experience the magic of AirPods.'
        },
        {
          url: 'https://www.g-h.store/wp-content/uploads/2023/03/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20.png.webp',
          title: 'Playstation 5',
          description: 'Enhance your gaming experience with our latest gaming mouse.'
        },
        {
          url: 'https://vcx-forum.org/vcx/v2019/images/apple_iphone11pro/apple_iphone11pro.png',
          title: 'iPhone 11 Pro',
          description: 'Get the best value with our refurbished iPhone 11 Pro.'
        }
      ];
      
    return (
        <>
        <Header/> 
        <PhotoSlider images={images} />
        <FeaturedCategories/>
        <FeaturedProducts/>
        <TopRate/>
        
        </>
      );
}

export default Home;