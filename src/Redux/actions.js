import {
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
  FETCH_MOVIES,
  HIDE_LOADER,
  SET_FILTER,
  SET_SORTORDER,
  SHOW_LOADER,
  SET_SEARCH,
  GET_MOVIE,
} from './types';

import * as MovieService from '../Services/movie-service';

export function getMovie(id) {
  return async (dispatch) => {
    let result = null;

    if (id) {
      result = await MovieService.getMovie(id);
    }

    dispatch({
      type: GET_MOVIE,
      payload: result,
    });
  };
}

export function addMovie(movie) {
  return async (dispatch) => {
    const result = await MovieService.createMovie(movie);

    dispatch({
      type: ADD_MOVIE,
      payload: result,
    });
  };
}

export function deleteMovie(movieId) {
  return async (dispatch) => {
    await MovieService.deleteMovie(movieId);

    dispatch({
      type: DELETE_MOVIE,
      payload: movieId,
    });
  };
}

export function updateMovie(movie) {
  return async (dispatch) => {
    await MovieService.updateMovie(movie);

    dispatch({
      type: UPDATE_MOVIE,
      payload: movie,
    });
  };
}

export function fetchMovies(search = '', filter = 'all', sortBy = 'release_date') {
  return async (dispatch) => {
    let movies = [];
    dispatch(showLoader());

    if (search) {
      movies = await MovieService.getMovies(search, filter, sortBy);
    }

    dispatch({
      type: FETCH_MOVIES,
      payload: movies,
    });

    dispatch(hideLoader());
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function setFilter(genre) {
  return {
    type: SET_FILTER,
    payload: genre,
  };
}

export function setSortOrder(sortOrder) {
  return {
    type: SET_SORTORDER,
    payload: sortOrder,
  };
}

export function setSearch(search) {
  return {
    type: SET_SEARCH,
    payload: search,
  };
}
