import React, { Component } from "react";
import Search from "./Search";
import StarRatingComponent from "react-star-rating-component";
import {getRating} from './actions/movieActions'
import {connect} from 'react-redux'

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue }, () =>
      this.props.getRate(this.state.rating)
    );
  };
  render() {
    return (
      <div className="filter">
        <Search />
        <div className="rate">
          <p>Minimum Rating:</p>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick}
          />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRate: rating => dispatch(getRating(rating))
  }
}
export default connect(null,mapDispatchToProps)(Filter);

