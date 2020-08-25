import React from "react";

const MovieCard = () => (
    <div className="movie-card">
        <div>
            <img src="https://via.placeholder.com/320x460"></img>
        </div>
        <div className="movie-card__info">
            <div>
                <p className="movie-card__desc">Pulp Fiction</p>
                <p className="movie-card__genre">Action & Adventure</p>
            </div>
            <div className="movie-card__chip">
                <p className="movie-card__year">2014</p>
            </div>
        </div>
    </div>
)

export default MovieCard;