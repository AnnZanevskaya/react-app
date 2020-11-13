import {
  moviesReducer,
} from './movies-reducer';
import * as types from './types';

describe('movies reducer', () => {
  const initialState = {
    fetchedMovies: [],
    movie: null,
  };

  const testMovie = {
    id: 1,
    title: 'My test movie',
  };

  const mockState = {
    fetchedMovies: [testMovie],
  };

  it('should return the initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual(initialState);
  });

  it('should return movie by id', () => {
    expect(moviesReducer(mockState, {
      type: types.GET_MOVIE,
      payload: testMovie,
    }).movie).toEqual(testMovie);
  });

  it('should add new movie', () => {
    const result = moviesReducer(mockState, {
      type: types.ADD_MOVIE,
      payload: testMovie,
    });

    expect(result.fetchedMovies.length).toEqual(2);
    expect(result.fetchedMovies).toEqual([testMovie, testMovie]);
  });

  it('should delete movie', () => {
    const result = moviesReducer(mockState, {
      type: types.DELETE_MOVIE,
      payload: testMovie.id,
    });

    expect(result.fetchedMovies.length).toEqual(0);
    expect(result.fetchedMovies).toEqual([]);
  });

  it('should update movie', () => {
    const newMovie = {
      id: 1,
      title: 'Another great movie',
    };

    const result = moviesReducer(mockState, {
      type: types.UPDATE_MOVIE,
      payload: newMovie,
    });

    expect(result.fetchedMovies.length).toEqual(1);
    expect(result.fetchedMovies).toEqual([newMovie]);
  });

  it('should fetch movies', () => {
    const result = moviesReducer(mockState, {
      type: types.FETCH_MOVIES,
      payload: [testMovie, testMovie, testMovie],
    });

    expect(result.fetchedMovies.length).toEqual(3);
    expect(result.fetchedMovies).toEqual([testMovie, testMovie, testMovie]);
  });
});
