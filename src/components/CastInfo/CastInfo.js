import React, { Component } from "react";
import classes from "./CastInfo.module.css";
import FlexWrapper from "../UI/FlexWrapper/FlexWrapper";
import CastCard from "./CastCard/CastCard";

const APIENDPOINT = "https://api.themoviedb.org/3/movie/575351/credits?api_key=b65514e4064ffed3454007fd26462087&language=en-US";

class CastInfo extends Component {
  state = {
    cast: null,
    crew: null,
  };

  async componentDidMount() {
    const castJSON = await fetch(APIENDPOINT, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const { cast, crew } = await castJSON.json();
    this.setState({ cast: cast, crew: crew });
  }

  render() {
    return (
      <div className={classes.CastInfoWrapper}>
        <div className={classes.CastInfoTitle}>
          <h2>Top Cast</h2>
        </div>
        <FlexWrapper>
          {this.state.cast ? this.state.cast.map((cast, index) => (index <= 11 ? <CastCard key={index} cast={cast} /> : null)) : null}
        </FlexWrapper>
      </div>
    );
  }
}

export default CastInfo;
