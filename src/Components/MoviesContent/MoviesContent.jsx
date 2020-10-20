import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "../Wrapper";
import Filter from "../Filter";
import Sort from "../Sort";
import MovieList from "../MovieList";
import ErrorBoundary from "../ErrorBoundary";
import { fetchMovies } from "../../Redux/actions";

import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";
import MovieEmptyList from "../MovieEmptyList";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const MoviesContent = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.fetchedMovies);

    const location = useLocation();
    const route = location.pathname;

    let searchQuery = "";

    if (route === "search") {
        const query = useQuery();
        searchQuery = query.get("q");
    }

    useEffect(() => {
        dispatch(fetchMovies(searchQuery));
    }, []);

    return (
        <div className="content">
            <Wrapper>
                <div className="content__nav">
                    <Filter />
                    <Sort />
                </div>

                <ErrorBoundary>
                    {(!movies || movies.length === 0) ? <MovieEmptyList /> : <MovieList movies={movies} />}
                </ErrorBoundary>
            </Wrapper>
        </div >
    )
};

export default MoviesContent;
