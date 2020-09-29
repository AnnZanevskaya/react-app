import React, { useState } from "react";
import PropTypes from 'prop-types';

import MovieActionsMenu from '../MovieActionsMenu';
import './style.css';

const MovieCard = ({ title, genre, imageSrc, year }) => {
    const [isMovieActionMenuShow, setIsShowing] = useState(false);

    function toggleMovieActionMenu() {
        setIsShowing(!isMovieActionMenuShow);
    }

    function closeMovieActionMenu(){
        setIsShowing(false);
    }

    return (
        <div className="movie-card">
            <div className="movie-card__img movie-card__action-menu">
                <img width="320" height="460" src={imageSrc} onClick={closeMovieActionMenu}></img>
               
                <MovieActionsMenu toggleMovieActionMenu={toggleMovieActionMenu} show={isMovieActionMenuShow} />
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
}

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
