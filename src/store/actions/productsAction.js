import axios from "axios";
export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("https://ecommerce-31a69.firebaseio.com/products.json")
      .then((res) => dispatch(fetchProductsSuccess(res.data)));
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    products: products,
  };
};
