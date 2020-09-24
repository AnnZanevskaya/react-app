import React, { useState } from "react";

import Modal from '../Modal';
import Input from '../Input';

function MovieAdd() {
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
                <Input name="runtime" type="text" label="Runtime" placeholder="Runtime here" />
            </Modal>
            <button className="header__button button button-gray" onClick={toggle}>+ ADD MOVIE</button>
        </>
    );
}

export default MovieAdd;
