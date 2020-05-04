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
        <li>
          <Link to="/checkout">{props.quantity}</Link>
        </li>
      </ul>
    </div>
  );
};
export default navigation;
