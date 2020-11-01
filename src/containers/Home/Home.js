import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Container from "../../hoc/Container/Container";
import classes from "./Home.module.css";

class Home extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <Container>
          <h1>Component need to be inside containers</h1>
        </Container>
      </Aux>
    );
  }
}

export default Home;
