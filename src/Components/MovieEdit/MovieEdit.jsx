import React, { useState } from "react";

import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import { genres } from '../../Constants/constants';

const MovieEdit = ({ movie, show, handleClose }) => {
    const selectedGenres = movie.genres.map((elem) => { return { label: elem, value: elem } });

    return (
        <>
            <Modal show={show} handleClose={handleClose}>
                <h2 className="description">Edit Movie</h2>
                <Input name="id" type="text" label="Movie Id" value={movie.id} />
                <Input name="title" type="text" label="Title" placeholder="Title here" value={movie.title} />
                <Input name="releaseDate" type="date" label="Release Date" placeholder="Select Date" value={movie.release_date} />
                <Input name="movieUrl" type="text" label="Movie URL" placeholder="Movie URL here" value={movie.poster_path} />
                <Input name="overview" type="text" label="Overview" placeholder="Overview here" value={movie.overview} />
                <Select name="genre" type="text" label="Genre" options={genres} preselected={selectedGenres} />
                <Input name="runtime" type="text" label="Runtime" placeholder="Runtime here" value={movie.runtime} />

                <div className="modal__buttons">
                    <button className="header__button button button-bordered">RESET</button>
                    <button className="header__button button button-red">SUBMIT</button>
                </div>
            </Modal>
        </>
    );
}

export default MovieEdit;
