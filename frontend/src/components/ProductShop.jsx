import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../Store";
import "../styles/productshop.css";
import axios from "axios";

const ProductShop = ({ item }) => {
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
    <div className="ps-card">
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
        <button>
          <FontAwesomeIcon icon={faHeart} onClick={addToWishHandler} />
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingBag} onClick={addToCartHandler} />
        </button>
      </div>
    </div>
  );
};
export default ProductShop;
