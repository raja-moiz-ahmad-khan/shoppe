import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../utils";
import ProductScreenCard from "./ProductScreenCard";
// import logger from "use-reducer-logger";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };

    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductScreen = () => {

  const params = useParams();
  const {slug} = params;

  const [{loading, error, products}, dispatch] = useReducer(reducer, {
    products:[],
    loading: true,
    error: ""
  })

  //const [products, setProducts] = useState([]);

  useEffect(() => {

    const fecthData = async () => {
      dispatch({type:"FETCH_REQUEST"});
try{
  const result = await axios.get(`/api/products/slug/${slug}`);
  dispatch({type:"FETCH_SUCCESS", payload: result.data});
} catch(err){
  dispatch({type:"FETCH_FAIL", payload: getError(err)});
}

      
      //setProducts(result.data);
    };
    fecthData();
  }, [slug]);


  return loading ? (<LoadingBox/>) : error ? (<MessageBox>{error}</MessageBox>) 
  : (
  <ProductScreenCard products={products}/>
  );

};

export default ProductScreen;
