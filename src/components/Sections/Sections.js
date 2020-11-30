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
        {/* <SectionCreator
          title='Popular'
          sectionNavigation={[
            { title: "Movies", href: "/movies" },
            { title: "TV Shows", href: "/movies" },
          ]}
        /> */}
        <SectionCreator
          title='Treanding'
          sectionNavigation={[
            { title: "People", href: "/movies" },
            { title: "Movies", href: "/movies" },
            { title: "TV Shows", href: "/movies" },
          ]}
          data={this.state.treanding}
        />
        {/* <SectionCreator
          title='People'
          sectionNavigation={[
            { title: "TV", href: "/movies" },
            { title: "Movies", href: "/movies" },
          ]}
        /> */}
      </div>
    ) : null;
  }
}

export default Sections;
