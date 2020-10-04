import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const MovieDetails = ({movie}) => {
    return (
        <div className="movie-details">
            <div>
                <img className="preview-small" src={movie.imageSrc} ></img>
            </div>
            <div className="movie-details__description">
                <div className="movie-details__info">
                    <p className="description__title">{movie.title}</p>
                    <p className="rating">{movie.rating}</p>
                </div>
                <div className="movie-details__info">
                    <p className="year">{new Date(movie.year).getFullYear()}</p>
                    <p className="runtime">{movie.runtime} min</p>
                </div>
                <div className="movie-details__info">
                    <p >{movie.description}</p>
                </div>
            </div>
        </div>
    )
}

MovieDetails.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        rating: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
        year: PropTypes.string,
        runtime: PropTypes.number,
        description: PropTypes.string,
    }).isRequired,
};


export default MovieDetails;
