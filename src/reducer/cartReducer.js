const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, details } = action.payload;

        let cartData;
        cartData = {
            id: id + color, // we are adding this so that it same products can be distinguished between
            name: details.name,
            color,
            amount,
            image: details.image[0].url, // we will be getting multiple images but we will be showing only the first image only
            price: details.price,
        }



        return {
            ...state,
            cart: [...state.cart, cartData] // this will add product details every time we click on add to cart option

        }
    }
    if (action.type === "REMOVE_FROM_CART") {
        let id = action.payload ;
        let newArray = state.cart ;
        newArray = newArray.filter((curElem) => {
            return curElem.id !== id ;
        })
        // console.log(id)
        return {
            ...state , 
            cart : newArray
        }
    }


    return state;
};

export default cartReducer;