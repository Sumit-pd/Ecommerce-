
const reducer = (state, action) => {
    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.price);
            // const maxi = Math.max.apply(Math , priceArr) // we can add undefinded and null as well
            //we can also do this with the help of spread opeator
            const maxi = Math.max(...priceArr)
            /*
            syntax of the reducer function 
            arr.reduce((accumulator , curElement , index , array)=> {
            } , initial value)
            
            */
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filter: {
                    ...state.filter,
                    maxPrice: maxi,
                    price: maxi
                }
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
            const { filter_products, sorting_value } = state;
            let ogCopy = [...filter_products]
            const sortFunction = (a, b) => {
                switch (sorting_value) {
                    case "a-z":
                        return a.name.localeCompare(b.name)
                    case "z-a":
                        return b.name.localeCompare(a.name);
                    case "lowest":
                        return a.price - b.price;
                    case "highest":
                        return b.price - a.price

                    default:
                        return;
                }
            }

            sortedProduct = ogCopy.sort(sortFunction);
            return {
                ...state,
                filter_products: sortedProduct
            };
        case "Update_Filter_Value":
            const { name, value } = action.payload;
            // here name signifies the name of the filter that could be filter on the basis of color category or company
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: value
                }
            }
        case "clearFilter":
            return {
                ...state , 
                filter_products: action.payload , 
                filter: {
                    text: "",
                    category: "all", // initially the filter will be all indicating that there are no filters
                    company: "all",
                    color: "all",
                    maxPrice : state.filter.maxPrice , 
                    price : state.filter.maxPrice, 
                    minPrice : 0
                }
            }
        case "FILTER_UPDATE":
            let { all_products } = state;
            let copyAllProducts = [...all_products];
            const { text, category, company, color , price } = state.filter


            //the below line will execute if the user uses the search button
            if (text) {
                copyAllProducts = copyAllProducts.filter((curElement) => {
                    return curElement.name.toLowerCase().includes(text);
                })

            }
            // the below line will execute if the category filter changes 
            if (category) {
                if (category !== "all") {
                    copyAllProducts = copyAllProducts.filter((curElement) => {
                        return curElement.category === category;
                    })
                }
            }
            if (company) {
                if (company !== "all") {
                    copyAllProducts = copyAllProducts.filter((curElement) => {
                        return curElement.company.toLowerCase() === company.toLowerCase();
                    })
                }
            }
            if (color) {
                if (color !== "all") {
                    copyAllProducts = copyAllProducts.filter((curElement) => {
                        return curElement.colors.includes(color)
                        //the includes method will find the color in the array of colors from the api
                    })
                }
            }
            if(price){
                copyAllProducts = copyAllProducts.filter((curElem) =>{
                    return curElem.price <= price ;
                })
            }
            return {
                ...state,
                filter_products: copyAllProducts
            }

        default:
            return state

    }

};

export default reducer;

