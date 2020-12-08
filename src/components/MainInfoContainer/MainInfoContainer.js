import React from "react";
import classes from "./MainInfoContainer.module.css";
import MainInfoFancyNav from "./MainInfoFancyNav/MainInfoFancyNav";

const MainInfoContainer = (props) => {
  return (
    <>
      <div className={classes.DetailsTitleArea}>
        <h2>
          {props.data.title} <span className={classes.Released}>({new Date(props.data.release_date).getFullYear()})</span>
        </h2>
        <div className={classes.InformationMore}>
          <ul>
            <li>
              {props.data.release_date} ({props.data.production_countries.length > 0 ? props.data.production_countries[0].iso_3166_1 : null})
            </li>
            <li>•</li>
            <li>{props.data.genres.map((gen) => gen.name).join(", ")}</li>
            <li>•</li>
            <li>{props.data.runtime + " MIN"}</li>
          </ul>
        </div>
        <MainInfoFancyNav rating={props.data.vote_average} />
        <div className={classes.StoryLineShort}>
          <h3>Overview</h3>
          <p>{props.data.overview}</p>
        </div>
        <div className={classes.CreatorInormation}>
          <ul>
            <li>
              {props.crew.filter((el) => el.job === "Director")[0].name} <br /> <span>Director</span>
            </li>
            <li>
              {props.crew.filter((el) => el.department === "Writing")[0].name || props.crew.filter((el) => el.job === "Writer")[0].name} <br />{" "}
              <span>Writer</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainInfoContainer;
