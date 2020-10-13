import {FETCH_MOVIES, ADD_MOVIE, SET_FILTER, SET_SORTORDER} from "./types";

const initialState = {
    movies: [],
    fetchedMovies: []
}

export const moviesReducer = (state = initialState, action)  => {
    switch(action.type){
        case ADD_MOVIE:
            return {...state, movies: state.movies.concat([action.payload])}
        case FETCH_MOVIES:
            return { ...state, fetchedMovies: action.payload}
        default:
            return state;
    }
}