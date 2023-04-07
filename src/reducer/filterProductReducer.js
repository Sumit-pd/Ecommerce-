
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
            
            return {
                ...state,
                sorting_value: action.payload
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
                        return;
                }
            }

            sortedProduct = ogCopy.sort(sortFunction) ;
            return {
                ...state,
                filter_products: sortedProduct
            };
        case "Update_Filter_Value" :
            const {name , value } = action.payload ;
            return {
                ...state , 
                filter : {
                    ...state.filter,
                    [name] : value
                }
            }
        case "FILTER_UPDATE" :
            let {all_products } = state ;
            let copyAllProducts = [...all_products] ;
            const {text} = state.filter
            // console.log(all_products)
            
            //the below line will execute if the user uses the search button
            if(text){
                copyAllProducts = copyAllProducts.filter((curElement) => {
                    return curElement.name.toLowerCase().includes(text) ;
                })
                
            }            
            return {
                ...state , 
                filter_products : copyAllProducts 
            }

        default:
            return state

    }

};

export default reducer;

