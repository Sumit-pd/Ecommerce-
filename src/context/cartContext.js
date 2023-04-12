import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, details) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, details } });
  };

  const removeFromCart = (id) =>{
    dispatch({type : "REMOVE_FROM_CART" , payload : id })
  }

  

  return (
    <CartContext.Provider value={{ ...state, addToCart , removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };