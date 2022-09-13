import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import '../styles/productshop.css'

const ProductShop = ({ item }) => {
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
        <button><FontAwesomeIcon icon={faHeart} /></button>
        <button><FontAwesomeIcon icon={faShoppingBag} /></button>
      </div>
    </div>
  );
};
export default ProductShop;
