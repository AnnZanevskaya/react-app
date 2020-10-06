import React, { useState, useEffect } from "react";

import Wrapper from "../Wrapper";
import Filter from "../Filter";
import Sort from "../Sort";
import MovieList from "../MovieList";
import ErrorBoundary from "../ErrorBoundary";
import * as MovieService from "../../Services/movie-service";

const MoviesContent = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(MovieService.getAllMovies());
    })

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
