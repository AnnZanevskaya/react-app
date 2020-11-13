import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

import Wrapper from "../Wrapper";
import Filter from "../Filter";
import Sort from "../Sort";
import MovieList from "../MovieList";
import ErrorBoundary from "../ErrorBoundary";
import { fetchMovies } from "../../Redux/actions";

import MovieEmptyList from "../MovieEmptyList";

const MoviesContent = ({sortOrder,filter, searchQuery}) => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.fetchedMovies);

    useEffect(() => {
        dispatch(fetchMovies(searchQuery, filter, sortOrder));
    }, [searchQuery, filter, sortOrder]);

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

const mapStateToProps = state => {
    return {
        sortOrder: state.searchParams.sortOrder,
        filter: state.searchParams.filter,
        searchQuery: state.searchParams.search
    };
};

export default connect(mapStateToProps, null)(MoviesContent);
