import React, { useState , useEffect} from "react";
import "../FeaturedProducts/FeaturedProducts.css";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'; 
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";


function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/product")
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
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

  const productsPerPage = 3; // Number of products to display per page

  const handleClick = (index) => {
    setCurrentSlide(index);
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
      <div className="products">
        <h1>Featured Products</h1>
        <div className="phr">
          <div className="panimate-hr"></div>
        </div>
        <div className="visible-products">
          {products
            .slice(currentSlide * productsPerPage, (currentSlide + 1) * productsPerPage)
            .map((product, index) => (
              <div key={index} className="category">
                <img src={product.thumbnail} alt={`Slide ${index + 1}`} />
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

        <div className="pcircle-buttons">
          {[...Array(Math.ceil(products.length / productsPerPage))].map((_, index) => (
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
