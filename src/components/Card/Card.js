import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./Card.module.css";
import { MdStars } from "react-icons/md";

const Card = (props) => {
  const handleClickForLink = (id) => {
    props.history.push(`/movie/details/${id}`);
  };
  return (
    <div className={classes.CardWrapper}>
      <div className={classes.CardImgWrapper} style={props.height ? { height: props.height } : null} onClick={(e) => handleClickForLink(props.id)}>
        <img src={props.image} alt='Food' style={props.bRadius === false ? { borderRadius: "0px" } : null} />
      </div>
      <div className={classes.CardDesc} onClick={(e) => handleClickForLink(props.id)}>
        <h3>{props.title}</h3>
        <p>{props.genres}</p>
      </div>
      <div className={classes.MetaInformation} style={props.isBlog === true ? { display: "none" } : null}>
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
        <button onClick={(e) => handleClickForLink(props.id)}>{props.isBlog === true ? "View More" : "Quick View"}</button>
      </div>
    </div>
  );
};

export default withRouter(Card);
