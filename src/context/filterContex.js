import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./contextProduct";
import reducer from "../reducer/filterProductReducer";


const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    gridView: true
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider
            value={{ ...state , setGridView }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};