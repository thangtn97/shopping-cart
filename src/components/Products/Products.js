import React from "react";
import Product from "../Product/Product";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import styles from "./Products.module.css";

class Products extends React.Component {
  //  state = {
  //    products: {},
  //  };

  componentDidMount() {
    this.props.onFetchProducts();
  }
  render() {
    const productLine = this.props.match.params.linkUrl;
    let products = null;
    if (this.props.products[productLine]) {
      this.props.products[productLine].map((i) => console.log(i));
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
    onFetchProducts: () => dispatch(actions.fetchProducts()),
  };
};
const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
