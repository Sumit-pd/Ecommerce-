const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, details } = action.payload;

        let cartData ;
        cartData = {
            id : id + color , // we are adding this so that it same products can be distinguished between
            name : details.name ,
            color ,
            amount ,
            image : details.image[0].url, // we will be getting multiple images but we will be showing only the first image only
            price : details.price ,
        }



        return {
            ...state , 
            cart : [...state.cart , cartData] // this will add product details every time we click on add to cart option
            
        }
    }


    return state;
};

export default cartReducer;