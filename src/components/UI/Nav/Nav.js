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
              <Link to='/' className={classes.Active}>
                Home
              </Link>
            </li>
            <li>
              <Link to='#treanding'>Trending</Link>
            </li>
          </>
        )}
      </ul>
    </Aux>
  );
};

export default withRouter(Nav);
