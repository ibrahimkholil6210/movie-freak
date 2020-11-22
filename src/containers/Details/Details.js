import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Container from "../../hoc/Container/Container";
import FlexWrapper from "../../components/UI/FlexWrapper/FlexWrapper";
import classes from "./Details.module.css";
import Footer from "../../components/Footer/Footer";
import MainInfoContainer from "../../components/MainInfoContainer/MainInfoContainer";
import CastInfo from "../../components/CastInfo/CastInfo";
import MetaInfo from "../../components/MetaInfo/MetaInfo";
import SubtitleSpace from "../../components/SubtitleSpace/SubtitleSpace";

class Details extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <div className={classes.DetailsWrapper}>
          <Container>
            <FlexWrapper>
              <div className={classes.DetailsMainImageWrapper}>
                <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/aOlv1Yw4zchFmBr5KT0sPpmOm87.jpg' alt='Banner' />
              </div>
              <div className={classes.MainInfoWrapper}>
                <MainInfoContainer />
              </div>
            </FlexWrapper>
          </Container>
        </div>
        <div className={classes.MovieMetaInformation}>
          <Container>
            <FlexWrapper>
              <CastInfo />
              <MetaInfo />
              <SubtitleSpace />
            </FlexWrapper>
          </Container>
        </div>

        <div className={classes.IsolatedBlogWrapper}>
          <Container>
            <Footer />
          </Container>
        </div>
      </Aux>
    );
  }
}

export default withRouter(Details);
