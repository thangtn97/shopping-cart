import * as actionTypes from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    product: product,
  };
};

export const fetchCartItem = () => {
  return {
    type: actionTypes.FETCH_CART_ITEM,
  };
};

export const clickMoreQuantity = (id) => {
  return {
    type: actionTypes.CLICK_MORE_QUANTITY,
    id: id,
  };
};

export const clickLessQuantity = (id) => {
  return {
    type: actionTypes.CLICK_LESS_QUANTITY,
    id: id,
  };
};

export const clickRemoveItem = (id) => {
  return {
    type: actionTypes.CLICK_REMOVE_ITEM,
    id: id,
  };
};
