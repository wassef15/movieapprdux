import React, { Component } from "react";
import ReactDOM from "react-dom";
import Filter from "./Filter";
import MovieList from "./MovieList";
import AddModal from "./AddModal";
import {connect} from 'react-redux';
import {searchMovie} from './actions/movieActions'

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
      newRating: 1,
      keyword: ""
    };
  }

  rateMovie = stars => {
    this.setState({
      newRating: stars
    });
  };
  searchmovie = movieName => {
    this.setState({
      keyword: movieName
    });
  };
  searchMovieBy = () => {
   
    this.props.searchMovie(this.state.keyword,this.state.newRating)
  };

 

  render() {
    return (
      <div className="App">
        <Filter
          searchIt={word => this.searchmovie(word)}
          rateIt={num => this.rateMovie(num)}
        />
        <AddModal />
        <MovieList editMode='false'/>
      </div>
    );
  }

}


export default App;