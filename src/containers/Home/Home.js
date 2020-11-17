import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Container from "../../hoc/Container/Container";
import FlexWrapper from "../../components/UI/FlexWrapper/FlexWrapper";
import classes from "./Home.module.css";
import Search from "../../components/Search/Search";
import Sidenav from "../../components/Sidenav/Sidenav";
import Sections from "../../components/Sections/Sections";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";

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
        <div className={classes.IsolatedBlogWrapper}>
          <Container>
            <Blog />
            <Footer />
          </Container>
        </div>
      </Aux>
    );
  }
}

export default Home;
