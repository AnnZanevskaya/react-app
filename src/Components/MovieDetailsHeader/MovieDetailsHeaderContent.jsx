import React from "react";

import Logo from '../Logo';
import MovieDetails from '../MovieDetails';
import Search from '@material-ui/icons/Search';


const MovieDetailsHeaderContent = ({ movie, onClose }) => {
    return (
        <div className="header__content">
            <div className="header__top">
                <Logo />
                <div className="search__container">
                    <Search className="search__icon" onClick={onClose} />
                </div>
            </div>
            <MovieDetails movie={movie} />
        </div>
    );
}

export default MovieDetailsHeaderContent;
