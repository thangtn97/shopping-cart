import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Products from "./components/Products/Products";
import Navigation from "./components/Navigation/Navigation";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation quantity={this.props.quantity} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/:linkUrl" component={Products} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    quantity: state.cartReducer.quantity,
  };
};

export default connect(mapStateToProps)(App);
