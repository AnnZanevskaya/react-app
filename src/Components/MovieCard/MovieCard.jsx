import React from "react";
import PropTypes from 'prop-types';

const MovieCard = ({ title, genre, imageSrc, year }) => (
    <div className="movie-card">
        <div className="movie-card__img">
            <img width="320" height="460" src={imageSrc}></img>
        </div>
        <div className="movie-card__info">
            <div>
                <p className="movie-card__desc">{title}</p>
                <p className="movie-card__genre">{genre}</p>
            </div>
            <div className="movie-card__chip">
                <p className="movie-card__year">{new Date(year).getFullYear()}</p>
            </div>
        </div>
    </div>
)

MovieCard.propTypes = {
    id: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.string
}

MovieCard.defaultProps = {
    imageSrc: "https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg",
    year: "N/A"
}

export default MovieCard;
