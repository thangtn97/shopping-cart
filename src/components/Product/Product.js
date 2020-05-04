import React from "react";
import styles from "./Product.module.css";
const product = (props) => {
  return (
    <div className={styles.Product}>
      <div>
        <h2>{props.product.name} </h2>
        <h2>{props.product.price}</h2>
      </div>
      <span onClick={() => props.clicked(props.product)}>Add To Cart</span>
    </div>
  );
};

export default product;
