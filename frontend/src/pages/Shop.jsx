import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductsShop from "../components/ProductsShop";
import "../styles/shop.css";

export default function Shop() {
  return (
    <div>
      <Navbar />
      <div className="s-row">
        <div className="s-col">
          <ProductsShop />
        </div>
      </div>
      <Footer />
    </div>
  );
}
