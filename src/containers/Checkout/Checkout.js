import React from "react";
import { connect } from "react-redux";
import styles from "./Checkout.module.css";
import ListCart from "../../components/ListCart/ListCart";
class Checkout extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps === this.props ? false : true;
  }
  render() {
    return (
      <table className={styles.Table}>
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <ListCart />
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    totalQuantity: state.cartReducer.cart,
    totalPrice: state.cartReducer.totalPrice,
  };
};
export default connect(mapStateToProps)(Checkout);
