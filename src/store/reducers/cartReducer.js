const initialState = {
  cart: {},
  quantity: 0,
  totalPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const idProduct = action.product.id;
      const cart = { ...state.cart };
      if (cart[`${idProduct}`]) {
        cart[`${idProduct}`].quantity++;
      } else {
        cart[`${idProduct}`] = {
          product: action.product,
          quantity: 1,
        };
      }
      const quantity = state.quantity + 1;
      return {
        ...state,
        cart: cart,
        quantity: quantity,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
