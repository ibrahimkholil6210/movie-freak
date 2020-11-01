import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.SearchInputArea}>
      <input placeholder="What are you looking for?" />
    </div>
  );
};

export default Input;
