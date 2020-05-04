const initialState = {
  cart: [],
  quantity: 0,
  totalPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart,
        newQuantity,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
