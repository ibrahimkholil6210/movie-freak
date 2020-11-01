import React from "react";
import classes from "./Logo.module.css";
import Aux from "../../../hoc/Auxiliary/Aux";

const Logo = (porps) => {
  return (
    <Aux>
      <div className={classes.LogoWrapeer}>
        <h3>Movie</h3>
        <h3 className={classes.BgBlack}>
          <span>Freak</span>
        </h3>
      </div>
    </Aux>
  );
};

export default Logo;
