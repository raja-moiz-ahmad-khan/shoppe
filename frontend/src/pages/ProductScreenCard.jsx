import React, { useState } from "react";
import "../styles/productscreencard.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { Store } from "../Store";
import axios from "axios";

const ProductScreenCard = ({ products }) => {
  const [selectedImage, setSelectedImage] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async () => {
    const exitItem = cart.cartItems.find((x) => x._id === products._id);
    const quantity = exitItem ? exitItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/slug/${products.slug}`);

    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of Stock!");
      return;
    }
    ctxDispatch({
      type: "CART_AND_ITEM",
      payload: { ...products, quantity },
    });
  };

  const addToWishHandler = () => {
    ctxDispatch({
      type: "WISH_AND_ITEM",
      payload: { ...products, quantity: 1 },
    });
  };

  return (
    <>
      <Navbar />

      <div className="screen-container">
        <div className="screen-row">
          <div className="screen-col">
            <div className="screen-image">
              <div className="screen-top">
                <img
                  src={selectedImage || products.image}
                  alt={products.title}
                />
              </div>
              <div className="screen-bottom">
                <img
                  src={products.image}
                  onClick={() => setSelectedImage(`${products.image}`)}
                  alt={products.title}
                />
                <img
                  src={products.image1}
                  onClick={() => setSelectedImage(`${products.image1}`)}
                  alt={products.title}
                />
                <img
                  src={products.image2}
                  onClick={() => setSelectedImage(`${products.image2}`)}
                  alt={products.title}
                />
                <img
                  src={products.image3}
                  onClick={() => setSelectedImage(`${products.image3}`)}
                  alt={products.title}
                />
              </div>
            </div>
          </div>
          <div className="screen-col">
            <div className="first-div div">
              <h2 className="title">{products.title}</h2>
              <p className="category">{products.category}</p>
            </div>
            <div className="second-div div">
              <span className="price">Price: ${products.price}</span>
              <div className="quantity">Quantity:1</div>
            </div>
            <div className="third-div div">
              <p className="desc">{products.desc}</p>
            </div>
            <div className="forth-div div">
              <button className="cart" onClick={addToCartHandler}>
                Add to Cart
              </button>
              <button className="wish" onClick={addToWishHandler}>
                Add to Wish
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductScreenCard;
