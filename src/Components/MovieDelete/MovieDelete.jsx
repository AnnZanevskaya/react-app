import React from "react";
import { useDispatch } from 'react-redux'

import Modal from '../Modal';
import { deleteMovie } from "../../Redux/actions";

import './style.css';

const MovieDelete = ({ show, handleClose, movieId }) => {
    const dispatch = useDispatch();

    function onClick(e) {
        dispatch(deleteMovie(movieId));
        handleClose();
    }

    return (
        <Modal show={show} handleClose={handleClose}>
            <h2 className="description">Delete Movie</h2>
            <p className="description-confirm">Are you sure you want to delete this movie?</p>
            <div className="modal__buttons">
                <button onClick={onClick} className="header__button button button-red">SUBMIT</button>
            </div>
        </Modal>
    )
}

export default MovieDelete;
