import React from "react";
import Product from "../Product/Product";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import styles from "./Products.module.css";

class Products extends React.Component {
  componentDidMount() {
    this.props.onInitProducts();
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.products === this.props.products) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const productLine = this.props.match.params.linkUrl;
    let products = null;
    if (this.props.products[productLine]) {
      products = this.props.products[productLine].map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            clicked={this.props.onAddToCart}
          />
        );
      });
    } else {
      products = <div>Haven't item</div>;
    }
    return <div className={styles.Products}>{products}</div>;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product) => dispatch(actions.addToCart(product)),
    onInitProducts: () => dispatch(actions.initProducts()),
  };
};
const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
