import React from "react";
import classes from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  const listMarkUp = props.sectionNavigation.map((el, i) => (
    <li key={i} className={i === 0 ? classes.ListActive : null}>
      {el.title}
    </li>
  ));
  return (
    <div className={classes.SectionTitleWrapper}>
      <div className={classes.TitleItem}>
        <h2 className={classes.SectionTitle}>{props.title}</h2>
      </div>
      <div className={classes.TitleItem}>
        <ul>{listMarkUp}</ul>
      </div>
    </div>
  );
};

export default SectionTitle;
