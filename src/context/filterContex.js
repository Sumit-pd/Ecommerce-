import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./contextProduct";
import reducer from "../reducer/filterProductReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    gridView: true,
    sorting_value: "lowest",
    filter: {
        text: "",
        category: "all", // initially the filter will be all indicating that there are no filters
        company: "all"
    }
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    //this function sets the gridview
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }

    //this function sets the listView
    const setListView = () => {
        return dispatch({ type: "SET_List_VIEW" })
    }


    //this function will be used for sorting
    const sorting = (e) => {
        let userValue = e.target.value;
        return dispatch({ type: "Get_sorted_value", payload: userValue })
    }



    //update filter value of the search bar
    const useFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        return dispatch({ type: "Update_Filter_Value", payload: { name, value } })

    }


    useEffect(() => {
        dispatch({ type: "Filter_Sort" , payload : products });
        dispatch({ type: "FILTER_UPDATE" });
    }, [products, state.sorting_value, state.filter]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider
            value={{ ...state, setGridView, setListView, sorting, useFilterValue }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};