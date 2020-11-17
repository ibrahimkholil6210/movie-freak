import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";

class Layout extends Component {
  render() {
    return <Aux>{this.props.children}</Aux>;
  }
}

export default Layout;
