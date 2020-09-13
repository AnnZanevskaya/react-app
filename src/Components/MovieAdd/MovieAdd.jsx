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
                <Input name="movieId" type="text" label="Movie Id" value="" />
            </Modal>
            <button className="header__button button button-gray" onClick={toggle}>+ ADD MOVIE</button>
        </>
    );
}

export default MovieAdd;
