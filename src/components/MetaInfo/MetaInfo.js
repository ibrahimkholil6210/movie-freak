import React, { Component } from "react";
import classes from "./MetaInfo.module.css";

class MetaInfo extends Component {
  render() {
    return (
      <div className={classes.MetainfoWrapper}>
        <ul>
          {this.props.data ? (
            <>
              <li>
                <div className={classes.RenderMetaListHead}>Original Title</div>
                <div className={classes.RenderMetaListDesc}>{this.props.data.original_title}</div>
              </li>
              <li>
                <div className={classes.RenderMetaListHead}>Original Language</div>
                <div className={classes.RenderMetaListDesc}>{this.props.data.original_language}</div>
              </li>
              <li>
                <div className={classes.RenderMetaListHead}>Popularity</div>
                <div className={classes.RenderMetaListDesc}>{this.props.data.popularity}</div>
              </li>
              <li>
                <div className={classes.RenderMetaListHead}>Revenue</div>
                <div className={classes.RenderMetaListDesc}>{this.props.data.revenue}</div>
              </li>
              <li>
                <div className={classes.RenderMetaListHead}>Budget</div>
                <div className={classes.RenderMetaListDesc}>{this.props.data.budget}</div>
              </li>
              <li>
                <div className={classes.RenderMetaListHead}>Status</div>
                <div className={classes.RenderMetaListDesc}>{this.props.data.status}</div>
              </li>
            </>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default MetaInfo;
