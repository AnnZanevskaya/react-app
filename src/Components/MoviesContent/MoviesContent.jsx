import React from "react";

import Wrapper from "../Wrapper";
import Filter from "../Filter";
import Sort from "../Sort";
import MovieList from "../MovieList";
import ErrorBoundary from "../ErrorBoundary";
import { movies } from "../../Constants/constants.js";

const MoviesContent = () => (
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
);

export default MoviesContent;
