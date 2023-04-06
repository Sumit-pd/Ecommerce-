
const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };
        case "SET_GRID_VIEW":
            return {
                ...state,
                gridView: true
            }
        case "SET_List_VIEW":
            return {
                ...state,
                gridView: false
            }
        case "Get_sorted_value":
            let value = action.payload
            return {
                ...state,
                sorting_value: value
            }
        case "Filter_Sort":
            let sortedProduct;
            const { filter_products , sorting_value } = state;
            let ogCopy = [...filter_products]
            const sortFunction = (a, b) => {
                switch (sorting_value) {
                    case "a-z":
                        return a.name.localeCompare(b.name)
                    case "z-a":
                        return b.name.localeCompare(a.name) ;
                    case "lowest":
                        return a.price - b.price ;
                    case "highest":
                        return b.price - a.price

                    default:
                        break;
                }
            }

            sortedProduct = ogCopy.sort(sortFunction) ;
            return {
                ...state,
                filter_products: sortedProduct
            }

        default:
            return state

    }

};

export default reducer;

