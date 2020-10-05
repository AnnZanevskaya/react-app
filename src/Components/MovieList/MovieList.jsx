import React from "react";

import ResultsCount from "../ResultsCount";
import MovieCard from "../MovieCard";

const MovieList = ({ movies }) => (
    <>
        <ResultsCount count={movies.length} />
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    </>
);

export default MovieList;
