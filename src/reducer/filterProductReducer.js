
const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTERED_PRODUCT":
            return {
                ...state,
                filtered_products: [...action.payload],
                all_products : [...action.payload]
            };

        default:
            return state
            
    }

}

export default reducer;
