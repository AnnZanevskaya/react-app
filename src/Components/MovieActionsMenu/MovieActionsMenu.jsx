import React from "react";

const MovieActionsMenu = ({ toggleMovieActionMenu, show, editAction, deleteAction }) => {
    const toggleActionMenu = (e) => {
        e.stopPropagation();
        toggleMovieActionMenu();
    }

    const handleEdit = (e) => {
        e.stopPropagation();
        editAction();
    }

    const handleDelete = (e) => {
        e.stopPropagation();
        deleteAction();
    }

    if (show)
        return (
            <div className="action-menu">
                <span className="button-close material-icons" onClick={toggleActionMenu}>close</span>
                <p onClick={handleEdit}>Edit</p>
                <p onClick={handleDelete}>Delete</p>
            </div>
        )
    else
        return (
            <div className="action-menu__container" onClick={toggleActionMenu}>
                <div className="action-menu__btn"></div>
            </div>
        )
}

export default MovieActionsMenu;
