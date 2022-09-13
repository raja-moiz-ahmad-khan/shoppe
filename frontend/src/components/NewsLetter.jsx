import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/newsletter.css";

const NewsLetter = () => {
  return (
    <div className="new-container">
      <div className="new-row">
        <div className="new-col">
          <h2 className="new-title">News Letter</h2>
          <p className="new-desc">Get Timely Updates From Your Favorite Products</p>
          <div className="input-container">
            <input type="text" placeholder="Your E-Mail"/>
            <button><FontAwesomeIcon icon={faPaperPlane} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
