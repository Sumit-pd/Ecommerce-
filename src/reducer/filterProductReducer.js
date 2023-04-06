
const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };
        case "SET_GRID_VIEW" :
            return {
                ...state , 
                gridView : true
            }
        case "SET_List_VIEW" :
            return {
                ...state , 
                gridView : false 
            }
        default:
            return state

    }

};

export default reducer;

