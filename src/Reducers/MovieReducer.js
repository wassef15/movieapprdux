import { ADD_MOVIE, GET_NAME ,GET_RATE, EDIT_MOVIE , REMOVE_MOVIE} from "../actions/types";


const initialState = [
  {
    title: "Parasite",
    image:
      "https://static.cinebel.be/img/movie/poster/full/1020491_fr_parasite_1563531796112.jpg",
    year: 2019,
    rating: 5
  },
  {
    title: "Interstellar",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
    year: 2014,
    rating: 4
  },
  {
    title: "Joker",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    year: 2019,
    rating: 3
  }
];
const movieReducer = (state = {movies : initialState , keyword :"" , rating : 1 }, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {...state,movies:state.movies.concat(action.payload)};
      case GET_NAME:
        return {...state, keyword: action.payload};
        case GET_RATE:
          return {...state,rating:action.payload};
          case EDIT_MOVIE:
            return {...state, movies : state.movies.map(el=>el.title===action.payload.title? action.payload:el)};
            case REMOVE_MOVIE:
              return{...state, movies: state.movies.filter(el=> el.title!==action.payload)}
    default:
      return state;
  }
};
export default movieReducer;
