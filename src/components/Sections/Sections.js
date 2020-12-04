import React, { Component } from "react";
import classes from "./Sections.module.css";
import SectionCreator from "./SectionCreator/SectionCreator";

class Sections extends Component {
  state = {
    treanding: null,
  };
  async componentDidMount() {
    const fetchDataFromAPI = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=b65514e4064ffed3454007fd26462087`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const Treandingdata = await fetchDataFromAPI.json();
    this.setState({ treanding: Treandingdata });
  }
  render() {
    return this.state.treanding ? (
      <div className={classes.SectionContain}>
        <SectionCreator title='Treanding' sectionNavigation={null} data={this.state.treanding} />
      </div>
    ) : null;
  }
}

export default Sections;
