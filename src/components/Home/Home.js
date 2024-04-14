import * as React from "react";
import Header from "../Header/Header";
import PhotoSlider from "../helper/PhotoSlider/PhotoSlider";

function Home() {
    const images = [
        {
          url: 'https://cdn.salla.sa/GWeSNB7VgO47hdgKvuvhqNbUSG1yoa7UCH0KuaC9.jpg',
          title: 'iPhone AirPods',
          description: 'Experience the magic of AirPods.'
        },
        {
          url: 'https://www.powerbuy.co.th/_next/image?url=https%3A%2F%2Fpim.powerbuy.co.th%2FPWBPIM%2Fweb%2FThumbnail%2FImage%2F1101%2F286595.jpg&w=640&q=75',
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
        
        
        
        </>
      );
}

export default Home;