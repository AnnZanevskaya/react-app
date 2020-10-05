import React from "react";

import './style.css';

const MovieActionsMenu = ({ toggleMovieActionMenu, show, editAction, deleteAction }) => {
    if (show)
        return (
            <div className="action-menu">
                <span className="button-close material-icons" onClick={toggleMovieActionMenu}>close</span>
                <p onClick={editAction}>Edit</p>
                <p onClick={deleteAction}>Delete</p>
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
