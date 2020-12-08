import React, { useState, useEffect } from "react";
import classes from "./MainInfoContainer.module.css";
import MainInfoFancyNav from "./MainInfoFancyNav/MainInfoFancyNav";

const MainInfoContainer = (props) => {
  const [director, setDirector] = useState(null);
  const [writter, setwritter] = useState(null);
  useEffect(() => {
    props.crew.forEach((el) => {
      if (el.job === "Director" || el.department === "Directing") {
        setDirector(el.name);
      } else if (el.job === "Writer" || el.department === "Writing") {
        setwritter(el.name);
      }
    });
  }, []);
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
        <MainInfoFancyNav rating={props.data.vote_average} handleVideo={props.handleVideo} />
        <div className={classes.StoryLineShort}>
          <h3>Overview</h3>
          <p>{props.data.overview}</p>
        </div>
        <div className={classes.CreatorInormation}>
          <ul>
            <li>
              {director ? director : "Not Specified"} <br /> <span>Director</span>
            </li>
            <li>
              {writter ? writter : "Not Specified"} <br /> <span>Writer</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainInfoContainer;
