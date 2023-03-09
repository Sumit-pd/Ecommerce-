import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer"

const Appcontext = createContext();
const API = "https://api.pujakaitem.com/api/products"

const initalState = {
  isLoading: false,
  isError: false,
  products: [], // this will contain all the product of the page
  featureProducts: [] // this will contain the feature product only
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" }) // this is for loading part of the section 
    try {
      const res = await axios.get(url); // axios helps to get requests from the browser ,ie , this will make get request and give me a promise for using the same
      const products = await res.data;
      dispatch({ type: "MY_API_DATA", payload: products })
    } catch (error) {
      dispatch({ type: "API_ERROR" }) // when there is an error this will be called
    }
  }
  useEffect(() => {
    getProducts(API);
  }, [])

  return (<Appcontext.Provider value={{ ...state }}>
    {children}
  </Appcontext.Provider>)
}
const useProductContext = () => {
  return useContext(Appcontext);
}
export { AppProvider, Appcontext, useProductContext };