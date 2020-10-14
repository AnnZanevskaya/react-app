import {FETCH_MOVIES, ADD_MOVIE, DELETE_MOVIE,UPDATE_MOVIE, SET_FILTER, SET_SORTORDER} from "./types";

const initialState = {
    fetchedMovies: []
}

export const moviesReducer = (state = initialState, action)  => {
        switch(action.type){
            case ADD_MOVIE:
                return {...state, fetchedMovies: state.fetchedMovies.concat([action.payload])}
            case DELETE_MOVIE:
                return {...state, fetchedMovies: state.fetchedMovies.filter((el) => el.id !== action.payload)}
            case UPDATE_MOVIE:
                {
                    const updatedMovies = state.fetchedMovies.map(movie => (movie.id === action.payload.id) ? action.payload: movie);
                    return { ...state, fetchedMovies: updatedMovies}
                }
            case FETCH_MOVIES:
                return { ...state, fetchedMovies: action.payload}
            default:
                return state;
        }
}