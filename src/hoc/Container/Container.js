import React from "react";
import classes from "./Container.module.css";

const Container = (porps) => {
  return <div className={classes.Container}>{porps.children}</div>;
};

export default Container;
