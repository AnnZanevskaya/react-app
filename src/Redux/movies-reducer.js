import {FETCH_MOVIES, ADD_MOVIE, DELETE_MOVIE,UPDATE_MOVIE, SET_FILTER, SET_SORTORDER} from "./types";

const initialState = {
    movies: [],
    fetchedMovies: []
}

export const moviesReducer = (state = initialState, action)  => {
    try{
        switch(action.type){
            case ADD_MOVIE:
                return {...state, movies: state.movies.concat([action.payload])}
            case DELETE_MOVIE:
                return {...state, movies: state.movies.filter((el) => el.id !== action.payload)}
            case UPDATE_MOVIE:
                {
                    let movie = state.movies.filter((el) => el.id == action.payload.id);
                    movie = action.payload;
                    
                    return { ...state, movies: state.movies}
                }
            case FETCH_MOVIES:
                return { ...state, fetchedMovies: action.payload}
            default:
                return state;
        }
    }
    catch(e){
console.log('erer');
    }
   
}