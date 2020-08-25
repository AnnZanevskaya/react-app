import React from "react";
import Wrapper from "../Wrapper";
import Filter from "../Filter";
import Sort from "../Sort";
import ResultsCount from "../ResultsCount";
import MovieCard from "../MovieCard";
import { movies } from "../Constants/constants";

const MovieContent = () => (
    <div className="content">
        <Wrapper>
            <div className="content__nav">
                <Filter />
                <Sort />
            </div>
            <ResultsCount 
                count={movies.length}/>

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
        </Wrapper>
    </div >
);

export default MovieContent;