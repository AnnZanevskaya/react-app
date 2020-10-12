import {
    ADD_MOVIE,
    FETCH_MOVIES,
    HIDE_LOADER,
    SHOW_LOADER
} from './types';
import * as MovieService from '../Services/movie-service';

export function addMovie(movie) {
    return {
        type: ADD_MOVIE,
        payload: movie
    }
}

export function fetchMovies() {
    return async dispatch => {
        dispatch(showLoader());

        const movies = await MovieService.getAllMovies();
        console.log('fetch');
        console.log(movies);

        dispatch({
            type: FETCH_MOVIES,
            payload: movies
        })

        dispatch(hideLoader());
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}