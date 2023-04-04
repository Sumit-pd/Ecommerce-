
const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };
        case "SET_GRIDVIEW" :
            return {
                ...state , 
                gridView : true
            }
        default:
            return state

    }

};

export default reducer;

