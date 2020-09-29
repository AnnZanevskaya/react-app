import React, { useState } from "react";

import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import { genres } from '../../Constants/constants';

const MovieAdd = () => {
    const [isShow, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShow);
    }

    return (
        <>
            <Modal show={isShow} handleClose={toggle}>
                <h2 className="description">Add Movie</h2>
                <Input name="title" type="text" label="Title" placeholder="Title here" />
                <Input name="releaseDate" type="date" label="Release Date" placeholder="Select Date" />
                <Input name="movieUrl" type="text" label="Movie URL" placeholder="Movie URL here" />
                <Input name="overview" type="text" label="Overview" placeholder="Overview here" />
                <Select name="genre" type="text" label="Genre" options={genres} preselected={[]} />
                <Input name="runtime" type="text" label="Runtime" placeholder="Runtime here" />

                <div className="modal__buttons">
                    <button className="header__button button button-bordered">RESET</button>
                    <button className="header__button button button-red">SUBMIT</button>
                </div>
            </Modal>
            <button className="header__button button button-gray" onClick={toggle}>+ ADD MOVIE</button>
        </>
    );
}

export default MovieAdd;
