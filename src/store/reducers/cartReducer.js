import * as actionTypes from "../actions/actionTypes";
const initialState = {
  cart: {},
  quantity: 0,
  totalPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const idProduct = action.product.id;
      const cart = { ...state.cart };
      if (cart[idProduct]) {
        cart[idProduct].quantity++;
      } else {
        cart[idProduct] = {
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

    case actionTypes.CLICK_LESS_QUANTITY:
      const newCart = { ...state.cart };
      newCart[action.id].quantity--;
      return { ...state, cart: newCart };

    case actionTypes.CLICK_MORE_QUANTITY:
      const newCart1 = { ...state.cart };
      newCart1[action.id].quantity++;
      return { ...state, cart: newCart1 };

    case actionTypes.CLICK_REMOVE_ITEM:
      let newCart2 = { ...state.cart };
      delete newCart2[action.id];
      const newTotalQuantity = state.quantity - state.cart[action.id].quantity;
      return {
        ...state,
        cart: newCart2,
        quantity: newTotalQuantity,
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
