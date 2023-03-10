// we are using the reducer folder because there are many reducer needed for this project
const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state, isLoading: true
            }
        case "API_ERROR":
            return {
                ...state, isLoading: false, isError: true
            }
        case "MY_API_DATA":
            const feature = action.payload.filter(element => { return element.featured === true })
            return {
                ...state, isLoading: false,
                products: action.payload,
                featureProducts: feature
            }
        case "SINGLE_LOADING":
            return {
                ...state, isSingleLoading: true
            }
        case "SINGLE_ERROR":
            return {
                ...state, isSingleLoading: false, isError: true
            }
        case "SET_SINGLE_PRODUCT":
            return {
                ...state, isSingleLoading: false,
                singleProduct: action.payload,
            }

        default:
            return state;
    }
}
export default productReducer;