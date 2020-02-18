import React from "react";
import StarRatingComponent from "react-star-rating-component";
import AddModal from "./AddModal";
import {removeMovie} from './actions/movieActions';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";


const MovieItem = props => {

  return (
    <div className="movie-card">
      <img src={props.oneMovie.image} alt=".." />
      <h3>{props.oneMovie.title}</h3>
      <p>{props.oneMovie.year}</p>
      <StarRatingComponent
        className="stars"
        name="rate1"
        starCount={5}
        value={props.oneMovie.rating}
      />
      <AddModal editMode='true' movieToEdit={props.oneMovie}/>
      <button onClick={()=>props.removeThisMovie(props.oneMovie.title)}>Remove</button>
      <Link  to={`/movie/${props.oneMovie.title}`}><button>Description</button></Link>
    </div>
  );
};
const mapDispatchToProps = dispatch=>{
  return{
    removeThisMovie: title=>dispatch(removeMovie(title))
  }
}
export default connect(null, mapDispatchToProps)(MovieItem);
