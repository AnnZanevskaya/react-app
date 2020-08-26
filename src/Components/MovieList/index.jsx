import React from "react";
import ResultsCount from "../ResultsCount";
import MovieCard from "../MovieCard";
import { movies } from "../Constants/constants";


const MovieList = () => (
    <>
        <ResultsCount
            count={movies.length} />
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    id={movie.id}
                    imageSrc={movie.imageSrc}
                    title={movie.title}
                    genre={movie.genre}
                    year={movie.year}
                />
            ))}
        </div>
    </>
);

export default MovieList;