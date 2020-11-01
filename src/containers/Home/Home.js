import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Container from "../../hoc/Container/Container";
import classes from "./Home.module.css";
import Search from "../../components/Search/Search";

class Home extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <Search />
        <Container></Container>
      </Aux>
    );
  }
}

export default Home;
