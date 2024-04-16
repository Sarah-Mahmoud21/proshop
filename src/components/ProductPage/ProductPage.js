import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Header/Header";
import FeaturedProducts from "../helper/FeaturedProducts/FeaturedProducts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "../ProductPage/ProductPage.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSubImageIndex, setSelectedSubImageIndex] = useState(-1);

  useEffect(() => {
    fetch(`https://dummyjson.com/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const incrementQuan = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuan = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const discountPercentage = (originalPrice, discountRate) => {
    let newPrice = originalPrice - (originalPrice * discountRate) / 100;
    newPrice = parseFloat(newPrice.toFixed(2));
    return newPrice;
  };

  const handleSubImageClick = (index) => {
    setSelectedSubImageIndex(index);
  };

  return (
    <>
      <Header />
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ paddingTop: "6%", paddingLeft: "5%" }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#707070" }}>
          Back
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }}>
          {product.title}
        </Link>
      </Breadcrumbs>

      <div className="product">
        <div className="images">
          <img
            src={
              selectedSubImageIndex === -1
                ? product.thumbnail
                : product.images[selectedSubImageIndex]
            }
            alt={product.title}
          />
          <div className="sub-images">
            {product.images.slice(0,3)
            .map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.title}
                onClick={() => handleSubImageClick(index)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <div className="head-info">
            <h1>{product.title}</h1>
            <h1>
              ${discountPercentage(
                product.price,
                product.discountPercentage
              )}
            </h1>
          </div>

          <div className="sub-header">
            <div className="quantity">
              <button onClick={decrementQuan}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuan}>+</button>
            </div>

            <div className="add-cart">
              <button>
                <BookmarkBorderIcon />
              </button>
              <button className="add">Add to cart</button>
            </div>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
      <FeaturedProducts />
    </>
  );
}

export default ProductPage;
