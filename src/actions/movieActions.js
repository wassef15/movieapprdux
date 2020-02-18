import {
  ADD_MOVIE,
  GET_RATE,
  SEARCH_MOVIE,
  GET_NAME,
  EDIT_MOVIE,
  REMOVE_MOVIE
} from "./types";

export const addMovie = newMovie => {
  return {
    type: ADD_MOVIE,
    payload: newMovie
  };
};
export const searchMovie = (name, rating) => {
  return {
    type: SEARCH_MOVIE,
    payload: { name: name, rate: rating }
  };
};
export const getName = name => {
  return {
    type: GET_NAME,
    payload: name
  };
};
export const getRating = rating => {
  return {
    type: GET_RATE,
    payload: rating
  };
};
export const editMovie = movie => {
  return {
    type: EDIT_MOVIE,
    payload: movie
  };
};
export const removeMovie = title => {
  return {
    type: REMOVE_MOVIE,
    payload: title
  };
};
