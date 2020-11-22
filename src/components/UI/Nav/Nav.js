import React from "react";
import { withRouter, Link } from "react-router-dom";
import classes from "./Nav.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import { MdKeyboardReturn } from "react-icons/md";

const Nav = (props) => {
  const routeParam = props.match.params.id;
  return (
    <Aux>
      <ul className={classes.NavigationItems}>
        {props.match.url === `/movie/details/${routeParam}` ? (
          <>
            <li>
              <Link to='/' className={classes.GoBackLink}>
                <MdKeyboardReturn /> Go Back To Home
              </Link>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </Aux>
  );
};

export default withRouter(Nav);
