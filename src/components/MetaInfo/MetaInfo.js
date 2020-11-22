import React, { Component } from "react";
import classes from "./MetaInfo.module.css";

const APIENDPOINT = "https://api.themoviedb.org/3/movie/575351?api_key=b65514e4064ffed3454007fd26462087&language=en-US";

class MetaInfo extends Component {
  state = {
    data: null,
  };

  async componentDidMount() {
    const castJSON = await fetch(APIENDPOINT, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await castJSON.json();
    console.log(data);
    this.setState({
      data: {
        original_title: data.original_title,
        popularity: data.popularity,
        revenue: data.revenue,
        budget: data.budget,
        status: data.status,
        original_language: data.original_language,
      },
    });
  }
  render() {
    return (
      <div className={classes.MetainfoWrapper}>
        <ul>
          {this.state.data ? (
            <>
              <li>
                <div className={classes.RenderMetaListHead}>Original Title</div>
                <div className={classes.RenderMetaListDesc}>{this.state.data.original_title}</div>
              </li>
              <li>
                <div className={classes.RenderMetaListHead}>Original Language</div>
                <div className={classes.RenderMetaListDesc}>{this.state.data.original_language}</div>
              </li>
              <li>
                <div className={classes.RenderMetaListHead}>Popularity</div>
                <div className={classes.RenderMetaListDesc}>{this.state.data.popularity}</div>
              </li>
              <li>
                <div className={classes.RenderMetaListHead}>Revenue</div>
                <div className={classes.RenderMetaListDesc}>{this.state.data.revenue}</div>
              </li>
              <li>
                <div className={classes.RenderMetaListHead}>Budget</div>
                <div className={classes.RenderMetaListDesc}>{this.state.data.budget}</div>
              </li>
              <li>
                <div className={classes.RenderMetaListHead}>Status</div>
                <div className={classes.RenderMetaListDesc}>{this.state.data.status}</div>
              </li>
            </>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default MetaInfo;
