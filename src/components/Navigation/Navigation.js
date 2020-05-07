import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
const navigation = (props) => {
  return (
    <div className={styles.Navigation}>
      <div>logo</div>
      <ul className={styles.Menu}>
        <li>
          <Link to="">SHOP</Link>
        </li>
        <li>
          <Link to="">CONTACT</Link>
        </li>
        <li>
          <Link to="">SIGN IN</Link>
        </li>
        <li className={styles.Checkout}>
          <Link to="/checkout">
            <img
              src="https://img.icons8.com/carbon-copy/32/000000/shopping-bag.png"
              alt="shopping bag"
            />
            <p>{props.quantity}</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default navigation;
