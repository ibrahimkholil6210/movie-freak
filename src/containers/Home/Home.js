import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Container from "../../hoc/Container/Container";
import FlexWrapper from "../../components/UI/FlexWrapper/FlexWrapper";
import classes from "./Home.module.css";
import Search from "../../components/Search/Search";
import Sidenav from "../../components/Sidenav/Sidenav";
import Sections from "../../components/Sections/Sections";

class Home extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <Search />
        <Container>
          <FlexWrapper>
            <Sidenav />
            <Sections />
          </FlexWrapper>
        </Container>
      </Aux>
    );
  }
}

export default Home;
