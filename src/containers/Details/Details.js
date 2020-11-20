import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Container from "../../hoc/Container/Container";
import FlexWrapper from "../../components/UI/FlexWrapper/FlexWrapper";
import classes from "./Details.module.css";
import Footer from "../../components/Footer/Footer";

class Details extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <Container>
          <FlexWrapper></FlexWrapper>
        </Container>

        <div className={classes.IsolatedBlogWrapper}>
          <Container>
            <Footer />
          </Container>
        </div>
      </Aux>
    );
  }
}

export default withRouter(Details);
