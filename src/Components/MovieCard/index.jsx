import React from "react";
import PropTypes from 'prop-types';

const MovieCard = (props) => (
    <div className="movie-card">
        <div className="movie-card__img">
            <img width="320" height="460" src={props.imageSrc}></img>
        </div>
        <div className="movie-card__info">
            <div>
                <p className="movie-card__desc">{props.title}</p>
                <p className="movie-card__genre">{props.genre}</p>
            </div>
            <div className="movie-card__chip">
                <p className="movie-card__year">{props.year}</p>
            </div>
        </div>
    </div>
)

export default MovieCard;

MovieCard.propTypes = {
    id: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.number
}

MovieCard.defaultProps = {
    imageSrc: "https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg",
    year: "N/A"
}