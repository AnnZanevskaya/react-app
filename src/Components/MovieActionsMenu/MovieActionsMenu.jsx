import React from "react";

import './style.css';

const MovieActionsMenu = ({ toggleMovieActionMenu, show }) => {
    if (show)
        return (
            <div className="action-menu">
                <span className="button-close material-icons" onClick={toggleMovieActionMenu}>close</span>
                <p>Edit</p>
                <p>Delete</p>
            </div>
        )
    else
        return (
            <div className="action-menu__container" onClick={toggleMovieActionMenu}>
                <div className="action-menu__btn"></div>
            </div>
        )
}

export default MovieActionsMenu;
