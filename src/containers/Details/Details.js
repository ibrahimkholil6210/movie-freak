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
  state = {
    data: null,
    cast: null,
    crew: null,
  };

  async componentDidMount() {
    const fetchDataFromAPI = await fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=b65514e4064ffed3454007fd26462087&language=en-US`,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );
    const data = await fetchDataFromAPI.json();
    this.setState({ data: data });

    const castJSON = await fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=b65514e4064ffed3454007fd26462087&language=en-US`,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );
    const { cast, crew } = await castJSON.json();
    this.setState({ cast: cast, crew: crew });
  }

  render() {
    return this.state.data && this.state.cast && this.state.crew ? (
      <Aux>
        <Navigation />
        <div
          className={classes.DetailsWrapper}
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${this.state.data.backdrop_path})` }}>
          <Container>
            <FlexWrapper>
              <div className={classes.DetailsMainImageWrapper}>
                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.state.data.poster_path}`} alt={this.state.data.title} />
              </div>
              <div className={classes.MainInfoWrapper}>
                <MainInfoContainer data={this.state.data} crew={this.state.crew} />
              </div>
            </FlexWrapper>
          </Container>
        </div>
        <div className={classes.MovieMetaInformation}>
          <Container>
            <FlexWrapper>
              <CastInfo cast={this.state.cast} />
              <MetaInfo data={this.state.data} />
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
    ) : (
      <div>Wait</div>
    );
  }
}

export default withRouter(Details);
