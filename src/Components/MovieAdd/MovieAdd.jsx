import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import { useToggle } from '../../Hooks/hooks';
import { genres } from '../../Constants/constants';
import { addMovie } from "../../Redux/actions";

const MovieAdd = () => {
    const [isShow, setIsShowing] = useToggle();
    const dispatch = useDispatch();

    let movie = {
        title: "", release_date: null, poster_path: '', overview: '', genres: [], runtime: 0
    }

    const [movieItem, setMovieItem] = useState(movie);

    function toggle() {
        setIsShowing();
    }

    function onSubmit(e) {
        e.preventDefault();
        dispatch(addMovie(movieItem));
        toggle();
    }

    function handleChange(prop, value, type) {
        if (type === "number")
            value = +value;

        setMovieItem((movie) => ({ ...movie, [prop]: value }));
    }

    return (
        <>
            <Modal show={isShow} handleClose={toggle}>
                <form>
                    <h2 className="description">Add Movie</h2>
                    <Input name="title" type="text" label="Title" placeholder="Title here" value={movieItem.title} onChange={(e) => handleChange('title', e.target.value)} />
                    <Input name="releaseDate" type="date" label="Release Date" placeholder="Select Date" value={movieItem.release_date} onChange={(e) => handleChange('release_date', e.target.value)} />
                    <Input name="movieUrl" type="text" label="Movie URL" placeholder="Movie URL here" value={movieItem.poster_path} onChange={(e) => handleChange('poster_path', e.target.value)} />
                    <Input name="overview" type="text" label="Overview" placeholder="Overview here" value={movieItem.overview} onChange={(e) => handleChange('overview', e.target.value)} />
                    <Select name="genre" type="text" label="Genre" options={genres} preselected={[]} onSelectChange={handleChange} />
                    <Input name="runtime" type="text" label="Runtime" placeholder="Runtime here" value={movieItem.runtime} onChange={(e) => handleChange('runtime', e.target.value, "number")} />

                    <div className="modal__buttons">
                        <button className="header__button button button-bordered">RESET</button>
                        <button onClick={(e) => onSubmit(e)} className="header__button button button-red">SUBMIT</button>
                    </div>
                </form>
            </Modal>
            <button className="header__button button button-gray" onClick={toggle}>+ ADD MOVIE</button>
        </>
    );
}

export default MovieAdd;
