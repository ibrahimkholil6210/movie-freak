import React from "react";
import classes from "./SectionWrapper.module.css";

const SectionWrapper = (props) => {
  return <div className={classes.SectionWrapper}>{props.children}</div>;
};

export default SectionWrapper;
