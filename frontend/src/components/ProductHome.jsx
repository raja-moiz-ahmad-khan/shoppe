// import axios from "axios";
import {
  faEye,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data";
import { Store } from "../Store";
// import { useState } from "react";
import "../styles/producthome.css";
import Quick from "./Quick";
import axios from "axios";
// import { useEffect } from "react";

const ProductHome = ({ item }) => {
  const [open, setOpen] = useState(false);

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

  return (
    <div className="hp-card">
      <div className="card-header">
        <Link to={`/product/${item.slug}`}>
          <img src={item.image} alt={item.title} />
        </Link>
      </div>
      <div className="card-body">
        <h3 className="title">{item.title}</h3>
        <span>${item.price}</span>
      </div>
      <div className="card-footer">
        <button onClick={() => setOpen(true)} className="eye">
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} onClick={addToWishHandler} />
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingBag} onClick={addToCartHandler} />
        </button>
      </div>
      {open && <Quick item={item} />}
    </div>
  );
};

export default ProductHome;
