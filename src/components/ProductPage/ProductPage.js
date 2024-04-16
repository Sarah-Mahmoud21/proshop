import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import FeaturedProducts from "../helper/FeaturedProducts/FeaturedProducts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "../ProductPage/ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
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
    setQuantity(quantity + 1);
  };
  const decrementQuan = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const discountPercentage =(originalPrice,discountRate)=>{
    let newPrice=0;
     newPrice = originalPrice - (originalPrice * discountRate / 100).toFixed(2); 
     parseFloat(newPrice.toFixed(2));
     return newPrice;
}
  return (
    <>
      <Header />
      <div className="product">
        <div className="images">
          <img src={product.thumbnail} alt={product.title} />
          <div className="sub-images">
          <img src={product.images[0]? product.images[0]: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=' } alt={product.title} />
            <img src={product.images[1]? product.images[1]: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=' } alt={product.title} />
            <img src={product.images[2]? product.images[2]: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=' } alt={product.title} />
          </div>
        </div>

        <div className="product-info">
          <div className="head-info">
            <h1>{product.title}</h1>
            <h1> ${discountPercentage(product.price,product.discountPercentage)}</h1>
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
          <p>
            Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex
            enim aperiam consequatur. Est temporibus ab. Pariatur aut ut
            temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis
            consequuntur non sunt et neque. Aut dolorem repellat quo architecto
            sint minima doloremque. At quae laborum incidunt vel voluptas dolor
            similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus
            dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates
            a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis
            laborum consequuntur sint porro omnis et facere. Voluptatem vitae
            quo. Similique atque cumque culpa temporibus consequatur
            voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et
            qui consequatur aut. Eum consequuntur necessitatibus veritatis
            voluptatem qui velit repellat numquam tempore. Qui quam eos modi.
            Libero corporis ut et. Eligendi est expedita aspernatur non
            repellendus nihil perferendis. Et deserunt doloremque esse. Iusto
            veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut
            sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae
            magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati
            temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore
            assumenda. Aut doloribus unde repellat pariatur consequatur.
            Blanditiis voluptas aut tempora facilis fugi.
          </p>
        </div>
      </div>
      <FeaturedProducts />
    </>
  );
}

export default ProductPage;
