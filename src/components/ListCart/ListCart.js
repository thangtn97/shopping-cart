import React, { Fragment } from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import * as actions from "../../store/actions/index";

const listCart = (props) => {
  let listCart = null;
  if (Object.keys(props.cart).length !== 0) {
    listCart = Object.keys(props.cart).map((id) => {
      console.log(props.cart[id]);
      return (
        <tbody key={id}>
          <tr>
            <CartItem
              name={props.cart[id].product.name}
              imgUrl={props.cart[id].product.image}
              price={props.cart[id].product.price}
              quantity={props.cart[id].quantity}
              clickLess={props.onClickLess}
              clickMore={props.onClickMore}
              clickRemove={props.onClickRemove}
              id={props.cart[id].product.id}
            />
          </tr>
        </tbody>
      );
    });
  } else {
    listCart = (
      <tbody>
        <tr>
          <th>Have no item in cart</th>
        </tr>
      </tbody>
    );
  }
  return <Fragment>{listCart}</Fragment>;
};
const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    totalQuantity: state.cartReducer.cart,
    totalPrice: state.cartReducer.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickLess: (id) => dispatch(actions.clickLessQuantity(id)),
    onClickMore: (id) => dispatch(actions.clickMoreQuantity(id)),
    onClickRemove: (id) => dispatch(actions.clickRemoveItem(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(listCart);
