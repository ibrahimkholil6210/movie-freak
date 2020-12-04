import React from "react";
import classes from "./CastCard.module.css";

const CastCard = (props) => {
  return (
    <div className={classes.CastCardWrapper}>
      <div className={classes.CastCardImg}>
        {props.cast.profile_path ? (
          <img src={`https://image.tmdb.org/t/p/w138_and_h175_face${props.cast.profile_path}`} alt={props.cast.name} />
        ) : (
          <img
            src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`}
            alt={props.cast.name}
            className={classes.ResImg}
            style={{ width: "138px", height: "175px" }}
          />
        )}
      </div>
      <div className={classes.CastCardMetaInformation}>
        <h4>{props.cast.name}</h4>
        <p>{props.cast.character}</p>
      </div>
    </div>
  );
};

export default CastCard;
