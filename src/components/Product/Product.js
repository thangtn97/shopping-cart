import React from "react";
import styles from "./Product.module.css";
const product = (props) => {
  return (
    <div className={styles.Product}>
      <div
        style={{ backgroundImage: `url(${props.product.image})` }}
        className={styles.Image}
      >
        <span
          className={styles.Content}
          onClick={() => props.clicked(props.product)}
        >
          Add To Cart
        </span>
      </div>
      <div className={styles.Info}>
        <p>{props.product.name} </p>
        <p>{props.product.price}</p>
      </div>
    </div>
  );
};

export default product;
