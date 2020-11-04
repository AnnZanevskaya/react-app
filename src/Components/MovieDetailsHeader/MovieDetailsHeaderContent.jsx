import React from "react";

import Logo from '../Logo';
import MovieDetails from '../MovieDetails';

const MovieDetailsHeaderContent = ({ movie, onClose }) => {
    return (
        <div className="header__content">
            <div className="header__top">
                <Logo />
                <div className="search__container">
                    <span className="search__icon material-icons" onClick={onClose}>search</span>
                </div>
            </div>
            <MovieDetails movie={movie} />
        </div>
    );
}

export default MovieDetailsHeaderContent;
