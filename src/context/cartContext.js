import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();


const getLocalStroageData = () => {
    let localStorageData = localStorage.getItem("sumitCart")
    if (localStorageData === []) {
        return [];
    }
    else {
        return JSON.parse(localStorageData);
    }
}
const initialState = {
    cart: getLocalStroageData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, details) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, details } });
    };

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id })
    }


    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    // we will be using local storage (there are mainly only two methods of local storage) we will be using the get method

    //increment and decrement
    const setIncrease = (id) => {
        dispatch({ type: "INCREASE", payload: id });
    }
    const setDecrease = (id) => {
        dispatch({ type: "DECREASE", payload: id });
    }


    // useEffect will be used because everytime the page is refreshed we need to add data to the cart array
    useEffect(() => {
        localStorage.setItem("sumitCart", JSON.stringify(state.cart))
    }, [state.cart])



    return (
        <CartContext.Provider value={{ ...state, addToCart, removeFromCart, clearCart, setIncrease, setDecrease }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };