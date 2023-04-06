
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
            let userSelectValue = document.getElementById("sort")
            // console.log(userSelectValue) ;
            let value = userSelectValue.options[userSelectValue.selectedIndex].value
            // console.log(value)
            return {
                ...state,
                sorting_value: value
            }
        case "Filter_Sort":
            let sortedProduct;
            let ogCopy = [...action.payload]
            if (state.sorting_value === "a-z") {
                sortedProduct = ogCopy.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (state.sorting_value === "z-a") {
                sortedProduct = ogCopy.sort((a, b) => b.name.localeCompare(a.name))
            }
            if (state.sorting_value === "lowest") {
                sortedProduct = ogCopy.sort((a, b) => a.price - b.price )
            }
            if (state.sorting_value === "highest") {
                sortedProduct = ogCopy.sort((a, b) => b.price - a.price )
            }
            return {
                ...state,
                filter_products: sortedProduct
            }

        default:
            return state

    }

};

export default reducer;

