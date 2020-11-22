import React from "react";
import classes from "./SubtitleSpace.module.css";

const SubtitleSpace = (props) => {
  return (
    <div className={classes.SubtitleSpaceWrapper}>
      <div className={classes.SubtitleSpaceTitle}>
        <h2>SubTitles!</h2>
      </div>
      <div className={classes.SubtitleSpaceController}>
        <ul>
          <li>
            Language
            <select>
              <option>English</option>
              <option>Hindi</option>
              <option>Bangla</option>
            </select>
          </li>
          <li>
            Quality
            <select>
              <option>Blu-Ray</option>
              <option>1080P</option>
              <option>720P</option>
            </select>
          </li>
        </ul>
      </div>
      <div className={classes.SubtitleSpaceResult}>
        <ul>
          <li>Download</li>
        </ul>
      </div>
    </div>
  );
};

export default SubtitleSpace;
