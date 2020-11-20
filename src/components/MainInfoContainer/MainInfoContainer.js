import React from "react";
import classes from "./MainInfoContainer.module.css";
import MainInfoFancyNav from "./MainInfoFancyNav/MainInfoFancyNav";

const MainInfoContainer = (props) => {
  return (
    <>
      <div className={classes.DetailsTitleArea}>
        <h2>
          Kumbalangi Nights <span className={classes.Released}>(2019)</span>
        </h2>
        <div className={classes.InformationMore}>
          <ul>
            <li>02/07/2019 (IN)</li>
            <li>•</li>
            <li>Comedy, Drama, Romance</li>
            <li>•</li>
            <li>135MIN</li>
          </ul>
        </div>
        <MainInfoFancyNav />
        <div className={classes.StoryLineShort}>
          <h3>Overview</h3>
          <p>
            The story of four brothers living in the fishing hamlet of Kumbalangi when Saji, Boney and Franky decide to help Bobby stand by his love.
          </p>
        </div>
        <div className={classes.CreatorInormation}>
          <ul>
            <li>
              Madhu C. Narayanan <br /> <span>Director</span>
            </li>
            <li>
              Shyam Pushkaran <br /> <span>Writer</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainInfoContainer;
