import React from "react";

import Modal from '../Modal';

import './style.css';

const MovieDelete = ({ show, handleClose }) => {
    return (
        <Modal show={show} handleClose={handleClose}>
            <h2 className="description">Delete Movie</h2>
            <p className="description-confirm">Are you sure you want to delete this movie?</p>
            <div className="modal__buttons">
                <button className="header__button button button-red">SUBMIT</button>
            </div>
        </Modal>
    )
}

export default MovieDelete;
