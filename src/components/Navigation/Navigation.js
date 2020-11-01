import React from "react";
import classes from "./Navigation.module.css";
import Container from "../../hoc/Container/Container";
import Logo from "../UI/Logo/Logo";
import Nav from "../UI/Nav/Nav";

const Navigation = (props) => {
  return (
    <header className={classes.HeaderArea}>
      <Container>
        <nav>
          <div className="Main-logo">
            <Logo />
          </div>
          <div className="Main-nav">
            <Nav />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
