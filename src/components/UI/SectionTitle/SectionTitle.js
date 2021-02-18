import React, { useState } from "react";
import classes from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  const [list, setList] = useState(props.sectionNavigation);

  const handleActiveNavigation = (index, fullList) => {
    const newList = fullList.map((el, i) => (i === index ? { ...el, active: true } : { ...el, active: false }));
    setList(newList);
  };

  const listMarkUp = list.map((el, i, f) => (
    <li key={i} className={el.active ? classes.ListActive : null} onClick={() => handleActiveNavigation(i, f)}>
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
