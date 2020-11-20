import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import classes from "./MainInfoFancyNav.module.css";
import { MdList, MdBookmark, MdStars, MdFavorite, MdPlayArrow } from "react-icons/md";

const MainInfoFancyNav = (props) => {
  return (
    <div className={classes.FancyNav}>
      <ul>
        <li className={classes.ScoreButton}>
          <div className={[classes.CircleWrapper, classes.Dflex].join(" ")}>
            <CircularProgressbar
              value={82}
              text={`${82}%`}
              styles={buildStyles({ pathColor: "#21d07a", trailColor: "#125121", textColor: "white" })}
            />
          </div>
          User <br />
          Score
        </li>
        <li className={classes.RegularItem}>
          <MdList />
        </li>
        <li className={classes.RegularItem}>
          <MdFavorite />
        </li>
        <li className={classes.RegularItem}>
          <MdBookmark />
        </li>
        <li className={classes.RegularItem}>
          <MdStars />
        </li>
        <li className={classes.PlayTeaserButton}>
          <MdPlayArrow />
          <div>Play Teaser</div>
        </li>
      </ul>
    </div>
  );
};

export default MainInfoFancyNav;
