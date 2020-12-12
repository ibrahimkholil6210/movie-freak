import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactLoading from "react-loading";
import ModalVideo from "react-modal-video";
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
import "../../assets/css/video.css";

class Details extends Component {
  state = {
    data: null,
    cast: null,
    crew: null,
    videos: null,
    isOpen: false,
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

    const videoJSON = await fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=b65514e4064ffed3454007fd26462087&language=en-US`,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );
    const { results } = await videoJSON.json();
    this.setState({ videos: results });
  }

  handleVideo = (e) => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return this.state.data && this.state.cast && this.state.crew ? (
      <Aux>
        {this.state.videos ? (
          <ModalVideo
            channel='youtube'
            autoplay
            isOpen={this.state.isOpen}
            videoId={this.state.videos.length > 0 ? this.state.videos[0].key : null}
            onClose={() => this.setState({ isOpen: false })}
          />
        ) : null}
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
                <MainInfoContainer data={this.state.data} crew={this.state.crew} handleVideo={this.handleVideo} />
              </div>
            </FlexWrapper>
          </Container>
        </div>
        <div className={classes.MovieMetaInformation}>
          <Container>
            <FlexWrapper>
              <SubtitleSpace />
              <CastInfo cast={this.state.cast} />
              <MetaInfo data={this.state.data} />
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
      <div className={classes.AnimationWrapper}>
        <ReactLoading type={"spin"} color={"#1d4354"} />
      </div>
    );
  }
}

export default withRouter(Details);
