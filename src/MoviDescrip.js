import React,{ Component } from "react";
import {connect} from 'react-redux';

class MoviDescrip extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() { this.setState(this.props.allState.movies.filter(el =>el.title===this.props.match.params.title)[0]);}
    
    render() {
      return (<div className="movie-Description">
       
        <div>
      <img src={this.state.image} alt=".." />
      {console.log(this.state.image)}
      
      <h3>{this.state.title}</h3>
      {console.log(this.state.title)}
      <p>{this.state.year}</p>

        </div>
      
    </div>)
    }
}



const mapStateToProps = state => {
  return {
    allState: state.movieReducer
  };
};
export default connect(mapStateToProps)(MoviDescrip);