import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [], //cart is empty by default
  },
  wish: {
    wishItems: [], //wish is empty by default
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_AND_ITEM":
      //add to cart

      const newItem = action.payload;
      const existItem = state.cart.cartItems.find((item) => item._id === newItem._id);
      const cartItems = existItem ? state.cart.cartItems.map((item) => item._id === existItem._id ? newItem : item) : [...state.cart.cartItems,newItem];

      return {...state, cart: {...state.cart, cartItems}};

    //add to wish
    case "WISH_AND_ITEM":
      return {
        ...state,
        wish: {
          ...state.wish,
          wishItems: [...state.wish.wishItems, action.payload],
        },
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
