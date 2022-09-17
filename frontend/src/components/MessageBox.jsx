import React from "react";
import "../styles/messagebox.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MessageBox = (props) => {
  return (
    <>
      <Navbar />
      <div className="message-container">
        <div className="message">
          <h2>{props.children}</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MessageBox;
