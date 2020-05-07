import axios from "axios";
import * as actionTypes from "./actionTypes";
export const initProducts = () => {
  return (dispatch) => {
    axios
      .get("https://ecommerce-31a69.firebaseio.com/products.json")
      .then((res) => dispatch(fetchProductsSuccess(res.data)));
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products: products,
  };
};
