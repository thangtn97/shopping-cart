import React, { Component } from "react";
import ProductLine from "../ProductLine/ProductLine";
import styles from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    productLines: [
      {
        id: 1,
        name: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        linkUrl: "shop/hats",
      },
      {
        id: 2,
        name: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        linkUrl: "shop/jackets",
      },
      {
        id: 3,
        name: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        linkUrl: "shop/sneakers",
      },
      {
        id: 4,
        name: "men",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        linkUrl: "shop/men",
        size: "large",
      },
      {
        id: 5,
        name: "women",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        linkUrl: "shop/women",
        size: "large",
      },
    ],
  };
  clickProductLineHandle = (linkUrl) => {
    this.props.history.push(`/${linkUrl}`);
  };
  render() {
    return (
      <div className={styles.HomePage}>
        {this.state.productLines.map((prdLine) => (
          <ProductLine
            key={prdLine.id}
            productLine={prdLine}
            clickProductLineHandle={this.clickProductLineHandle}
          />
        ))}
      </div>
    );
  }
}

export default HomePage;
