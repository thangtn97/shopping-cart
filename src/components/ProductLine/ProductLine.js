import React from "react";
import styles from "./ProductLine.module.css";

const productLine = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.productLine.imageUrl})` }}
      className={styles.ProductLine}
    >
      <span
        className={styles.Content}
        onClick={() => props.clickProductLineHandle(props.productLine.linkUrl)}
      >
        <h2>{props.productLine.name}</h2>
        <h2>Shop now</h2>
      </span>
    </div>
  );
};

export default productLine;
