import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { fetchMovies } from "../../Redux/actions";

import './style.css';

const Sort = () => {
    const dispatch = useDispatch();
    const [activeItem, setActiveItem] = useState('release_data');

    function handleChange(event) {
        console.log(event.target);
        dispatch(fetchMovies("", "all", event.target.value))
        setActiveItem(event.target.value);
        console.log(activeItem);
    }

    return (
        <div className="content__sort">
            <h4 className="sort__title">Sort by</h4>
            <select className="sort__select" value={activeItem} onChange={handleChange}>
                <option value="release_date">Release Date</option>
                <option value="runtime">Runtime</option>
            </select>
        </div>
    )
};

export default Sort;
