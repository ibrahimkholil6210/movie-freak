import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import classes from "./Card.module.css";
import { MdStars } from "react-icons/md";

const Card = (props) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleClickForLink = (id) => {
    props.history.push(`/movie/details/${id}`);
  };
  const handleQuickViewBtn = (e) => {
    setVisible(!visible);
  };

  const fetchDetails = async () => {
    const req = await fetch(`https://api.themoviedb.org/3/movie/${props.id}?api_key=b65514e4064ffed3454007fd26462087`);
    const transformJson = await req.json();
    setMovieDetails(transformJson);
    console.log(movieDetails);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

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
      <div className={classes.CardQuickViewButton} onClick={handleQuickViewBtn}>
        <button>{props.isBlog === true ? "View More" : "Quick View"}</button>
      </div>
      <div className={classes.QuickViewMenu} style={visible ? { display: "block" } : { display: "none" }}>
        {movieDetails ? (
          <div className={classes.QuickViewMenuDesc}>
            <div>{movieDetails.title}</div>
            <div>{movieDetails.overview}</div>
          </div>
        ) : (
          <div className={classes.QuickViewMenuDesc}>Please Wait!</div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Card);
