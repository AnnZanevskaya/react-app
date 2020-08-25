import React from "react";
import Wrapper from "../Wrapper";
import Filter from "../Filter";
import Sort from "../Sort";
import ResultsCount from "../ResultsCount";
import MovieCard from "../MovieCard";

const MovieContent = () => (
    <div className="content">
        <Wrapper>
            <div className="content__nav">
                <Filter />
                <Sort />
            </div>
            <ResultsCount />

            <div className="movie-list">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />

            </div>
        </Wrapper>
    </div >
);

export default MovieContent;