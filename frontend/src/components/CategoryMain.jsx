import React, { useEffect, useState } from "react";
//import { category } from "../data";
import "../styles/categoryMain.css";
import axios from "axios";

const CategoryMain = () => {

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const result = await axios.get("/api/category");
      setCategory(result.data);
    };
    fecthData();
  }, []);

  return (
    <div className="c-container">
      <div className="c-row">
        {category.map((item) => (
          <div className="c-col" key={item._id}>
            <img src={item.image} alt="{item.title}" />
            <div className="category-content">
              <p>{item.title}</p>
             <button className="c-btn">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMain;
