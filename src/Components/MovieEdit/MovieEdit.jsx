import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import { genres } from '../../Constants/constants';
import { updateMovie } from "../../Redux/actions";

const MovieEdit = ({ movie, show, handleClose }) => {
    const selectedGenres = movie.genres.map((elem) => { return { label: elem, value: elem } });
    const [movieItem, setMovieItem] = useState(movie);
    const dispatch = useDispatch();

    function onSubmit(e) {
        e.preventDefault();
        dispatch(updateMovie(movieItem));
        handleClose();
    }

    function handleChange(prop, value, type) {
        if (type === "number")
            value = +value;

        setMovieItem((movie) => ({ ...movie, [prop]: value }));
    }

    return (
        <>
            <Modal show={show} handleClose={handleClose}>
                <h2 className="description">Edit Movie</h2>
                <Input name="id" type="text" label="Movie Id" value={movieItem.id} />
                <Input name="title" type="text" label="Title" placeholder="Title here" value={movieItem.title} onChange={(e) => handleChange('title', e.target.value)}/>
                <Input name="releaseDate" type="date" label="Release Date" placeholder="Select Date" value={movieItem.release_date} onChange={(e) => handleChange('release_date', e.target.value)} />
                <Input name="movieUrl" type="text" label="Movie URL" placeholder="Movie URL here" value={movieItem.poster_path} onChange={(e) => handleChange('poster_path', e.target.value)}/>
                <Input name="overview" type="text" label="Overview" placeholder="Overview here" value={movieItem.overview} onChange={(e) => handleChange('overview', e.target.value)}/>
                <Select name="genre" type="text" label="Genre" options={genres} preselected={selectedGenres} onSelectChange={handleChange}/>
                <Input name="runtime" type="text" label="Runtime" placeholder="Runtime here" value={movieItem.runtime} onChange={(e) => handleChange('runtime', e.target.value, "number")}/>

                <div className="modal__buttons">
                    <button className="header__button button button-bordered">RESET</button>
                    <button onClick={(e) => onSubmit(e)} className="header__button button button-red">SUBMIT</button>
                </div>
            </Modal>
        </>
    );
}

export default MovieEdit;
