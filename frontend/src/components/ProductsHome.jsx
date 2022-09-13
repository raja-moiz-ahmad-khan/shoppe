import axios from "axios";
import React, { useEffect, useReducer } from "react";
// import { products } from "../data";
import ProductHome from "./ProductHome";
import "../styles/productshome.css";
import logger from "use-reducer-logger"


const reducer = (state, action) =>{
  switch(action.type){
    case "FETCH_REQUEST": return{...state, loading: true};

    case "FETCH_SUCCESS": return{...state, products: action.payload, loading: false};

    case "FETCH_FAIL": return{...state, loading: false, error: action.payload};
    default: return state;
  }
}

const ProductsHome = () => {

  const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
    products:[],
    loading: true,
    error: ""
  })

  //const [products, setProducts] = useState([]);

  useEffect(() => {

    const fecthData = async () => {
      dispatch({type:"FETCH_REQUEST"});
try{
  const result = await axios.get("/api/products");
  dispatch({type:"FETCH_SUCCESS", payload: result.data});
} catch(err){
  dispatch({type:"FETCH_FAIL", payload: err.message});
}

      
      //setProducts(result.data);
    };
    fecthData();
  }, []);

  return (
    <div className="hps-container">
      <h2>Latest Products</h2>
      <div className="hps-row">
        
        {
           loading ? (<h1 className="loading">loading...</h1>) : error ? (<h1 className="error">{error}</h1>) : (
            products.slice(-8).map((item) => (
              <ProductHome item={item} key={item._id} />
            ))
             )
         }
      </div>
    </div>
  );
};

export default ProductsHome;
