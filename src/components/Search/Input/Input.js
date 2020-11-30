import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classes from "./Input.module.css";
import SearchResult from "./SearchResult/SearchResult";

class Input extends Component {
  state = {
    isLoading: false,
    isFocused: false,
    boxMessage: "Start Typing...",
    results: null,
  };

  blurTimeOut;

  async fetchData(query) {
    if (query !== "") {
      const searchResult = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=b65514e4064ffed3454007fd26462087&language=en-US&query=${query}&page=1&include_adult=false`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const { results } = await searchResult.json();
      this.setState({ results: results });
    }
    return;
  }

  handleFocus = (e) => {
    this.setState({ isFocused: true });
  };

  handleBlur = (e) => {
    this.blurTimeOut = setTimeout(() => {
      this.setState({ isFocused: false });
    }, 500);
  };

  handleChange = (e) => {
    this.setState({ isLoading: true });
    if (e.target.value.length !== "") {
      this.setState({ boxMessage: "Please wait are fetching data!" });
      this.fetchData(e.target.value);
    }
    this.setState({ isLoading: false });
  };

  handleMovieReq = (id) => {
    this.props.history.push(`/movie/details/${id}`);
  };

  componentWillUnmount() {
    clearTimeout(this.blurTimeOut);
  }

  render() {
    return (
      <div className={classes.SearchInputArea}>
        <input placeholder='What are you looking for?' onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur} />
        <SearchResult
          isFocused={this.state.isFocused}
          message={this.state.boxMessage}
          results={this.state.results}
          handleMovieReq={this.handleMovieReq}
        />
      </div>
    );
  }
}

export default withRouter(Input);
