import React from "react";
import classes from "./Nav.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const Nav = (porps) => {
  return (
    <Aux>
      <ul className={classes.NavigationItems}>
        <li>
          <a href='/' className={classes.Active}>
            Home
          </a>
        </li>
        <li>
          <a href='/'>Trending</a>
        </li>
        <li>
          <a href='/'>Featured</a>
        </li>
        <li>
          <a href='/'>People</a>
        </li>
      </ul>
    </Aux>
  );
};

export default Nav;
