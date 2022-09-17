import React from "react";
import "../styles/messagebox.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LoadingBox = () => {
  return (
    <>
      <Navbar />
      <div className="message-container">
        <div className="message-loading">
          <h2>Loading...</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoadingBox;
