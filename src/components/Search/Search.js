import React from "react";
import classes from "./Search.module.css";
import Input from "./Input/Input";
const Search = (props) => {
  return (
    <div className={classes.SearchWrapper}>
      <div className={classes.SearchTopSection}>
        <h1>All you Need About Movies</h1>
        <p>
          <span>Millions </span>
          <span>of </span>
          <span>movies, </span>
          <span>TV </span>
          <span>shows </span>
          <span>and </span>
          <span>people </span>
          <span>discover. </span>
          <span>Single </span>
          <span>click </span>
          <span>away </span>
        </p>
      </div>
      <Input />
    </div>
  );
};

export default Search;
