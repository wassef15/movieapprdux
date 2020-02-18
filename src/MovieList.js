import React from "react";
import MovieItem from "./MovieItem";
import {connect} from 'react-redux';

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.allState.movies.filter(el =>el.rating >= props.allState.rating && el.title.toUpperCase().includes(props.allState.keyword.toUpperCase().trim())).map((el, index) => (
        <MovieItem oneMovie={el} key={index} />
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    allState: state.movieReducer
  };
};
export default connect(mapStateToProps)(MovieList);