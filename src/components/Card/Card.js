import React from "react";
import classes from "./Card.module.css";
import { MdStars } from "react-icons/md";

const Card = (props) => {
  return (
    <div className={classes.CardWrapper}>
      <div className={classes.CardImgWrapper}>
        <img src={props.image} alt="Food" />
      </div>
      <div className={classes.CardDesc}>
        <h3>{props.title}</h3>
        <p>{props.genres}</p>
      </div>
      <div className={classes.MetaInformation}>
        <div className={classes.CardRating} style={props.rating < 7.5 ? { background: "#db7c38" } : { background: "#48c479" }}>
          <MdStars />
          {props.rating}
        </div>
        <div>•</div>
        <div className={classes.ReleaseData}>
          <p>{props.time}</p>
        </div>
        <div>•</div>
        <div className={classes.ReleaseData}>
          <p>{props.year}</p>
        </div>
      </div>
      <div className={classes.CardQuickViewButton}>
        <button>Quick View</button>
      </div>
    </div>
  );
};

export default Card;
