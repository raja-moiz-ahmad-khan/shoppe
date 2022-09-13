// import axios from "axios";
import {
  faEye,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "../styles/producthome.css";
import Quick from "./Quick";
// import { useEffect } from "react";

const ProductHome = ({ item }) => {
  const [open, setOpen] = useState(false);

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
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
      {open && <Quick item={item} />}
    </div>
  );
};

export default ProductHome;
