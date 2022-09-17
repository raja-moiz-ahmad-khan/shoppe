import React, { useContext } from "react";
import { useState } from "react";
import { Store } from "../Store";
import "../styles/quick.css";
import axios from "axios";

const Quick = ({ item }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { cart } = state;

  const addToCartHandler = async () => {
    const exitItem = cart.cartItems.find((x) => x._id === item._id);
    const quantity = exitItem ? exitItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/slug/${item.slug}`);

    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of Stock!");
      return;
    }

    ctxDispatch({
      type: "CART_AND_ITEM",
      payload: { ...item, quantity },
    });
  };

  const addToWishHandler = () => {
    ctxDispatch({
      type: "WISH_AND_ITEM",
      payload: { ...item, quantity: 1 },
    });
  };

  const [selectedImage, setSelectedImage] = useState("");

  const [style, setStyle] = useState("main-container");

  const changeStyle = () => {
    setStyle("main-containerOne");
  };
  return (
    <div className={style}>
      <div className="card-quick" key={item._id}>
        <div className="card-row">
          <div className="card-image">
            <div className="card-top">
              <img src={selectedImage || item.image} alt={item.title} />
            </div>
            <div className="card-bottom">
              <img
                src={item.image}
                onClick={() => setSelectedImage(`${item.image}`)}
                alt={item.title}
              />
              <img
                src={item.image1}
                onClick={() => setSelectedImage(`${item.image1}`)}
                alt={item.title}
              />
              <img
                src={item.image2}
                onClick={() => setSelectedImage(`${item.image2}`)}
                alt={item.title}
              />
              <img
                src={item.image3}
                onClick={() => setSelectedImage(`${item.image3}`)}
                alt={item.title}
              />
            </div>
          </div>
        </div>
        <div className="card-row">
          <div className="first-div div">
            <h2 className="title">{item.title}</h2>
            <p className="category">{item.category}</p>
          </div>
          <div className="second-div div">
            <span className="price">Price: ${item.price}</span>
            <div className="quantity">Quantity:1</div>
          </div>
          <div className="third-div div">
            <p className="desc">{item.desc}</p>
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
      <button className="back" onClick={changeStyle}>
        Close
      </button>
    </div>
  );
};

export default Quick;
