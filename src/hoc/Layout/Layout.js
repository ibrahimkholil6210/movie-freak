import React, { Component } from "react";
import Home from "../../containers/Home/Home";
import Aux from "../Auxiliary/Auxiliary";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Home />
      </Aux>
    );
  }
}

export default Layout;
