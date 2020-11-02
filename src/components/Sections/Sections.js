import React from "react";
import classes from "./Sections.module.css";
import Popular from "./Popular/Popular";

const Sections = (props) => {
  return (
    <div className={classes.SectionContain}>
      <Popular />
      <Popular />
    </div>
  );
};

export default Sections;
