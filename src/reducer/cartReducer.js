const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, details } = action.payload;
     console.log(details)
  
     
  
      return state
    }
  
    
    return state;
  };
  
  export default cartReducer;