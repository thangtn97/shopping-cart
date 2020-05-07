import React, { Fragment } from "react";
import styles from "./CartItem.module.css";

const cartItem = (props) => {
  return (
    <Fragment>
      <th>
        <img
          src="https://img.icons8.com/wired/30/000000/filled-trash.png"
          alt="remove"
          onClick={() => props.clickRemove(props.id)}
        />
      </th>
      <th>
        <img className={styles.Image} src={props.imgUrl} alt="description" />
      </th>
      <th>{props.name}</th>
      <th>{props.price}</th>
      <th>
        <img
          src="https://img.icons8.com/android/13/000000/chevron-left.png"
          onClick={() => props.clickLess(props.id)}
          alt="less"
        />
        {props.quantity}
        <img
          src="https://img.icons8.com/android/13/000000/chevron-right.png"
          alt="more"
          onClick={() => props.clickMore(props.id)}
        />
      </th>
      <th>{props.price * props.quantity}</th>
    </Fragment>
  );
};
export default cartItem;
