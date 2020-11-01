import React from "react";
import classes from "./Nav.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import { MdHome, MdStars, MdTrendingUp, MdPublic } from "react-icons/md";

const Nav = (porps) => {
  return (
    <Aux>
      <ul className={classes.NavigationItems}>
        <li>
          <a href="/">
            <span>
              <MdHome />
            </span>
            Home
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <MdStars />
            </span>
            Trending
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <MdTrendingUp />
            </span>
            Featured
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <MdPublic />
            </span>
            People
          </a>
        </li>
      </ul>
    </Aux>
  );
};

export default Nav;
