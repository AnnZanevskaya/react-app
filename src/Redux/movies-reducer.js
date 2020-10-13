import {FETCH_MOVIES, ADD_MOVIE, SET_FILTER, SET_SORTORDER} from "./types";

const initialState = {
    movies: [],
    fetchedMovies: [],
    search: '',
    genre: 'all',
    sortOrder: 'release_date'
}

export const moviesReducer = (state = initialState, action)  => {
    switch(action.type){
        case ADD_MOVIE:
            return {...state, movies: state.movies.concat([action.payload])}
        case FETCH_MOVIES:
            return { ...state, fetchedMovies: action.payload}
        case SET_FILTER: 
            return { ...state, genre: action.payload}
        case SET_SORTORDER: 
            return { ...state, sortOrder: action.payload}
        default:
            return state;
    }
}