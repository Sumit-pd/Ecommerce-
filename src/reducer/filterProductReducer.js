
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
        case "Get_sorted_value" :
            let userSelectValue = document.getElementById("sort")
            let value = userSelectValue.options[userSelectValue.selectedIndex].value
            // console.log(value)
            return {
                ...state , 
                sorting_value : value
            }

        default:
            return state

    }

};

export default reducer;

