import {
  FETCH_MOVIES, ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE, GET_MOVIE,
} from './types';

const initialState = {
  fetchedMovies: [],
  movie: null,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, movie: action.payload, fetchedMovies: state.fetchedMovies };
    case ADD_MOVIE:
      return { ...state, fetchedMovies: state.fetchedMovies.concat([action.payload]) };
    case DELETE_MOVIE:
      return { ...state, fetchedMovies: state.fetchedMovies.filter((el) => el.id !== action.payload) };
    case UPDATE_MOVIE:
    {
      const updatedMovies = state.fetchedMovies.map((movie) => ((movie.id === action.payload.id) ? action.payload : movie));
      return { ...state, fetchedMovies: updatedMovies };
    }
    case FETCH_MOVIES:
      return { ...state, fetchedMovies: action.payload };
    default:
      return state;
  }
};
