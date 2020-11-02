import React from "react";
import classes from "./FlexWrapper.module.css";

const FlexWrrapper = (props) => {
  return <div className={classes.FlexWrapper}>{props.children}</div>;
};

export default FlexWrrapper;
