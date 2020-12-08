import React from "react";
import ReactLoading from "react-loading";
import classes from "./SearchResult.module.css";
import FlexWrapper from "../../../UI/FlexWrapper/FlexWrapper";

const SearchResult = (props) => {
  let loadingAnimation = null;
  if (props.message.type === 1) {
    loadingAnimation = <ReactLoading type={"bubbles"} color={"#1d4354"} />;
  } else {
    loadingAnimation = <ReactLoading type={"spinningBubbles"} color={"#1d4354"} />;
  }
  return (
    <>
      {props.isFocused ? (
        <>
          <div className={classes.SearchResultWrapper}>
            {props.results === null ? (
              <div className={classes.emptyMessage}>{loadingAnimation}</div>
            ) : (
              <div className={classes.SearchResultContainer}>
                <ul>
                  {props.results.map((result, i) =>
                    i <= 10 ? (
                      <li key={i} onClick={() => props.handleMovieReq(result.id)}>
                        <div className={classes.SingleResult}>
                          <FlexWrapper>
                            <div className={classes.SingleResultImg}>
                              {result.poster_path ? (
                                <img src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${result.poster_path}`} alt={result.original_title} />
                              ) : (
                                <img
                                  src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
                                  alt={result.original_title}
                                />
                              )}
                            </div>
                            <div className={classes.SingleResultCaption}>
                              <h4>{result.title}</h4>
                              <p className={classes.Rating}>{result.vote_average}</p>
                              <p className={classes.SearchResultDesc}>{result.overview.substring(10, 200) + "..."}</p>
                            </div>
                          </FlexWrapper>
                        </div>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            )}
          </div>
        </>
      ) : null}
    </>
  );
};

export default SearchResult;
