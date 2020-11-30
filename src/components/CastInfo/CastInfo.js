import React, { Component } from "react";
import classes from "./CastInfo.module.css";
import FlexWrapper from "../UI/FlexWrapper/FlexWrapper";
import CastCard from "./CastCard/CastCard";

class CastInfo extends Component {
  render() {
    return (
      <div className={classes.CastInfoWrapper}>
        <div className={classes.CastInfoTitle}>
          <h2>Top Cast</h2>
        </div>
        <FlexWrapper>
          {this.props.cast ? this.props.cast.map((cast, index) => (index <= 11 ? <CastCard key={index} cast={cast} /> : null)) : null}
        </FlexWrapper>
      </div>
    );
  }
}

export default CastInfo;
