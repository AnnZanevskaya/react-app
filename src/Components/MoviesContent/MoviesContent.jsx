import React, { useState, useEffect } from "react";
import { useDispatch, userSelector, useSelector } from "react-redux";

import Wrapper from "../Wrapper";
import Filter from "../Filter";
import Sort from "../Sort";
import MovieList from "../MovieList";
import ErrorBoundary from "../ErrorBoundary";
import { fetchMovies } from "../../Redux/actions";

const MoviesContent = () => {
    const dispatch = useDispatch();
    // const [movies, setMovies] = useState([]);
    const movies = useSelector(state => state.movies.fetchedMovies);
    const loading = useSelector(state => state.app.loading);

    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    if (loading) {
        // return (
        //     <p>Loading...</p>
        // )
    }

    return (
        <div className="content">
            <Wrapper>
                <div className="content__nav">
                    <Filter />
                    <Sort />
                </div>

                <ErrorBoundary>
                    <MovieList movies={movies} />
                </ErrorBoundary>
            </Wrapper>
        </div >
    )
};

export default MoviesContent;
