import React, { useState } from "react";
import "../styles/productscreencard.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ProductScreenCard = ({products}) => {

    const [selectedImage, setSelectedImage] = useState("");

  return (
    <>
      <Navbar />

      <div className="screen-container">
        <div className="screen-row">
          <div className="screen-col">
          <div className="screen-image">
            <div className="screen-top">
              <img src={selectedImage || products.image} alt={products.title} />
            </div>
            <div className="screen-bottom">
              <img src={products.image} onClick={() => setSelectedImage(`${products.image}`)} alt={products.title} />
              <img src={products.image1} onClick={() => setSelectedImage(`${products.image1}`)} alt={products.title} />
              <img src={products.image2} onClick={() => setSelectedImage(`${products.image2}`)} alt={products.title} />
              <img src={products.image3} onClick={() => setSelectedImage(`${products.image3}`)} alt={products.title} />
            </div>
          </div>
          </div>
          <div className="screen-col">

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductScreenCard;
