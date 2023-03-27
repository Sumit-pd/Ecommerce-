import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./contextProduct";
import reducer from "../reducer/filterProductReducer";

const FilterContex = createContext();

const initialState = {
    all_products: [],
    filtered_products: []
}
export const ContextProvider = ({ childern }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({ type: "LOAD_FILTERED_PRODUCT", payload: products }) ;
    }, [products])
    return (
        <>
            <FilterContex.Provider value={{ ...state }}>
                {childern}
            </FilterContex.Provider>
        </>
    );
};
export const useFilterContext = () => {
    return useContext(FilterContex);
}